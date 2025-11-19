import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useExpenses } from "@/contexts/ExpenseContext";
import { toast } from "@/hooks/use-toast";

const NovaDespesa = () => {
  const navigate = useNavigate();
  const { addExpense } = useExpenses();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name && amount && date) {
      addExpense({
        name,
        amount: parseFloat(amount),
        date,
      });
      
      toast({
        title: "Despesa adicionada com sucesso!",
      });
      
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-[#2A936E] flex items-center justify-center p-4">
      <div className="max-w-[400px] w-full">
        <button
          onClick={() => navigate("/home")}
          className="mb-4 text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={24} />
          Voltar
        </button>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#2A936E] mb-8 text-center">
            Nova Despesa
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Despesa
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Cinema"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor (R$)
              </label>
              <Input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data
              </label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#2A936E] text-white py-3 rounded-full font-semibold hover:bg-[#238360] transition-colors shadow-lg"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NovaDespesa;
