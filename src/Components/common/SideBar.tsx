import Logo from "../../assets/images/common/LOGO.png";
import { LogOut } from "lucide-react";
import { DashBoardLinks } from "../../utils/data";
import { Link } from "react-router";
import { useLocation } from "react-router";

export const SideBar = () => {
  const currentPath = useLocation().pathname;
  const lastPath = currentPath.split("/").at(-1);
  return (
    <div className=" sticky top-0 flex flex-col justify-between w-[15%] h-screen py-6 border-r border-slate-100 ">
      <div className=" flex flex-col justify-center items-center gap-6">
        {/* LOGO */}
        <img className="w-16 h-16 " src={Logo} alt="Vibrant Vogue Logo" />

        {/* SideBarLinks */}
        <div className=" flex flex-col gap-8">
          {DashBoardLinks.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className={`${
                link.to.split("/").at(-1) === lastPath
                  ? "bg-appOrange text-white rounded-[5px]"
                  : "bg-white"
              } flex items-center gap-4 p-2`}
            >
              <link.icon />{" "}
              <span className=" hidden md:block">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <Link
        to={"/"}
        className=" flex items-center gap-2 p-2 text-red-500 cursor-pointer"
      >
        <LogOut /> <span className=" hidden md:block">Log Out</span>
      </Link>
    </div>
  );
};
