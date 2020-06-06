import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>What is Webpack?</h1>
      <h2>
        An illustrated walkthrough of bundlers and the modern JS ecosystem
      </h2>
      <Link href="step/1">
        <button>Begin</button>
      </Link>
    </div>
  );
}

export default HomePage;
