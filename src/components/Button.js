import PropTypes from "prop-types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

/**
 * Reusable Button component supporting multiple visual variants.
 *
 * Variant props (primary, secondary, success, warning, danger) are mutually exclusive.
 * Uses classNames + tailwind-merge to conditionally compose Tailwind styles safely.
 */
function Button({
   children,
   primary,
   secondary,
   success,
   warning,
   danger,
   outline,
   rounded,
   ...rest
}) {
   // Dynamically build Tailwind classes based on variant props
   const classes = twMerge(
      classNames(
         rest.className,
         "flex items-center gap-1 px-3 py-1.5 border cursor-pointer",
         {
            "bg-blue-500 border-blue-500 text-white": primary,
            "bg-gray-900 border-gray-900 text-white": secondary,
            "bg-green-500 border-green-600 text-white": success,
            "bg-yellow-500 border-yellow-600 text-white": warning,
            "bg-red-500 border-red-600 text-white": danger,
            "rounded-full": rounded,
            // Outline overrides background styles
            "bg-white": outline,
            "text-blue-500": outline && primary,
            "text-gray-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-500": outline && warning,
            "text-red-500": outline && danger,
         },
      ),
   );

   return (
      <button {...rest} className={classes}>
         {children}
      </button>
   );
}

// Ensures only one variant prop is provided at a time.
Button.propTypes = {
   checkvariationvalue: ({ primary, secondary, success, warning, danger }) => {
      const count =
         Number(!!primary) +
         Number(!!secondary) +
         Number(!!success) +
         Number(!!warning) +
         Number(!!danger);

      if (count > 1) {
         return new Error(
            "Only one of primary, secondary, success, warning, danger can be true",
         );
      }
   },
};

export default Button;
