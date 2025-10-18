import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import previewVideo from "@/assets/preview-video-restaurante.mp4";
import thumbnail from "@/assets/thumbnail.png";

type OrderDemoVideoProps = {
  src?: string;
  subtitle?: string;
};

export const OrderDemoVideo = ({ src = previewVideo, subtitle = "Demonstração de uma página de pedidos" }: OrderDemoVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playTimeoutRef = useRef<number | null>(null);
  const [autoPlayScheduled, setAutoPlayScheduled] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | undefined>(undefined);

  // Geração automática do poster a partir do próprio vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      try {
        // Busca um frame representativo (~1s ou 1/10 da duração)
        const targetTime = Math.min(1, (video.duration || 1) / 10);
        // Pausa para evitar tocar durante a captura
        video.pause();
        video.currentTime = targetTime;
      } catch (e) {
        // Silencia erros de seek em alguns navegadores
      }
    };

    const handleSeeked = () => {
      try {
        const canvas = document.createElement("canvas");
        const w = video.videoWidth;
        const h = video.videoHeight;
        if (!w || !h) return;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        setPosterUrl(dataUrl);
      } catch (e) {
        // Caso não seja possível capturar, mantemos o fallback
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [src]);

  useEffect(() => {
    const target = containerRef.current;
    const video = videoRef.current;
    if (!target || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!video) return;

        if (entry.isIntersecting) {
          // Agenda o autoplay após 2s se ainda não estiver tocando
          if (!isPlaying && !autoPlayScheduled) {
            playTimeoutRef.current = window.setTimeout(async () => {
              try {
                await video.play();
                setIsPlaying(true);
              } catch (err) {
                // Ignora falhas de reprodução (políticas do navegador)
              }
            }, 2000);
            setAutoPlayScheduled(true);
          }
        } else {
          // Pausa automaticamente ao sair de viewport
          if (playTimeoutRef.current) {
            clearTimeout(playTimeoutRef.current);
            playTimeoutRef.current = null;
            setAutoPlayScheduled(false);
          }
          if (!video.paused) {
            video.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }
    };
  }, [isPlaying, autoPlayScheduled]);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
      setAutoPlayScheduled(false);
    }
    try {
      await video.play();
      setIsPlaying(true);
    } catch (err) {
      // Ignora erro
    }
  };

  return (
    <div className="w-full" ref={containerRef}>
      <div className="text-center mb-4 text-sm text-muted-foreground">{subtitle}</div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto w-full max-w-[260px] sm:max-w-[320px]"
      >
        <div className="relative">
          <AspectRatio ratio={9 / 16} className="rounded-xl overflow-hidden border border-white/10 bg-black">
            <video
              ref={videoRef}
              src={src}
              muted
              playsInline
              preload="metadata"
              poster={posterUrl || thumbnail}
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {/* Sombra preta sutil (sempre ativa) */}
            <div className={`pointer-events-none absolute inset-0 ${isPlaying ? "bg-black/20" : "bg-black/35"}`} />

            {/* Botão de Play quando não está tocando */}
            {!isPlaying && (
              <div className="absolute inset-0 grid place-items-center">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white backdrop-blur-sm ring-1 ring-white/30 px-4 py-2 hover:bg-white/30 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span className="text-xs">Reproduzir</span>
                </button>
              </div>
            )}
          </AspectRatio>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderDemoVideo;