import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface Expense {
  id: string;
  name: string;
  amount: number;
  date: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete?: (id: string) => void;
}

export const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <p className="text-xl text-foreground font-medium">
          Nenhuma Despesa Cadastrada!
        </p>
      </div>
    );
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="flex-1 px-4 py-6">
      <p className="text-center text-xl font-semibold mb-6">
        Total = R${total.toFixed(0)}
      </p>
      
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-card rounded-2xl p-4 flex items-center gap-4 shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex-shrink-0" />
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-card-foreground">
                {expense.name}
              </h3>
              <p className="text-sm text-muted-foreground">{expense.date}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <p className="font-semibold text-lg text-card-foreground whitespace-nowrap">
                R${expense.amount}
              </p>
              <Button
                variant="destructive"
                size="icon"
                className="rounded-full w-10 h-10"
                onClick={() => onDelete?.(expense.id)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
