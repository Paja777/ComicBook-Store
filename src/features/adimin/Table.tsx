import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { useAuthContext } from "../../app/context/AuthContext";

const PricingTable = () => {
  const { user } = useAuthContext();
  const [tableDataArray, setTableDataArray] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await agent.requests.get("/data", undefined, {
          Authorization: `Bearer ${user!.token}`,
        });
        console.log(data)
        setTableDataArray(data); // Update state with fetched array data
      } catch (error: any) {
        console.log('An error occurred:', error.response.data);
      }
    };

    fetchData(); // Invoke fetchData inside useEffect

  }, [user]); 
  return (
    <div className="bg-primary h-screen">
    <div className="max-w-3xl mx-auto mt-10">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="table-field">ID</th>
            <th className="table-field">Title</th>
            <th className="table-field">Price</th>
            <th className="table-field">Sold/mon</th>
            <th className="table-field">Sold/Yr</th>
            <th className="table-field">M$</th>
            <th className="table-field">Y$</th>
          </tr>
        </thead>
        {tableDataArray.map((data : any) => (

        <tbody key={data._id}>
          <tr className="bg-white">
            <td className="table-field">{data.productId}</td>
            <td className="table-field">{data.title}</td>
            <td className="table-field">{data.price}</td>
            <td className="table-field">{data.soldMon}</td>
            <td className="table-field">{data.soldYr}</td>
            <td className="table-field">{data.M$}</td>
            <td className="table-field">{data.Y$}</td>
          </tr>
        </tbody>

        ))}
      </table>
    </div>
    </div>
  );
};

export default PricingTable;
