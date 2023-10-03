import Image from "next/image";

export default function EducationCard() {
  return (
    <>
      <div className="card flex-row bg-red-500 ">
        <div className="w-2/4 text-center flex flex-col justify-evenly">
          <div className="text-md font-bold">Making copper earrings</div>
          <div className=" break-words text-cyan-50 text-sm">
            Copper wire earrings. #handmadejewelry #jewellery #copper #wire
            #craft #earrings
          </div>
        </div>
        <div className="card-body w-2/5 relative">
          <Image
            src="/card_placeholder_image.webp"
            fill
            objectFit="fill"
            alt="Placeholder Image"
          />
        </div>
        <div className="flex-col justify-center p-4 ">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
      <div className="divider my-2"></div>
    </>
  );
}
