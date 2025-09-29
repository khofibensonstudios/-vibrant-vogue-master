import { Outlet } from "react-router";
import { NavBar } from "./Components/common/NavBar";
import Footer from "./Components/common/Footer";
import { useLocation } from "react-router";
import { SideBar } from "./Components/common/SideBar";

function App() {
  const currentPath = useLocation().pathname;
  const checkPathToHide = (): boolean => {
    if (currentPath.includes("admin")) return true;
    return false;
  };
  return (
    <div>
      <div className={`${checkPathToHide() ? "flex" : "block"}`}>
        {checkPathToHide() ? <SideBar /> : <NavBar />}
        <Outlet />
      </div>
      {!checkPathToHide() && <Footer />}
    </div>
  );
}

export default App;
