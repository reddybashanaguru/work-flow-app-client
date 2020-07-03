import { combineReducers } from "redux";

import loginReducer from "../reducers/login-reducer";
import { workflowReducer, workflowListReducer } from '../reducers/workflow-reducer';
import routeReducer from '../reducers/router-reducer';


export const makeRootReducer = asyncReducers => {
    return combineReducers({
        login: loginReducer,
        workflow: workflowReducer,
        workflowList: workflowListReducer,
        routeData: routeReducer,
        ...asyncReducers
    });
};

export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
