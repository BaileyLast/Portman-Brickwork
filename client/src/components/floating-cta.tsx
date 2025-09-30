import { Mail } from "lucide-react";

export default function FloatingCTA() {
  const handleEmail = () => {
    window.location.href = "mailto:info@portmanbrickwork.co.uk";
  };

  return (
    <button
      onClick={handleEmail}
      className="floating-cta"
      data-testid="floating-email-button"
    >
      <div className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 font-semibold">
        <Mail className="text-lg" />
        <span className="hidden sm:inline">Email Now</span>
      </div>
    </button>
  );
}
