import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = props => {
    const ExpensesFiltered = props.items?.filter(item => item.date?.getFullYear() === parseInt(props.filterValue))
    if (ExpensesFiltered.length === 0 && parseInt(props.filterValue) !== 0 ) {
        return (
            <h2 className="expenses-list__fallback">Not Found.</h2>
        )
    }
    return (
        <ul className="expenses-list">
            {parseInt(props.filterValue) === 0 ?
                props.items?.map(expense =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                )
                : ExpensesFiltered?.map(expense =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                )
            }
        </ul>

    )

}

export default ExpenseList;