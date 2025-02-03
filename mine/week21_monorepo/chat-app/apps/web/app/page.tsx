import TextInput from "@repo/ui/text-input";
import { useRouter } from "next/router";
export default function Home() {
  const route = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div>
        <TextInput placeholder="Enter room name" />

        <button onClick={() => route.push("chat/123")}>Join room</button>
      </div>
    </div>
  );
}
