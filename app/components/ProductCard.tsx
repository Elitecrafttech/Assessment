import Image from "next/image";
import { Product } from "@/app/types/product";

export default function ProductCard({ product, priority }: { product: Product; priority?: boolean;
}) {
  return (
    <div className="border rounded-lg p-4">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={200}
        className="rounded w-full h-auto"
        priority={priority}
      />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p>${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
    </div>
  );
}