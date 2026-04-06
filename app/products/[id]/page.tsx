import { getProductById } from "@/app/features/services/product.service";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id);
  
    return {
      title: `${product.title} | Product`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.thumbnail],
      },
    };
  }

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  return (
    <div className="p-6">
        <a href="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to products
    </a>
      <Image src={product.thumbnail} alt={product.title} width={400} height={300} />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}