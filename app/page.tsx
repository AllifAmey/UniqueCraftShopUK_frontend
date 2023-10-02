import { Button } from "@/components/ui/button";
import Image from "next/image";
import Jewellery from "@/components/pages/Home/Jewellery";
import Values from "@/components/pages/Home/Values";
import Education from "@/components/pages/Home/Education";
import Location from "@/components/pages/Home/Location";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-[85vh] relative">
        <Image
          src="/placeholder_image.jpg"
          fill
          objectFit="fill"
          alt="Placeholder Image"
          className="z-0"
        />
        <div className="z-10 absolute flex flex-col justify-evenly h-1/4  inset-0 m-auto w-2/5 items-center break-words">
          <p className="text-slate-100 text-lg w-4/5 text-center">
            The best handcrafted Jewellery money can buy at a affordable price
          </p>
          <Link href="shop">
            <Button variant="shopLink" className="">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-6 w-full">
        <Jewellery />
        <Values />
        <Education />
        <Location />
      </div>
    </>
  );
}
