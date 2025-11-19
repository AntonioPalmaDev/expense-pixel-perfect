import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPremium: () => void;
}

export const Drawer = ({ isOpen, onClose, onOpenPremium }: DrawerProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-xl">
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
          
          <nav className="mt-12 space-y-4">
            <button
              onClick={() => handleNavigation("/minicurso")}
              className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Minicurso
            </button>
            
            <button
              onClick={() => handleNavigation("/configuracao")}
              className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Configuração
            </button>
            
            <button
              onClick={() => {
                onOpenPremium();
                onClose();
              }}
              className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Versão Premium
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
