import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredFilterDate, setFilterDate] = useState("2023");

  const onFilterDate = (selectedDate) => {
    setFilterDate(selectedDate);
  };

  const filteredExpenses = props.data.filter((expnese) => {
    return expnese.date.getFullYear().toString() === enteredFilterDate;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilterDate}
          onFilterDate={onFilterDate}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
