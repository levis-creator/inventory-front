import { UploadDropzone } from "@/utils/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import toast from "react-hot-toast";

const ImageInput: FC<{
  label: string;
  imageUrl?: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  endpoint?: string;
}> = ({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "imageUploader",
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);

            // Do something with the response
            console.log("Files: ", res);
            console.log("Upload Completed");
            toast.success("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            console.log(`ERROR! ${error.message}`);
            toast.error(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
};
export default ImageInput;
