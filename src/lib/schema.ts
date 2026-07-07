export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tar-uk.co.uk",
  "name": "T A R The Appliance Repairs",
  "legalName": "Manna Utilities and Management Ltd",
  "url": "https://tar-uk.co.uk",
  "telephone": "02036911116",
  "email": "info@theappliancerepairs.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "126 Brierley, New Addington",
    "addressLocality": "Croydon",
    "postalCode": "CR0 9DR",
    "addressCountry": "GB"
  },
  "areaServed": [
    { "@type": "City", "name": "Croydon" },
    { "@type": "City", "name": "London" },
    { "@type": "City", "name": "Bromley" },
    { "@type": "City", "name": "Dartford" },
    { "@type": "City", "name": "Surrey" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "100",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "£78-£90",
  "sameAs": [
    "https://www.google.com/maps/place/TAR+The+Appliance+Repairs",
    "https://www.checkatrade.com"
  ]
});

export const generateServiceSchema = (serviceName: string, serviceUrl: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "url": serviceUrl,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://tar-uk.co.uk"
  },
  "areaServed": {
    "@type": "City",
    "name": "Croydon, London"
  },
  "priceRange": "£78-£90",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "100"
  }
});

export const generateFAQSchema = (faqs: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateLocalServiceSchema = (city: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `T A R The Appliance Repairs in ${city}`,
  "areaServed": {
    "@type": "City",
    "name": city
  },
  "description": description,
  "url": `https://tar-uk.co.uk/areas/${city.toLowerCase().replace(/\s+/g, '-')}`,
  "telephone": "02036911116",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "100"
  },
  "priceRange": "£78-£90"
});
