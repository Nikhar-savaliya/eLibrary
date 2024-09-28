import Banner from "@/components/Banner";
import BookList from "@/components/BookList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10">
      {/* <Banner  /> */}
      <BookList />
    </div>
  );
}
