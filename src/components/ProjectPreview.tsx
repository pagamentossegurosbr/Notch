import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ProjectPreview = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-sm md:max-w-md">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center p-2 md:p-4">
          <div className="w-[250px] h-[540px] md:w-[280px] md:h-[600px] bg-zinc-800 rounded-[30px] border-[10px] border-black overflow-hidden shadow-2xl relative">
            <Carousel
              opts={{
                loop: true,
              }}
              className="w-full h-full"
            >
              <CarouselContent>
                {project.previewImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={img}
                      alt={`${project.name} preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
        <DialogFooter className="flex items-center justify-center">
          <Button type="button" variant="outline" className="rounded-full" onClick={() => onClose()}>
            Voltar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
