import MainApp from "./MainApp";
import { AppProvider } from "./contextapi/useGlobalContext";

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
