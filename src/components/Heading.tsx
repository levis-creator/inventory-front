"use client";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import PrimaryButton from "./form/PrimaryButton";
import IconButton from "./form/IconButton";
type HeadingProps = {
  title: string;
  addBtn?: boolean;
  closeBtn?: boolean;
  className?: string;
  path?: string;
};
const Heading: FC<HeadingProps> = ({
  title,
  addBtn = false,
  path,
  closeBtn = false,
}) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <h2 className="font-semibold text-2xl">{title}</h2>
      {addBtn && (
        <PrimaryButton
          className="flex gap-3"
          onClick={() => router.push(`${path}`)}
        >
          <Plus />
          Add {title}
        </PrimaryButton>
      )}
      {closeBtn && (
        <IconButton
          icon={<X />}
          iconDescription="close"
          onClick={() => router.back()}
        />
      )}
    </div>
  );
};

export default Heading;
