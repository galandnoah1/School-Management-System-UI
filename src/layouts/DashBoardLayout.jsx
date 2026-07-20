
import SideBar from "./Sidebar";
import './DashBoardLayout.css'
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


export default function DashBoardLayout() {
    

    return (
        <div className="layout">
            <SideBar/>
            <div className="content-wrapper">
                <Navbar />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


