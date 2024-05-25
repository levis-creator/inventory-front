import CategoriesDataCard from "@/components/cards/CategoriesDataCard";
import Heading from "@/components/Heading";
import { getData } from "@/utils/getData";
import { Category } from "@/utils/types";

const Page = async () => {
  const categories: Category[] = await getData("categories");

  return (
    <div>
      <Heading title="Categories" addBtn={true} path="/categories/new" />
      <div className="grid grid-col-1 gap-3">
        {categories.map((category) => (
          <CategoriesDataCard key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default Page;
