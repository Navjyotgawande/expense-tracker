import react , {useState} from 'react';
// import ExpenseItem from "./expenseItem";
import ExpensFilter from "../../ExpensFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {
 const [filteredyear , setFilteredYear] =useState('2022');
 const updateFilterYear = (year)=>{
   console.log('inside expense');
   console.log(year);
   setFilteredYear(year);
 }
 const filteredRecord = props.expenseData.filter((exp)=>{
   return exp.date.getFullYear().toString() === filteredyear.toString();
  // console.log(exp.date.getFullYear())
   });
   //console.log(filteredRecord);

  //  let records =<h5 style={{color:'white', textAlign:'center'}}>No data found </h5>;
  //  if(filteredRecord.length >0){
  //    records = filteredRecord.map((expense, index) => {
       
  //     return <ExpenseItem expenseData={expense} key={index} />;
  //   })
  //  }
  return (
    <div>
      <ExpensFilter updateFilterYear={updateFilterYear} filteredyear={filteredyear} />
      {/* {
        //&& means only if ternary
        filteredRecord.length ===0 && records
      }

      {
        filteredRecord.length > 0 &&
        filteredRecord.map((expense, index) => {
       
        return <ExpenseItem expenseData={expense} key={index} />;
      })
     
      } */}
      
     {/* {records} */}
     <ExpenseChart filteredRecord = {filteredRecord}/>
    <ExpenseList filteredRecord = {filteredRecord}/>
    </div>
  );
};
export default Expenses;
