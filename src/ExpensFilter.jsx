import React from "react";
import './ExpenseFilter.css';

function ExpensFilter(props) {
  

  return (
    <div className="filter">
      <h4>Filter by year</h4>
      <select onChange={(e)=>props.updateFilterYear(e.target.value)} value={props.filteredyear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}
export default ExpensFilter;
