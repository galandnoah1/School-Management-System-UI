
import { NavLink , useLocation} from "react-router-dom";
import "./Sidebar.css";
import { nav_items } from "../constants/constants";

export default function SideBar() {
  
  const { pathname } = useLocation()

  return (
    <div>
      <div className="sibebar-head">
        <div className="sidebar-title">
          <span>MD Bilingual College</span>
        </div>
      </div>

      <div className="sidebar-nav">
        {nav_items.map((item) => {
          return (
            <div key={item.key}>
             <NavLink to={item.path}>
                 <button
                className={`sidebar-item ${pathname === `/${item.path.toLowerCase()}` ? " active" : ""}`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
             </NavLink>
            </div>
          );
        })}
      </div>

      <div className="sidebar-foot">
        <button
          className="sidebar-item logout"
        >
          <span>Deconnexion</span>
        </button>
      </div>
    </div>
  );
}
