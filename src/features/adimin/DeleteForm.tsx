import { useState } from "react";
import agent from "../../app/api/agent";

interface ProductFormProps {
  productIds: string[] | undefined;
}

const DeleteForm = ({ productIds }: ProductFormProps) => {

  const [productId, setProductId] = useState('');
  
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const response = await agent.requests.delete(`/product/${productId}`);
      console.log(response);
    } catch (error : any) {
      console.log(error.response.data);
    }
    
  };

  return (
    <div className="max-w-md h-[330px] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
      <h2 className="text-2xl font-semibold mb-6 text-center">Delete Product</h2>
      <div className=" mb-4">
        <div className="absolute left-0 z-10 w-full  bg-white border border-gray-300 rounded-md mt-1">
          {productIds?.map((productId) => (
            <div
              key={productId}
              onClick={() => setProductId(productId)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
            >
              {productId}
            </div>
          ))}
        </div>
      </div>
      <button
          type="submit"
          className="absolute bottom-3 left-[20%] w-[60%] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onSubmit={handleSubmit}
        >
          Delete
        </button>
    </div>
  );
};

export default DeleteForm;
