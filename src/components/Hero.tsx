import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Thumbnail local de preview (fallback)
const previewThumb = new URL('../assets/thumbnail.png', import.meta.url).href;

export const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Disponível para novos projetos</span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Sites que <span className="text-gradient">Convertem</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="w-full max-w-3xl mx-auto">
            <motion.p
              className="text-sm text-muted-foreground/80 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              Assista o vídeo abaixo!
            </motion.p>
            <div className="relative w-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="relative aspect-video rounded-2xl glass-strong overflow-hidden group cursor-pointer shadow-lg"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => setShowVideo(true)}
              >
                {showVideo ? (
                  <>
                    <div className="absolute inset-0 bg-background/30 backdrop-blur-xl z-0" />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="relative z-10 w-full h-full"
                    >
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/vEZ_XdjmlcY?si=XVOU5utPvhNX5KG8&autoplay=1&modestbranding=1&rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <motion.div
                        className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Play className="w-12 h-12 ml-1.5" fill="currentColor" />
                      </motion.div>
                    </div>
                    <img
                      src={previewThumb}
                      alt="Prévia do vídeo"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl"
            variants={itemVariants}
          >
            +120 negócios locais já aumentaram suas vendas com nossos sites de alta conversão!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 glow"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Planos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="glass hover:bg-white/5"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Meus Projetos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
