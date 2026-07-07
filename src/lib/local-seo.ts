export interface LocalSEOData {
  slug: string;
  city: string;
  region: string;
  title: string;
  description: string;
  heroHeadline: string;
  intro: string;
  whyChoose: string[];
  nearbyAreas: string[];
  service?: string;
}

export const localSEOPages: LocalSEOData[] = [
  {
    slug: "appliance-repair-croydon",
    city: "Croydon",
    region: "South London",
    title: "Appliance Repair Croydon | Same-Day Service",
    description: "Premium appliance repairs in Croydon. Same-day service, fixed pricing (£78-£90), 12-month guarantee. Local engineers serving Croydon and surrounding areas.",
    heroHeadline: "Appliance Repair in Croydon — Same-Day Service",
    intro: "TAR is based in Croydon and serves the local community with expert appliance repairs. We're your local repair specialists for washing machines, dishwashers, ovens, fridges and all major appliances.",
    whyChoose: [
      "Local Croydon-based team — we know the area",
      "Same-day appointments available",
      "Fixed labour pricing (£78-£90)",
      "12-month guarantee on repairs",
      "Fully trained and insured engineers",
      "25+ years combined experience"
    ],
    nearbyAreas: ["Addington", "Coulsdon", "Sanderstead", "Warlingham", "Purley", "Selsdon", "Kenley"],
    service: "all"
  },
  {
    slug: "appliance-repair-london",
    city: "London",
    region: "Greater London",
    title: "Appliance Repair London | Premium Service",
    description: "Professional appliance repairs across London. All areas covered — fast response, fixed pricing, expert engineers. Same-day service available.",
    heroHeadline: "Appliance Repair Across London",
    intro: "We repair all major appliances across Greater London. From North London to West London, South London to East London — same-day service and transparent pricing.",
    whyChoose: [
      "Serving all of Greater London",
      "Same-day or next-day availability",
      "Fixed labour pricing throughout London",
      "Premium service from certified engineers",
      "No hidden fees — call-out included",
      "Trusted by thousands of London homeowners"
    ],
    nearbyAreas: ["Central London", "North London", "South London", "East London", "West London", "Southwest London"],
    service: "all"
  },
  {
    slug: "appliance-repair-bromley",
    city: "Bromley",
    region: "Greater London",
    title: "Appliance Repair Bromley | Local Service",
    description: "Expert appliance repairs in Bromley. Local engineers, same-day service available, fixed pricing. All major appliances repaired.",
    heroHeadline: "Appliance Repair in Bromley",
    intro: "Bromley residents trust TAR for reliable appliance repairs. We serve Bromley and the surrounding Greater London area with fast, professional service.",
    whyChoose: [
      "Local knowledge of Bromley area",
      "Same-day appointments often available",
      "Fixed transparent pricing",
      "15+ years repairing Bromley homes",
      "Certified, fully insured engineers",
      "12-month guarantee on all repairs"
    ],
    nearbyAreas: ["Beckenham", "Penge", "Orpington", "Chislehurst", "Hayes", "West Wickham"],
    service: "all"
  },
  {
    slug: "appliance-repair-dartford",
    city: "Dartford",
    region: "Kent/Greater London",
    title: "Appliance Repair Dartford | Same-Day Service",
    description: "Professional appliance repairs in Dartford and surrounding areas. Fixed pricing, expert engineers, same-day availability.",
    heroHeadline: "Appliance Repair in Dartford",
    intro: "TAR serves Dartford and surrounding areas with expert appliance repair services. Local engineers, fast response, transparent pricing.",
    whyChoose: [
      "Dartford-based service",
      "Fast same-day appointments",
      "Fixed labour pricing",
      "Expert diagnosis and repair",
      "No extra charges for return visits",
      "Fully qualified, insured engineers"
    ],
    nearbyAreas: ["Gravesend", "Swanscombe", "Stone", "Crayford", "Welling"],
    service: "all"
  },
  {
    slug: "appliance-repair-surrey",
    city: "Surrey",
    region: "Southeast England",
    title: "Appliance Repair Surrey | Professional Service",
    description: "Appliance repair services across Surrey. Same-day service available, fixed pricing, expert engineers. Serving all of Surrey.",
    heroHeadline: "Appliance Repair Across Surrey",
    intro: "We provide professional appliance repair services throughout Surrey. Serving Surrey residents with reliable, transparent service and fixed pricing.",
    whyChoose: [
      "Coverage across all of Surrey",
      "Same-day or next-day service",
      "Fixed transparent labour pricing",
      "Expert engineers for all appliances",
      "12-month guarantee on parts",
      "Trusted by Surrey homeowners"
    ],
    nearbyAreas: ["Croydon", "Kingston", "Wimbledon", "Epsom", "Guildford", "Woking"],
    service: "all"
  },
  {
    slug: "washing-machine-repair-croydon",
    city: "Croydon",
    region: "South London",
    title: "Washing Machine Repair Croydon | Fast Service",
    description: "Expert washing machine repairs in Croydon. Same-day service, fixed pricing (£78), 12-month guarantee. Local engineers.",
    heroHeadline: "Washing Machine Repair in Croydon",
    intro: "TAR specializes in washing machine repairs for Croydon residents. Local engineers, same-day service available, fixed transparent pricing.",
    whyChoose: [
      "Croydon's trusted washing machine repair specialists",
      "Same-day appointments available",
      "Fixed labour pricing (£78)",
      "Expert diagnosis of all faults",
      "12-month guarantee on repairs",
      "Genuine parts and quality workmanship"
    ],
    nearbyAreas: ["Addington", "Coulsdon", "Sanderstead", "Purley"],
    service: "washing-machine"
  },
  {
    slug: "oven-repair-croydon",
    city: "Croydon",
    region: "South London",
    title: "Oven Repair Croydon | Professional Service",
    description: "Professional oven repairs in Croydon. Heating element replacement, thermostat fixes, door repairs. Same-day service available.",
    heroHeadline: "Oven Repair in Croydon",
    intro: "Croydon's leading oven repair specialists. We fix all oven faults — heating issues, thermostat problems, door repairs and more.",
    whyChoose: [
      "Expert oven repair technicians in Croydon",
      "Same-day service in most cases",
      "Fixed labour pricing (£78)",
      "All oven types repaired",
      "12-month labour guarantee",
      "Honest, transparent service"
    ],
    nearbyAreas: ["Sanderstead", "Coulsdon", "Purley", "Selsdon"],
    service: "oven"
  },
  {
    slug: "dishwasher-repair-croydon",
    city: "Croydon",
    region: "South London",
    title: "Dishwasher Repair Croydon | Expert Service",
    description: "Expert dishwasher repairs in Croydon. Drainage issues, heating problems, door repairs. Fixed pricing (£90), same-day available.",
    heroHeadline: "Dishwasher Repair in Croydon",
    intro: "TAR is Croydon's trusted dishwasher repair specialist. We fix all dishwasher faults quickly and efficiently.",
    whyChoose: [
      "Croydon dishwasher repair experts",
      "Fast diagnosis and repair",
      "Fixed labour pricing (£90)",
      "All brands repaired",
      "Same-day service often available",
      "No hidden fees"
    ],
    nearbyAreas: ["Addington", "Coulsdon", "Kenley", "Warlingham"],
    service: "dishwasher"
  },
  {
    slug: "fridge-freezer-repair-croydon",
    city: "Croydon",
    region: "South London",
    title: "Fridge & Freezer Repair Croydon | Same-Day",
    description: "Professional fridge and freezer repairs in Croydon. Thermostat fixes, compressor issues, door seal repairs. Fixed pricing (£90).",
    heroHeadline: "Fridge & Freezer Repair in Croydon",
    intro: "Keep your food fresh with Croydon's expert fridge and freezer repair service. Same-day appointments, honest pricing, certified engineers.",
    whyChoose: [
      "Local Croydon fridge/freezer specialists",
      "Same-day service in most cases",
      "Fixed labour pricing (£90)",
      "Expert diagnosis of cooling problems",
      "12-month guarantee on parts",
      "Fully qualified engineers"
    ],
    nearbyAreas: ["Coulsdon", "Sanderstead", "Purley", "Selsdon", "Kenley"],
    service: "fridge-freezer"
  }
];

export const getLocalSEOPage = (slug: string) => {
  return localSEOPages.find(page => page.slug === slug);
};
