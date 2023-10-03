import EducationCard from "./components/EducationCard";
import { BsTiktok } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

export default function Education() {
  // Jewellery section showcasing Jewellery catagories.

  return (
    <section className="h-screen  flex pt-8">
      <section className="w-[50vw] flex flex-col">
        <h2 className="text-3xl font-bold text-center">Education Content</h2>
        <div className="h-5/6  flex flex-col justify-evenly p-4">
          <article className="w-4/5 flex flex-col gap-8">
            <h3 className="text-2xl">Youtube</h3>
            <p className="text-xl">
              We have long form educational videos that teach you how you can
              create your own jewellery. This is aimed for beginner to advanced.
            </p>
          </article>
          <article className="w-4/5 flex flex-col gap-8">
            <h3 className="text-2xl">Tiktok</h3>
            <p className="text-xl">
              If you want to see more flashy content, we have videos on our
              Tiktok showcasing different jewellery. To help us promote it come
              give us a follow!
            </p>
          </article>
        </div>
      </section>

      <section className="w-[50vw]">
        <div className="h-[10%] flex justify-center gap-8">
          <BsTiktok size={35} className="shadow-2xl shadow-blue-500/20" />
          <AiFillYoutube size={35} />
        </div>

        <div className="h-[80%] overflow-y-scroll">
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
        </div>
      </section>
    </section>
  );
}
