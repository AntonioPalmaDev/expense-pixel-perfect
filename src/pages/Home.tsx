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
      <div className="min-h-screen bg-background">
        <div className="w-full max-w-[400px] mx-auto bg-background shadow-2xl min-h-screen">
          {/* Header */}
          <header className="bg-[#2A936E] text-white py-6 px-4 sticky top-0 z-10">
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

          {/* Conteúdo Rolável */}
          <div className="pb-24">
            {/* Gráfico */}
            <div className="bg-card rounded-3xl p-6 mx-4 mt-6 shadow-lg border border-border">
              <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                Gastos Semanais
              </h2>
              <div className="flex justify-between items-end gap-2 h-56 relative">
                {/* Linhas de referência */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="border-t border-border/50" />
                  <div className="border-t border-border/50" />
                  <div className="border-t border-border/50" />
                  <div className="border-t border-border/50" />
                </div>
                
                {chartData.map((item, index) => {
                  const heightPercentage = item.value > 0 ? (item.value / maxValue) * 100 : 0;
                  const minHeight = 8;
                  const finalHeight = item.value > 0 ? Math.max(heightPercentage, minHeight) : minHeight;
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2 relative z-10">
                      {/* Valor */}
                      <div className="h-8 flex items-center">
                        {item.value > 0 && (
                          <span className="text-xs font-bold text-primary animate-fade-in">
                            R${item.value.toFixed(0)}
                          </span>
                        )}
                      </div>
                      
                      {/* Coluna */}
                      <div className="w-full flex-1 flex items-end justify-center">
                        <div
                          className={`w-full max-w-[36px] rounded-t-lg transition-all duration-500 ease-out shadow-md ${
                            item.value > 0 
                              ? "bg-gradient-to-t from-primary to-primary/80 hover:scale-105" 
                              : "bg-muted/50"
                          }`}
                          style={{ 
                            height: `${finalHeight}%`,
                            minHeight: '16px'
                          }}
                        />
                      </div>
                      
                      {/* Dia */}
                      <span className="text-sm font-semibold text-foreground mt-1">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total */}
            {expenses.length > 0 && (
              <div className="px-4 py-6">
                <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                  <p className="text-center text-sm text-muted-foreground mb-1">
                    Total Gasto
                  </p>
                  <p className="text-center text-2xl font-bold text-primary">
                    R${total.toFixed(2)}
                  </p>
                </div>
              </div>
            )}

            {/* Lista de despesas */}
            <div className="px-4 py-4">
              {expenses.length === 0 ? (
                <div className="flex items-center justify-center py-16">
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
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Suas Despesas
                  </h3>
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
          </div>

          {/* Botão Flutuante Fixo */}
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background to-transparent pb-6 pt-4">
            <div className="max-w-[400px] mx-auto px-6">
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
