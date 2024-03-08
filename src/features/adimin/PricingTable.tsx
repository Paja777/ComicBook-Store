



const PricingTable = () => {
  return (
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
        <tbody>
          <tr className="bg-white">
            <td className="table-field">1</td>
            <td className="table-field">Product A</td>
            <td className="table-field">100$</td>
            <td className="table-field">10</td>
            <td className="table-field">100</td>
            <td className="table-field">1000$</td>
            <td className="table-field">12000$</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;