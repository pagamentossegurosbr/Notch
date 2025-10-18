import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import fullprintBeauty from "@/assets/Fullprint-BeautyClinic.png";
import fullprintOdonto from "@/assets/fullprint-odonto.png";
import fullprintRestaurantes from "@/assets/Fullprint-restaurantes.png";
// import { ProjectPreview } from "@/components/ProjectPreview"; // removed modal usage
import { OrderDemoVideo } from "@/components/OrderDemoVideo";
import { CircleDivider } from "@/components/ui/circle-divider";
import veganosVideo from "@/assets/preview-notch-veganos.mp4";
import odontoVideo from "@/assets/preview-odonto.mp4";


const projects = [
  {
    id: 1,
    name: "Clínicas de Estética",
    niche: "Saúde & Beleza",
    description: "Sites especializados para clínicas de estética com agendamento online e galeria de resultados.",
    image: fullprintBeauty,
    previewImages: [fullprintBeauty],
    previewRoute: "/preview/estetica",
  },
  {
    id: 2,
    name: "Clínicas Odontológicas",
    niche: "Saúde",
    description: "Websites profissionais para dentistas com foco em conversão e credibilidade.",
    image: fullprintOdonto,
    previewImages: [fullprintOdonto],
    previewRoute: "/preview/odonto",
  },
  {
    id: 4,
    name: "Restaurantes e Delivery's",
    niche: "Gastronomia",
    description: "Websites para restaurantes com cardápio digital e integração de pedidos.",
    image: fullprintRestaurantes,
    previewImages: [fullprintRestaurantes],
    previewRoute: "/preview/restaurantes",
  },
];

export const Projects = () => {
  // const [selectedProject, setSelectedProject] = useState<any | null>(null); // removed state for modal
  return (
    <section id="projetos" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nichos <span className="text-gradient">Locais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sites especializados para diferentes nichos, otimizados para conversão e resultados locais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="relative glass overflow-hidden group card-hover h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 glass">
                    {project.niche}
                  </Badge>
                </div>
                
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{project.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="glass w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link to={project.previewRoute}>
                      Ver Projeto
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <CircleDivider className="my-8" />
        <OrderDemoVideo subtitle="Demonstração de uma página de pedidos" />

        {/* Novo vídeo de demonstração (odonto) seguindo mesmo padrão */}
        <CircleDivider className="my-8" />
        <OrderDemoVideo src={odontoVideo} subtitle="Demonstração de uma página odontológica" />

        {/* Novo vídeo de demonstração (vegano) seguindo mesmo padrão */}
        <CircleDivider className="my-8" />
        <OrderDemoVideo src={veganosVideo} subtitle="Demonstração de uma página vegana" />

        {/* Modal de Preview Responsivo */}
        {/* <ProjectPreview project={selectedProject} onClose={() => setSelectedProject(null)} /> */}
      </div>
    </section>
  );
};
