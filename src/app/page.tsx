import ProductCard from "@/components/product-card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <Image
          className="w-full"
          src="/number-nine-runway.webp"
          alt="NN Runway Pic"
          sizes="100vw"
          width="100"
          height="400"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </section>
      <section>
        <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 md:container md:mx-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
