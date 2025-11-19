import { createContext, useContext, useState, ReactNode } from "react";

export interface Expense {
  id: string;
  name: string;
  amount: number;
  date: string;
}

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => void;
  deleteExpense: (id: string) => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", name: "Cinema", amount: 50, date: "2022-10-03" },
    { id: "2", name: "Comida", amount: 500, date: "2022-10-01" },
    { id: "3", name: "Gasolina", amount: 200, date: "2022-09-19" },
    { id: "4", name: "Conta de Luz", amount: 90, date: "2022-09-28" },
  ]);

  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenses must be used within ExpenseProvider");
  }
  return context;
};
