import ProductTable from "@/components/cards/ProductTable";
import Heading from "@/components/Heading";
import { getData } from "@/utils/getData";
import { ProductListDisplay } from "@/utils/types";

const Page = async () => {
  const products: ProductListDisplay[] = await getData("products");

  return (
    <div>
      <Heading title="Products" addBtn={true} path="/products/new" />
      <ProductTable data={products} />
    </div>
  );
};

export default Page;
