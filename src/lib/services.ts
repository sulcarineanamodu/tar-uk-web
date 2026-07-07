export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  description: string;
  hero: string;
  whatIs: string;
  signs: string[];
  process: { title: string; description: string }[];
  brands: string[];
  faqItems: { question: string; answer: string }[];
  reviewSnippet: string;
}

const servicesList: ServiceData[] = [
  {
    slug: "washing-machine-repair",
    name: "Washing Machine",
    title: "Washing Machine Repair",
    description: "Expert washing machine repairs — drum issues, leak repairs, control panel fixes and more. Same-day service across London.",
    hero: "Washing Machine Repair Services",
    whatIs: "Washing machines are complex appliances with multiple systems — drum, motor, pump, valve and control board. Our engineers diagnose and repair all common issues including drum problems, leaks, drainage issues, and electrical faults.",
    signs: [
      "Water leaking from the bottom or sides",
      "Drum not spinning or rotating slowly",
      "Clothes not getting clean",
      "Loud noises during wash cycle",
      "Door lock stuck or won't open",
      "Error codes displayed on control panel"
    ],
    process: [
      { title: "Diagnostic", description: "We run the appliance through test cycles to identify the fault" },
      { title: "Quote", description: "We explain the issue and quote any parts needed" },
      { title: "Repair", description: "We fix the problem using quality parts" },
      { title: "Test", description: "We test thoroughly before leaving" }
    ],
    brands: ["Bosch", "Samsung", "LG", "Indesit", "Hotpoint", "Ariston", "Zanussi", "AEG", "Siemens"],
    faqItems: [
      { question: "How long do washing machine repairs take?", answer: "Most repairs are completed same-day. Complex issues may require a return visit with parts." },
      { question: "Is it worth repairing vs replacing?", answer: "Generally, if the repair is under 50% of replacement cost, repair is worthwhile. We'll advise." },
      { question: "Do you repair all drum sizes?", answer: "Yes, we repair all drum sizes from 6kg to 12kg+ commercial machines." },
      { question: "What's the most common washing machine fault?", answer: "Drum bearing failures are common. We replace them with genuine parts." },
      { question: "Do you repair smart/connected washing machines?", answer: "Yes, we repair all models including smart machines with WiFi connectivity." }
    ],
    reviewSnippet: "Our washing machine repair was quick and fixed the leak perfectly. Engineers were professional and explained everything clearly."
  },
  {
    slug: "oven-repair",
    name: "Oven",
    title: "Oven Repair Services",
    description: "Professional oven repairs — heating element replacement, thermostat fixes, door seal repairs and more. Fixed labour pricing.",
    hero: "Oven Repair Services",
    whatIs: "Ovens are essential kitchen appliances with heating elements, thermostats, door seals and control systems. We repair all oven types including conventional, fan-assisted, and dual-function models.",
    signs: [
      "Oven not heating to correct temperature",
      "One part of oven heating more than the other",
      "Door won't close properly",
      "Door glass is broken or fogged",
      "Interior light not working",
      "Uneven cooking or burning"
    ],
    process: [
      { title: "Visual Inspection", description: "We check the heating elements, thermostats and door seals" },
      { title: "Testing", description: "We test the thermostat and heating system" },
      { title: "Repair or Replace", description: "We fix the fault with quality components" },
      { title: "Calibration", description: "We calibrate temperature for accurate cooking" }
    ],
    brands: ["Bosch", "Neff", "Siemens", "Samsung", "AEG", "Electrolux", "Hotpoint", "Indesit", "Zanussi"],
    faqItems: [
      { question: "How much does an oven element replacement cost?", answer: "Element replacement is included in our £78 fixed labour. We charge separately for the element itself." },
      { question: "Can you repair convection ovens?", answer: "Yes, we repair all oven types — conventional, fan-assisted, convection and dual-function." },
      { question: "How long is the guarantee on oven repairs?", answer: "12 months on all labour if we fit parts. Elements are typically guaranteed 2 years." },
      { question: "Is it safe to use an oven with a broken door seal?", answer: "No, a broken seal reduces efficiency and can be unsafe. We recommend repair before use." },
      { question: "Can you replace oven racks?", answer: "Yes, we can replace broken racks with genuine parts for most brands." }
    ],
    reviewSnippet: "Oven thermostats fixed and now cooking is perfect again. Great value for money and very professional service."
  },
  {
    slug: "dishwasher-repair",
    name: "Dishwasher",
    title: "Dishwasher Repair Services",
    description: "Expert dishwasher repairs — drainage issues, heating element fixes, door repairs and more. Premium appliance pricing.",
    hero: "Dishwasher Repair Services",
    whatIs: "Dishwashers have complex systems including pumps, filters, spray arms, heating elements and control boards. We diagnose and repair all types of faults to get your dishwasher working perfectly again.",
    signs: [
      "Water not draining properly",
      "Dishes not getting clean",
      "Leaking water during cycle",
      "Door won't open or close",
      "Control panel buttons not responding",
      "Strange noises or grinding sounds"
    ],
    process: [
      { title: "Check Drain", description: "We clear any blockages in the drain system" },
      { title: "Inspect Filter", description: "We clean and inspect the filter basket" },
      { title: "Test Cycle", description: "We run a test cycle to check heating and spray arms" },
      { title: "Repair & Test", description: "We repair faults and verify with another test cycle" }
    ],
    brands: ["Bosch", "Neff", "Siemens", "Miele", "AEG", "Electrolux", "Indesit", "Hotpoint", "Ariston"],
    faqItems: [
      { question: "Why is my dishwasher leaking?", answer: "Common causes: worn door seal, clogged drain, or damaged pump. We diagnose and repair the specific cause." },
      { question: "How often should I clean the filter?", answer: "Weekly cleaning helps. We can replace filters if damaged — usually £15-30 for the part." },
      { question: "What's the difference between blocked drain and pump failure?", answer: "A blocked drain drains slowly; pump failure means no draining. We diagnose visually." },
      { question: "Can you fix dishwashers that don't heat water?", answer: "Yes, heating element issues are common and easily repaired." },
      { question: "Is it worth repairing a 10-year-old dishwasher?", answer: "Often yes. Our £90 labour may be all you need. We'll advise if repair isn't worthwhile." }
    ],
    reviewSnippet: "Dishwasher was leaking badly. Engineers fixed it in one visit and it works like new. Highly recommend TAR."
  },
  {
    slug: "fridge-freezer-repair",
    name: "Fridge & Freezer",
    title: "Fridge & Freezer Repair Services",
    description: "Professional fridge and freezer repairs — thermostat fixes, compressor issues, door seal repairs and more.",
    hero: "Fridge & Freezer Repair Services",
    whatIs: "Fridges and freezers maintain precise temperatures using compressors, thermostats, and circulation systems. We repair all makes and models to get your appliance cooling again.",
    signs: [
      "Not cooling to correct temperature",
      "Frost buildup in freezer",
      "Water pooling inside",
      "Ice maker not working",
      "Door seal torn or damaged",
      "Compressor running constantly"
    ],
    process: [
      { title: "Temperature Check", description: "We measure internal temperature and thermostat reading" },
      { title: "System Inspection", description: "We inspect the compressor, coils and circulation system" },
      { title: "Component Testing", description: "We test thermostats, relays and other electrical components" },
      { title: "Repair & Verification", description: "We repair and monitor temperature for stability" }
    ],
    brands: ["Samsung", "LG", "Hotpoint", "Indesit", "Bosch", "AEG", "Electrolux", "Ariston", "Beko"],
    faqItems: [
      { question: "What's the most common fridge fault?", answer: "Thermostat failure is very common. We test and replace if needed." },
      { question: "Why is my freezer icing up?", answer: "Usually a blocked drain hole. We clear it and test the thermostat." },
      { question: "How much does a compressor replacement cost?", answer: "Compressors are expensive parts (£150-400+). We'll quote before proceeding." },
      { question: "Can you repair refrigeration systems?", answer: "Yes, we handle refrigeration fluid issues (though recharging requires certification we arrange)." },
      { question: "Is frost in the freezer normal?", answer: "A light layer is normal; heavy buildup indicates a defrost cycle problem we can fix." }
    ],
    reviewSnippet: "Fridge wasn't cooling and we thought we'd need to replace it. Engineers fixed the thermostat and it's perfect now."
  },
  {
    slug: "cooker-repair",
    name: "Cooker",
    title: "Cooker Repair Services",
    description: "Expert cooker repairs — burner fixes, ignition repairs, oven heating issues and more. Same-day service.",
    hero: "Cooker Repair Services",
    whatIs: "Cookers combine hob and oven functionality with heating elements, ignition systems, and controls. We repair electric, gas, and dual-fuel cookers of all makes.",
    signs: [
      "Burners not heating evenly",
      "Ignition not working",
      "Burner flames too high or too low",
      "Oven thermostat inaccurate",
      "Grill not working",
      "Electric ring won't heat"
    ],
    process: [
      { title: "Hob Check", description: "We test each burner and ignition system" },
      { title: "Oven Test", description: "We check oven temperature and grill function" },
      { title: "Component Inspection", description: "We inspect heating elements and thermostats" },
      { title: "Repair & Calibrate", description: "We repair and calibrate all functions" }
    ],
    brands: ["Rangemaster", "Britannia", "Electrolux", "AEG", "Bosch", "Hotpoint", "Indesit", "Neff", "Siemens"],
    faqItems: [
      { question: "Can you repair gas cookers?", answer: "Yes, we repair gas ignition, burners and ovens. Gas work requires certified engineers." },
      { question: "Why is my burner not igniting?", answer: "Usually a spark plug or electrode issue. We test and replace if needed." },
      { question: "What's the difference between a cooker and a range?", answer: "Ranges are typically larger and more heavy-duty. We repair both." },
      { question: "Can you replace cooker tops?", answer: "Yes, we can replace electric or gas hob tops with genuine parts." },
      { question: "Is the oven temperature always accurate?", answer: "Not always. We can calibrate thermostats to ensure accurate temperature." }
    ],
    reviewSnippet: "Cooker burners fixed and working perfectly now. Engineers explained everything clearly and were very professional."
  },
  {
    slug: "tumble-dryer-repair",
    name: "Tumble Dryer",
    title: "Tumble Dryer Repair Services",
    description: "Expert tumble dryer repairs — heating element fixes, drum roller replacement, airflow issues and more.",
    hero: "Tumble Dryer Repair Services",
    whatIs: "Tumble dryers heat and rotate to dry clothes efficiently. We repair all types including vented, condenser, and heat pump models from all major brands.",
    signs: [
      "Clothes not drying properly",
      "Drum not rotating",
      "Overheating or shutting off early",
      "Loud noise during rotation",
      "Lint smell or visible lint",
      "Door latch broken"
    ],
    process: [
      { title: "Airflow Check", description: "We check vents and filters for blockages" },
      { title: "Heating Test", description: "We test the heating element and thermostat" },
      { title: "Drum & Roller Check", description: "We inspect drum rollers and bearings" },
      { title: "Repair & Dry Test", description: "We repair and test with a full drying cycle" }
    ],
    brands: ["Bosch", "Siemens", "AEG", "Electrolux", "Hotpoint", "Indesit", "Samsung", "LG", "Zanussi"],
    faqItems: [
      { question: "Why is my dryer not drying?", answer: "Common causes: blocked vent, failed heating element, or thermostat issue. We diagnose and fix." },
      { question: "How often should I clean the lint filter?", answer: "Every load. A clogged filter reduces efficiency and can overheat the dryer." },
      { question: "What's the difference between vented and condenser dryers?", answer: "Vented dryers vent moist air outside; condenser dryers collect moisture. We repair both types." },
      { question: "Why is my dryer so loud?", answer: "Usually worn drum rollers or bearing. We replace with genuine parts." },
      { question: "Can you repair heat pump dryers?", answer: "Yes, heat pump dryers are more complex but we repair all types." }
    ],
    reviewSnippet: "Dryer was making awful noise. Drum rollers were worn. Fixed same-day and it's back to working quietly."
  },
  {
    slug: "washer-dryer-repair",
    name: "Washer Dryer",
    title: "Washer Dryer Repair Services",
    description: "Expert washer dryer repairs — combination unit faults, heating issues, drum problems and more.",
    hero: "Washer Dryer Repair Services",
    whatIs: "Washer dryers combine washing and drying in one unit, making repairs more complex. We diagnose and repair all washer dryer faults.",
    signs: [
      "Not washing or drying properly",
      "Water leaking",
      "Drum not rotating",
      "Stuck on one cycle",
      "Door won't open",
      "Not heating for dry cycle"
    ],
    process: [
      { title: "Cycle Test", description: "We run a full test cycle to identify the fault" },
      { title: "Component Check", description: "We inspect drum, heater, pump and controls" },
      { title: "Diagnostic Test", description: "We test each function separately" },
      { title: "Repair & Verify", description: "We repair and run another full cycle test" }
    ],
    brands: ["Hotpoint", "Indesit", "Electrolux", "AEG", "Bosch", "Siemens", "LG", "Samsung"],
    faqItems: [
      { question: "Are washer dryers reliable?", answer: "Yes, but they do more work. Regular maintenance helps. We repair all issues." },
      { question: "Why is my washer dryer stuck on dry?", answer: "Usually a thermostat or humidity sensor failure. We test and replace." },
      { question: "Can you repair a washer dryer that's flooding?", answer: "Yes, common causes: pump failure, valve issue, or drain blockage. We diagnose and fix." },
      { question: "What's the difference between a washer dryer and separate machines?", answer: "Integrated units are more compact but repairs are more complex. We handle both." },
      { question: "How long do washer dryers typically last?", answer: "8-10 years typically. Repair is worthwhile if under 50% of replacement cost." }
    ],
    reviewSnippet: "Washer dryer got stuck on dry cycle. Engineers diagnosed a sensor fault and fixed it. Working perfectly now."
  },
  {
    slug: "cooker-hood-repair",
    name: "Cooker Hood",
    title: "Cooker Hood Repair Services",
    description: "Professional cooker hood repairs — filter issues, motor problems, light repairs and more.",
    hero: "Cooker Hood Repair Services",
    whatIs: "Cooker hoods extract cooking fumes and odours. We repair extraction motors, filters, and controls on all hood types.",
    signs: [
      "Fan not working",
      "Reduced suction power",
      "Light not working",
      "Strange noises",
      "Grease filter clogged",
      "Control panel not responding"
    ],
    process: [
      { title: "Filter Check", description: "We inspect and clean or replace filters" },
      { title: "Motor Test", description: "We test the extraction motor" },
      { title: "Control Test", description: "We check speed controls and light" },
      { title: "Repair & Verify", description: "We repair and test extraction power" }
    ],
    brands: ["Bosch", "Neff", "Siemens", "AEG", "Electrolux", "Hotpoint", "Indesit"],
    faqItems: [
      { question: "How often should I replace the cooker hood filter?", answer: "Every 1-2 months depending on cooking frequency. We stock replacement filters." },
      { question: "Why is my extractor hood not powerful?", answer: "Usually a clogged filter or duct. We clean/replace and restore suction." },
      { question: "Can you repair the fan motor?", answer: "Yes, we replace motors when bearings fail or windings burn out." },
      { question: "Is it normal for the hood light to go out?", answer: "No, we can replace bulbs or repair the light circuit." },
      { question: "What's the difference between extraction and recirculation hoods?", answer: "Extraction hoods vent outside; recirculation filters and recirculate. We repair both." }
    ],
    reviewSnippet: "Cooker hood motor failed. New motor installed and it's extracting like new again. Great service."
  },
  {
    slug: "vacuum-cleaner-repair",
    name: "Vacuum Cleaner",
    title: "Vacuum Cleaner Repair Services",
    description: "Professional vacuum cleaner repairs — motor fixes, filter replacement, suction issues and more.",
    hero: "Vacuum Cleaner Repair Services",
    whatIs: "Vacuum cleaners maintain home cleanliness through suction. We repair upright, cylinder, and handheld vacuums from all brands.",
    signs: [
      "Loss of suction power",
      "Motor not starting",
      "Blockage in hose",
      "Brush roll not rotating",
      "Bag or dust chamber full",
      "Filter needs replacement"
    ],
    process: [
      { title: "Filter Check", description: "We inspect and replace filters if needed" },
      { title: "Suction Test", description: "We test suction power and check for blockages" },
      { title: "Motor Test", description: "We test the motor and brush roll" },
      { title: "Repair & Verify", description: "We repair and verify suction is restored" }
    ],
    brands: ["Dyson", "Shark", "Henry", "Numatic", "Samsung", "Bosch", "Bissell", "Vax", "Zanussi"],
    faqItems: [
      { question: "Why has my vacuum lost suction?", answer: "Usually a clogged filter or blockage. We clean filters and clear ducts." },
      { question: "How often should I replace the vacuum filter?", answer: "Every 3-6 months depending on use. We stock replacement filters." },
      { question: "Can you repair bagless vacuum canisters?", answer: "Yes, we replace canisters and repair cyclone systems." },
      { question: "What causes a vacuum motor to fail?", answer: "Blockages causing motor overheating are common. We clear blockages and repair." },
      { question: "Is it worth repairing an old vacuum?", answer: "Often yes. Our £78 repair may be cheaper than replacement (£150+)." }
    ],
    reviewSnippet: "Vacuum had no suction. Turned out to be a clogged filter and blockage. Fixed quickly and works great now."
  },
  {
    slug: "appliance-installation",
    name: "Appliance Installation",
    title: "Appliance Installation Services",
    description: "Professional appliance installation — washing machines, dishwashers, ovens, fridges and more. Safe and secure setup.",
    hero: "Appliance Installation Services",
    whatIs: "New appliances need proper installation for safety and warranty compliance. We install all major kitchen and laundry appliances professionally.",
    signs: [
      "New appliance arrived",
      "Unsure about water/gas connections",
      "Need old appliance removed",
      "Electrical connection needed",
      "Integration with existing units",
      "Want professional setup guarantee"
    ],
    process: [
      { title: "Site Preparation", description: "We prepare the space and remove old appliance" },
      { title: "Connection Setup", description: "We connect water, gas, or electric as needed" },
      { title: "Safety Check", description: "We verify all connections are safe and secure" },
      { title: "Testing & Training", description: "We test all functions and show you how to use it" }
    ],
    brands: ["All major brands", "Bosch", "Siemens", "Samsung", "LG", "Hotpoint", "Indesit", "AEG"],
    faqItems: [
      { question: "Why should I use professional installation?", answer: "Professional installation ensures warranty compliance, safety, and proper function." },
      { question: "Do you remove and dispose of old appliances?", answer: "Yes, we remove old appliances and can arrange disposal or recycling." },
      { question: "How long does installation take?", answer: "Most installations take 1-2 hours depending on complexity." },
      { question: "Are new appliances guaranteed?", answer: "Yes, manufacturer warranty applies. We register appliances with manufacturers." },
      { question: "Can you install appliances in awkward spaces?", answer: "Yes, we handle custom fittings and unusual space configurations." }
    ],
    reviewSnippet: "New dishwasher installed professionally. Everything connected perfectly and we received all the training we needed."
  },
];

export const services: Record<string, ServiceData> = {};
servicesList.forEach(service => {
  services[service.slug] = service;
});

export const getService = (slug: string) => {
  return services[slug] || null;
};
