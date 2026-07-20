import { useState } from "react";
import SideBar from "./Sidebar";
import './DashBoardLayout.css'
import Navbar from "./Navbar";


export default function DashBoardLayout({ children}) {
    

    return (
        <div className="layout">
            <SideBar/>
            <div >
                <Navbar />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}


