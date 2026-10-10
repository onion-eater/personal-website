import Intro from "../components/Intro";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#content">skip to content</a>
      <Intro />
      <main className="site-content" id="content" tabIndex={-1}>
        <section className="about-section" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">about</h2>
          <p>Hi, my name is Nolan. I enjoy doing things and other stuff, etc.</p>
        </section>
      </main>
    </>
  );
}
