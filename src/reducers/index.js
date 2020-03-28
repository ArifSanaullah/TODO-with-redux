import { combineReducers } from "redux";
import { authReducers } from "./auth.reducers";
import { todoReducers } from "./todo.reducers";
import { todosReducers } from "./todos.reducers";
import { visibilityFiltersReducers } from "./visibilityFilters.reducers";

// Good work on breaking the functionality of the reducer into multiple functions
// But if you see the number of files in the reducer folder is quite large for such a small app
// If we keep this convention for a big app the reducer files would be in hundreds or thousands
// what we normally do is breakup individual reducers by entity not the cases from switch themselves
// entity could be Users, Shopping Cart, Checkout-Form etc

const rootReducer = combineReducers({
  authReducers,
  todoReducers,
  todosReducers,
  visibilityFiltersReducers
});

export default rootReducer;
