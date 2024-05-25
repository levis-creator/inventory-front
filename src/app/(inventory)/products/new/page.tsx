import ProductForm from "@/components/displayform/ProductForm";
import Heading from "@/components/Heading";
import { getData } from "@/utils/getData";
import { Category, SimplifiedData } from "@/utils/types";

const Page = async () => {
  const categoriesData: [] = await getData("categories");
  const categories: SimplifiedData[] = categoriesData.map(
    (category: Category): SimplifiedData => ({
      id: category.id ?? "",
      title: category.title,
    })
  );
  return (
    <div>
      <Heading title="New Product" closeBtn={true} />
      <ProductForm categories={categories} />
    </div>
  );
};

export default Page;
