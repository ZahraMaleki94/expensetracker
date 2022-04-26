import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import ExpenseChart from './ExpenseChart';

import './Expenses.css';
import ExpenseList from './ExpenseList';


const Expenses = (props) => {
  const [filteredValue, setFilteredValue] = useState('0');


  const FillterSelectedHandler = (selectedValue) => {
    setFilteredValue(selectedValue);
  }
  const ExpensesFiltered = props.items?.filter(item => item.date?.getFullYear() === parseInt(filteredValue))

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter onFillterSelected={FillterSelectedHandler} tlbt={filteredValue} />
          {filteredValue !== '0' && <ExpenseChart expenses={ExpensesFiltered} />}
          <ExpenseList items={props.items} filterValue={filteredValue} />
        </Card>
      </div>
    </li>
  );
}

export default Expenses;
