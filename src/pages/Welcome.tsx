import { useNavigate } from "react-router-dom";
import piggyLogo from "@/assets/piggy-logo.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#2A936E] flex items-center justify-center p-4">
      <div className="max-w-[400px] w-full text-center">
        <img
          src={piggyLogo}
          alt="Porquinho"
          className="w-48 h-48 mx-auto mb-8 object-contain"
        />
        
        <h1 className="text-3xl font-bold text-white mb-12">
          Hora de Controlar suas despesas!
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate("/cadastro")}
            className="w-full bg-white text-[#2A936E] py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Criar uma conta
          </button>
          
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-transparent border-2 border-white text-white py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Fazer login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
