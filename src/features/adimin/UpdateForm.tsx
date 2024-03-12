import { useState } from "react";
import agent from "../../app/api/agent";
import ProductForm from "./ProductForm";

interface ProductFormProps {
  productIds: string[] | undefined;
}

const UpdateForm = ({ productIds }: ProductFormProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState<any>({});

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemSelect = async (id: string) => {
    // extract product from db
    setShowForm(false);
    try {
      const response = await agent.requests.get(`/product/${id}`);
      console.log(response);
      setProductToUpdate(response);
    } catch (error) {
      console.log(error);
    }
    // setProductToUpdate(productId)
    setShowDropdown(false);
    setShowForm(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
      <h2 className="text-2xl font-semibold mb-6">Update Product</h2>
      <div className=" mb-4">
        <button
          onClick={handleDropdownClick}
          className="absolute right-10 top-7 px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute left-5 z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
            {productIds?.map((productId) => (
              <div
                key={productId}
                onClick={() => handleDropdownItemSelect(productId)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {productId}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Rest of form */}
      {showForm && <ProductForm productToUpdate={productToUpdate} />}
    </div>
  );
};

export default UpdateForm;
