import Card from "../components/Card/Card";
import { Dessert } from "../types/type";
import useFetchData from "../hooks/useFetchData";
import Cart from "../components/Cart/Cart";
import { useState } from "react";
import ConfirmedDialog from "../components/ConfirmedDialog/ConfirmedDialog";
import { useCartState } from "../hooks/useCartState";

export default function MainPage() {
  const {
    data: productData,
    isLoading,
    isError,
  } = useFetchData<Dessert[]>("../data.json");

  const { resetCart } = useCartState();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>();

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetCart();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!productData) return <div>There is no data.</div>;

  return (
    <section className="font-sans sm:text-sm">
      <div className="w-full h-full bg-rose-100 flex justify-center items-start gap-8 p-20 sm:flex-col sm:p-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">Desserts</h1>
          <div className="grid gap-6 grid-cols-3 sm:grid-cols-1">
            {productData.map((product) => (
              <Card key={`Card_${product.name}`} dessert={product} />
            ))}
          </div>
        </div>
        <Cart onClickConfirmOrder={handleDialogOpen} />
      </div>
      {isDialogOpen && <ConfirmedDialog onClickConfirm={handleDialogClose} />}
    </section>
  );
}
