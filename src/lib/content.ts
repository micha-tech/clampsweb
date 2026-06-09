import {
  BadgeCheck,
  Building2,
  Cable,
  ClipboardCheck,
  Cpu,
  Droplets,
  Factory,
  Flame,
  Gauge,
  HardHat,
  Home,
  Landmark,
  MapPin,
  PackageCheck,
  Route,
  School,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Delivery", href: "/#delivery" },
  { label: "Projects", href: "/#projects" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/#about" },
];

export const trustRibbon = [
  "Water Infrastructure",
  "Fire Protection",
  "Electrical Systems",
  "Automation",
  "Operations & Maintenance",
];

export const metrics = [
  {
    label: "Critical Systems",
    detail: "Water, fire protection, electrical, automation, and mechanical delivery",
    icon: ShieldCheck,
  },
  {
    label: "Infrastructure Delivery",
    detail: "Field-led execution for public, estate, industrial, and institutional sites",
    icon: HardHat,
  },
  {
    label: "Operational Reliability",
    detail: "Commissioning and maintenance thinking built into project delivery",
    icon: Gauge,
  },
  {
    label: "Nigeria Experience",
    detail: "Engineering support across Lagos and infrastructure projects nationwide",
    icon: MapPin,
  },
];

export const capabilities = [
  {
    title: "Water Infrastructure Systems",
    description:
      "Water schemes, treatment facilities, pumping stations, storage, distribution, and infrastructure rehabilitation.",
    icon: Droplets,
  },
  {
    title: "Fire Protection Engineering",
    description:
      "Active fire protection for commercial, industrial, and institutional facilities.",
    icon: ShieldCheck,
  },
  {
    title: "Industrial Mechanical Systems",
    description:
      "Mechanical systems, plant revamps, equipment support, and industrial engineering execution.",
    icon: Factory,
  },
  {
    title: "Pumping & Reticulation Networks",
    description:
      "Intake pumps, floating pontoons, transmission networks, reticulation systems, and distribution assets.",
    icon: Route,
  },
  {
    title: "Electrical Systems",
    description:
      "Power infrastructure, control panels, electrical support systems, and project-based engineering delivery.",
    icon: Cable,
  },
  {
    title: "Industrial Automation",
    description:
      "Monitoring, controls, automation, process optimization, and dependable industrial system integration.",
    icon: Cpu,
  },
  {
    title: "Operations & Maintenance",
    description:
      "Maintenance-led technical support to preserve uptime, improve asset life, and sustain system performance.",
    icon: Wrench,
  },
];

export const services = [
  {
    title: "Water Engineering",
    description:
      "Design, rehabilitation, reticulation, pumping, and water treatment infrastructure.",
    icon: Droplets,
    accent: "Infrastructure systems",
  },
  {
    title: "Fire Protection Systems",
    description:
      "Active fire protection for commercial, industrial, and institutional facilities.",
    icon: Flame,
    accent: "Safety-critical protection",
  },
  {
    title: "Electrical Systems",
    description:
      "Power infrastructure, control panels, and electrical engineering support.",
    icon: Cable,
    accent: "Power and controls",
  },
  {
    title: "Automation Systems",
    description:
      "Industrial automation, monitoring, control systems, and process optimization.",
    icon: Cpu,
    accent: "Industrial intelligence",
  },
];

export const deliveryLifecycle = [
  {
    title: "Site Assessment",
    description: "Evaluate site conditions, constraints, operating risks, and project objectives.",
    icon: ClipboardCheck,
  },
  {
    title: "Engineering Design",
    description: "Develop practical engineering layouts, specifications, and execution strategy.",
    icon: Route,
  },
  {
    title: "Procurement",
    description: "Source suitable equipment, materials, and technical inputs for delivery.",
    icon: PackageCheck,
  },
  {
    title: "Installation",
    description: "Execute site works with disciplined coordination and field supervision.",
    icon: HardHat,
  },
  {
    title: "Testing & Commissioning",
    description: "Validate system performance before handover and operational acceptance.",
    icon: BadgeCheck,
  },
  {
    title: "Operations & Maintenance",
    description: "Support long-term reliability through maintenance and operations planning.",
    icon: Wrench,
  },
];

export const industries = [
  { title: "Water Utilities", icon: Droplets },
  { title: "Manufacturing", icon: Factory },
  { title: "Government Infrastructure", icon: Landmark },
  { title: "Commercial Real Estate", icon: Building2 },
  { title: "Industrial Facilities", icon: Gauge },
  { title: "Residential Estates", icon: Home },
  { title: "Institutional Facilities", icon: School },
];

export const projects = [
  {
    title: "Rehabilitation of Ido Ile Ekiti and Erijiyan Ekiti Water Scheme",
    category: "Water Scheme Rehabilitation",
    location: "Ekiti",
    discipline: "Water Infrastructure",
    summary:
      "Rehabilitation works to restore and strengthen community water infrastructure performance.",
  },
  {
    title:
      "Nigeria Delta Support Programme: Construction of 10 units of water treatment plant",
    category: "Treatment Plant Construction",
    location: "Niger Delta",
    discipline: "Water Treatment",
    summary:
      "Distributed water treatment plant construction supporting reliable access across programme sites.",
  },
  {
    title: "Supply and installation of intake pumps on floating pontoon",
    category: "Pumping Systems",
    location: "Nigeria",
    discipline: "Mechanical / Pumping",
    summary:
      "Pontoon-based intake pumping installation for resilient water abstraction and transfer.",
  },
  {
    title: "Water reticulation system for Shoreline Estate, Banana Island, Lagos",
    category: "Estate Infrastructure",
    location: "Lagos",
    discipline: "Reticulation Networks",
    summary:
      "Premium estate water reticulation system designed for dependable distribution.",
  },
  {
    title: "Construction of active fire protection system for PZ Abuja",
    category: "Fire Protection",
    location: "Abuja",
    discipline: "Life Safety Systems",
    summary:
      "Active fire safety infrastructure for a major commercial and operational facility.",
  },
  {
    title: "Revamp of Premium Mines and Steel, Warri, Delta",
    category: "Industrial Revamp",
    location: "Delta",
    discipline: "Industrial Mechanical",
    summary:
      "Industrial revamp support for steel-sector operations and mechanical system performance.",
  },
  {
    title: "Operation and maintenance contract for Uromi Ugboha Water Scheme",
    category: "Operations & Maintenance",
    location: "Edo",
    discipline: "Water Scheme O&M",
    summary:
      "Long-term operations support focused on dependable water scheme performance.",
  },
];

export const safetyCommitments = [
  {
    title: "Safety First",
    description:
      "Planned around safe execution, hazard awareness, and responsible site conduct.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Assurance",
    description:
      "Engineering works reviewed for specification alignment, installation quality, and performance readiness.",
    icon: BadgeCheck,
  },
  {
    title: "Engineering Excellence",
    description:
      "Decisions prioritize reliability, maintainability, and long-term operational value.",
    icon: HardHat,
  },
  {
    title: "Risk Management",
    description:
      "Project planning considers operational, safety, procurement, and commissioning risks.",
    icon: ClipboardCheck,
  },
];

export const credibilityPlaceholders: string[] = [];

export const quoteSteps = [
  "Project Inquiry Submitted",
  "Engineering Review",
  "Consultation & Clarification",
  "Proposal Development",
  "Project Planning",
];

export const serviceOptions = [
  "Water Engineering",
  "Fire Protection Systems",
  "Electrical Systems",
  "Automation Systems",
  "Operations & Maintenance",
  "General Engineering Consultation",
];

export const projectTypeOptions = [
  "New Installation",
  "Rehabilitation / Revamp",
  "Maintenance",
  "Inspection / Assessment",
  "Emergency Support",
  "Other",
];

export const budgetOptions = [
  "Below \u20A65m",
  "\u20A65m - \u20A620m",
  "\u20A620m - \u20A650m",
  "\u20A650m+",
  "Not sure yet",
];

export const timelineOptions = [
  "Immediate / Emergency",
  "Within 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "6+ months",
  "Not sure yet",
];

export const contactMethods = ["Email", "Phone Call", "WhatsApp"];
