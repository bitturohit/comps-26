import classNames from "classnames";

function Panel({ children, className, ...rest }) {
   const finalClassName = classNames(
      "border border-gray-100 rounded p-3 shadow bg-white w-full",
      className,
   );

   return (
      <div {...rest} className={finalClassName}>
         {children}
      </div>
   );
}

export default Panel;
