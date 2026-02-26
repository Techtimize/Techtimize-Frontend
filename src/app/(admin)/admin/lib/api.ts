const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.techtimize.co";
const PREFIX = "/api/v1";

async function request<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${PREFIX}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(
      errorBody.message || `Request failed with status ${res.status}`
    );
  }

  return res.json();
}

// ── Blog ────────────────────────────────────────────
export const blogApi = {
  getAll: () => request<any>("/blog"),
  getById: (id: string) => request<any>(`/blog/${id}`),
  create: (data: any) =>
    request<any>("/blog", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/blog/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  delete: (id: string) => request<any>(`/blog/${id}`, { method: "DELETE" }),
};

// ── Blog Type ───────────────────────────────────────
export const blogTypeApi = {
  getAll: () => request<any>("/blog-type"),
  getById: (id: string) => request<any>(`/blog-type/${id}`),
  create: (data: any) =>
    request<any>("/blog-type", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/blog-type/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/blog-type/${id}`, { method: "DELETE" }),
};

// ── Projects ────────────────────────────────────────
export const projectsApi = {
  getAll: () => request<any>("/projects/getAllProjects"),
  getById: (id: string) => request<any>(`/projects/${id}`),
  create: (data: any) =>
    request<any>("/projects/createProject", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/projects/${id}`, { method: "DELETE" }),
  uploadPoster: (id: string, formData: FormData) =>
    fetch(`${API_BASE}${PREFIX}/projects/${id}/posterImage/upload`, {
      method: "PATCH",
      body: formData,
    }).then((r) => r.json()),
  uploadLogo: (id: string, formData: FormData) =>
    fetch(`${API_BASE}${PREFIX}/projects/${id}/logoImage/upload`, {
      method: "PATCH",
      body: formData,
    }).then((r) => r.json()),
  uploadPreview: (id: string, formData: FormData) =>
    fetch(`${API_BASE}${PREFIX}/projects/${id}/previewImage/upload`, {
      method: "PATCH",
      body: formData,
    }).then((r) => r.json()),
};

// ── Stacks ──────────────────────────────────────────
export const stacksApi = {
  getAll: () => request<any>("/stacks/all"),
  getById: (id: string) => request<any>(`/stacks/getById/${id}`),
  create: (data: any) =>
    request<any>("/stacks/create", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/stacks/updateById/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/stacks/delete/${id}`, { method: "DELETE" }),
};

// ── Services ────────────────────────────────────────
export const servicesApi = {
  getAll: () => request<any>("/service/getAllServices"),
  getById: (id: string) => request<any>(`/service/getServiceById/${id}`),
  create: (data: any) =>
    request<any>("/service/createService", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/service/updateServiceById/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/service/deleteServiceById/${id}`, { method: "DELETE" }),
};

// ── Services Category ───────────────────────────────
export const servicesCategoryApi = {
  getAll: () => request<any>("/servicesCtegory/getAllServiceCategories"),
  getById: (id: string) =>
    request<any>(`/servicesCtegory/getServiceCategoryById/${id}`),
  create: (data: any) =>
    request<any>("/servicesCtegory/createServiceCategory", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/servicesCtegory/updateServiceCategoryById/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/servicesCtegory/deleteServiceCategoryById/${id}`, {
      method: "DELETE",
    }),
};

// ── Home Slider ─────────────────────────────────────
export const homeSliderApi = {
  getAll: () => request<any>("/homeSlider/getAllHomeSliders"),
  getById: (id: string) =>
    request<any>(`/homeSlider/getHomeSliderById/${id}`),
  create: (data: any) =>
    request<any>("/homeSlider/createHomeSlider", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/homeSlider/updateHomeSliderById/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/homeSlider/deleteHomeSliderById/${id}`, {
      method: "DELETE",
    }),
};

// ── Success Stories ─────────────────────────────────
export const successStoriesApi = {
  getAll: () => request<any>("/successStories/getAllSuccessStories"),
  getById: (id: string) =>
    request<any>(`/successStories/getSuccessStoryById/${id}`),
  create: (data: any) =>
    request<any>("/successStories/createSuccessStories", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/successStories/updateSuccessStoryById/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/successStories/deleteSuccessStoryById/${id}`, {
      method: "DELETE",
    }),
};

// ── Reviews ─────────────────────────────────────────
export const reviewsApi = {
  getAll: () => request<any>("/reviews"),
  getById: (id: string) => request<any>(`/reviews/${id}`),
  create: (data: any) =>
    request<any>("/reviews", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/reviews/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/reviews/${id}`, { method: "DELETE" }),
};

// ── Hire Us Expert Data ─────────────────────────────
export const hireUsExpertApi = {
  getAll: () => request<any>("/hireUsExpertData/getAllHireUsExpertData"),
  getById: (id: string) =>
    request<any>(`/hireUsExpertData/getHireUsExpertDataById/${id}`),
  create: (data: any) =>
    request<any>("/hireUsExpertData/createHireUsExpertData", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/hireUsExpertData/updateHireUsExpertData/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/hireUsExpertData/deleteHireUsExpertData/${id}`, {
      method: "DELETE",
    }),
};

// ── Hire Us Hiring Type ─────────────────────────────
export const hireUsHiringTypeApi = {
  getAll: () => request<any>("/hireUsHiringType/getAllHireUsHiringType"),
  getById: (id: string) =>
    request<any>(`/hireUsHiringType/getHireUsHiringTypeById/${id}`),
  create: (data: any) =>
    request<any>("/hireUsHiringType/createHireUsHiringType", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/hireUsHiringType/updateHireUsHiringType/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/hireUsHiringType/deleteHireUsHiringType/${id}`, {
      method: "DELETE",
    }),
};

// ── Why Us ──────────────────────────────────────────
export const whyUsApi = {
  getAll: () => request<any>("/whyUs/getAllWhyUs"),
  getById: (id: string) => request<any>(`/whyUs/getWhyUsBy/${id}`),
  create: (data: any) =>
    request<any>("/whyUs/createWhyUs", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/whyUs/updateWhyUsBy/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/whyUs/removeWhyUsById/${id}`, { method: "DELETE" }),
};

// ── FAQ ─────────────────────────────────────────────
export const faqApi = {
  getAll: () => request<any>("/faq"),
  getById: (id: string) => request<any>(`/faq/${id}`),
  create: (data: any) =>
    request<any>("/faq", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/faq/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  delete: (id: string) => request<any>(`/faq/${id}`, { method: "DELETE" }),
};

// ── Departments ─────────────────────────────────────
export const departmentsApi = {
  getAll: () => request<any>("/departments"),
  getById: (id: string) => request<any>(`/departments/${id}`),
  getJobOpenings: (id: string) =>
    request<any>(`/departments/${id}/job-openings`),
  create: (data: any) =>
    request<any>("/departments", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/departments/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/departments/${id}`, { method: "DELETE" }),
};

// ── Job Openings ────────────────────────────────────
export const jobOpeningsApi = {
  getAll: (params?: { isActive?: string; isPositionOpen?: string }) => {
    const qs = new URLSearchParams(params || {}).toString();
    return request<any>(`/job-opening${qs ? `?${qs}` : ""}`);
  },
  getById: (id: string) =>
    request<any>(`/job-opening/getJobOpeningById/${id}`),
  create: (data: any) =>
    request<any>("/job-opening/createJobOpening", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/job-opening/updateJobOpening/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/job-opening/deleteJobOpening/${id}`, { method: "DELETE" }),
};

// ── SEO Meta ────────────────────────────────────────
export const seoMetaApi = {
  getAll: () => request<any>("/seo-meta/getAllSeoMetas"),
  getBySlug: (slug: string) =>
    request<any>(`/seo-meta/getSeoMetaData?slug=${slug}`),
  create: (data: any) =>
    request<any>("/seo-meta/createSeoMeta", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/seo-meta/updateSeoMetaById/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    request<any>(`/seo-meta/deleteSeoMetaById/${id}`, { method: "DELETE" }),
};
