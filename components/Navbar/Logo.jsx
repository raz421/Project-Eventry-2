import Link from "next/link";

export default function Logo() {
  return (
    <div className="nav-brand">
      <Link href="/">
        <img src="/logo.svg" alt="Eventry" className="h-[45px]" />
      </Link>
    </div>
  );
}
