type AddToCartButtonProps = {
  currentCount: number;
  onClickAdd: () => void;
  onClickRemove: () => void;
};

export default function AddToCartButton({
  currentCount,
  onClickAdd,
  onClickRemove,
}: AddToCartButtonProps) {
  if (currentCount === 0)
    return (
      <button
        className="bg-white flex justify-center w-2/3 rounded-full p-2 border border-red font-semibold box-border"
        onClick={onClickAdd}
      >
        <span className="flex itemscenter space-x-2">
          <img src={"../assets/images/icon-add-to-cart.svg"} />
          <span>Add to Cart</span>
        </span>
      </button>
    );
  else
    return (
      <div className="bg-red flex w-2/3 justify-between rounded-full py-2 px-4 border text-white box-border">
        <img
          src={"../assets/images/icon-decrement-quantity.svg"}
          alt="decrement-icon"
          className="cursor-pointer"
          width={12}
          height={12}
          onClick={onClickRemove}
        />
        {currentCount}
        <img
          src={"../assets/images/icon-increment-quantity.svg"}
          alt={"increment-icon"}
          className="cursor-pointer"
          width={12}
          height={12}
          onClick={onClickAdd}
        />
      </div>
    );
}
