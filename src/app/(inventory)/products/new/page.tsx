import ProductForms from "@/components/displayform/ProductForms";
import Heading from "@/components/Heading";

const Page = () => {
  return (
    <div>
      <Heading title="New Product" closeBtn={true} />
      <ProductForms />
    </div>
  );
};

export default Page;
