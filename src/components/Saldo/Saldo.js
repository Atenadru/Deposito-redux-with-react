import React from "react"
import './styles.css'
import {connect} from 'react-redux';
import {showSaldo} from '../../store/reducers/rootReducers'

const Saldo = (props) =>{
const {monto} = props
return(
    <div className='container--saldo'>
        <label>Saldo Disponible  {monto}</label>
    </div>
)
}

const mapStateToProp= state =>{

    return{
        monto:showSaldo(state)
    }

}

export default connect(mapStateToProp)(Saldo)
