import { Outlet } from "react-router-dom";
import { NavAside } from "../navigation/NavAside";
import { NavBar } from "../navigation/NavBar";
import { NavChat } from "../navigation/NavChat";

export const ChatLayout = () => {
    return (
        <>
            <NavBar />
            <NavAside />

            <main className="pt-[60px] bg-slate-200 min-h-screen">
                <Outlet />
            </main>

            <NavChat />
        </>
    );
};
