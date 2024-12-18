import { Parent } from "./components/Parent";

export default function App() {
  return (
    <div className="w-1/2 min-h-svh mx-auto">
      <h1 className="text-3xl text-center font-bold underline">
        Comprendre le useContext en react avec typescript !
      </h1>
      <Parent />
    </div>
  );
}
