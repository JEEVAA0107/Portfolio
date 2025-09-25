import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
}

const SEO = ({ 
  title = "Jeevaa M M - Software Engineer | Professional Portfolio",
  description = "Passionate fresher software engineer with expertise in React, JavaScript, Python, and full-stack development. View my projects, skills, and professional experience.",
  keywords = "software engineer, web developer, React developer, JavaScript, Python, portfolio, fresher, full-stack developer, AI, data science",
  author = "Jeevaa M M"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jeevaa M M",
      "jobTitle": "Software Engineer",
      "description": description,
      "url": window.location.origin,
      "sameAs": [
        "https://www.linkedin.com/in/jeevaa-m-m-485a51326",
        "https://github.com/JEEVAA0107"
      ]
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, author]);

  return null;
};

export default SEO;