import { Dessert } from "../../types/type";

type DialogItemProps = {
  dessert: Dessert;
  count: number;
};

export default function DialogItem({ dessert, count }: DialogItemProps) {
  const { image, name, price } = dessert;

  return (
    <div className="flex justify-between border-b items-center gap-2">
      <div className="flex items-center">
        <img
          src={image.thumbnail}
          width={48}
          height={48}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-1 p-2">
          <p className="font-semibold">{name}</p>
          <div className="grid grid-cols-4 gap-1">
            <span className="text-red">{`${count}x`}</span>
            <span className="text-gray-400">{`@ $${price.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
      <span className="font-bold">{`$${(price * count).toFixed(2)}`}</span>
    </div>
  );
}
