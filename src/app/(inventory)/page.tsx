import Heading from "@/components/Heading";
import InfoCard, { Stats } from "@/components/cards/InfoCard";
import StockCard from "@/components/cards/StockCard";
import StoreCard from "@/components/cards/StoreCard";
import Image from "next/image";

export default function Home() {
  const stats: Stats[] = [
    {
      stats: "Available stocks",
      value: 100,
    },
    {
      stats: "Sold out stocks",
      value: 10,
    },
    {
      stats: "No of Sale Today",
      value: 100,
    },
    {
      stats: "Unaccounted Stock",
      value: 100,
    },
  ];
  return (
    <div className=" bg-slate-50 dark:bg-gray-700">
      <Heading title="Dashboard" />
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {stats.map((item) => (
          <InfoCard key={item.stats} data={item} />
        ))}
      </div>
      <div className="flex gap-8 mt-8">
        <div className="basis-1/3">
          <StockCard />
        </div>
        <div className="basis-2/3">
          <StoreCard />
        </div>
      </div>
    </div>
  );
}
