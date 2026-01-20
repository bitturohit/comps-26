import faker from "faker";

import Accordion from "./components/Accordion";

function App() {
   faker.seed(3); // used for static data

   const items = Array.from({ length: 3 }, () => ({
      // Array.from creates a new array
      id: faker.datatype.uuid(),
      label: faker.lorem.sentence() + "?",
      content: faker.lorem.paragraph(),
   }));

   return <Accordion items={items} />;
}

export default App;
