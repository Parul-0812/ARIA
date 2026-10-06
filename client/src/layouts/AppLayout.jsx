import { Outlet, NavLink } from "react-router-dom";
import {
  Home,
  HeartPulse,
  BookOpen,
  Sparkles,
  Activity,
  Library,
  Settings,
  ShieldCheck,
  Menu,
  Bell,
} from "lucide-react";

const navigation = [
  {
    label: "Home",
    path: "/dashboard",
    icon: Home,
  },
  {
    label: "Check-in",
    path: "/check-in",
    icon: HeartPulse,
  },
  {
    label: "Journal",
    path: "/journal",
    icon: BookOpen,
  },
  {
    label: "Insights",
    path: "/insights",
    icon: Sparkles,
  },
  {
    label: "Activities",
    path: "/activities",
    icon: Activity,
  },
  {
    label: "Resources",
    path: "/resources",
    icon: Library,
  },
];

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#FAF9FC] text-[#24212F]">

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-[#E7E4EE] bg-white lg:flex lg:flex-col">

        {/* Logo */}
        <div className="flex h-20 items-center px-7">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#6D5DD3]">
              ARIA
            </h1>

            <p className="text-xs text-[#777282]">
              Everyday wellbeing
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-[#A09BAA]">
            Your space
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#EEEBFA] text-[#6D5DD3]"
                        : "text-[#777282] hover:bg-[#F7F5FA] hover:text-[#24212F]"
                    }`
                  }
                >
                  <Icon size={19} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom navigation */}
        <div className="border-t border-[#E7E4EE] p-4 space-y-1">

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#EEEBFA] text-[#6D5DD3]"
                  : "text-[#777282] hover:bg-[#F7F5FA]"
              }`
            }
          >
            <Settings size={19} strokeWidth={1.8} />
            Settings
          </NavLink>

          <NavLink
  to="/privacy"
  className={({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-[#EEEBFA] text-[#6D5DD3]"
        : "text-[#777282] hover:bg-[#F7F5FA] hover:text-[#24212F]"
    }`
  }
>
  <ShieldCheck size={19} strokeWidth={1.8} />
  Privacy
</NavLink>

          {/* User */}
          <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#F8F7FC] p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEEBFA] text-sm font-semibold text-[#6D5DD3]">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                Alex
              </p>

              <p className="truncate text-xs text-[#777282]">
                Personal account
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="lg:pl-64">

        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[#E7E4EE] bg-[#FAF9FC]/90 px-5 backdrop-blur-md sm:px-8">

          <button
            className="rounded-xl p-2 text-[#777282] hover:bg-white lg:hidden"
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>

          <div className="hidden lg:block">
            <p className="text-sm text-[#777282]">
              Your private wellbeing space
            </p>
          </div>

          <div className="ml-auto flex items-center gap-3">

            <button
              className="rounded-xl p-2.5 text-[#777282] hover:bg-white"
              aria-label="Notifications"
            >
              <Bell size={20} strokeWidth={1.8} />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6D5DD3] text-sm font-semibold text-white">
              A
            </div>

          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AppLayout;