import { Phone } from "lucide-react";

export default function FloatingCTA() {
  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <button
      onClick={handleCall}
      className="floating-cta"
      data-testid="floating-call-button"
    >
      <div className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 font-semibold">
        <Phone className="text-lg" />
        <span className="hidden sm:inline">Call Now</span>
      </div>
    </button>
  );
}
