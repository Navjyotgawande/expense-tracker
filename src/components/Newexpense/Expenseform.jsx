import React, { useState } from "react";

function Expenseform(props) {
 
    const[title, setTitle] = useState('Enter Title');
    const[amount, setAmount] = useState(0);
    const[date, setDate] = useState('');

    function handleChangeTitle(event) {
    //setTitle(event.target.value);
    //   console.log(event.target.value);
       setTitle(event.target.value);
      }
      function handleChangeAmount(event) {
        // console.log(event.target.value);
        setAmount(event.target.value);
      }
      function handleChangeDate(event) {
        // console.log(event.target.value);
        setDate(event.target.value);
      }
      function submitData(event) {
          event.preventDefault();
          const formData = {
            item: title,
            price:amount,
            date: new Date(date)
        }
      props.onSaveExpenseData(formData);
          console.log(formData);
           console.log('data sent to Newexpense');
          setTitle('');
          setAmount('');
          setDate('dd-mm-yyyy');
          props.setShowExpenseForm(false);
      }
    
  return (
    <form onSubmit={submitData}>
    <div className="row">
   
      <div className="col-5">
        <label className="my-1">Title</label>
        <input type="text" onChange={handleChangeTitle} value={title} className="form-control" />

      </div>
      <div className="col-5">
        <label className="my-1">Amount</label>
        <input type="number" onChange={handleChangeAmount}  value={amount}  className="form-control" />
      </div>
      <div className="col-5">
        <label className="my-1">Date</label>
        <input type="date" value={date} onChange={handleChangeDate}  className="form-control" />
      </div>
      <div className="col-12 d-flex justify-content-end">
         <button  type="button" className="submitData" style={{marginRight:'10px'}} onClick={()=>props.setShowExpenseForm(false)}>Cancel</button>
        <button type="submit" className="submitData">Add Expense</button>
      </div>
     
    </div>
    </form>
  );
}
export default Expenseform;
