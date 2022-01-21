
import Chart from "../Chart/Chart";
const ExpenseChart = (props)=>{
   // console.log(props.filteredRecord);
    let chartDataPoints = [
        {label: 'Jan', price:0},
        {label: 'Feb', price:0},
        {label: 'Mar', price:0},
        {label: 'Apr', price:0},
        {label: 'May', price:0},
        {label: 'jun', price:0},
        {label: 'july', price:0},
        {label: 'Aug', price:0},
        {label: 'Sep', price:0},
        {label: 'Oct', price:0},
        {label: 'Nov', price:0},
        {label: 'Dec', price:0},
    ];
    for(let record of props.filteredRecord){
        console.log(record);
       
        let month =record.date.getMonth();
       chartDataPoints[month].price += Number(record.price);
    }
    console.log(chartDataPoints);
    return (
        <div>
        <Chart dataPoints ={chartDataPoints} />
        </div>
    )
};

export default ExpenseChart;