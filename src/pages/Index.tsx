import { useState } from "react";
import { ExpenseHeader } from "@/components/ExpenseHeader";
import { WeeklyChart } from "@/components/WeeklyChart";
import { ExpenseList } from "@/components/ExpenseList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Expense {
  id: string;
  name: string;
  amount: number;
  date: string;
}

const Index = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Calculate weekly data based on expenses
  const weeklyData = [
    { day: "S", value: 0 },
    { day: "T", value: 0 },
    { day: "Q", value: 0 },
    { day: "Q", value: 0 },
    { day: "S", value: 0 },
    { day: "S", value: 0 },
    { day: "D", value: 0 },
  ];

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-background rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-2rem)] max-h-[850px]">
        <ExpenseHeader />
        
        <WeeklyChart data={weeklyData} />
        
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
        
        {/* Add Button */}
        <div className="p-6 pb-8">
          <Button
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full py-6 text-lg font-medium shadow-lg"
            onClick={() => {
              // Add expense logic would go here
              console.log("Add expense clicked");
            }}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
