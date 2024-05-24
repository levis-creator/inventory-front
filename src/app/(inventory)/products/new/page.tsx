import ProductForm from "@/components/displayform/ProductForm";
import Heading from "@/components/Heading";

const Page = () => {
  return (
    <div>
      <Heading title="New Product" closeBtn={true} />
      <ProductForm />
    </div>
  );
};

export default Page;
