import { NavBar } from "@/components/navigation/NavBar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <>
            <NavBar />

            <main className="w-full min-h-screen pl-[330px] bg-slate-200">
                <Outlet />
            </main>
        </>
    );
};
