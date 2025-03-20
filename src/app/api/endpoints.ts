const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export const SEO_ENDPOINT = (slug: string) =>
  `${baseUrl}/api/v1/seo-meta/getSeoMetaData?slug=${slug}`;
export const SUCCESS_STORIES_ENDPOINT = `${baseUrl}/api/v1/successStories/getAllSuccessStories`;

export const ApiEndpoint = {
  
  PROJECTS: `${baseUrl}/api/v1/projects/getAllProjects`,
  HOME_SLIDER: `${baseUrl}/api/v1/homeSlider/getAllHomeSliders`,
  STACKS: `${baseUrl}/api/v1/stacks/all`,
  SERVICES: `${baseUrl}/api/v1/service/getAllServices`,
  SERVICE_CATEGORY: `${baseUrl}/api/v1/servicesCategory/getAllServiceCategories`,
  HIRE_US_HIRINGTYPE: `${baseUrl}/api/v1/hireUsHiringType/getAllHireUsHiringType`,
  HIRE_US_EXPERTDATA: `${baseUrl}/api/v1/hireUsExpertData/getAllHireUsExpertData`,
  WHY_US: `${baseUrl}/api/v1/whyUs/getAllWhyUs`,
  JOB_TYPE: `${baseUrl}/api/v1/jobType`,
};
