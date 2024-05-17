import React from "react";

const StockCard = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Stocks
      </h5>
      <div className="mb-3 font-normal text-gray-500 dark:text-gray-400 flex flex-col space-y-3">
        <div className="flex">
          <div className="flex-grow">Total stock</div>
          <span>10</span>
        </div>
        <div className="flex">
          <div className="flex-grow">Available stock</div>
          <span>10</span>
        </div>
        <div className="flex">
          <div className="flex-grow">Returned Items</div>
          <span>10</span>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
