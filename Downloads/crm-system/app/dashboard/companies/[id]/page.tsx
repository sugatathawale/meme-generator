"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Building2,
  ChevronRight,
  Edit,
  Grid3X3,
  LayoutDashboard,
  MoreHorizontal,
  Settings,
  Users,
  Globe,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  XCircle,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CompanyDetailsPage() {
  const params = useParams()
  const companyId = params.id
  const [activeTab, setActiveTab] = useState("overview")

  // In a real app, you would fetch this data based on the ID
  const company = {
    id: companyId,
    name: "Acme Corporation",
    industry: "Technology",
    employees: 250,
    location: "New York, USA",
    website: "https://acmecorp.example.com",
    phone: "+1 (555) 123-4567",
    email: "info@acmecorp.example.com",
    description:
      "Acme Corporation is a leading technology company specializing in innovative software solutions for businesses of all sizes. With a focus on user experience and cutting-edge technology, Acme has established itself as a trusted partner for digital transformation initiatives.",
    founded: "2005",
    modules: ["HR", "Sales", "Support"],
    status: "Active",
    color: "from-purple-600 to-pink-600",
    departments: [
      { name: "Human Resources", employees: 15, manager: "Sarah Johnson", status: "Active" },
      { name: "Sales", employees: 45, manager: "Michael Brown", status: "Active" },
      { name: "Engineering", employees: 120, manager: "David Wilson", status: "Active" },
      { name: "Customer Support", employees: 35, manager: "Emily Davis", status: "Active" },
      { name: "Marketing", employees: 25, manager: "Jessica Martinez", status: "Active" },
      { name: "Finance", employees: 10, manager: "Robert Taylor", status: "Active" },
    ],
    activeModules: [
      {
        name: "HR Management",
        description: "Employee records, onboarding, performance reviews",
        users: 15,
        status: "Active",
        features: ["Employee Profiles", "Time Tracking", "Performance Reviews", "Onboarding"],
        color: "from-purple-600 to-pink-600",
      },
      {
        name: "Sales CRM",
        description: "Lead tracking, opportunity management, forecasting",
        users: 45,
        status: "Active",
        features: ["Lead Management", "Opportunity Tracking", "Sales Forecasting", "Quote Generation"],
        color: "from-cyan-600 to-blue-600",
      },
      {
        name: "Support Desk",
        description: "Ticket management, knowledge base, customer portal",
        users: 35,
        status: "Active",
        features: ["Ticket Management", "Knowledge Base", "Customer Portal", "SLA Tracking"],
        color: "from-amber-500 to-orange-600",
      },
    ],
    availableModules: [
      {
        name: "Finance",
        description: "Invoicing, expense tracking, financial reporting",
        features: ["Invoicing", "Expense Tracking", "Financial Reports", "Budget Planning"],
        status: "Not Active",
        color: "from-emerald-500 to-green-600",
      },
      {
        name: "Project Management",
        description: "Task tracking, project planning, resource allocation",
        features: ["Task Management", "Gantt Charts", "Resource Allocation", "Time Tracking"],
        status: "Not Active",
        color: "from-pink-600 to-red-600",
      },
    ],
  }

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center">
          <Link href="/dashboard/companies" className="mr-4">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-pink-400">
                {company.name}
              </h2>
              <Badge
                variant={company.status === "Active" ? "default" : "outline"}
                className={
                  company.status === "Active"
                    ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0"
                    : "text-amber-400 border-amber-500/50"
                }
              >
                {company.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>{company.industry}</span>
              <span>•</span>
              <span>{company.location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-gray-800 bg-gray-900 text-white">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">Configure Modules</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">Manage Users</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800">View Billing</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-800 text-red-400">
                Delete Company
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-gray-900 border border-gray-800 p-0.5">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="departments"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Departments
          </TabsTrigger>
          <TabsTrigger
            value="modules"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Modules
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Users
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
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
                  <CardTitle className="text-sm font-medium text-gray-200">Total Employees</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-400" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-3xl font-bold text-white">{company.employees}</div>
                  <p className="text-xs text-gray-400">Across {company.departments.length} departments</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-gray-800 bg-gray-900/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                  <CardTitle className="text-sm font-medium text-gray-200">Active Modules</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <Grid3X3 className="h-4 w-4 text-blue-400" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-3xl font-bold text-white">{company.modules.length}</div>
                  <p className="text-xs text-gray-400">All modules running smoothly</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-gray-800 bg-gray-900/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-transparent"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                  <CardTitle className="text-sm font-medium text-gray-200">Departments</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-amber-900/50 flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-amber-400" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-3xl font-bold text-white">{company.departments.length}</div>
                  <p className="text-xs text-gray-400">All departments configured</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-gray-800 bg-gray-900/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                  <CardTitle className="text-sm font-medium text-gray-200">Years Active</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-green-900/50 flex items-center justify-center">
                    <LayoutDashboard className="h-4 w-4 text-green-400" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-3xl font-bold text-white">
                    {new Date().getFullYear() - Number.parseInt(company.founded)}
                  </div>
                  <p className="text-xs text-gray-400">Founded in {company.founded}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="col-span-1 border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <CardTitle className="text-white">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Industry</p>
                        <p className="text-white">{company.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Location</p>
                        <p className="text-white">{company.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Website</p>
                        <p className="text-purple-400">{company.website}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Phone</p>
                        <p className="text-white">{company.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Email</p>
                        <p className="text-white">{company.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-400">Founded</p>
                        <p className="text-white">{company.founded}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Description</p>
                    <p className="text-sm text-gray-300">{company.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card className="col-span-1 border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <CardTitle className="text-white">Active Modules</CardTitle>
                  <CardDescription className="text-gray-400">
                    CRM modules currently enabled for this company
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.activeModules.map((module, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 + i * 0.1 }}
                        className="group flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/50 p-3 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                      >
                        <div>
                          <p className="font-medium text-white group-hover:text-purple-300 transition-colors">
                            {module.name}
                          </p>
                          <p className="text-sm text-gray-400">{module.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-gray-700 text-gray-300 bg-gray-800/50">
                            {module.users} users
                          </Badge>
                          <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0">
                            {module.status}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Performance Analytics</CardTitle>
                  <CardDescription className="text-gray-400">Key metrics and performance indicators</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Bar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <LineChart className="mr-2 h-4 w-4" />
                    Line
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <PieChart className="mr-2 h-4 w-4" />
                    Pie
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 mx-auto text-gray-500 mb-4" />
                    <p className="text-gray-400">Analytics visualization would appear here</p>
                    <p className="text-sm text-gray-500 mt-1">Showing performance data for {company.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Departments</CardTitle>
                <CardDescription className="text-gray-400">Manage departments and their configurations</CardDescription>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-600/10">
                Add Department
              </Button>
            </CardHeader>
            <CardContent>
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                {company.departments.map((dept, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <div>
                      <p className="font-medium text-white">{dept.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{dept.employees} Employees</span>
                        <span>•</span>
                        <span>Manager: {dept.manager}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0">
                        {dept.status}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        View Team
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modules" className="space-y-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-white">Module Configuration</CardTitle>
              <CardDescription className="text-gray-400">
                Configure and manage CRM modules for this company
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Active Modules</h3>
                  <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                    {company.activeModules.map((module, i) => (
                      <motion.div
                        key={i}
                        variants={item}
                        className="rounded-lg border border-gray-800 bg-gray-900/50 overflow-hidden"
                      >
                        <div className={`h-1 bg-gradient-to-r ${module.color}`}></div>
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium text-white">{module.name}</p>
                            <p className="text-sm text-gray-400">{module.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0">
                              {module.status}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                            >
                              Configure
                            </Button>
                          </div>
                        </div>
                        <div className="border-t border-gray-800 p-4 bg-gray-900/30">
                          <p className="text-sm font-medium mb-2 text-gray-300">Active Features</p>
                          <div className="flex flex-wrap gap-2">
                            {module.features.map((feature, j) => (
                              <div
                                key={j}
                                className="flex items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
                              >
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Available Modules</h3>
                  <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                    {company.availableModules.map((module, i) => (
                      <motion.div
                        key={i}
                        variants={item}
                        className="rounded-lg border border-gray-800 bg-gray-900/50 overflow-hidden"
                      >
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium text-white">{module.name}</p>
                            <p className="text-sm text-gray-400">{module.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-gray-400 border-gray-700">
                              {module.status}
                            </Badge>
                            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                              Activate
                            </Button>
                          </div>
                        </div>
                        <div className="border-t border-gray-800 p-4 bg-gray-900/30">
                          <p className="text-sm font-medium mb-2 text-gray-300">Available Features</p>
                          <div className="flex flex-wrap gap-2">
                            {module.features.map((feature, j) => (
                              <div
                                key={j}
                                className="flex items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
                              >
                                <XCircle className="h-3 w-3 text-gray-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">User Management</CardTitle>
                <CardDescription className="text-gray-400">Manage users and their access permissions</CardDescription>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-600/10">
                Add User
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 mx-auto text-gray-500 mb-4" />
                  <p className="text-gray-400">User management interface would be displayed here</p>
                  <p className="text-sm text-gray-500 mt-1">Manage users, roles, and permissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-white">Company Settings</CardTitle>
              <CardDescription className="text-gray-400">Manage company settings and configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center">
                <div className="text-center">
                  <Settings className="h-16 w-16 mx-auto text-gray-500 mb-4" />
                  <p className="text-gray-400">Company settings interface would be displayed here</p>
                  <p className="text-sm text-gray-500 mt-1">Configure company preferences and system settings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
