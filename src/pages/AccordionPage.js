import faker from "faker";

import Accordion from "../components/Accordion";

/**
 * AccordionPage component.
 * Generates static demo data using faker and passes it to the Accordion component.
 */

function AccordionPage() {
   faker.seed(3); // for consistent, repeatable data across renders

   const items = Array.from({ length: 3 }, () => ({
      // Array.from creates a new array
      id: faker.datatype.uuid(),
      label: faker.lorem.sentence() + "?",
      content: faker.lorem.paragraph(),
   }));

   return <Accordion items={items} />;
}

export default AccordionPage;
