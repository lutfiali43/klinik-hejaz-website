import { branches, SITE } from '@/data/siteData'
import type { Branch, Treatment } from '@/data/siteData'

export function BranchJsonLd({ branch }: { branch: Branch }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `https://kliniknurani.com/cawangan/${branch.slug}`,
    name: branch.name,
    description: branch.metaDescription,
    url: `https://kliniknurani.com/cawangan/${branch.slug}`,
    telephone: branch.phoneRaw,
    image: 'https://kliniknurani.com/klinik-nurani-logo.png',
    hasMap: branch.googleMapsUrl,
    employee: {
      '@type': 'Physician',
      name: branch.doctor,
    },
    areaServed: branch.areasServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.address,
      addressLocality: branch.locality,
      postalCode: branch.postcode,
      addressRegion: 'Selangor',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: branch.geo.latitude,
      longitude: branch.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    medicalSpecialty: 'PrimaryCare',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function MedicalClinicJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': branches.map((branch) => ({
      '@type': 'MedicalClinic',
      '@id': `https://kliniknurani.com/cawangan/${branch.slug}`,
      name: branch.name,
      description: SITE.description,
      url: `https://kliniknurani.com/cawangan/${branch.slug}`,
      telephone: branch.phoneRaw,
      image: 'https://kliniknurani.com/klinik-nurani-logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: branch.address,
        addressLocality: branch.shortName,
        addressRegion: 'Selangor',
        addressCountry: 'MY',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: branch.geo.latitude,
        longitude: branch.geo.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      medicalSpecialty: 'PrimaryCare',
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/klinik-nurani-logo.png`,
    description: SITE.description,
    email: SITE.email,
    slogan: SITE.tagline,
    medicalSpecialty: 'PrimaryCare',
    areaServed: { '@type': 'State', name: 'Selangor' },
    location: branches.map((branch) => ({
      '@type': 'MedicalClinic',
      '@id': `${SITE.url}/cawangan/${branch.slug}`,
      name: branch.name,
      telephone: branch.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        streetAddress: branch.address,
        addressLocality: branch.locality,
        postalCode: branch.postcode,
        addressRegion: 'Selangor',
        addressCountry: 'MY',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'ms-MY',
    publisher: { '@id': `${SITE.url}/#organization` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function TreatmentJsonLd({ treatment }: { treatment: Treatment }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${SITE.url}/rawatan/${treatment.slug}`,
    name: treatment.title,
    url: `${SITE.url}/rawatan/${treatment.slug}`,
    description: treatment.longDescription,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    howPerformed: treatment.benefits.join('. '),
    provider: { '@id': `${SITE.url}/#organization` },
    signOrSymptom: treatment.symptoms.map((symptom) => ({
      '@type': 'MedicalSignOrSymptom',
      name: symptom,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
