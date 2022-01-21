import React , {useState} from "react";
import "./Newexpense.css";
import Expenseform from "./Expenseform";
function Newexpense(props) {
const [showExpenseForm, setShowExpenseForm] = useState(false);
const showExpenseFormHandler = ()=>{
  setShowExpenseForm(true);
}
const saveExpenseDataHandler =(enteredExpenseData) =>{
const expenseData = {
  ...enteredExpenseData , 
  id:Math.random().toString()
}
props.onAddExpense(expenseData);
     console.log(expenseData);
     console.log('data received from expenseForm');

  };
  return (
    <div className="NewExpense">
     {
        !showExpenseForm && <button className='submitData addExpense' onClick={showExpenseFormHandler}>Add New Expense</button>
      }
        {/* <button className='submitData addExpense' onClick={showExpenseFormHandler}>Add New Expense</button> */}
      {
        showExpenseForm && <Expenseform onSaveExpenseData ={saveExpenseDataHandler} setShowExpenseForm ={setShowExpenseForm} />
      }


       {/* <Expenseform onSaveExpenseData ={saveExpenseDataHandler} /> */}
      
    </div>
  );
}

export default Newexpense;
