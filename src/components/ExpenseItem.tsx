import { Trash2, ShoppingBag, Car, Utensils, Film, Home as HomeIcon, Zap, Gift, Heart, TrendingUp } from "lucide-react";

interface ExpenseItemProps {
  name: string;
  amount: number;
  date: string;
  onDelete: () => void;
}

const getExpenseIcon = (name: string) => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes("mercado") || nameLower.includes("compra") || nameLower.includes("shopping")) {
    return <ShoppingBag className="h-5 w-5" />;
  }
  if (nameLower.includes("gasolina") || nameLower.includes("combustível") || nameLower.includes("uber") || nameLower.includes("transporte")) {
    return <Car className="h-5 w-5" />;
  }
  if (nameLower.includes("restaurante") || nameLower.includes("comida") || nameLower.includes("lanche") || nameLower.includes("alimentação")) {
    return <Utensils className="h-5 w-5" />;
  }
  if (nameLower.includes("cinema") || nameLower.includes("filme") || nameLower.includes("teatro") || nameLower.includes("entretenimento")) {
    return <Film className="h-5 w-5" />;
  }
  if (nameLower.includes("aluguel") || nameLower.includes("casa") || nameLower.includes("moradia")) {
    return <HomeIcon className="h-5 w-5" />;
  }
  if (nameLower.includes("luz") || nameLower.includes("água") || nameLower.includes("internet") || nameLower.includes("conta")) {
    return <Zap className="h-5 w-5" />;
  }
  if (nameLower.includes("presente") || nameLower.includes("aniversário")) {
    return <Gift className="h-5 w-5" />;
  }
  if (nameLower.includes("saúde") || nameLower.includes("médico") || nameLower.includes("farmácia")) {
    return <Heart className="h-5 w-5" />;
  }
  
  return <TrendingUp className="h-5 w-5" />;
};

export const ExpenseItem = ({ name, amount, date, onDelete }: ExpenseItemProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", { 
      day: "2-digit", 
      month: "short"
    });
  };

  return (
    <div className="group bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Ícone */}
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            {getExpenseIcon(name)}
          </div>
          
          {/* Informações */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-base truncate">
              {name}
            </p>
            <p className="text-sm text-muted-foreground">
              {formatDate(date)}
            </p>
          </div>
        </div>
        
        {/* Valor e ação */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="font-bold text-foreground text-lg">
              R${amount.toFixed(2)}
            </p>
          </div>
          <button
            onClick={onDelete}
            className="text-destructive hover:text-destructive/80 transition-colors p-2 hover:bg-destructive/10 rounded-lg"
            aria-label="Excluir despesa"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
