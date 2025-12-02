"use client";

import { Moon, SunDim } from "lucide-react";
import { useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "../utils/cn";

type props = {
  className?: string;
  isDarkMode: boolean;
  onToggle: () => void;
};

export const DarkMode = ({ className, isDarkMode, onToggle }: props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        onToggle();
      });
    });

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    await transition.ready;
    document.documentElement.style.setProperty(
      "--bg",
      isDarkMode ? "black" : "white"
    );

    const animation = document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
    await animation.finished;
    document.documentElement.style.setProperty(
      "--bg",
      !isDarkMode ? "black" : "white"
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(className) + " cursor-pointer"}
    >
      {isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};
