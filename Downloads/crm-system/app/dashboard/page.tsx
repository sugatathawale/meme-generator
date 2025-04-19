"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  CircleUser,
  DollarSign,
  Plus,
  Users,
  TrendingUp,
  Activity,
  BarChart3,
  LineChart,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart as RechartsLineChart, XAxis, YAxis } from "recharts"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 18000 },
    { month: "Apr", revenue: 22000 },
    { month: "May", revenue: 19000 },
    { month: "Jun", revenue: 25000 },
    { month: "Jul", revenue: 32000 },
    { month: "Aug", revenue: 38000 },
    { month: "Sep", revenue: 42000 },
    { month: "Oct", revenue: 45000 },
    { month: "Nov", revenue: 48000 },
    { month: "Dec", revenue: 51000 },
  ]

  const companyGrowthData = [
    { month: "Jan", companies: 5 },
    { month: "Feb", companies: 6 },
    { month: "Mar", companies: 6 },
    { month: "Apr", companies: 7 },
    { month: "May", companies: 8 },
    { month: "Jun", companies: 8 },
    { month: "Jul", companies: 9 },
    { month: "Aug", companies: 10 },
    { month: "Sep", companies: 10 },
    { month: "Oct", companies: 11 },
    { month: "Nov", companies: 12 },
    { month: "Dec", companies: 12 },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-pink-400">
            SuperAdmin Dashboard
          </h2>
          <p className="text-gray-400">Manage your companies, users, and CRM settings</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-600/10">
            <Plus className="mr-2 h-4 w-4" /> Add Company
          </Button>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={item}>
          <Card className="border-gray-800 bg-gray-900/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
              <CardTitle className="text-sm font-medium text-gray-200">Total Companies</CardTitle>
              <div className="h-8 w-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                <Building2 className="h-4 w-4 text-purple-400" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="flex items-center text-xs text-green-400">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2 from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-gray-800 bg-gray-900/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
              <CardTitle className="text-sm font-medium text-gray-200">Active Users</CardTitle>
              <div className="h-8 w-8 rounded-full bg-blue-900/50 flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-400" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-white">1,284</div>
              <div className="flex items-center text-xs text-green-400">
                <TrendingUp className="mr-1 h-3 w-3" />
                +10% from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-gray-800 bg-gray-900/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
              <CardTitle className="text-sm font-medium text-gray-200">Monthly Revenue</CardTitle>
              <div className="h-8 w-8 rounded-full bg-green-900/50 flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-green-400" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-white">$45,231</div>
              <div className="flex items-center text-xs text-green-400">
                <TrendingUp className="mr-1 h-3 w-3" />
                +20.1% from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-gray-800 bg-gray-900/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-transparent"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
              <CardTitle className="text-sm font-medium text-gray-200">Active Subscriptions</CardTitle>
              <div className="h-8 w-8 rounded-full bg-amber-900/50 flex items-center justify-center">
                <Activity className="h-4 w-4 text-amber-400" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="flex items-center text-xs text-green-400">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2 from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-gray-800 bg-gray-900/50">
          <CardHeader>
            <CardTitle className="text-white">Recent Companies</CardTitle>
            <CardDescription className="text-gray-400">
              Recently added or updated companies in your system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Acme Corporation",
                  industry: "Technology",
                  employees: 250,
                  modules: ["HR", "Sales", "Support"],
                  status: "Active",
                  color: "from-purple-600 to-pink-600",
                },
                {
                  name: "GlobalTech Industries",
                  industry: "Manufacturing",
                  employees: 1200,
                  modules: ["HR", "Inventory", "Finance"],
                  status: "Active",
                  color: "from-cyan-600 to-blue-600",
                },
                {
                  name: "Skyview Enterprises",
                  industry: "Healthcare",
                  employees: 500,
                  modules: ["HR", "Patient Management"],
                  status: "Setup in Progress",
                  color: "from-amber-500 to-orange-600",
                },
                {
                  name: "Quantum Solutions",
                  industry: "Consulting",
                  employees: 75,
                  modules: ["HR", "Project Management"],
                  status: "Active",
                  color: "from-emerald-500 to-green-600",
                },
              ].map((company, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center text-white font-bold`}
                    >
                      {company.name.substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium text-white">{company.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{company.industry}</span>
                        <span>•</span>
                        <span>{company.employees} Employees</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden md:block">
                      <div className="flex flex-wrap gap-1">
                        {company.modules.map((module, j) => (
                          <span
                            key={j}
                            className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      className={cn(
                        "ml-2 rounded-full px-2 py-1 text-xs",
                        company.status === "Active"
                          ? "bg-green-900/30 text-green-400"
                          : "bg-amber-900/30 text-amber-400",
                      )}
                    >
                      {company.status}
                    </span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-gray-800 text-purple-400 hover:text-purple-300 hover:bg-gray-800 hover:border-purple-500/50"
            >
              <Link href="/dashboard/companies" className="flex items-center justify-center w-full">
                View All Companies
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3 border-gray-800 bg-gray-900/50">
          <CardHeader>
            <CardTitle className="text-white">Recent Activities</CardTitle>
            <CardDescription className="text-gray-400">Latest actions performed in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "John Smith",
                  action: "added a new company",
                  target: "Quantum Solutions",
                  time: "2 hours ago",
                },
                {
                  user: "Sarah Johnson",
                  action: "updated HR module for",
                  target: "Acme Corporation",
                  time: "5 hours ago",
                },
                {
                  user: "Michael Brown",
                  action: "added 25 new users to",
                  target: "GlobalTech Industries",
                  time: "Yesterday",
                },
                {
                  user: "Emily Davis",
                  action: "modified billing plan for",
                  target: "Skyview Enterprises",
                  time: "Yesterday",
                },
                {
                  user: "Robert Wilson",
                  action: "enabled Sales module for",
                  target: "Acme Corporation",
                  time: "2 days ago",
                },
              ].map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-3 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="rounded-full bg-purple-900/50 p-2">
                    <CircleUser className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-300">
                      <span className="font-semibold text-white">{activity.user}</span> {activity.action}{" "}
                      <span className="font-semibold text-white">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-gray-800 text-purple-400 hover:text-purple-300 hover:bg-gray-800 hover:border-purple-500/50"
            >
              View All Activities
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-gray-800 bg-gray-900/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white">Monthly Revenue</CardTitle>
              <CardDescription className="text-gray-400">Revenue growth over the past year</CardDescription>
            </div>
            <BarChart3 className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {mounted && (
              <ChartContainer
                config={{
                  revenue: {
                    label: "Revenue",
                    color: "hsl(280 100% 70%)",
                  },
                }}
                className="aspect-[4/3]"
              >
                <BarChart data={revenueData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" radius={[4, 4, 0, 0]} className="fill-purple-500" />
                </BarChart>
              </ChartContainer>
            )}
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-gray-900/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white">Company Growth</CardTitle>
              <CardDescription className="text-gray-400">New companies added over time</CardDescription>
            </div>
            <LineChart className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {mounted && (
              <ChartContainer
                config={{
                  companies: {
                    label: "Companies",
                    color: "hsl(200 100% 70%)",
                  },
                }}
                className="aspect-[4/3]"
              >
                <RechartsLineChart data={companyGrowthData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="companies"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                    className="stroke-blue-500"
                  />
                </RechartsLineChart>
              </ChartContainer>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-gray-900 border border-gray-800">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white">
            Reports
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
          >
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-white">Performance Overview</CardTitle>
              <CardDescription className="text-gray-400">System performance and key metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Overview content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-white">Analytics Dashboard</CardTitle>
              <CardDescription className="text-gray-400">Detailed analytics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Analytics content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-white">Generated Reports</CardTitle>
              <CardDescription className="text-gray-400">Access and download system reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Reports content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-white">System Notifications</CardTitle>
              <CardDescription className="text-gray-400">Important alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Notifications content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
