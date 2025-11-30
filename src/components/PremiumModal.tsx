import { X } from "lucide-react";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PremiumModal = ({ isOpen, onClose }: PremiumModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      
      <div className="relative bg-card rounded-2xl p-6 max-w-sm w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
          Versão Premium
        </h2>
        
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-primary mb-2">R$ 4,99</p>
          <p className="text-muted-foreground">por mês</p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <p className="text-foreground">Sem anúncios</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <p className="text-foreground">Tema escuro</p>
          </div>
        </div>
        
        <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
          Assinar Agora
        </button>
      </div>
    </div>
  );
};
