import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import thumbFallback from "@/assets/thumbnail.png";

const testimonials = [
  {
    id: 1,
    name: "Camila Santos",
    role: "Fundadora, Café Aconchego",
    content: "O sistema de pedidos via WhatsApp que a Notch desenvolveu foi um divisor de águas para nós. Nossos clientes amam a praticidade e nossas vendas aumentaram em 40%!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Roberto Lima",
    role: "CEO, LogiBrasil",
    content: "Precisávamos de um site robusto e que passasse confiança. A Notch entregou um projeto impecável, com SEO otimizado que nos colocou na primeira página do Google para palavras-chave estratégicas.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Fernanda Oliveira",
    role: "Diretora, Estilo Urbano",
    content: "O design do nosso e-commerce ficou fantástico! Moderno, intuitivo e a integração com o Instagram Shopping facilitou demais a jornada de compra. O resultado foi um aumento de 60% nas vendas online.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Lucas Martins",
    role: "Sócio-fundador, Academia Corpo em Movimento",
    content: "O site que a Notch criou superou todas as nossas expectativas. É rápido, fácil de navegar e o sistema de agendamento de aulas online otimizou nosso tempo e melhorou a experiência dos alunos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Beatriz Almeida",
    role: "Arquiteta, Espaço Singular",
    content: "A Notch conseguiu traduzir a essência do nosso escritório em um site elegante e funcional. O portfólio online tem sido uma ferramenta fundamental para atrair novos projetos e clientes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem nossos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais de quem confiou na Notch para transformar sua presença digital
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="glass p-6 space-y-4 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mt-4">{testimonial.content}</p>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => (e.currentTarget.src = thumbFallback)}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass hover:bg-white/5" />
          <CarouselNext className="glass hover:bg-white/5" />
        </Carousel>
      </div>
    </section>
  );
};
