import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "918110960489";
  const message = "Hi JoyzaBakes, I found your website and would like to simplify an enquiry.";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <MessageCircle size={32} color="white" />
    </a>
  );
};

export default WhatsAppButton;
