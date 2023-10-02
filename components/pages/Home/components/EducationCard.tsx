import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EducationCard() {
  return (
    <>
      <Card className="flex w-full bg-red-500">
        <CardHeader className="w-2/4">
          <CardTitle>Making copper earrings</CardTitle>
          <CardDescription className="break-words text-cyan-50">
            Copper wire earrings. #handmadejewelry #jewellery #copper #wire
            #craft #earrings
          </CardDescription>
        </CardHeader>
        <CardContent className=" w-2/5 relative">
          <Image
            src="/card_placeholder_image.webp"
            fill
            objectFit="fill"
            alt="Placeholder Image"
          />
        </CardContent>
        <CardFooter className="flex-col justify-center p-4 ">
          <Button variant="shopLink">Watch</Button>
        </CardFooter>
      </Card>
      <Separator className="my-2 " />
    </>
  );
}
