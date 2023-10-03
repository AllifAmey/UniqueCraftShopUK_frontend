import Image from "next/image";
import JewellerySection from "./components/JewellerySection";

import { AiFillStar } from "react-icons/ai";

export default function Jewellery() {
  // Jewellery section showcasing Jewellery catagories.

  return (
    <section className="h-screen flex flex-col">
      <h2 className="text-3xl text-center p-6">Our Jewellery</h2>
      <JewellerySection />
      <section className="h-full  flex justify-evenly w-4/5 self-center items-center gap-4">
        <div className="flex flex-col gap-4 w-1/3">
          <p>
            Sahrah has always been very helpful and responds very quickly to any
            issues and replaces any broken product
          </p>
          <div className="text-center flex flex-col w-full justify-center">
            Karen{" "}
            <div className="flex gap-1 self-center">
              <AiFillStar className="text-yellow-300" />
              <AiFillStar className="text-yellow-300" />
              <AiFillStar className="text-yellow-300" />
              <AiFillStar className="text-yellow-300" />
              <AiFillStar className="text-yellow-300" />
            </div>
          </div>
        </div>
        <div className="relative h-[20vh] rounded-full  w-[10vw] overflow-hidden">
          <Image
            src="/placeholder_image.jpg"
            fill
            objectFit="fill"
            alt="Placeholder Image"
          />
        </div>
      </section>
    </section>
  );
}
