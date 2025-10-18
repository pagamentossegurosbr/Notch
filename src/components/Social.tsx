import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import thumbnail from "@/assets/thumbnail.png";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    description: "Acompanhe nossos projetos e bastidores do dia a dia",
    cta: "Em Breve...",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    name: "WhatsApp",
    description: "Entre em contato direto para tirar dúvidas ou solicitar orçamento",
    cta: "Chamar no WhatsApp",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "TikTok",
    description: "Conteúdos rápidos sobre web design e dicas de marketing digital",
    cta: "Em Breve",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/64px-Tiktok_icon.svg.png?20240827133148",
    gradient: "from-slate-700 to-slate-900",
  },
];

export const Social = () => {
  return (
    <section id="redes" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conecte-se <span className="text-gradient">Conosco</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fique por dentro das novidades, projetos e dicas exclusivas nas redes sociais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <Card
              key={social.name}
              className="glass p-8 space-y-6 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.gradient} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <img
                  src={social.icon}
                  alt={social.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => (e.currentTarget.src = thumbnail)}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{social.name}</h3>
                <p className="text-muted-foreground">{social.description}</p>
              </div>

              <Button 
                className="w-full glass hover:bg-white/5 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300"
              >
                {social.cta}
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
