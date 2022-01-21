import react , {useState} from "react";
//import ExpenseItem from './components/expenseItem/expenseItem';
import "./App.css";
import Expenses from "./components/expenseItem/Expenses";
import Newexpense from "./components/Newexpense/Newexpense";
const dummyExpense = [
  {
    id: "exp1",
    date: new Date(2021, 5, 23),
    item: "Car",
    price: "1799",
  },
  {
    id: "exp2", 
    date: new Date(2020, 2, 23),
    item: "Car insurance",
    price: "294",
  },
  {
    id: "exp3",
    date: new Date(2021, 6, 13),
    item: "Home Loan",
    price: "450",
  },
  {
    id: "exp4",
    date: new Date(2022, 7, 18),
    item: "Education",
    price: "450",
  },
  {
    id: "exp5",
    date: new Date(2022, 2, 12),
    item: "Bike",
    price: "250",
  },
  
];
//console.log(expenseData);

function App() {
  const [expenseData, SetExpenses] = useState(dummyExpense);
const addExpenseHandler = (expense) =>{
// console.log(expense);
// console.log('data received from Newexpense')
const updatedExpense = [expense , ...expenseData];
console.log(updatedExpense);
  SetExpenses(updatedExpense);
    
}

  return (
    <div>

      <div>
        <Newexpense onAddExpense = {addExpenseHandler} />
      </div>

      <div className="wrapper">
        {/* <ExpenseItem expenseData = {expenseData[0]} />
      <ExpenseItem expenseData = {expenseData[1]} />
      <ExpenseItem expenseData = {expenseData[2]} /> */}

        <Expenses expenseData={expenseData} />
      </div>
    </div>
  );
}
export default App;
