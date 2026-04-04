import { Fragment } from "react";

/**
 * Generic Table component driven by configuration.
 *
 * Props:
 * - data: array of objects representing row data
 * - config: column definitions controlling rendering and behavior
 * - keyFn: function to generate unique row keys
 */
function Table({ data, config, keyFn }) {
   // Build table headers from config
   const renderedHeaders = config.map((column) => {
      // Allows custom header rendering when provided
      if (column.header) {
         return <Fragment key={column.label}>{column.header()}</Fragment>;
      }

      return (
         <th key={column.label} className="px-2">
            {column.label}
         </th>
      );
   });

   // Build table rows dynamically based on config render functions
   const renderedRows = data.map((rowData) => {
      const renderedCells = config.map((column) => {
         return (
            <td key={column.label} className="p-2 text-center">
               {column.render(rowData)}
            </td>
         );
      });

      return (
         <tr key={keyFn(rowData)} className="border-b border-gray-200">
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
