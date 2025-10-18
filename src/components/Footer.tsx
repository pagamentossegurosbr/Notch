import { Heart } from "lucide-react";
import notchLogo from "@/assets/logo-nobackground.png";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src={notchLogo}
              alt="Logo Notch"
              loading="lazy"
              decoding="async"
              className="w-12 h-12 rounded-lg object-contain"
            />

          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" />
            <span>por Isaque Rodrigues</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 Notch. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
