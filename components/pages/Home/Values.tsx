import Image from "next/image";

export default function Values() {
  // Jewellery section showcasing Jewellery catagories.

  return (
    <section className="h-screen flex flex-col">
      <article className="flex">
        <div className="relative h-[50vh]  w-[50vw] ">
          <Image
            src="/placeholder_image.jpg"
            fill
            objectFit="fill"
            alt="Placeholder Image"
          />
        </div>
        <div className=" relative flex flex-col h-[50vh]  w-[50vw] text-center">
          <h2 className="text-2xl py-12 font-bold">Affordable</h2>
          <p className="text-lg break-words w-4/5 self-center">
            Life is short. We want others to make the most of it by getting a
            taste of luxury at an affordable price. By using raw materials we
            build jewellery from the ground up.
          </p>
        </div>
      </article>
      <article className="flex flex-row-reverse">
        <div className="relative h-[50vh]  w-[50vw] ">
          <Image
            src="/placeholder_image.jpg"
            fill
            objectFit="fill"
            alt="Placeholder Image"
          />
        </div>
        <div className=" relative flex flex-col h-[50vh]  w-[50vw] text-center">
          <h2 className="text-2xl py-12 font-bold">Authentic</h2>
          <p className="text-lg break-words w-4/5 self-center">
            All of our jewellery are handcrafted by a qualified jewellery maker
            of 20 years. We have our own workshop and machine to create
            jewellery customers deserve
          </p>
        </div>
      </article>
    </section>
  );
}
