// Premier Heating & Cooling — single source of truth for NAP, services, areas.
// All facts verified against premierheating.ca (scraped 2026-07-31).

export const SITE = {
  name: 'Premier Heating & Cooling',
  legalName: 'Premier Heating & Cooling',
  phone: '(519) 245-5945',
  phoneHref: 'tel:5192455945',
  email: 'info@premierheating.ca',
  address: {
    street: '176 Metcalfe St E',
    city: 'Strathroy',
    region: 'ON',
    postal: 'N7G 1P6',
  },
  parent: {
    name: "Jayden's Mechanical",
    url: 'https://jaydensmechanical.com',
  },
  // Client-approved wording. Use this line verbatim; do not reword it.
  familyLine:
    "Proudly part of Jayden's Mechanical’s Family of Brands.",
};

export const SERVICES = [
  {
    slug: 'air-conditioning',
    name: 'Air Conditioning',
    short: 'Central AC installation, repair and seasonal maintenance sized to your home.',
    image: '/assets/air-conditioner-basic-1.jpg',
    temp: 'cool',
  },
  {
    slug: 'ductless-air-conditioning',
    name: 'Ductless Air Conditioning',
    short: 'Mini-split systems for additions, older homes and rooms your ductwork misses.',
    image: '/assets/ductless-mini-split.webp',
    temp: 'cool',
  },
  {
    slug: 'furnace',
    name: 'Furnace',
    short: 'High-efficiency furnace installs, repairs and tune-ups before the cold hits.',
    image: '/assets/furnace-basic-1.jpg',
    temp: 'heat',
  },
  {
    slug: 'boiler',
    name: 'Boiler',
    short: 'Boiler and hydronic heating service, from radiators to in-floor systems.',
    image: '/assets/boiler-basic.jpg',
    temp: 'heat',
  },
  {
    slug: 'gas-line',
    name: 'Gas Line',
    short: 'Licensed gas line runs for ranges, dryers, BBQs, garage heaters and more.',
    image: '/assets/Gas-Line.jpg',
    temp: 'heat',
  },
  {
    slug: 'water-heater',
    name: 'Water Heater',
    short: 'Tank and tankless water heater replacement, repair and upgrades.',
    image: '/assets/Water-Heater.jpg',
    temp: 'heat',
  },
];

// Towns with their own location page. Add an entry here and it appears in the
// Service Areas nav dropdown and the footer automatically.
export const LOCATIONS = [
  { slug: 'st-thomas', name: 'St. Thomas' },
];

export const AREAS = [
  'Strathroy',
  'London',
  'St. Thomas',
  'Mount Brydges',
  'Komoka',
  'Delaware',
  'Melbourne',
  'Glencoe',
  'Kerwood',
  'Ailsa Craig',
  'Parkhill',
  'Grand Bend',
];

export const TESTIMONIAL = {
  quote:
    'On behalf of Marlo Homes, I have to say that Premier Heating and Cooling is the most reliable and best company that has ever worked for us. We highly recommend them to everyone!',
  author: 'Paula Da Silva',
  org: 'Marlo Homes',
};

export const TRUST = [
  { image: '/assets/lennox-logo-small.png', alt: 'Lennox authorized dealer' },
  { image: '/assets/Better-Business-Bureau-logo-1-450x171.png', alt: 'Better Business Bureau' },
  { image: '/assets/communityvotes-winner-logo.png', alt: 'CommunityVotes winner' },
];
