import { Card } from "@/components/ui/card";
import { Target, Eye, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre a <span className="text-gradient">Notch</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Olá! Sou <span className="text-foreground font-semibold">Isaque Rodrigues</span>, 
                fundador da Notch, tenho 22 anos e moro em São Paulo.
              </p>
              
              <p>
                Criei a Notch com uma missão clara: ajudar empresas e profissionais a conquistarem 
                resultados reais através de sites que não apenas impressionam visualmente, mas que 
                convertem visitantes em clientes.
              </p>
              
              <p>
                Cada projeto é desenvolvido com foco em performance, SEO e experiência do usuário. 
                Não faço sites comuns - faço ferramentas de crescimento para o seu negócio.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient mb-1">3 Anos</div>
                <div className="text-sm text-muted-foreground">Experiência</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-slide-up">
            <Card className="glass p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Missão</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                Transformar ideias em sites de alta conversão, unindo design excepcional 
                com tecnologia de ponta para gerar resultados mensuráveis.
              </p>
            </Card>

            <Card className="glass p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Visão</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                Ser referência em desenvolvimento web no Brasil, reconhecida pela qualidade, 
                inovação e impacto real nos negócios dos clientes.
              </p>
            </Card>

            <Card className="glass p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Diferencial</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                Sites que aliam estética moderna com SEO estratégico, velocidade de carregamento 
                e integrações que automatizam seu negócio.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
