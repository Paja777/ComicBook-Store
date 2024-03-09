import  { useState } from "react";
import { useAuthContext } from "../../app/context/AuthContext";
import agent from "../../app/api/agent";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    rating: "",
  });
  const { user } = useAuthContext();
  console.log(user)

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    try {
      const response = await agent.requests.post(
        "/product",
        {
          ...formData,
        },
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter product title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter product category"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inStock"
            className="block text-gray-700 font-medium mb-2"
          >
            stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter number of items in stock"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter product description"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-medium mb-2"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter product rating (0-5)"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
