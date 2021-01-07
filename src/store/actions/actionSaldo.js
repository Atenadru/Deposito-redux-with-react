

const updateSaldo = monto =>{
    console.log(monto)
    return{
        type:'ADD_DEPOSITO',
        payload:parseInt(monto)
    }
}

export default updateSaldo 

