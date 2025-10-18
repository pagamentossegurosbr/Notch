import { cn } from "@/lib/utils";

type CircleDividerProps = {
  className?: string;
};

export const CircleDivider = ({ className }: CircleDividerProps) => {
  return (
    <div className={cn("py-6 flex items-center justify-center", className)}>
      <div className="h-3 w-3 rounded-full bg-muted-foreground/20 border border-muted-foreground/30 shadow-sm" />
    </div>
  );
};

export default CircleDivider;