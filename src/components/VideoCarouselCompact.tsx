import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import thumbnail from "@/assets/thumbnail.png";
import { useEffect, useRef, useState } from "react";

// Componente auxiliar para gerar poster automaticamente a partir do vídeo
const AutoPosterVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterUrl, setPosterUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let mounted = true;

    const handleLoadedData = () => {
      try {
        const w = video.videoWidth;
        const h = video.videoHeight;
        if (!w || !h) return;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        if (mounted) setPosterUrl(dataUrl);
      } catch {}
    };

    video.preload = "metadata";
    video.addEventListener("loadeddata", handleLoadedData, { once: true });

    return () => {
      mounted = false;
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      muted
      playsInline
      className="w-full h-full object-cover"
      poster={posterUrl ?? thumbnail}
    />
  );
};

type VideoCarouselCompactProps = {
  subtitle?: string;
  sources?: string[];
};

export const VideoCarouselCompact = ({ subtitle = "Demonstração de uma página de pedidos", sources = [] }: VideoCarouselCompactProps) => {
  const items = sources.length > 0 ? sources : ["", ""]; // placeholders

  return (
    <div className="w-full">
      <div className="text-center mb-4 text-sm text-muted-foreground">{subtitle}</div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto w-full max-w-[260px] sm:max-w-[320px]"
      >
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {items.map((src, idx) => (
              <CarouselItem key={idx}>
                <AspectRatio ratio={9 / 16} className="rounded-xl overflow-hidden border border-white/10 bg-black">
                  {src ? (
                    <AutoPosterVideo src={src} />
                  ) : (
                    <div className="w-full h-full grid place-items-center">
                      <img src={thumbnail} alt="Vídeo de demonstração em breve" className="w-full h-full object-cover opacity-60" />
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-white/80">Vídeo em breve</span>
                    </div>
                  )}
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-3 flex items-center justify-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default VideoCarouselCompact;