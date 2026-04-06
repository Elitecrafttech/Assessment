import { fetcher } from "@/app/lib/api";
import { Product } from "@/app/types/product";

export async function getProducts(limit = 20, skip = 0, q?: string, category?: string) {

  let url = `/products?limit=${limit}&skip=${skip}`;

  if (q) {
    url = `/products/search?q=${q}&limit=${limit}&skip=${skip}`;
  }

  if (category) {
    url = `/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  return fetcher<{ products: Product[] }>(url);
}

export async function getProductById(id: string) {
  return fetcher<Product>(`/products/${id}`);
}