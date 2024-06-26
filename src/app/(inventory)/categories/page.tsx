import CategoriesDataCard from "@/components/cards/CategoriesDataCard";
import Heading from "@/components/Heading";
import CategoryList from "@/components/Lists/CategoryList";
import useDataProvider from "@/hooks/useDataProvider";
import { getData } from "@/utils/getData";
import { Category } from "@/utils/types";

const Page = async () => {
  return (
    <div>
      <Heading title="Categories" addBtn={true} path="/categories/new" />
      <CategoryList />
    </div>
  );
};

export default Page;
