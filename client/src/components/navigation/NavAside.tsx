import { ChatRoom } from "@/components/display/ChatRoom";

export const NavAside = () => {
    return (
        <aside className="fixed pt-[60px] w-[330px] h-screen bg-white">
            <ChatRoom.Container className="m-1">
                <ChatRoom.Create />
                <ChatRoom.Item members={0}></ChatRoom.Item>
                <ChatRoom.Item></ChatRoom.Item>
                <ChatRoom.Item></ChatRoom.Item>
            </ChatRoom.Container>
        </aside>
    );
};
