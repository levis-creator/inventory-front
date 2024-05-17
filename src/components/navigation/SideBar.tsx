import {
  ArrowLeft,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  Tags,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactElement } from "react";
// types
type MenuItem = {
  icon: ReactElement;
  title: string;
  path?: string;
};
type SideitemProps = {
  data: MenuItem;
  isActive?: boolean;
};
type SideBarProps = {
  handleSideBar: () => void;
  showSideBar: boolean;
};
const SideItem: FC<SideitemProps> = ({ data, isActive }) => {
  const { icon, path, title } = data;
  return (
    <li className="list-none">
      <Link
        href={`/${path ? path : title}`}
        className={`${
          isActive && "underline underline-offset-8"
        } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
      >
        {icon}
        <span className="ms-3 capitalize">{title}</span>
      </Link>
    </li>
  );
};

const sideItem: MenuItem[] = [
  {
    icon: <LayoutDashboard />,
    title: "dashboard",
    path: "/",
  },
  {
    icon: <ClipboardList />,
    title: "products",
  },
  {
    icon: <Tags />,
    title: "categories",
  },
  {
    icon: <Users />,
    title: "users",
  },
  {
    icon: <Settings />,
    title: "settings",
  },
];

const SideBar: FC<SideBarProps> = ({ handleSideBar, showSideBar }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <aside
      id="logo-sidebar"
      className="fixed px-3 z-10 top-0 left-0  w-64 h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      {showSideBar && (
        <button
          onClick={handleSideBar}
          className="w-fit cursor-pointer absolute -right-8 rounded-r-full bg-gray-800 text-center inline-flex items-center justify-center p-2"
        >
          <ArrowLeft /> <span className="sr-only">Close</span>
        </button>
      )}
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col">
        <ul className="space-y-2 font-medium flex-grow">
          {sideItem.map((item) => (
            <SideItem
              key={item.title}
              data={item}
              isActive={
                pathname === item.path || pathname === `/${item.title}`
                  ? true
                  : false
              }
            />
          ))}
        </ul>
        <div>
          <SideItem data={{ icon: <Plus />, title: "Add Product" }} />
          <SideItem data={{ icon: <LogOut />, title: "Logout" }} />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
