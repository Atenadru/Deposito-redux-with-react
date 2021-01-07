

const updateSaldo = monto =>{
    console.log(monto)
    return{
        type:'ADD_DEPOSITO',
        payload:monto
    }
}

export default updateSaldo 

