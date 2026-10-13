import Intro from "../components/Intro";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#content">skip to content</a>
      <Intro />
      <main className="site-content" id="content" tabIndex={-1}>
        <a
          className="video-link"
          href="https://youtube.com/watch?v=SWo72DkeL4A"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://youtube.com/watch?v=SWo72DkeL4A
        </a>
      </main>
    </>
  );
}
