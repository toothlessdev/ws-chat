import { ReactNode } from "react";
import { cn } from "@/styles/utils";

export interface ChatRoomItemProps {
    members: number;
}

export interface ChatRoomContainerProps {
    className: string;
    children: ReactNode;
}

export const ChatRoom = {
    Item: ({ members }: ChatRoomItemProps) => {
        return (
            <div className="flex my-1 p-3 w-full border-[1px] border-gray-300 rounded-lg bg-white shadow-lg">
                <div>
                    <h1 className="text-md font-semibold">Chat Room</h1>
                    <h2 className="text-sm">{members} Members</h2>
                </div>
                <button className="ml-auto mt-2 px-3 rounded-md bg-green-500 text-white">Join</button>
            </div>
        );
    },
    Container: ({ className, children }: ChatRoomContainerProps) => {
        return <div className={cn(className, "p-1")}>{children}</div>;
    },
    Create: () => {
        return (
            <div className="my-1">
                <button className="w-full h-[40px] border-[1px] border-dashed border-green-500 text-green-500 rounded-lg">+ Create New ChatRoom</button>
            </div>
        );
    },
};
