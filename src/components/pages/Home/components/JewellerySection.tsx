"use client";
import { useState } from "react";
import Image from "next/image";

export default function JewellerySection() {
  const [onHover, setOnHover] = useState([
    "/placeholder_image.jpg",
    "/placeholder_image.jpg",
    "/placeholder_image.jpg",
  ]);

  const catagories = ["Rings", "Earrings", "Pendant"];
  return (
    <section className="flex justify-around w-full self-center">
      {catagories.map((catagory, idx) => {
        return (
          <section
            key={catagory}
            className="flex flex-col justify-between w-1/5 gap-4"
          >
            <h3 className="text-xl text-center">{catagory}</h3>

            <div className="h-[50vh] relative rounded-lg overflow-hidden shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
              *{" "}
              <Image
                onMouseOver={() => {
                  const originalImg = [...onHover];
                  originalImg[idx] = "/placeholder2_image.webp";

                  setOnHover([...originalImg]);
                }}
                onMouseOut={() => {
                  const originalImg = [...onHover];
                  originalImg[idx] = "/placeholder_image.jpg";

                  setOnHover([...originalImg]);
                }}
                src={`${onHover[idx]}`}
                fill
                objectFit="fill"
                alt="Placeholder Image"
              />
            </div>
          </section>
        );
      })}
    </section>
  );
}
