import {
  Book,
  BookA,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Layers,
  LayoutDashboardIcon,
  LogOut,
  Megaphone,
  Settings,
  Shield,
  Text,
  Users,
} from "lucide-react";
import { useState } from "react";

import "./Sidebar.css";

export default function SideBar() {
  const nav_items = [
    {
      icon: LayoutDashboardIcon,
      label: "Acceuil",
    },
    {
      icon: Users,
      label: "Eleves",
    },
    {
      icon: Layers,
      label: "Classes",
    },
    {
      icon: Book,
      label: "Matieres",
    },
    {
      icon: ClipboardList,
      label: "Notes",
    },
    {
      icon: FileText,
      label: "Bulletins",
    },
    {
      icon: Megaphone,
      label: "Annonces",
    },
    {
      icon: CreditCard,
      label: "Scolarite",
    },
    {
      icon: GraduationCap,
      label: "Enseignants",
    },
    {
      icon: Shield,
      label: "Utilisateurs",
    },
    {
      icon: Settings,
      label: "Parametres",
    },
  ];

  const page = useState("acceuil")

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
              <button
                className={`sidebar-item ${page === item.label.toLowerCase() ? " active" : ""}`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
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
