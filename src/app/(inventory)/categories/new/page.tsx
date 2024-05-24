import CategoryForm from "@/components/displayform/CategoryForm";
import Heading from "@/components/Heading";

const Page = () => {
  return (
    <div>
      <Heading title="Add Category" closeBtn={true} />
      <CategoryForm />
    </div>
  );
};

export default Page;
