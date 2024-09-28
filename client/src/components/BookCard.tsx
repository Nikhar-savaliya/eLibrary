import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const BookCard = (book: Book) => {
  return (
    <div className="grid grid-cols-2 gap-0 border p-5 bg-card text-card-foreground rounded overflow-hidden">
      <Image
        src={book.coverImage}
        alt={book.title}
      className=" col-span-1 w-56 object-cover object-center border shadow-sm rounded-md"
        width={900}
        height={1600}
      />
      <div className="col-span-1">
        <h2 className="line-clamp-2 text-xl tracking-tight  font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="text-secondary-foreground text-sm font-medium mt-1 ">
          {book.author.name}
        </p>
        <p className="text-secondary-foreground text-sm mt-2 mb-4 line-clamp-4">
          {book.description}
        </p>
        <Badge variant={"secondary"}>{book.genre}</Badge>
        <Link href={`/book/${book._id}`} className="block bottom-0">
          <Button size={"sm"} variant={"default"} className="mt-4">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
