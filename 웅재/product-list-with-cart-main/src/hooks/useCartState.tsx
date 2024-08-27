import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Dessert } from "../types/type";

export type CartState = {
  cart: Record<string, Dessert>;
  totalQuantity: number;
  totalPrice: number;
};

type CartStateProviderProps = {
  children: ReactNode;
};

type CartStateContextProps = {
  cartState: CartState;
  setCartState: Dispatch<SetStateAction<CartState>>;
};

export const CartStateContext = createContext<CartStateContextProps | null>(
  null
);

export function CartStateProvider({ children }: CartStateProviderProps) {
  const [cartState, setCartState] = useState<CartState>({
    cart: {},
    totalQuantity: 0,
    totalPrice: 0,
  });

  return (
    <CartStateContext.Provider value={{ cartState, setCartState }}>
      {children}
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const context = useContext(CartStateContext);

  if (!context) {
    throw Error(
      "useCartStates 를 사용하기 위해서는 CartStateProvider 를 사용해야합니다!"
    );
  }

  const { cartState, setCartState } = context;

  const getCartItemData = (name: string) => {
    return cartState.cart[name];
  };

  const getCartData = () => {
    return Object.keys(cartState.cart).map((name) => cartState.cart[name]);
  };

  const addToCart = (dessert: Dessert) => {
    const { name, price } = dessert;
    const copyCartState = cartState;
    if (cartState.cart[name]) {
      copyCartState.cart[name].quantity += 1;
    } else {
      copyCartState.cart[name] = { ...dessert, quantity: 1 };
    }

    setCartState({
      ...copyCartState,
      totalPrice: cartState.totalPrice + price,
      totalQuantity: cartState.totalQuantity + 1,
    });
  };

  const removeFromCart = (dessert: Dessert) => {
    const { name, price } = dessert;
    if (cartState.cart[name]) {
      cartState.cart[name].quantity -= 1;
      if (cartState.cart[name].quantity === 0) delete cartState.cart[name];
    }

    setCartState({
      ...cartState,
      totalPrice: cartState.totalPrice - price,
      totalQuantity: cartState.totalQuantity - 1,
    });
  };

  const clearItemFromCart = (dessert: Dessert) => {
    const { name, price, quantity } = dessert;
    if (cartState.cart[name]) {
      delete cartState.cart[name];
    }

    setCartState({
      ...cartState,
      totalPrice: cartState.totalPrice - price * quantity,
      totalQuantity: cartState.totalQuantity - quantity,
    });
  };

  const resetCart = () => {
    setCartState({
      cart: {},
      totalQuantity: 0,
      totalPrice: 0,
    });
  };

  return {
    cartState,
    getCartItemData,
    getCartData,
    addToCart,
    removeFromCart,
    clearItemFromCart,
    resetCart,
  };
}
