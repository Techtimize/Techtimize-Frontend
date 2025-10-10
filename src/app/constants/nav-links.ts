const links = [
  {
    id: 0,
    link: "Home",
    path: "/",
  },
  {
    id: 1,
    link: "Hiring Staff",
    path: "/hiring-staff",
  },
  {
    id: 2,
    link: "About",
    path: "/about",
  },
  {
    id: 3,
    link: "Services",
    path: "/services",
    children: [
      { id: "s1", link: "Artificial Intelligence", path: "/services?service=Artificial Intelligence", para: "Transforming data into intelligent solutions with techtimize.", iconurl: "/assets/images/ai-navbar.svg", hovericonurl: "/assets/images/ai-navbar-hover.svg" },
      { id: "s2", link: "Mobile App Development", path: "/services?service=App Development", para: "Transforming data into intelligent solutions with techtimize.", iconurl: "/assets/images/mobile-app-navbar.svg", hovericonurl: ""},
      { id: "s3", link: "Web App Development", path: "/services?service=App Development", para: "Transforming data into intelligent solutions with techtimize.", iconurl: "/assets/images/web-app-navbar.svg", hovericonurl: ""},
      { id: "s4", link: "Cloud Services", path: "/services?service=Cloud Services", para: "Transforming data into intelligent solutions with techtimize.", iconurl: "/assets/images/cloud-services-navbar.svg", hovericonurl: ""},
      { id: "s5", link: "UI UX Design", path: "/services?service=UI UX", para: "Transforming data into intelligent solutions with techtimize.", iconurl: "/assets/images/ui-ux-navbar.svg", hovericonurl: ""},
      { id: "s6", link: "Project Management", path: "/services?service=Management", para: "Transforming data into intelligent solutions with techtimize.", iconurl: "/assets/images/project-management-navbar.svg", hovericonurl: ""},
      { id: "s7", link: "Staff Augmentation", path: "/services?service=Staff Augmentation", para: "Transforming data into intelligent solutions with techtimize.", iconurl: "/assets/images/project-management-navbar.svg", hovericonurl: ""},
    ],
  },
  {
    id: 4,
    link: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    link: "Careers",
    path: "/careers",
  },
];

const otherFooterLinks = [
  {
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];

const footerQuickLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Hiring Staff",
    link: "/hiring-staff",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Faqs",
    link: "/faqs",
  }
];

const footerServices = [
  {
    name: "Artificial Intelligence",
    link: "/artificial-intelligence",
  },
  {
    name: "Mobile App Development",
    link: "/app-development",
  },
  {
    name: "Web App Development",
    link: "/web-development",
  },
  {
    name: "UI UX Design",
    link: "/ui-service",
  },
  {
    name: "Staff Augmentation",
    link: "/staff-augmentation",
  },
  {
    name: "Marketing ",
    link: "/digital-marketing",
  }
];

const LAHORE_LOCATION_MAP_HREF = "https://maps.app.goo.gl/Q6BCqsbJ5SRLcsTRA";

const WYOMING_LOCATION_MAP_HREF = "https://maps.app.goo.gl/A6k1tpX2ha9vk9Lk6";

const PHONE_NUMBER_HREF = "tel:+923281616127";

const EMAIL_ADDRESS_HREF = "mailto:contact@techtimize.co";

export {
  links,
  LAHORE_LOCATION_MAP_HREF,
  WYOMING_LOCATION_MAP_HREF,
  PHONE_NUMBER_HREF,
  EMAIL_ADDRESS_HREF,
  otherFooterLinks,
  footerQuickLinks,
  footerServices,
};
