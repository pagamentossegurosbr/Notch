import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para criar um site?",
    answer: "O prazo médio é de 7 a 15 dias úteis, dependendo da complexidade do projeto. Sites simples podem ficar prontos em até 7 dias úteis, enquanto projetos com integrações customizadas levam até 1 mês. Mantemos você informado em cada etapa do processo.",
  },
  {
    question: "O valor inclui hospedagem e domínio?",
    answer: "Sim! Todos os planos incluem 1 ano de hospedagem e registro de domínio. Após esse período, você pode renovar conosco ou migrar para outro provedor - o site é 100% seu.",
  },
  {
    question: "Posso fazer alterações no site depois de pronto?",
    answer: "Absolutamente! Você receberá acesso ao painel administrativo para fazer pequenas alterações como textos e imagens. Para mudanças maiores, oferecemos pacotes de manutenção mensal com preços especiais.",
  },
  {
    question: "Como funciona o SEO para ranquear no Google?",
    answer: "Implementamos otimizações técnicas (velocidade, meta tags, estrutura) e de conteúdo (palavras-chave estratégicas). No plano Growth e Premium, fazemos pesquisa de palavras-chave e configuramos ferramentas de análise. Resultados começam a aparecer em 2-3 meses.",
  },
  {
    question: "Posso migrar meu site atual para a Notch?",
    answer: "Sim! Fazemos a migração completa do seu site atual, preservando todo conteúdo, imagens e otimizando a estrutura. O processo é transparente e não há downtime - seu site continua no ar durante a transição.",
  },
  {
    question: "O que acontece se eu precisar de suporte após o prazo?",
    answer: "Oferecemos suporte contínuo através de planos de manutenção mensais. Você também pode contratar suporte pontual para demandas específicas. Nosso time está sempre disponível para ajudar você a crescer.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos PIX, transferência bancária e cartão de crédito parcelado. Trabalhamos com um sinal de 50% no início do projeto e 50% na entrega. Condições especiais podem ser negociadas para projetos maiores.",
  },
  {
    question: "O site será responsivo (mobile)?",
    answer: "Sim, 100%! Todos os sites são desenvolvidos mobile-first, ou seja, funcionam perfeitamente em celulares, tablets e computadores. Testamos em diversos dispositivos antes da entrega para garantir a melhor experiência.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-3xl relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-slide-up">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
