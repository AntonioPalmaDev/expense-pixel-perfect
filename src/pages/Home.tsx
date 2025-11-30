import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Plus } from "lucide-react";
import { useExpenses } from "@/contexts/ExpenseContext";
import { Drawer } from "@/components/Drawer";
import { PremiumModal } from "@/components/PremiumModal";
import { ExpenseItem } from "@/components/ExpenseItem";

const Home = () => {
  const navigate = useNavigate();
  const { expenses, deleteExpense } = useExpenses();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPremiumOpen, setIsPremiumOpen] = useState(false);

  // Calcular dados do gráfico por dia da semana
  const weeklyData = () => {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const data = [0, 0, 0, 0, 0, 0, 0];
    
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const dayIndex = date.getDay();
      data[dayIndex] += expense.amount;
    });
    
    return days.map((day, index) => ({
      day,
      value: data[index],
    }));
  };

  const chartData = weeklyData();
  const maxValue = Math.max(...chartData.map((d) => d.value), 1);
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-[400px] bg-background rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-2rem)] max-h-[850px]">
          {/* Header */}
          <header className="bg-[#2A936E] text-white py-6 px-4">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-semibold tracking-[0.3em]">EXPENSE</h1>
              <div className="w-10" />
            </div>
          </header>

          {/* Gráfico */}
          <div className="bg-chart-background rounded-3xl p-6 mx-4 mt-6">
            <div className="flex justify-between items-end gap-3 h-48">
              {chartData.map((item, index) => {
                const heightPercentage = item.value > 0 ? (item.value / maxValue) * 100 : 0;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-3">
                    <span className="text-sm font-medium text-foreground">
                      {item.value.toFixed(1)}
                    </span>
                    <div className="w-full flex-1 flex items-end">
                      <div
                        className={`w-full rounded-full transition-all duration-300 ${
                          item.value > 0 ? "bg-[#2A936E]" : "bg-chart-bar"
                        }`}
                        style={{ height: item.value > 0 ? `${heightPercentage}%` : "20%" }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Total */}
          {expenses.length > 0 && (
            <div className="px-4 py-4">
              <p className="text-center text-lg font-semibold">
                Total = R${total.toFixed(2)}
              </p>
            </div>
          )}

          {/* Lista de despesas */}
          <div className="flex-1 overflow-auto px-4 py-4">
            {expenses.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground text-lg">
                    Nenhuma Despesa Cadastrada!
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Comece adicionando sua primeira despesa
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {expenses.map((expense) => (
                  <ExpenseItem
                    key={expense.id}
                    name={expense.name}
                    amount={expense.amount}
                    date={expense.date}
                    onDelete={() => deleteExpense(expense.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Botão Flutuante */}
          <div className="p-6 pb-8">
            <button
              onClick={() => navigate("/nova-despesa")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-4 text-lg font-medium shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus size={24} />
              Adicionar
            </button>
          </div>
        </div>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenPremium={() => setIsPremiumOpen(true)}
      />
      
      <PremiumModal
        isOpen={isPremiumOpen}
        onClose={() => setIsPremiumOpen(false)}
      />
    </>
  );
};

export default Home;
