import emailjs from 'emailjs-com';
import { CONFIG } from '../config/environment';

// Initialize EmailJS with production config
emailjs.init(CONFIG.EMAILJS.PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterData {
  email: string;
  source: string;
  timestamp: string;
}

export interface LeadCaptureData {
  email: string;
  page: string;
  referrer: string;
  timestamp: string;
}

export interface VisitorTrackingData {
  timestamp: string;
  page: string;
  referrer: string;
  userAgent: string;
  screenResolution: string;
  timeZone: string;
  language: string;
}

// Send contact form email to connect@ofemo.uk
export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: any }> => {
  try {
    const templateParams = {
      to_email: CONFIG.RECIPIENT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
      to_name: 'Olufemi Olagbaju'
    };

    const result = await emailjs.send(
      CONFIG.EMAILJS.SERVICE_ID,
      CONFIG.EMAILJS.TEMPLATES.CONTACT,
      templateParams,
      CONFIG.EMAILJS.PUBLIC_KEY
    );

    console.log('Contact email sent successfully to connect@ofemo.uk:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error };
  }
};

// Send newsletter subscription to connect@ofemo.uk
export const sendNewsletterEmail = async (data: NewsletterData): Promise<{ success: boolean; error?: any }> => {
  try {
    const templateParams = {
      to_email: CONFIG.RECIPIENT_EMAIL,
      subscriber_email: data.email,
      source: data.source,
      timestamp: data.timestamp,
      subject: 'New Newsletter Subscription - Portfolio'
    };

    const result = await emailjs.send(
      CONFIG.EMAILJS.SERVICE_ID,
      CONFIG.EMAILJS.TEMPLATES.NEWSLETTER,
      templateParams,
      CONFIG.EMAILJS.PUBLIC_KEY
    );

    console.log('Newsletter email sent successfully to connect@ofemo.uk:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    return { success: false, error };
  }
};

// Send lead capture notification to connect@ofemo.uk
export const sendLeadCaptureEmail = async (data: LeadCaptureData): Promise<{ success: boolean; error?: any }> => {
  try {
    const templateParams = {
      to_email: CONFIG.RECIPIENT_EMAIL,
      lead_email: data.email,
      page: data.page,
      referrer: data.referrer,
      timestamp: data.timestamp,
      subject: 'New Lead Captured - Portfolio Website'
    };

    const result = await emailjs.send(
      CONFIG.EMAILJS.SERVICE_ID,
      CONFIG.EMAILJS.TEMPLATES.LEAD_CAPTURE,
      templateParams,
      CONFIG.EMAILJS.PUBLIC_KEY
    );

    console.log('Lead capture email sent successfully to connect@ofemo.uk:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending lead capture email:', error);
    return { success: false, error };
  }
};

// Send visitor tracking notification to connect@ofemo.uk
export const sendVisitorTrackingEmail = async (data: VisitorTrackingData): Promise<{ success: boolean; error?: any }> => {
  try {
    const visitorInfo = `
      Page: ${data.page}
      Referrer: ${data.referrer}
      User Agent: ${data.userAgent}
      Screen Resolution: ${data.screenResolution}
      Time Zone: ${data.timeZone}
      Language: ${data.language}
    `;

    const templateParams = {
      to_email: CONFIG.RECIPIENT_EMAIL,
      visitor_info: visitorInfo,
      page: data.page,
      timestamp: data.timestamp,
      subject: 'New Visitor Tracked - Portfolio Website'
    };

    const result = await emailjs.send(
      CONFIG.EMAILJS.SERVICE_ID,
      CONFIG.EMAILJS.TEMPLATES.VISITOR_TRACKING,
      templateParams,
      CONFIG.EMAILJS.PUBLIC_KEY
    );

    console.log('Visitor tracking email sent successfully to connect@ofemo.uk:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending visitor tracking email:', error);
    return { success: false, error };
  }
};
