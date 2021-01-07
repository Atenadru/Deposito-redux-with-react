import React,{useRef} from 'react';
import { connect } from 'react-redux';
import updateSaldo  from "../../store/actions/actionSaldo";
import './styles.css'



const Deposito = ({updateSaldo}) =>{
  const x = useRef(null)

  return(
   <div className="container"> 
    <input placeholder='indique monto' type='text' ref={x}></input>
    <button onClick={() => {updateSaldo(x.current.value)}} >Depositar</button>
   </div>
  )
  
 }


export default connect(null,{updateSaldo})(Deposito)