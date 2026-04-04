import Sortabletable from "../components/SortableTable";
import Table from "../components/Table";

/**
 * TablePage component.
 * Demonstrates usage of reusable Table and SortableTable components
 * using configuration-driven column definitions.
 */
function TablePage() {
   // Sample dataset for table rendering
   const data = [
      { name: "Orange", color: "bg-orange-500", score: 5 },
      { name: "Apple", color: "bg-red-500", score: 3 },
      { name: "Banana", color: "bg-yellow-300", score: 1 },
      { name: "Lime", color: "bg-green-200", score: 4 },
      { name: "Cherry", color: "bg-red-700", score: 7 },
   ];

   /**
    * Column configuration describing how each field should be rendered.
    * sortValue enables sorting support in SortableTable.
    */
   const config = [
      {
         label: "Name",
         render: (fruit) => fruit.name,
         sortValue: (fruit) => fruit.name,
      },
      {
         label: "Color",
         render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
      },
      {
         label: "Score",
         render: (fruit) => fruit.score,
         sortValue: (fruit) => fruit.score,
         // header: () => <th className="bg-red-300 px-2">Score</th>,
      },
      { label: "Score Squared", render: (fruit) => fruit.score ** 2 },
   ];

   // Key function for unique row identification
   const keyFn = (fruit) => {
      return fruit.name;
   };

   return (
      <div>
         {/* Basic table rendering */}
         <Table data={data} config={config} keyFn={keyFn} />
         {/* Table with sorting functionality */}
         <Sortabletable data={data} config={config} keyFn={keyFn} />
      </div>
   );
}

export default TablePage;
