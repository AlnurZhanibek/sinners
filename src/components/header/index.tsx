import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 border-b">
      <div className="container mx-auto py-4 grid grid-cols-3 justify-between items-center">
        <div></div>
        <h1 className="text-center text-3xl">Sinners</h1>
        <div className="flex gap-4 justify-center">
          <Link href="/cabinet">
            <User width="20" height="20" />
          </Link>
          <Link href="/cabinet">
            <ShoppingCart width="20" height="20" />
          </Link>
        </div>
      </div>
    </header>
  );
}
