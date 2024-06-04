
import SingleProductCard from "@/components/cards/SingleProductCard";
import Heading from "@/components/Heading";

const Page = async () => {

  return (
    <div>
      <Heading title="Product" closeBtn={true} />
      <SingleProductCard />
    </div>
  );
};

export default Page;
