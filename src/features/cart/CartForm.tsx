import { useState } from "react";
import { useUpdateUser } from "../../app/hooks/useUpdateUser";
import { Product } from "../../app/models/product";
import { useAuthContext } from "../../app/context/AuthContext";

interface CartFormProps {
  items: Product[] | undefined;
}

const CartForm = ({ items }: CartFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const { updateStockAndCart } = useUpdateUser();
  const { addToCart, removeFrom } = useUpdateUser();
  const { user } = useAuthContext();
  const totalPrice = user?.productCart.reduce((total, product) => total += product.amount * product.price ,0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleClick = (action: string, id: string) => {
    if (action === "add") {
      addToCart({ id });
    } else {
      removeFrom({ place: "cart", id, amount: 1 });
    }
  };

  // Update product stock (after buying)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    updateStockAndCart({ items });
  };

  return (
    <div className="max-w-md mx-0 w-[120%] px-14 mt-3 py-6  bg-primary text-[20px] opacity-80 rounded-lg shadow-md">
      <h2 className="mb-5">Total: ${totalPrice}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-[1rem] bg-secondary rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-white font-medium mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-[1rem] bg-secondary rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-white font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-[1rem] bg-secondary rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter phone number"
            required
          />
        </div>
        {items?.map((item: any) => (
          <div key={item._id} className="flex flex-row justify-between mt-2 ">
            <button
              type="button"
              onClick={() => handleClick("add", item._id)}
              className="px-3 bg-secondary text-primary rounded-md border border-primary mr-2"
            >
              +
            </button>
            <div className="text-[1rem]">{item.amount} X</div>
            <div className="text-[1rem]">{item.title}</div>
            <button
              type="button"
              onClick={() => handleClick("remove", item._id)}
              className="px-3 bg-secondary text-primary rounded-md border border-primary mr-2"
            >
              -
            </button>
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-8 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default CartForm;
