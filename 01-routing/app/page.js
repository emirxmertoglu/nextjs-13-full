import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/docs">Docs</Link>
      <br />
      <Link href="/docs/getting-started">Docs - Getting Started</Link>
      <br />
      <Link
        target="_blank"
        className="test"
        href={{
          pathname: "/docs/getting-started",
          query: { name: "Emir", age: 25 },
        }}
      >
        Docs - Getting Started (with object)
      </Link>
    </div>
  );
}
