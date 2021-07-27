import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');
  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filterExpenses}/>
      <ExpensesList items = {filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
