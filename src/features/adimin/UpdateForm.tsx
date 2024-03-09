import { useState } from "react";
import { useAuthContext } from "../../app/context/AuthContext";
import agent from "../../app/api/agent";

interface ProductFormProps {
    productIdArray: string[] | undefined;
}

const UpdateForm = ({productIdArray} : ProductFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    rating: "",
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useAuthContext();

 

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemSelect = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setShowDropdown(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    try {
      const response = await agent.requests.patch("/product", formData, {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      });
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Product</h2>
      <div className="relative mb-4">
        <button
          onClick={handleDropdownClick}
          className="absolute right-0 top-0 px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
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
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
            {productIdArray?.map((productId) => (
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
      <form onSubmit={handleSubmit}>
        {/* Rest of your form */}
      </form>
    </div>
  );
};

export default UpdateForm;
