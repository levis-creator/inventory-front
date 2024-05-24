import Image from "next/image";
import PrimaryButton from "../form/PrimaryButton";

const SingleProductCard = () => {
  return (
    <div className="p-8  bg-white border border-gray-200 rounded-lg shadow md:max-w-xl  dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col items-center md:flex-row ">

      <Image
        width={0}
        height={0}
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/prod1.png"
        unoptimized
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          White Tshirt
        </h5>
        <div className="mb-3 flex flex-col font-normal text-gray-700 dark:text-gray-400">
          <span>product id</span>
          <span>brand name</span>
          <span>category</span>
          <span>price</span>
          <span>available quantity</span>
        </div>
       
      <div className="inline-flex gap-2">
            <PrimaryButton className="bg-black text-white px-8 rounded-md py-2">
                Delete
            </PrimaryButton>
            
            <PrimaryButton className=" border-2 border-blue-500 text-blue-600 px-8 rounded-md py-2">
                Edit
            </PrimaryButton>
            
        </div>
      </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-500">Stores Avaiable</h3>
      </div>
    </div>
  );
};

export default SingleProductCard;
