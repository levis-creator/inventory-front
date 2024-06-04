"use client";
import ProductTable from "@/components/cards/ProductTable";
import Heading from "@/components/Heading";
import { getData } from "@/utils/getData";
import { ProductListDisplay } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<ProductListDisplay[]>([]);
  const slug = useSearchParams().get("category");
  useEffect(() => {
    if(slug==null){
      getData("products").then((data) => setProducts(data));
    } else {
      getData(`products?category=${slug}`).then((data) => setProducts(data));
    }
  }, [slug]);

  return (
    <div>
      <Heading title="Products" addBtn={true} path="/products/new" />
      <ProductTable data={products} />
    </div>
  );
};

export default Page;
