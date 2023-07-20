import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setdispalyForm(false)
  };


  const [dispalyForm, setdispalyForm] = useState(false);

  const dispalyHandler = () => {
    setdispalyForm(true);
  };

  const cancelHandler = () => {
    setdispalyForm(false)
  }

  return (
    <div className="new-expense">
      {!dispalyForm && (
        <button onClick={dispalyHandler}>Add New Expense</button>
      )}
      {dispalyForm && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={cancelHandler} />}
    </div>
  );
};

export default NewExpense;
