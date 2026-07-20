import {
  Book,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Layers,
  LayoutDashboardIcon,
  Megaphone,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { NavLink , useLocation} from "react-router-dom";

import "./Sidebar.css";

export default function SideBar() {
  const nav_items = [
    {
      icon: LayoutDashboardIcon,
      label: "Acceuil",
      path:"home"
    },
    {
      icon: Users,
      label: "Eleves",
      path:"students"
    },
    {
      icon: Layers,
      label: "Classes",
      path:"classrooms"
    },
    {
      icon: Book,
      label: "Matieres",
      path:"subjects"
    },
    {
      icon: ClipboardList,
      label: "Notes",
      path:"grades"
    },
    {
      icon: FileText,
      label: "Bulletins",
      path:"report-cards"
    },
    {
      icon: Megaphone,
      label: "Annonces",
      path:"announces"
    },
    {
      icon: CreditCard,
      label: "Scolarite",
      path:"fees"
    },
    {
      icon: GraduationCap,
      label: "Enseignants",
      path:"teachers"
    },
    {
      icon: Shield,
      label: "Utilisateurs",
      path:"users"
    },
    {
      icon: Settings,
      label: "Parametres",
      path:"parameters"
    },
  ];

  
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
