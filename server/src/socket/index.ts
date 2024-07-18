import { createServer } from "http";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

let socketInstance: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | null = null;

export const socket = {
    initialize: (httpServer: ReturnType<typeof createServer>) => {
        socketInstance = new Server(httpServer);
        return socketInstance;
    },
    io: () => {
        if (!socketInstance) throw new Error("Socket IO is not initialized");
        return socketInstance;
    },
};
