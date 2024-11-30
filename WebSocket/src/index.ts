import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: string) => {
    console.log(`Received message => ${message}`);
    ws.send(`You sent => ${message}`);
  });
});
