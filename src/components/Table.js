function Table({ data, config }) {
   const renderedHeaders = config.map((column) => {
      return (
         <th key={column.label} className="p-2">
            {column.label}
         </th>
      );
   });

   const renderedRows = data.map((fruit) => {
      const renderedCells = config.map((column) => {
         return (
            <td key={column.label} className="p-2">
               {column.render(fruit)}
            </td>
         );
      });

      return (
         <tr key={fruit.name} className="border-b border-gray-200">
            {renderedCells}
         </tr>
      );
   });

   return (
      <table className="table-auto border-spacing-2">
         <thead>
            <tr className="border-b-2 border-gray-300">{renderedHeaders}</tr>
         </thead>
         <tbody>{renderedRows}</tbody>
      </table>
   );
}

export default Table;
