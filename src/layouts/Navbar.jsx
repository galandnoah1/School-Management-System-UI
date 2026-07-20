import { User2Icon } from "lucide-react";


import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <p className="current-date">{new Date().toDateString()}</p>

      <div className="user">
        <div className="avatar">
          <User2Icon />
        </div>
        <div className="info">
          <span>Mme Kamga</span>
          <span>Secretaire</span>
        </div>
      </div>
    </header>
  );
}
