import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import DataTable from "./Table";
import Button from "../../app/components/Button";
import agent from "../../app/api/agent";
import { useAuthContext } from "../../app/context/AuthContext";
import UpdateForm from "./UpdateForm";
import NotFound from "../../app/error/NotFound";

export interface ProductData {
    productId: string,
      title: string,
      price: string,
      stock: string,
      soldMon: number,
      soldYr: number,
      M$: number,
      Y$: number,
}

const AdminDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuthContext();
  const [tableDataArray, setTableDataArray] = useState<ProductData[]>([]);
  const productIds = tableDataArray.map((p) => p.productId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await agent.requests.get("/data", undefined, {
          Authorization: `Bearer ${user!.token}`,
        });
        console.log(data);
        setTableDataArray(data);
      } catch (error: any) {
        console.log("An error occurred:", error.response.data);
      }
    };
    fetchData();
  }, [user]);

  const handleClickAdd = () => {
    setShowForm((prev) => !prev);
  };
  const handleClickUpdate = () => {
    setShowForm((prev) => !prev);
  };
  const handleClickDelete = () => {
    setShowForm((prev) => !prev);
  };

  if (!user || user.role !== "admin") return <NotFound />;
  return (
    <div className="bg-primary h-[1200px]">
      <div className="flex felx-row justify-center items-center gap-2 mt-4">
        <Button
          name={"Add product"}
          size={{ w: "60px", h: "20px" }}
          onHandleButtonClick={handleClickAdd}
        />
        <Button
          name="Update product"
          size={{ w: "60px", h: "20px" }}
          onHandleButtonClick={handleClickUpdate}
        />
        <Button
          name="Delete product"
          size={{ w: "60px", h: "20px" }}
          onHandleButtonClick={handleClickDelete}
        />
      </div>
      <div className="mt-0">
        {!showForm && <DataTable dataArray={tableDataArray} />}
      </div>
      <div>{showForm && <UpdateForm productIds={productIds} />} </div>
    </div>
  );
};

export default AdminDashboard;
