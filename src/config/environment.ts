// Environment Configuration for Production Deployment
export const ENV_CONFIG = {
  // Production Environment
  PRODUCTION: {
    EMAILJS: {
      PUBLIC_KEY: 'pBhzX7eS3wvw0wIDk',
      SERVICE_ID: 'service_portfolio',
      TEMPLATES: {
        CONTACT: 'template_contact',
        NEWSLETTER: 'template_newsletter',
        LEAD_CAPTURE: 'template_lead',
        VISITOR_TRACKING: 'template_visitor'
      }
    },
    RECIPIENT_EMAIL: 'connect@ofemo.uk',
    WHATSAPP_NUMBER: '+447756183484',
    SOCIAL_LINKS: {
      LINKEDIN: 'https://linkedin.com/in/olufemi-olagbaju',
      GITHUB: 'https://github.com/knightappsdev',
      TWITTER: 'https://twitter.com/olufemi_dev',
      INSTAGRAM: 'https://instagram.com/olufemi_designs'
    }
  },
  
  // Development Environment
  DEVELOPMENT: {
    EMAILJS: {
      PUBLIC_KEY: 'pBhzX7eS3wvw0wIDk',
      SERVICE_ID: 'service_portfolio',
      TEMPLATES: {
        CONTACT: 'template_contact',
        NEWSLETTER: 'template_newsletter',
        LEAD_CAPTURE: 'template_lead',
        VISITOR_TRACKING: 'template_visitor'
      }
    },
    RECIPIENT_EMAIL: 'connect@ofemo.uk',
    WHATSAPP_NUMBER: '+447756183484',
    SOCIAL_LINKS: {
      LINKEDIN: '#',
      GITHUB: '#',
      TWITTER: '#',
      INSTAGRAM: '#'
    }
  }
};

// Get current environment configuration
export const getConfig = () => {
  const isDevelopment = import.meta.env.DEV;
  return isDevelopment ? ENV_CONFIG.DEVELOPMENT : ENV_CONFIG.PRODUCTION;
};

// Export current config
export const CONFIG = getConfig();
