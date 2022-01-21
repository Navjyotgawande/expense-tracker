
import react from 'react';
import '../expenseItem/expenseItem.css';
   

function ExpenseItem(props) {
  // const [desc , newDesc] = useState(props.expenseData.item);
    let desc= props.expenseData.item;
 
     const month =props.expenseData.date.toLocaleString('default', {'month': 'long'});
          const year = [props.expenseData.date.getFullYear()];
     const date =[props.expenseData.date.getDate()];

    //  function EventHandler(e) {
    //     // newDesc = 'updated';
    //     console.log('updated');
    //     newDesc('Updated');
    //  }
    return (

        <div id="main-div">
        <div className="left">
          <div className="left__box">
            <h3>{month}</h3>
            <span>{year}</span>
            <h2>{date}</h2>
          </div>
          <div className="expense__name">
            {/* <h1>{desc}</h1> */}
            <h2>{desc}</h2>
          </div>
        </div>
        <div className="price">
          <h2>${props.expenseData.price}</h2>
          {/* <button className="changeTitle" onClick={EventHandler}>Change Title</button> */}
        </div>
      
      </div>
            
    )
}
export default ExpenseItem;