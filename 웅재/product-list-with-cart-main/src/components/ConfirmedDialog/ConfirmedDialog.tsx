import { useCartState } from "../../hooks/useCartState";
import DialogItem from "./DialogItem";

type ConfirmedDialogProps = {
  onClickConfirm: () => void;
};

export default function ConfirmedDialog({
  onClickConfirm,
}: ConfirmedDialogProps) {
  const { getCartData, cartState } = useCartState();

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-10 sm:items-end">
        <div className="bg-white w-full rounded-t-2xl flex flex-col box-border p-8 gap-4 max-w-lg rounded-2xl sm:max-w-full sm:rounded-b-none">
          <img
            src="../assets/images/icon-order-confirmed.svg"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold">Order Confirmed</h1>
          <p className="text-rose-400">We hope you enjoy your food!</p>
          <div className="bg-rose-100 p-6 rounded-lg">
            {getCartData().map((dessert) => (
              <DialogItem
                key={`DialogItem_${dessert.name}`}
                dessert={dessert}
                count={dessert.quantity}
              />
            ))}
            <div className="flex justify-between items-center pt-4">
              <span className="text-sm">Order Total</span>
              <span className="font-bold text-xl">{`$${cartState.totalPrice.toFixed(
                2
              )}`}</span>
            </div>
          </div>
          <button
            className="border font-semibold bg-red text-white p-5 rounded-full text-sm"
            onClick={onClickConfirm}
          >
            Start New Order
          </button>
        </div>
      </div>

      <div className="fixed w-screen h-screen top-0 left-0 bg-gray-500 opacity-50 -z-1" />
    </>
  );
}
