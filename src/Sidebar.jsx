import logo from "./images/logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./hooks/useGlobalContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
