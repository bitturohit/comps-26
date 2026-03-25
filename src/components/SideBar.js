import Link from "./Link";

/**
 * Sidebar navigation component.
 * Renders a vertical list of navigation links for different demo pages.
 * Uses a custom <Link> component to handle client-side navigation and active state styling.
 */
function SideBar() {
   // Define navigation items with labels and corresponding route paths
   const links = [
      { label: "Dropdown", path: "/" },
      { label: "Accordion", path: "/accordion" },
      { label: "Buttons", path: "/buttons" },
      { label: "Modal", path: "/modal" },
      { label: "Table", path: "/table" },
   ];

   // Map over links array to generate <Link> components dynamically
   const renderedLinks = links.map((link) => {
      return (
         <Link
            key={link.label}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
         >
            {link.label}
         </Link>
      );
   });

   return (
      // Sidebar container: sticky positioning keeps it visible during scroll
      <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
         {renderedLinks}
      </div>
   );
}

export default SideBar;
