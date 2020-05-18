import { combineReducers } from 'redux';

/////////// IMPORT REDUCERS ///////////////
import AppReducer from './AppReducer';
import RehydrateReducer from './RehydrateReducer';



export default combineReducers({
    app: AppReducer,
    rehydrate: RehydrateReducer
});