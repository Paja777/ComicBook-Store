import { useState } from "react";
import agent from "../../app/api/agent";
import { useAuthContext } from "../../app/context/AuthContext";

interface ProductFormProps {
  productIds: string[] | undefined;
}

const DeleteForm = ({ productIds }: ProductFormProps) => {
  const [id, setId] = useState("");
  const { user } = useAuthContext();

  const handleClick = async () => {
    try {
      const response = await agent.requests.delete(`/product/${id}`, {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      });
      console.log(response);
      // window.location.reload();
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="max-w-md h-auto mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Delete Product
      </h2>
      <div className=" mb-4">
        <div className="  z-10 w-full  bg-white border border-gray-300 rounded-md mt-1">
          {productIds?.map((productId) => (
            <div
              key={productId}
              onClick={() => setId(productId)}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-center ${
                id === productId ? `bg-gray-100` : `bg-white`
              }`}
            >
              {productId}
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="absolute bottom-0 z-[99] left-[20%] w-[60%] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteForm;
