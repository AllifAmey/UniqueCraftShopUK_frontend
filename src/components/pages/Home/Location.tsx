// https://www.business2community.com/wp-content/uploads/2020/07/Screen-Shot-2020-06-22-at-6-27-57-PM.png
import Image from "next/image";

export default function Location() {
  return (
    <section className="h-screen flex pt-8  gap-4">
      <div className="h-full flex-1  relative">
        <Image
          src="/placeholder_image.jpg"
          fill
          objectFit="fill"
          alt="Placeholder Image"
        />
      </div>
      <div className="flex flex-col h-full flex-2 ">
        <div className="flex flex-col h-2/4 justify-evenly p-8 ">
          <h2 className="font-bold text-3xl text-center">Our location</h2>
          <div className="text-xl">Jubilee Market</div>
          <div className="text-lg">
            1 Tavistock St,
            <br /> London WC2E 8BD
          </div>
          <p className="text-lg">
            We are located near the ice cream shop. Come give u a wave!
          </p>
        </div>
        <div className="flex h-2/4 ">
          <div className=" flex-1 relative gap-4">
            <Image
              src="/placeholder_image.jpg"
              fill
              objectFit="fill"
              alt="Placeholder Image"
            />
          </div>
          <div className="flex-col justify-evenly flex flex-1">
            <h2 className="text-center flex-1 flex justify-center flex-col text-2xl  font-bold">
              <div className="">Our Hours</div>
            </h2>
            <div className="flex flex-1 gap-20 justify-center text-lg">
              <div>Sat-Sun</div>
              <div>9am-6pm</div>
            </div>
            <div className="flex flex-3 flex-col">
              <div className="text-center text-lg">Weather</div>
              <div className="self-center relative h-12 w-12">
                {" "}
                <Image
                  src="/placeholder_image.jpg"
                  fill
                  objectFit="fill"
                  alt="Placeholder Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
