import { useCartState } from "../../hooks/useCartState";
import CartItem from "./CartItem";

type CartProps = {
  onClickConfirmOrder: () => void;
};

export default function Cart({ onClickConfirmOrder }: CartProps) {
  const { cartState, getCartData } = useCartState();

  const isCartEmpty = cartState.totalQuantity === 0;

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-4 w-full max-w-96">
      <h1 className="text-3xl font-bold text-red">{`Your Cart (${cartState.totalQuantity})`}</h1>
      {getCartData().map((dessert) => (
        <CartItem key={`CartItem_${name}`} dessert={dessert} />
      ))}
      {isCartEmpty ? (
        <div className="flex flex-col justify-center w-full text-center items-center">
          <img
            src="../assets/images/illustration-empty-cart.svg"
            width={200}
            height={200}
          />
          {
            <p className="text-rose-500 font-bold">
              Your added items will appear here
            </p>
          }
        </div>
      ) : (
        <>
          <div className="flex justify-between m-2">
            <span className="text-gray-500">Order Total</span>
            <span className="text-2xl font-bold">{`$${cartState.totalPrice.toFixed(
              2
            )}`}</span>
          </div>
          <div className="bg-rose-100 flex justify-center items-center py-2 rounded-lg">
            <img
              src="../assets/images/icon-carbon-neutral.svg"
              alt="icon-carbon-neutral"
              className="m-2"
            />
            <span>
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </span>
          </div>
          <button
            className="bg-red text-white p-2 rounded-full disabled:bg-gray-400"
            disabled={cartState.totalQuantity === 0}
            onClick={onClickConfirmOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
