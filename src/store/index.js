 import { applyMiddleware,legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
 const store=createStore(rootReducer,applyMiddleware(thunk));

 export default store