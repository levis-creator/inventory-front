import { FC } from "react";

export type Stats = {
  stats: string;
  value: number;
};
type StatsProps = {
  data: Stats;
};
const InfoCard: FC<StatsProps> = ({ data }) => {
  const { stats, value } = data;
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {stats}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {value}
      </p>
    </div>
  );
};

export default InfoCard;
