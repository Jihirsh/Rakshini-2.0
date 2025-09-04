"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function CategoryList({
  selectedCategory,
  setSelectedCategory,
}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("/api/categories", { cache: "no-store" });
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (e) {
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 py-2 overflow-x-auto">
      <Button
        onClick={() => setSelectedCategory("All")}
        className={`rounded-full font-medium transition-all cursor-pointer ${
          selectedCategory === "All"
            ? "gradient-primary shadow"
            : "bg-transparent text-black hover:bg-transparent hover:text-black"
        }`}
      >
        All
      </Button>
      {!loading &&
        categories.map((cat) => (
          <Button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.title)}
            className={`rounded-full font-medium transition-all capitalize ${
              selectedCategory === cat.title
                ? "gradient-primary shadow"
                : "bg-transparent text-black hover:bg-transparent hover:text-black hover:cursor-pointer"
            }`}
          >
            {cat.title}
          </Button>
        ))}
    </div>
  );
}
