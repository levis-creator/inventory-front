const StoreCard = () => {
  return (
    <div className="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Store List
      </h5>
      <table className="w-full  mb-3 font-normal text-gray-500 dark:text-gray-400 ">
        <tbody>
          <tr>
            <td>Machester, UK</td>
            <td>12 Employees</td>
            <td>308 items</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StoreCard;
