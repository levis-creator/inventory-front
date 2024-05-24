import ProductDataCard from "@/components/cards/ProductDataCard";
import ProductTable from "@/components/cards/ProductTable";
import Heading from "@/components/Heading";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Heading title="Products" addBtn={true} path="/products/new" />
      <ProductTable/>
    </div>
  );
};

export default Page;
