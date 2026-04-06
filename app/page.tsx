import SearchInput from "@/app/components/SearchInput";
import { getProducts } from "@/app/features/services/product.service";
import ProductCard from "@/app/components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";

export default async function Home({
  searchParams,
}:{
  searchParams: Promise<{ q?: string; page?: string; category?: string }>;
}) {
 
const params = await searchParams;  
const page = Number(params.page) || 1;
const limit = 20;
const skip = (page - 1) * limit;

const data = await getProducts(limit, skip, params.q, params.category);

  
  return (
    <>
    <div className="p-6 flex gap-4 flex-col md:flex-row">
      <SearchInput />
      <CategoryFilter />
    </div>

    {data.products.length === 0 ? (
      <p className="p-6 text-center text-[30px]">No results found</p>
    ): (
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {data.products.map((product, idx) => (
          <ProductCard key={product.id} product={product} priority={idx < 4}/>
        ))}
      </main>
    )}
       {/* PAGINATION BTN */}
       <div className="flex gap-4 justify-center mt-6">
        {page > 1 && (
          <a
            href={`?page=${page - 1}`}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            Prev
          </a>
        )}
        {data.products.length === limit && (
          <a
            href={`?page=${page + 1}`}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            Next
          </a>
        )}
      </div>
    </>
  );
}