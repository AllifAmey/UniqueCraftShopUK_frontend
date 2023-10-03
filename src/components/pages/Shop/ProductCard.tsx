import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex-1 flex-col text-sm ">
      <div className="h-4/5 w-full relative ">
        <Image
          src="/placeholder_image.jpg"
          fill
          objectFit="fill"
          alt="Placeholder Image"
        />
      </div>
      <div>Handmade flower nature desi...</div>
      <div>£2.99</div>
      <div className="badge  badge-primary">FREE UK DELIVERY</div>
    </div>
  );
}
