import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <Logo />

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <Link href="/login">Log in</Link>
          </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
