import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  productName?: string;
  message?: string;
  pageType?: 'milk' | 'other'; // Add page type for dynamic number
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  productName,
  message,
  pageType = 'other',
  className = '',
  children,
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
