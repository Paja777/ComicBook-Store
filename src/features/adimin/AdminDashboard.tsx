import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import DataTable from "./Table";
import Button from "../../app/components/Button";
import agent from "../../app/api/agent";
import { useAuthContext } from "../../app/context/AuthContext";
import UpdateForm from "./UpdateForm";
import NotFound from "../../app/error/NotFound";
import DeleteForm from "./DeleteForm";

export interface ProductData {
  productId: string;
  title: string;
  price: string;
  stock: string;
  soldMon: number;
  soldYr: number;
  M$: number;
  Y$: number;
}

const AdminDashboard = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showTable, setShowTable] = useState(true);
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

  const handleClickTable = () => {
      setShowUpdateForm(false);
      setShowProductForm(false);
      setShowDeleteForm(false);
      setShowTable(true);
  };
  const handleClickAdd = () => {
      setShowUpdateForm(false);
      setShowTable(false);
      setShowDeleteForm(false);
    setShowProductForm(true);
  };
  const handleClickUpdate = () => {
    setShowProductForm(false);
    setShowTable(false);
    setShowDeleteForm(false);
    setShowUpdateForm(true);
  };
  const handleClickDelete = () => {
    setShowProductForm(false);
      setShowTable(false);
    setShowUpdateForm(false);
    setShowDeleteForm(true);
  };

  if (!user || user.role !== "admin") return <NotFound />;
  return (
    <div className="bg-primary h-[1200px]">
      <div className="flex felx-row justify-center items-center gap-2 mt-4">
        <Button
          name={"Data Table"}
          size={{ w: "60px", h: "20px" }}
          onHandleButtonClick={handleClickTable}
        />
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
        {showTable && <DataTable dataArray={tableDataArray} />}
      </div>
      <div>
        {showUpdateForm && <UpdateForm productIds={productIds} />}{" "}
        {showProductForm && <ProductForm  />}{" "}
        {showDeleteForm && <DeleteForm  productIds={productIds}/>}{" "}
      </div>
    </div>
  );
};

export default AdminDashboard;
