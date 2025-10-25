import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const FloatingHireButton = () => {
  const handleHireMe = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      variant="floating"
      size="lg"
      onClick={handleHireMe}
      className="animate-bounce hover:animate-none"
      title="Hire Me"
    >
      <Briefcase className="w-6 h-6" />
    </Button>
  );
};

export default FloatingHireButton;