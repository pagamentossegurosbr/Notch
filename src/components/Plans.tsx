import { Check, Sparkles, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Essencial",
    icon: Sparkles,
    price: "R$ 297",
    description: "Site com Design Plus+",
    features: [
      "Design moderno para todos os dispositivos",
      "Formulário de contato",
      "Contatos/Redes Sociais",
      "Suporte técnico 30 dias",
    ],
  },
  {
    name: "Growth",
    icon: Zap,
    price: "R$ 497",
    description: "Essencial + Integração c/ WhatsApp",
    featured: true,
    features: [
      "Tudo do plano de R$ 297",
      "Copywriting + Alta Conversão",
      "SEO otimizado para Google",
      "Google Analytics configurado",
      "Integração com WhatsApp p/pedidos",
      "Suporte técnico 60 dias",
    ],
  },
  {
    name: "Ultimate",
    icon: Rocket,
    price: "R$ 1.297",
    description: "Solução completa com automação",
    features: [
      "Tudo do Plano de R$ 497",
      "Integração API WhatsApp",
      "Sistema de pedidos automatizado",
      "Chat online com IA (Custos Adicionais)",
      "Suporte técnico 90 dias",
      "Manutenções mensais incluídas",
    ],
  },
];

export const Plans = () => {
  const handlePlanClick = (plan: typeof plans[0]) => {
    const titleEmoji = plan.name === "Ultimate" ? "★" : plan.name === "Growth" ? "⚡" : "✨";
    const featuresList = plan.features.map((f) => `✅ ${f}`).join("\n");
    const message = [
      `Isaque, me interessei no plano ${plan.name} (${plan.price}). ${titleEmoji}`,
      "",
      "Características:",
      featuresList,
      "",
      "Poderia me passar os próximos passos? ☺",
    ].join("\n");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511989002458&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="planos" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planos <span className="text-gradient">Sob Medida</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a crescer na internet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`glass p-8 space-y-6 card-hover relative ${ 
                  plan.featured ? "ring-2 ring-primary glow" : "" 
                }`}
              >
                {plan.featured && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-xs font-bold md:px-4 md:py-1.5 md:text-sm shadow-lg"
                    >
                      MAIS POPULAR
                    </Badge>
                  </motion.div>
                )}

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${ 
                    plan.featured 
                      ? "bg-gradient-to-br from-primary to-secondary" 
                      : "glass"
                  }`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                </div>
                
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${ 
                  plan.featured
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    : "glass hover:bg-white/5"
                }`}
                size="lg"
                onClick={() => handlePlanClick(plan)}
              >
                Começar Agora
              </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};