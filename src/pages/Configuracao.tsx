import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Configuracao = () => {
  const navigate = useNavigate();

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
            Configuração
          </h2>
          
          <div className="space-y-6 text-center">
            <div className="py-6">
              <p className="text-lg text-gray-700 mb-2">
                Desenvolvido por
              </p>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-[#2A936E]">
                  Brian Friedrich
                </p>
                <p className="text-2xl font-bold text-[#2A936E]">
                  Jean Alves
                </p>
                <p className="text-2xl font-bold text-[#2A936E]">
                  Antonio Palma
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 leading-relaxed">
                Este aplicativo faz parte do projeto de pesquisa TCC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracao;
