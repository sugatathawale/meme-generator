"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Building2,
  ChevronDown,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  PlusCircle,
  Settings,
  Users,
  Bell,
  Search,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
      active: pathname === "/dashboard",
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Companies",
      icon: <Building2 className="h-5 w-5" />,
      href: "/dashboard/companies",
      active: pathname === "/dashboard/companies" || pathname?.startsWith("/dashboard/companies/"),
      color: "from-cyan-500 to-blue-600",
    },
    {
      label: "HR Management",
      icon: <Users className="h-5 w-5" />,
      href: "/dashboard/hr",
      active: pathname === "/dashboard/hr" || pathname?.startsWith("/dashboard/hr/"),
      color: "from-amber-500 to-orange-600",
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-5 w-5" />,
      href: "/dashboard/billing",
      active: pathname === "/dashboard/billing",
      color: "from-emerald-500 to-green-600",
    },
    {
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
      color: "from-gray-500 to-gray-600",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-800 bg-black/95 backdrop-blur px-4 sm:px-6">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 border-r border-gray-800 bg-black p-0">
            <nav className="grid gap-2 text-lg font-medium p-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
                onClick={() => setIsSidebarOpen(false)}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center"
                >
                  <span className="text-white font-bold">N</span>
                </motion.div>
                <span className="font-bold text-white">NexusCRM</span>
              </Link>
              <div className="my-4 h-px bg-gray-800" />
              {routes.map((route, index) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white",
                    route.active ? `bg-gradient-to-r ${route.color} text-white` : "hover:bg-gray-900",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {route.icon}
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center"
            >
              <span className="text-white font-bold">N</span>
            </motion.div>
            <span className="hidden font-bold text-white md:inline-block">NexusCRM</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-gray-900 border-gray-800 pl-9 text-white focus:border-purple-500 focus:ring-purple-500/20 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </form>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    {notifications}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px] border-gray-800 bg-gray-900 text-white">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-800" />
              <div className="max-h-[300px] overflow-auto">
                {[
                  {
                    title: "New company added",
                    description: "Quantum Solutions was added to your CRM",
                    time: "2 hours ago",
                  },
                  {
                    title: "HR module updated",
                    description: "The HR module for Acme Corp has been updated",
                    time: "5 hours ago",
                  },
                  {
                    title: "New users added",
                    description: "25 new users were added to GlobalTech Industries",
                    time: "Yesterday",
                  },
                ].map((notification, i) => (
                  <DropdownMenuItem key={i} className="flex flex-col items-start p-3 cursor-pointer hover:bg-gray-800">
                    <div className="font-medium">{notification.title}</div>
                    <div className="text-sm text-gray-400">{notification.description}</div>
                    <div className="mt-1 text-xs text-gray-500">{notification.time}</div>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800 justify-center text-purple-400">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 gap-1 border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-xs font-medium text-white">SA</span>
                </div>
                <span className="hidden sm:inline-block">SuperAdmin</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-gray-800 bg-gray-900 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">Profile</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">Settings</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">Support</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">
                <LogOut className="mr-2 h-4 w-4" /> Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r border-gray-800 bg-black md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid gap-1 px-2">
                {routes.map((route, index) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white",
                      route.active ? `bg-gradient-to-r ${route.color} text-white` : "hover:bg-gray-900",
                    )}
                  >
                    {route.icon}
                    {route.label}
                    {route.label === "Companies" && (
                      <Badge className="ml-auto bg-purple-600 hover:bg-purple-700">12</Badge>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-4">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Company
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex flex-1 flex-col bg-gradient-to-b from-gray-900 to-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
