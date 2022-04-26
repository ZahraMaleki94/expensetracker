import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.OnExpnsesSubmitted(expenseData);

    };
    const [addNewExpenses, setAddNewExpenses] = useState(false);
    const addNewExpenseshanler = () => {
        setAddNewExpenses(true)
    }
    const cancelNewExpenseshanler = () => {
        setAddNewExpenses(false)
    }

    return (
        <div className="new-expense">
            {
                addNewExpenses ?
                    <ExpenseForm OnFormSubmitted={saveExpenseDataHandler} OnFormCanceled={cancelNewExpenseshanler} />
                    :
                    <button className="new-expensesq" onClick={addNewExpenseshanler}>َAdd New Expenses</button>
            }
        </div>
    )
}
export default NewExpense;