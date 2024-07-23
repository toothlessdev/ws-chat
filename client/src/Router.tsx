import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { RootLayout } from "./components/layout/RootLayout";
import { ChatLayout } from "./components/layout/ChatLayout";
import ChatPage from "./pages/chat/ChatPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="auth/signin" element={<SignInPage />} />
                    <Route path="auth/signup" element={<SignUpPage />} />
                </Route>

                <Route path="/chat" element={<ChatLayout />}>
                    <Route path=":id" element={<ChatPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
