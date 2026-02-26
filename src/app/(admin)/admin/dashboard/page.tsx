"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../admin.css";
import {
  blogApi,
  projectsApi,
  reviewsApi,
  servicesApi,
  faqApi,
  jobOpeningsApi,
  successStoriesApi,
  departmentsApi,
} from "../lib/api";
import { StatCard } from "../types";

export default function DashboardPage() {
  const [stats, setStats] = useState<StatCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const safe = async (fn: () => Promise<any>): Promise<any[]> => {
        try {
          const res = await fn();
          const data = res?.data ?? res;
          return Array.isArray(data) ? data : [];
        } catch {
          return [];
        }
      };

      const [blogs, projects, reviews, services, faqs, jobs, stories, depts] =
        await Promise.all([
          safe(blogApi.getAll),
          safe(projectsApi.getAll),
          safe(reviewsApi.getAll),
          safe(servicesApi.getAll),
          safe(faqApi.getAll),
          safe(jobOpeningsApi.getAll),
          safe(successStoriesApi.getAll),
          safe(departmentsApi.getAll),
        ]);

      setStats([
        { label: "Blog Posts", value: blogs.length, icon: "📝", bg: "#EFF6FF", color: "#2563EB" },
        { label: "Projects", value: projects.length, icon: "📊", bg: "#F0FDF4", color: "#16A34A" },
        { label: "Reviews", value: reviews.length, icon: "💬", bg: "#FFF7ED", color: "#EA580C" },
        { label: "Services", value: services.length, icon: "🛠️", bg: "#FAF5FF", color: "#9333EA" },
        { label: "FAQs", value: faqs.length, icon: "❓", bg: "#FEF3C7", color: "#D97706" },
        { label: "Job Openings", value: jobs.length, icon: "💼", bg: "#ECFDF5", color: "#059669" },
        { label: "Success Stories", value: stories.length, icon: "⭐", bg: "#FFF1F2", color: "#E11D48" },
        { label: "Departments", value: depts.length, icon: "🏢", bg: "#F0F9FF", color: "#0284C7" },
      ]);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <div className="admin-loading">
          <div className="admin-spinner" />
          Loading dashboard...
        </div>
      ) : (
        <>
          <div className="admin-stats-grid">
            {stats.map((s) => (
              <div className="admin-stat-card" key={s.label}>
                <div className="stat-icon" style={{ background: s.bg, color: s.color }}>
                  {s.icon}
                </div>
                <h3>{s.label}</h3>
                <div className="stat-value">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="admin-welcome-card">
            <h2>Welcome to Techtimize Admin Panel</h2>
            <p>
              Manage all website content from here — blogs, projects, services, reviews, job openings, and more.
              Use the sidebar to navigate between different sections.
            </p>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
