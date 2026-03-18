function Table({ data, config }) {
   const renderedHeaders = config.map((column) => {
      return <th key={column.label}>{column.label}</th>;
   });

   const renderedRows = data.map((fruit) => {
      return (
         <tr key={fruit.name} className="border-b border-gray-200">
            <td className="p-3">{config[0].render(fruit)}</td>
            <td className="p-3">{config[1].render(fruit)}</td>
            <td className="p-3">{config[2].render(fruit)}</td>
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
