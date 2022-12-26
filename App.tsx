import Main from "./Main"
import ContextApp from "./context/ContextApp";
import "expo-dev-client"

export default function App(): JSX.Element {
  return (
    <ContextApp>
      <Main />
    </ContextApp>
  );
}