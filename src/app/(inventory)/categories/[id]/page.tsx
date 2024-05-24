import ProductTable from "@/components/cards/ProductTable";
import Heading from "@/components/Heading";

const Page = () => {
  return (
    <div>
      <Heading title="T-shirt" addBtn={true} path="/products/new" />
      <ProductTable/>
    </div>
  );
};

export default Page;
