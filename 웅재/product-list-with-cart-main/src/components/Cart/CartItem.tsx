import { useCartState } from "../../hooks/useCartState";
import { Dessert } from "../../types/type";

type CartItemProps = {
  dessert: Dessert;
};

export default function CartItem({ dessert }: CartItemProps) {
  const { clearItemFromCart } = useCartState();

  const { name, price, quantity } = dessert;

  const handleClearItemFromCart = () => {
    clearItemFromCart(dessert);
  };
  return (
    <div className="flex justify-between p-2 border-b">
      <div className="w-full">
        <p>{name}</p>
        <div className="grid grid-cols-6 gap-1">
          <span className="text-red">{`${quantity}x`}</span>
          <span className="text-gray-400">{`@${price.toFixed(2)}`}</span>
          <span className="text-gray-500">{`$${(price * quantity).toFixed(
            2
          )}`}</span>
        </div>
      </div>
      <img
        src="../assets/images/icon-remove-item.svg"
        alt="clearIcon"
        width={10}
        height={10}
        className="cursor-pointer"
        onClick={handleClearItemFromCart}
      />
    </div>
  );
}
