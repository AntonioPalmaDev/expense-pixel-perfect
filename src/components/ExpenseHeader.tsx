import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export const ExpenseHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground py-6 px-4">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/90">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold tracking-[0.3em]">EXPENSE</h1>
        <div className="w-10" /> {/* Spacer for alignment */}
      </div>
    </header>
  );
};
