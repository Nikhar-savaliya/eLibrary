import { BookOpenText, UploadCloud } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-2 py-4 mx-auto max-w-7xl">
        {/* LOGO */}
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
    </nav>
  );
};

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <BookOpenText className="text-primary pt-0.5" />
      <span className="text-2xl font-bold tracking-tighter text-foreground">
        eLibrary
      </span>
    </div>
  );
};

export default Header;
