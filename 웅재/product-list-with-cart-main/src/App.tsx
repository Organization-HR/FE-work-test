import { CartStateProvider } from "./hooks/useCartState";
import MainPage from "./pages/main";

function App() {
  return (
    <CartStateProvider>
      <MainPage />
    </CartStateProvider>
  );
}

export default App;
