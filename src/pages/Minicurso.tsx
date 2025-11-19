import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Minicurso = () => {
  const navigate = useNavigate();

  const topics = [
    "I - Introdução ao Controle Financeiro",
    "II - Como Organizar suas Despesas",
    "III - Criando um Orçamento Mensal",
    "IV - Identificando Gastos Desnecessários",
    "V - Técnicas de Economia",
    "VI - Investimentos Básicos",
    "VII - Planejamento Financeiro",
    "VIII - Metas Financeiras",
    "IX - Controle de Dívidas",
    "X - Fundo de Emergência",
    "XI - Aposentadoria",
    "XII - Educação Financeira para a Família",
    "XIII - Ferramentas Digitais",
    "XIV - Conclusão e Próximos Passos",
  ];

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
            Minicurso
          </h2>
          
          <ul className="space-y-4">
            {topics.map((topic, index) => (
              <li
                key={index}
                className="text-gray-700 py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Minicurso;
