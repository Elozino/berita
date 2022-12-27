import Main from "./Main"
import ContextApp from "./context/ContextApp";
import "expo-dev-client"

export default function App() {
  return (
    <ContextApp>
      <Main />
    </ContextApp>
  );
}