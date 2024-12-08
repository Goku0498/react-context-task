import { CartProvider } from "./CartContext";
import Cart from "./Cart";
import data from "./data.json";

const App = () => {
  return (
    <CartProvider initialData={data}>
      <Cart />
    </CartProvider>
  );
};

export default App;
