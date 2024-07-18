import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <main className="w-full max-w-[600px] bg-black">
            <Outlet />
        </main>
    );
};
