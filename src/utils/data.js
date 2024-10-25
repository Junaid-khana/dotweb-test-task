import {
  City,
  ClipBoard,
  Compass,
  Ecology,
  Elevator,
  Galf,
  WhiteStar,
} from "../components/common/icons";

export const sideBarButtonsData = [
  {
    id: 1,
    icon: <City />,
    title: "Immobilienlexikon",
    tagline: "Immobilienwissen für alle Fälle.",
    buttonTitle: [{ title: "KI", link: "#" }],
  },
  {
    id: 2,
    icon: <Elevator />,
    title: "Preisschätzung",
    tagline: "Den Wert Ihres Hauses schätzen lassen.",
    buttonTitle: [{ title: "Link", link: "#" }],
  },
  {
    id: 3,
    icon: <ClipBoard />,
    title: "Checklisten",
    tagline: "Praktische Checklisten für jeden Schritt.",
    buttonTitle: [
      { title: "PDF", link: "#" },
      { title: "XML", link: "#" },
    ],
    isDropdown: true,
  },
  {
    id: 4,
    icon: <Ecology />,
    title: "Ratgeber",
    tagline: "Immobilien-Expertenrat für Eigentümer.",
    buttonTitle: [
      { title: "PDF", link: "#" },
      { title: "XML", link: "#" },
    ],
    isDropdown: true,
  },
  {
    id: 5,
    icon: <Compass />,
    title: "Mandatsnavigator",
    tagline: "Verständlich zum Verkaufsabschluss.",
    buttonTitle: [{ title: "KL", link: "#" }],
  },
  {
    id: 6,
    icon: <Galf />,
    title: "Wohntraumfinder",
    tagline: "Zum Traumheim mit KI-Unterstützung.",
    buttonTitle: [{ title: "KL", link: "#" }],
  },
];

export const ratingStarsIcons = [
  { svg: <WhiteStar /> },
  { svg: <WhiteStar /> },
  { svg: <WhiteStar /> },
  { svg: <WhiteStar /> },
  { svg: <WhiteStar /> },
];
