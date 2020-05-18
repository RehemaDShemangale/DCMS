/*import { createStore, applyMiddleware, compose  } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducers";
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const store = createStore(
    rootReducers, 
    compose(applyMiddleware(
    thunkMiddleware
    ),
    offline(offlineConfig)
));



store.subscribe(() => {});
export default store;*/


import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
//import AsyncStorage from '@react-native-community/async-storage';
//reducers
import reducers from './Reducers';
//actions
import thunk from 'redux-thunk';
import  { YellowBox } from 'react-native';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {REHYDRATE_STORE} from './actions/types';


const middlewares = [thunk];


if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
    YellowBox.ignoreWarnings([
        'NetInfo\'s "change" event is deprecated',
        'Warning:',
        'You should only render',
        'Missing'
    ]);
}else{
    //disable all console errors..
}

const store = createStore(
    reducers, 
    compose(
        applyMiddleware(...middlewares),
        offline({
            ...offlineConfig,
            persistCallback:()=>{
                store.dispatch({type:REHYDRATE_STORE});
            },
            persistOptions:{
                blacklist:['rehydrate']
            }
        })
    )
);


export  default store;