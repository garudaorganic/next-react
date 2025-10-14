import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  productName?: string;
  message?: string;
  pageType?: 'milk' | 'other'; // Add page type for dynamic number
  className?: string;
  children?: React.ReactNode;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function WhatsAppButton({
  productName,
  message,
  pageType = 'other',
  className = '',
  children,
  currentPage,
  onNavigate,
}: WhatsAppButtonProps) {
  // Set WhatsApp number based on pageType
  const whatsappNumber =
    pageType === 'milk' ? '919586787871' : '919537787871';

  const defaultMessage = productName
    ? `Hi, I'm interested in purchasing ${productName} from your website.`
    : message || "Hello! I'm interested in your products.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  // Check if the URL is for Organic A2 Cow Milk
  const isOrganicA2CowMilk =
    whatsappUrl ===
    "https://wa.me/919537787871?text=Hi%2C%20I'm%20interested%20in%20purchasing%20Pure%20A2%20Gir%20Cow%20Milk%20from%20your%20website.";

  if (isOrganicA2CowMilk) {
    // Render alternative button
    return (
      <a
        
        className={`inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors ${className} wp-btn`}
      >
        Visit Milk
      </a>
    );
  }

  // Otherwise render normal WhatsApp link
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors ${className} wp-btn`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || 'Order on WhatsApp'}
    </a>
  );
}
