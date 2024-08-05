import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-black px-10 py-5 border-b-2 border-zinc-700">
      <strong>Header</strong>

      <nav>
        <Link className="mx-5 text-red-600 hover:underline" href="/">Posts </Link>
      </nav>
    </header>
  );
}
