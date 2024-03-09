import { ProductData } from "./AdminDashboard";


interface DataTableProps {
  dataArray: ProductData[] | undefined;
}

const DataTable = ({dataArray} : DataTableProps) => {
  
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
        {dataArray?.map((data : any) => (

        <tbody key={data._id}>
          <tr className="bg-white">
            <td className="table-field">{data.productId}</td>
            <td className="table-field">{data.title}</td>
            <td className="table-field">{data.price}</td>
            <td className="table-field">{data.soldMon}%</td>
            <td className="table-field">{data.soldYr}%</td>
            <td className="table-field">${data.M$}</td>
            <td className="table-field">${data.Y$}</td>
          </tr>
        </tbody>

        ))}
      </table>
    </div>
    </div>
  );
};

export default DataTable;
