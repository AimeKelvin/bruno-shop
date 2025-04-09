
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking ID - replace with your own
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual tracking ID

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: { [key: string]: any }
    ) => void;
  }
}

// Initialize Google Analytics
const initGA = () => {
  // Add Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);
  
  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `;
  document.head.appendChild(script2);
};

// Track page views
const trackPageView = (path: string) => {
  if (!window.gtag) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  });
};

// Track events (e.g., add to cart, purchase, etc.)
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// React component to initialize and track page views
const GoogleAnalytics: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    initGA();
  }, []);
  
  useEffect(() => {
    if (window.gtag) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);
  
  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
