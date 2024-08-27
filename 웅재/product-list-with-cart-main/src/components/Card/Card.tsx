import { useCartState } from "../../hooks/useCartState";
import { Dessert } from "../../types/type";
import AddToCartButton from "./AddToCartButton";

type CardProps = {
  dessert: Dessert;
};

export default function Card({ dessert }: CardProps) {
  const { name, image, category, price } = dessert;
  const { getCartItemData, addToCart, removeFromCart } = useCartState();

  const handleAddToCart = () => {
    addToCart(dessert);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(dessert);
  };

  const borderClassName =
    getCartItemData(name)?.quantity !== undefined &&
    getCartItemData(name).quantity !== 0 &&
    "border-red";

  return (
    <div className="flex flex-col gap-1">
      <div className="rounded-lg flex flex-col items-center">
        <img
          src={image.desktop}
          alt={name}
          width={320}
          height={320}
          className={`rounded-lg border-2 ${borderClassName}`}
        />
        <div className="-mt-6 w-full flex justify-center items-center">
          <AddToCartButton
            currentCount={getCartItemData(dessert.name)?.quantity ?? 0}
            onClickAdd={handleAddToCart}
            onClickRemove={handleRemoveFromCart}
          />
        </div>
      </div>
      <p className="text-sm text-gray-400">{category}</p>
      <p className="font-semibold">{name}</p>
      <p className="text-red font-semibold">{`$ ${price.toFixed(2)}`}</p>
    </div>
  );
}
