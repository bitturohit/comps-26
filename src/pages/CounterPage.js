import { useReducer } from "react";

import Panel from "../components/Panel";
import Button from "../components/Button";

const INCREMENT_COUNT = "increment";
const VALUE_TO_ADD = "value-to-add";
const DECREMENT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
   switch (action.type) {
      case INCREMENT_COUNT:
         return {
            ...state,
            count: state.count + 1,
         };
      case DECREMENT:
         return {
            ...state,
            count: state.count - 1,
         };
      case VALUE_TO_ADD:
         return {
            ...state,
            valueToAdd: action.payload,
         };
      case ADD_VALUE_TO_COUNT:
         return {
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0,
         };
      default:
         return state;
   }
};

function CounterPage({ initialCount }) {
   const [state, dispatch] = useReducer(reducer, {
      count: initialCount,
      valueToAdd: 0,
   });
   console.log(state);

   const handleChange = (event) => {
      const value = parseInt(event.target.value) || 0;

      dispatch({
         type: "value-to-add",
         payload: value,
      });
   };

   const increment = () => {
      dispatch({
         type: "increment",
      });
   };

   const decrement = () => {
      dispatch({
         type: DECREMENT,
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      dispatch({
         type: ADD_VALUE_TO_COUNT,
      });
   };

   return (
      <Panel className="m-3">
         <h1 className="text-lg">Count is: {state.count}</h1>
         <div className="flex flex-row gap-x-1">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
         </div>

         <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input
               type="number"
               value={state.valueToAdd || ""}
               onChange={handleChange}
               className="p-1 m-3 bg-gray-50 border border-gray-300"
            />
            <Button>Add it!</Button>
         </form>
      </Panel>
   );
}

export default CounterPage;
