import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Cadastro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      return;
    }
    
    if (name && email && password) {
      toast({
        title: "Conta criada com sucesso!",
      });
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-[#2A936E] flex items-center justify-center p-4">
      <div className="max-w-[400px] w-full">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#2A936E] mb-8 text-center">
            Criar Conta
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmar Senha
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#2A936E] text-white py-3 rounded-full font-semibold hover:bg-[#238360] transition-colors shadow-lg"
            >
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
