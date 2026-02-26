export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "India",
  "Pakistan",
  "UAE",
  "Saudi Arabia",
  "Other",
] as const;

export const WORK_MODES = ["Remote", "On-site", "Hybrid"] as const;

export const JOB_TYPES = [
  "Full-time",
  "Part-time",
  "Internship",
  "Contract",
  "Freelance",
] as const;

export const RATING_OPTIONS = [1, 2, 3, 4, 5] as const;

export const HOME_SLIDER_DEFAULTS: Record<string, any> = {
  mainHeading: "",
  mainHeadingColor: "#000000",
  category: "",
  about: "",
  statsNumber1: 0,
  statsSign1: "+",
  statsTitle1: "",
  statsNumber2: 0,
  statsSign2: "+",
  statsTitle2: "",
  statsNumber3: 0,
  statsSign3: "+",
  statsTitle3: "",
  imageUrl1: "",
  imageUrl2: "",
  imageUrl3: "",
  isActive: true,
};
