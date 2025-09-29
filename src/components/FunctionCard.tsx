import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface FunctionCardProps {
  title: string;
  description: string;
  prompt: string;
  gradient: "gradient-1" | "gradient-2" | "gradient-3";
  tags?: string[];
}

const FunctionCard = ({ title, description, prompt, gradient, tags = [] }: FunctionCardProps) => {
  const handleClick = () => {
    const encodedPrompt = encodeURIComponent(prompt);
    window.open(`https://llm-platform.gosi.ins/?q=${encodedPrompt}`, '_blank');
  };

  const gradientClasses = {
    "gradient-1": "bg-[image:var(--gradient-card-1)]",
    "gradient-2": "bg-[image:var(--gradient-card-2)]",
    "gradient-3": "bg-[image:var(--gradient-card-3)]",
  };

  return (
    <Card 
      onClick={handleClick}
      className="group overflow-hidden cursor-pointer border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`h-48 ${gradientClasses[gradient]} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
        <h3 className="text-2xl font-bold text-white text-center px-6 relative z-10">
          {title}
        </h3>
      </div>
      
      <div className="p-6 space-y-4">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors pt-2">
          <span className="text-sm">Try this prompt</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Card>
  );
};

export default FunctionCard;