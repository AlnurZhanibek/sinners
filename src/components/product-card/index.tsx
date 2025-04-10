import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard() {
  return (
    <div className="w-[190px]">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Number Nine Jeans</CardTitle>
          <CardDescription>190 000 RUB</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/number-nine-jeans.webp"
            alt="Product photo"
            width="100"
            height="200"
            style={{
              width: "100%",
              height: "200px",
            }}
          ></Image>
        </CardContent>
      </Card>
    </div>
  );
}
