import React from 'react'
import './ExpenseList.css';
import ExpenseItem from "./expenseItem";
 const ExpenseList= (props)=> {
    let records =<h5 style={{color:'white', textAlign:'center'}}>No data found </h5>;
    if(props.filteredRecord.length >0){
      records = props.filteredRecord.map((expense, index) => {
        
       return <ExpenseItem expenseData={expense} key={index} />;
     })
    }
    return (
        <div className="expense-list">
             {records}
        </div>
    )
}
export default ExpenseList;
