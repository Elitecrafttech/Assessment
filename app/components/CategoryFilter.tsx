"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter() {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <select
      defaultValue={params.get("category") || ""}
      onChange={(e) => {
        const query = new URLSearchParams(params.toString());

        if (e.target.value) {
          query.set("category", e.target.value);
        } else {
          query.delete("category");
        }

        router.push(`?${query.toString()}`);
      }}
      className="border p-2"
    >
      <option value="">All</option>
      <option value="beauty">Beauty</option>
      <option value="fragrances">Fragrances</option>
      <option value="furniture">Furniture</option>
    </select>
  );
}