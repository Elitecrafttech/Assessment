"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const params = useSearchParams();

  
  
  useEffect(() => {
    const delay = setTimeout(() => {
      const query = new URLSearchParams(params.toString());
    if (value) {
        query.set("q", value);
      } else {
        query.delete("q");
      }  
      router.push(`?${query.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(delay);
  }, [value]);

  useEffect(() => {
    setValue(params.get("q") || "");
  }, [params]);

  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."
      className="border p-2 w-full"
    />
  );
}