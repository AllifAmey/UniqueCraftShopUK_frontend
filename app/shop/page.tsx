import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/pages/Shop/ProductCard";

export default function Shop() {
  return (
    <div className="min-h-screen p-6 flex w-full ">
      <div className="h-screen w-2/12 flex flex-col gap-4">
        <h2 className="text-2xl text-center font-bold">Jewellery</h2>
        <div className="flex justify-center gap-8">
          <div className="flex-1 flex justify-end">
            <Checkbox id="Rings" />
          </div>

          <label
            htmlFor="Rings"
            className="text-lg flex-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Rings
          </label>
        </div>
        <div className="flex justify-center gap-8">
          <div className="flex-1 flex justify-end">
            <Checkbox id="Pendant" />
          </div>

          <label
            htmlFor="Pendant"
            className="text-lg flex-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pendant
          </label>
        </div>
        <div className="flex justify-center gap-8">
          <div className="flex-1 flex justify-end">
            <Checkbox id="Earrings" />
          </div>

          <label
            htmlFor="Earrings"
            className="text-lg flex-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Earrings
          </label>
        </div>
      </div>
      <div className="h-[160vh] flex flex-col w-full gap-8">
        <div className="flex flex-1 flex-wrap gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex flex-1 flex-wrap gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex flex-1 flex-wrap gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex flex-1 flex-wrap gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <div>Page 1</div>
        </div>
      </div>
    </div>
  );
}
