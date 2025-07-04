// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'AW-17298183701';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (section: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `whatsapp_${section}`,
  });
};

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formType,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: buttonName,
  });
}; 