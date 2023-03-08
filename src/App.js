import './App.css';
import {ExpensesList} from './Pages/ExpensesList'

function App() {
const list=[
  {id:1,detail:"Buy a Tshirt",category:"Shopping",amount:50},
  {id:2,detail:"Pay bill",category:"Clothes",amount:50},
  {id:3,detail:"Market",category:"Shopping",amount:50},
  {id:4,detail:"Soap",category:"Cleaning",amount:50},
  {id:1,detail:"Buy a Tshirt",category:"Shopping",amount:50},
  {id:2,detail:"Pay bill",category:"Clothes",amount:50},
  {id:3,detail:"Market",category:"Shopping",amount:50},
  {id:4,detail:"Soap",category:"Cleaning",amount:50},
  {id:1,detail:"Buy a Tshirt",category:"Shopping",amount:50},
  {id:2,detail:"Pay bill",category:"Clothes",amount:50},
  {id:3,detail:"Market",category:"Shopping",amount:50},
  {id:4,detail:"Soap",category:"Cleaning",amount:50}
]
  return (
    <div className="App">
<ExpensesList data={list}>

</ExpensesList>
    </div>
  );
}

export default App;
