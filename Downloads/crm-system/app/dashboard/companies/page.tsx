"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Download,
  Filter,
  Plus,
  Search,
  SlidersHorizontal,
  Users,
  Building2,
  BarChart3,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [view, setView] = useState<"grid" | "list">("grid")

  const companies = [
    {
      id: 1,
      name: "Acme Corporation",
      industry: "Technology",
      employees: 250,
      location: "New York, USA",
      modules: ["HR", "Sales", "Support"],
      status: "Active",
      color: "from-purple-600 to-pink-600",
      description: "Leading technology company specializing in innovative software solutions.",
    },
    {
      id: 2,
      name: "GlobalTech Industries",
      industry: "Manufacturing",
      employees: 1200,
      location: "Chicago, USA",
      modules: ["HR", "Inventory", "Finance"],
      status: "Active",
      color: "from-cyan-600 to-blue-600",
      description: "Manufacturing giant with operations across North America and Europe.",
    },
    {
      id: 3,
      name: "Skyview Enterprises",
      industry: "Healthcare",
      employees: 500,
      location: "Boston, USA",
      modules: ["HR", "Patient Management"],
      status: "Setup",
      color: "from-amber-500 to-orange-600",
      description: "Healthcare provider focused on patient-centered care and innovation.",
    },
    {
      id: 4,
      name: "Quantum Solutions",
      industry: "Consulting",
      employees: 75,
      location: "San Francisco, USA",
      modules: ["HR", "Project Management"],
      status: "Active",
      color: "from-emerald-500 to-green-600",
      description: "Boutique consulting firm specializing in digital transformation.",
    },
    {
      id: 5,
      name: "Horizon Innovations",
      industry: "Technology",
      employees: 320,
      location: "Austin, USA",
      modules: ["HR", "Sales", "Support", "Finance"],
      status: "Active",
      color: "from-pink-600 to-red-600",
      description: "Tech innovator focused on AI and machine learning solutions.",
    },
    {
      id: 6,
      name: "Pinnacle Group",
      industry: "Finance",
      employees: 180,
      location: "Miami, USA",
      modules: ["HR", "Finance", "Compliance"],
      status: "Setup",
      color: "from-violet-600 to-indigo-600",
      description: "Financial services provider with a focus on wealth management.",
    },
    {
      id: 7,
      name: "Evergreen Solutions",
      industry: "Environmental",
      employees: 95,
      location: "Portland, USA",
      modules: ["HR", "Project Management"],
      status: "Active",
      color: "from-teal-600 to-green-600",
      description: "Sustainable solutions provider for environmental challenges.",
    },
    {
      id: 8,
      name: "Stellar Dynamics",
      industry: "Aerospace",
      employees: 450,
      location: "Houston, USA",
      modules: ["HR", "Engineering", "Supply Chain"],
      status: "Active",
      color: "from-blue-600 to-indigo-600",
      description: "Aerospace engineering firm working on cutting-edge space technologies.",
    },
  ]

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            Companies
          </h2>
          <p className="text-gray-400">Manage all companies and their CRM configurations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-600/10">
            <Plus className="mr-2 h-4 w-4" /> Add Company
          </Button>
        </div>
      </div>

      <Card className="border-gray-800 bg-gray-900/50 overflow-hidden">
        <div className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 w-full sm:max-w-sm relative">
              <Search className="h-4 w-4 absolute ml-3 text-gray-500" />
              <Input
                placeholder="Search companies..."
                className="pl-9 border-gray-800 bg-gray-900/50 text-white focus:border-purple-500 focus:ring-purple-500/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <Filter className="mr-2 h-3.5 w-3.5" />
                Filter
                <ChevronDown className="ml-2 h-3.5 w-3.5" />
              </Button>
              <div className="flex rounded-md overflow-hidden border border-gray-800">
                <Button
                  variant="outline"
                  size="sm"
                  className={`h-8 rounded-none border-0 ${
                    view === "grid"
                      ? "bg-purple-900/50 text-white"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                  onClick={() => setView("grid")}
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={`h-8 rounded-none border-0 ${
                    view === "list"
                      ? "bg-purple-900/50 text-white"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                  onClick={() => setView("list")}
                >
                  <BarChart3 className="h-3.5 w-3.5" />
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <Download className="mr-2 h-3.5 w-3.5" />
                Export
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 pt-0">
          {view === "grid" ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredCompanies.map((company) => (
                <motion.div key={company.id} variants={item}>
                  <Link href={`/dashboard/companies/${company.id}`}>
                    <div className="group h-full rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden relative">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${company.color}`}></div>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`h-12 w-12 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center text-white font-bold`}
                        >
                          {company.name.substring(0, 2)}
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-purple-300 transition-colors">
                            {company.name}
                          </div>
                          <div className="text-sm text-gray-400">{company.industry}</div>
                        </div>
                      </div>

                      <div className="mb-3 text-sm text-gray-400 line-clamp-2">{company.description}</div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {company.modules.map((module, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs border-gray-700 text-gray-300 bg-gray-800/50"
                          >
                            {module}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users className="h-3.5 w-3.5" />
                          <span>{company.employees}</span>
                        </div>
                        <div className="flex items-center gap-2">
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
                          <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-purple-900/50 group-hover:text-white transition-colors">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
              {filteredCompanies.map((company) => (
                <motion.div key={company.id} variants={item}>
                  <Link href={`/dashboard/companies/${company.id}`}>
                    <div className="group flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-12 w-12 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center text-white font-bold`}
                        >
                          {company.name.substring(0, 2)}
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-purple-300 transition-colors">
                            {company.name}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>{company.industry}</span>
                            <span>•</span>
                            <span>{company.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-400">{company.employees} employees</span>
                        </div>
                        <div className="hidden lg:flex flex-wrap gap-1">
                          {company.modules.map((module, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs border-gray-700 text-gray-300 bg-gray-800/50"
                            >
                              {module}
                            </Badge>
                          ))}
                        </div>
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
                        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-purple-900/50 group-hover:text-white transition-colors">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  )
}
