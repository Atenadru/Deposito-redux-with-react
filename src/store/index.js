import {createStore,combineReducers} from 'redux'
import montoReducer from './reducers/rootReducers'



const reducers = combineReducers({
montoReducer
})


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store


/*
tener la consideracion de que si llamamos rootReducres da y lo pasamos por combinereducer con el mismo nombre dare una execion 
tener cuidado con esto
*/