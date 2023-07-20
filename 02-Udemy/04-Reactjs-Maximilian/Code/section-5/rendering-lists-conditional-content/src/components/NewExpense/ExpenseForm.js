import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   EnteredAmount: "",
  //   EnteredDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    //   setUserInput((pervState) => {
    //     return { ...pervState, enteredTitle: e.target.value };
    //   });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredAmount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // const [dispalyForm, setdispalyForm] = useState(false);
  // const [dispalyBtn, setdispalyBtn] = useState(true);


  // const cancelHandler = () => {
  //   setdispalyForm(false);
  //   setdispalyBtn(true);
  // };

  // let formContent;
  // let btnContent;

  // if (dispalyBtn) {
  //   btnContent = <button type="button" onClick={dispalyHandler}>Add New Expense</button>;
  // }

  // if (dispalyForm) {
  //   formContent = (
  //     <form onSubmit={submitHandler}>
  //       <div className="new-expense__controls">
  //         <div className="new-expense__control">
  //           <label>Title</label>
  //           <input
  //             type="text"
  //             value={enteredTitle}
  //             onChange={titleChangeHandler}
  //           />
  //         </div>
  //         <div className="new-expense__control">
  //           <label>Amount</label>
  //           <input
  //             type="number"
  //             min="0.01"
  //             step="0.01"
  //             value={EnteredAmount}
  //             onChange={amountChangeHandler}
  //           />
  //         </div>
  //         <div className="new-expense__control">
  //           <label>Date</label>
  //           <input
  //             type="date"
  //             min="2019-01-01"
  //             max="2023-3-25"
  //             value={EnteredDate}
  //             onChange={dateChangeHandler}
  //           />
  //         </div>
  //       </div>
  //       <div className="new-expense__actions">
  //         <button type="button" onClick={cancelHandler}>Cancel</button>
  //         <button type="submit">Add Expense</button>
  //       </div>
  //     </form>
  //   );
  // }

  return (
    <div>
<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={EnteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-3-25"
              value={EnteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
