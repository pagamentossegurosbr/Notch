import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

export const Contrast = () => {
  return (
    <section id="contraste" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contraste <span className="text-gradient">Que Importa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diferença entre um negócio amador e um negócio profissional com a Notch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Card negativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <Card className="glass p-6 md:p-8 rounded-2xl border-red-500/25 bg-gradient-to-br from-red-500/5 to-rose-700/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-500 to-rose-600 text-white">
                    <XCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Sem site profissional</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>❌ Usa apenas Linktree ou Instagram – aparência amadora e pouca credibilidade</li>
                  <li>❌ Não aparece no Google – perde clientes todos os dias</li>
                  <li>❌ Atendimento desorganizado – difícil falar pelo WhatsApp</li>
                  <li>❌ Site lento ou mal estruturado – não converte visitantes em clientes</li>
                  <li>❌ Falta de confiança e autoridade digital</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          {/* Card positivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <Card className="glass p-6 md:p-8 rounded-2xl border-emerald-500/25 bg-gradient-to-br from-emerald-500/5 to-cyan-700/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Com a Notch</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✅ Site profissional que ranqueia no Google e gera vendas</li>
                  <li>✅ Atendimento automatizado e personalizado via WhatsApp</li>
                  <li>✅ Design moderno, rápido e otimizado para conversão</li>
                  <li>✅ Entrega super-rápida — em até 1 dia útil</li>
                  <li>✅ Suporte técnico e acompanhamento completo</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Transição visual dinâmica */}
        <motion.div
          className="relative mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-1.5 w-48 md:w-64 rounded-full bg-gradient-to-r from-rose-500 via-primary to-emerald-500"
            animate={{ x: [-12, 12, -12] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <ArrowRight className="w-6 h-6 ml-3 text-muted-foreground" />
          <span className="ml-2 text-sm md:text-base text-muted-foreground">
            Evolução acelerada: velocidade, autoridade e resultados reais
          </span>
        </motion.div>
      </div>
    </section>
  );
};