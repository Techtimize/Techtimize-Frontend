"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

/* ── SVG icon helper ─────────────────────────────────── */
const Icon = ({ d }: { d: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

/* ── Navigation config ───────────────────────────────── */
interface NavItem { label: string; href: string; icon: React.ReactNode; }
interface NavGroup { section: string; items: NavItem[]; }

const navGroups: NavGroup[] = [
  {
    section: "Overview",
    items: [
      { label: "Dashboard", href: "/admin/dashboard",
        icon: <Icon d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" /> },
    ],
  },
  {
    section: "Content",
    items: [
      { label: "Blogs", href: "/admin/blogs",
        icon: <Icon d="M4 4h16v16H4zM8 2v4M16 2v4M4 10h16" /> },
      { label: "Blog Types", href: "/admin/blog-types",
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /> },
      { label: "FAQs", href: "/admin/faqs",
        icon: <Icon d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16v-4M12 8h.01" /> },
    ],
  },
  {
    section: "Portfolio",
    items: [
      { label: "Projects", href: "/admin/projects",
        icon: <Icon d="M2 7l10-5 10 5-10 5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
      { label: "Stacks", href: "/admin/stacks",
        icon: <Icon d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
    ],
  },
  {
    section: "Services",
    items: [
      { label: "Services", href: "/admin/services",
        icon: <Icon d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /> },
      { label: "Service Categories", href: "/admin/service-categories",
        icon: <Icon d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" /> },
    ],
  },
  {
    section: "Homepage",
    items: [
      { label: "Home Sliders", href: "/admin/home-sliders",
        icon: <Icon d="M5 12h14M12 5l7 7-7 7" /> },
      { label: "Why Us", href: "/admin/why-us",
        icon: <Icon d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" /> },
    ],
  },
  {
    section: "Testimonials",
    items: [
      { label: "Success Stories", href: "/admin/success-stories",
        icon: <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> },
      { label: "Reviews", href: "/admin/reviews",
        icon: <Icon d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
    ],
  },
  {
    section: "Hiring",
    items: [
      { label: "Hire Us Experts", href: "/admin/hire-us-experts",
        icon: <Icon d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /> },
      { label: "Hiring Types", href: "/admin/hiring-types",
        icon: <Icon d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM18 8v6M21 11h-6" /> },
    ],
  },
  {
    section: "Careers",
    items: [
      { label: "Departments", href: "/admin/departments",
        icon: <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
      { label: "Job Openings", href: "/admin/job-openings",
        icon: <Icon d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0a2 2 0 012 2v7a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" /> },
    ],
  },
  {
    section: "SEO",
    items: [
      { label: "SEO Meta", href: "/admin/seo-meta",
        icon: <Icon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
    ],
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    document.cookie = "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin");
  };

  const navigate = (href: string) => {
    router.push(href);
    setSidebarOpen(false);
  };

  // Determine page title from nav
  const currentNav = navGroups.flatMap((g) => g.items).find((n) => pathname === n.href);
  const pageTitle = currentNav?.label || "Dashboard";

  return (
    <div className="admin-dashboard">
      {/* Mobile overlay */}
      <div className={`admin-sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="logo-section">
          <h2>Techtimize</h2>
          <span>Admin Panel</span>
        </div>

        <nav>
          {navGroups.map((group) => (
            <div key={group.section}>
              <div className="nav-section-label">{group.section}</div>
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${pathname === item.href ? "active" : ""}`}
                  onClick={(e) => { e.preventDefault(); navigate(item.href); }}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item" onClick={handleLogout}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="admin-main ">
        <header className="admin-header " style={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="header-actions ">
            <div className="user-badge">
              <div className="avatar">T</div>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
