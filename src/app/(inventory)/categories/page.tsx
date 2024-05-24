import CategoriesDataCard from "@/components/cards/CategoriesDataCard";
import Heading from "@/components/Heading";

const Page = () => {
  return (
    <div>
      <Heading title="Categories" addBtn={true} path="/categories/new" />
      <div className="grid grid-col-1">
        <CategoriesDataCard />
      </div>
    </div>
  );
};

export default Page;
