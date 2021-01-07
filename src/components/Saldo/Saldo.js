import React from "react"
import './styles.css'
import {connect} from 'react-redux';
import {showSaldo} from '../../store/reducers/rootReducers'

const Saldo = (props) =>{
const {monto} = props

    if(!isNaN(monto)){
    return(
        <div className='container--saldo'>
            <label>Saldo Disponible  {monto}</label>
        </div>
    )
    }else{
        return(
        <div className='container--saldo'>
        <label>debes ingresar un monto</label>
        </div>
        )
    }
}

const mapStateToProp= state =>{

    return{
        monto:showSaldo(state)
    }

}

export default connect(mapStateToProp)(Saldo)
