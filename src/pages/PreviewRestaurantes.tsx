import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import fullprint from "@/assets/Fullprint-restaurantes.png";

const PreviewRestaurantes = () => {
  useEffect(() => {
    document.title = "Preview — Restaurantes e Delivery | Notch";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Navbar glassmorphism */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-amber-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/" rel="noopener noreferrer">
              Voltar
            </Link>
          </Button>
        </div>
      </header>

      {/* Viewer mobile da Fullprint */}
      <main className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center"
        >
          <div className="w-[250px] h-[540px] md:w-[280px] md:h-[600px] bg-zinc-900 rounded-[30px] border-[10px] border-black shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 overflow-y-auto">
              <img
                src={fullprint}
                alt="Preview completo do projeto — Restaurante e Delivery"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA inferior */}
        <div className="mt-6 flex items-center justify-center">
          <Button asChild variant="outline" className="rounded-full">
            <a href="/" rel="noopener noreferrer">
              Ver Portfólio Completo
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default PreviewRestaurantes;