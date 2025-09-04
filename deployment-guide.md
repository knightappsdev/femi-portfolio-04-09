# cPanel Deployment Guide

## Pre-Deployment Checklist

### 1. EmailJS Setup (Required)
Before deploying, you must set up EmailJS:

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://emailjs.com)
   - Create account and verify email

2. **Create Email Service**
   - Add new service (Gmail/Outlook recommended)
   - Service ID: `service_portfolio`
   - Configure with your email provider

3. **Create Email Templates**
   Create these 4 templates in EmailJS dashboard:

   **Template 1: Contact Form (`template_contact`)**
   ```
   Subject: New Contact Form Message: {{subject}}
   
   New message from your portfolio:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Reply to: {{reply_to}}
   ```

   **Template 2: Newsletter (`template_newsletter`)**
   ```
   Subject: New Newsletter Subscription
   
   New newsletter subscription:
   
   Email: {{subscriber_email}}
   Source: {{source}}
   Timestamp: {{timestamp}}
   ```

   **Template 3: Lead Capture (`template_lead`)**
   ```
   Subject: New Lead Captured - Portfolio Website
   
   New lead captured:
   
   Email: {{lead_email}}
   Page: {{page}}
   Referrer: {{referrer}}
   Timestamp: {{timestamp}}
   ```

   **Template 4: Visitor Tracking (`template_visitor`)**
   ```
   Subject: New Visitor Tracked - Portfolio Website
   
   New visitor tracked:
   
   {{visitor_info}}
   
   Timestamp: {{timestamp}}
   ```

4. **Configure Recipients**
   - Set "To Email" in all templates to: `connect@ofemo.uk`
   - Test each template to ensure delivery

### 2. Build for Production

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build for production
npm run build
```

### 3. cPanel Deployment Steps

1. **Access cPanel File Manager**
   - Login to your cPanel
   - Open File Manager
   - Navigate to `public_html` directory

2. **Upload Files**
   - Upload all files from the `dist` folder
   - Ensure `.htaccess` file is uploaded
   - Verify all assets are in the correct directories

3. **Set Permissions**
   - Set folder permissions to 755
   - Set file permissions to 644
   - Ensure `.htaccess` is readable

4. **Domain Configuration**
   - Point your domain to the `public_html` directory
   - Ensure SSL certificate is installed
   - Test the website URL

### 4. Post-Deployment Testing

1. **Test Contact Form**
   - Fill out and submit contact form
   - Check if email arrives at `connect@ofemo.uk`
   - Verify all form fields work correctly

2. **Test WhatsApp Integration**
   - Click WhatsApp button
   - Verify correct phone number: `+447756183484`
   - Test message pre-fill functionality

3. **Test Responsive Design**
   - Check mobile, tablet, and desktop views
   - Verify all animations work smoothly
   - Test navigation and scrolling

4. **Performance Testing**
   - Run Google PageSpeed Insights
   - Check loading times
   - Verify image optimization

### 5. Environment Configuration

The project uses environment-aware configuration:
- **Production**: Uses live EmailJS keys and real contact info
- **Development**: Uses test configuration

Current production settings:
- **Email**: `connect@ofemo.uk`
- **WhatsApp**: `+447756183484`
- **EmailJS Public Key**: `pBhzX7eS3wvw0wIDk`

### 6. Troubleshooting

**Common Issues:**

1. **Contact Form Not Working**
   - Verify EmailJS templates are created
   - Check EmailJS service is active
   - Ensure correct template IDs

2. **404 Errors on Page Refresh**
   - Verify `.htaccess` file is uploaded
   - Check Apache mod_rewrite is enabled

3. **Images Not Loading**
   - Check image paths are correct
   - Verify images are uploaded to correct directories
   - Test fallback image URLs

4. **Slow Loading**
   - Enable GZIP compression in `.htaccess`
   - Optimize images before upload
   - Use CDN for better performance

### 7. Maintenance

**Regular Tasks:**
- Monitor EmailJS usage (200 emails/month free tier)
- Check website performance monthly
- Update dependencies quarterly
- Backup website files regularly

**Analytics Setup:**
- Add Google Analytics tracking code
- Monitor visitor behavior
- Track form submissions and conversions

### 8. Security

**Implemented Security Features:**
- HTTPS enforcement (uncomment in `.htaccess` when SSL ready)
- XSS protection headers
- Content type validation
- Frame options security
- Input sanitization in forms

**Additional Recommendations:**
- Regular security updates
- Strong cPanel password
- Enable two-factor authentication
- Regular malware scans

## Support

For deployment assistance or issues:
- **Email**: connect@ofemo.uk
- **WhatsApp**: +447756183484

The website is now production-ready and optimized for cPanel hosting!
