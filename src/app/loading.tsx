import { ClipLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="dark:bg-gray-900 w-screen h-screen flex justify-center items-center">
      <ClipLoader color="#2563EB" />
    </div>
  );
};

export default Loading;
