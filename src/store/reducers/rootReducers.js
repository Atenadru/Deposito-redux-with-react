const initState = {}

const rootReducers = (state=initState,action) =>{
    switch(action.type)
    {
        case 'ADD_DEPOSITO' :
        return{
            ...state,
            monto:action.payload
        }
        default:
            return state

    }
}

export {rootReducers as default}
export const showSaldo = state => state.montoReducer.monto 
// showSaldo resive como argumento un state donde es invocada y retorna  state.montoReducer.monto 
//state en el arcivo actual es llamado parametro es rellenado por el argumento que resive
