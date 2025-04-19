"use client"

import { useState } from "react"
import {
  Calendar,
  ChevronDown,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HRPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const employees = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@acmecorp.example.com",
      department: "Engineering",
      position: "Senior Developer",
      company: "Acme Corporation",
      status: "Active",
      joinDate: "Jan 15, 2020",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@acmecorp.example.com",
      department: "Human Resources",
      position: "HR Manager",
      company: "Acme Corporation",
      status: "Active",
      joinDate: "Mar 10, 2019",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@globaltech.example.com",
      department: "Sales",
      position: "Sales Director",
      company: "GlobalTech Industries",
      status: "Active",
      joinDate: "Jun 22, 2021",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@skyview.example.com",
      department: "Customer Support",
      position: "Support Manager",
      company: "Skyview Enterprises",
      status: "On Leave",
      joinDate: "Sep 5, 2020",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@acmecorp.example.com",
      department: "Engineering",
      position: "CTO",
      company: "Acme Corporation",
      status: "Active",
      joinDate: "Feb 12, 2018",
    },
    {
      id: 6,
      name: "Jessica Martinez",
      email: "jessica.martinez@globaltech.example.com",
      department: "Marketing",
      position: "Marketing Director",
      company: "GlobalTech Industries",
      status: "Active",
      joinDate: "Jul 3, 2022",
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "robert.taylor@quantum.example.com",
      department: "Finance",
      position: "Financial Analyst",
      company: "Quantum Solutions",
      status: "New Hire",
      joinDate: "Apr 15, 2023",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      email: "lisa.anderson@skyview.example.com",
      department: "Operations",
      position: "Operations Manager",
      company: "Skyview Enterprises",
      status: "Active",
      joinDate: "Nov 8, 2021",
    },
  ]

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.company.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">HR Management</h2>
          <p className="text-muted-foreground">Manage employees across all companies</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Employee
          </Button>
        </div>
      </div>

      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="employees" className="space-y-4">
          <Card>
            <div className="p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 w-full sm:max-w-sm">
                  <Search className="h-4 w-4 absolute ml-3 text-muted-foreground" />
                  <Input
                    placeholder="Search employees..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button variant="outline" size="sm" className="h-8">
                    <Filter className="mr-2 h-3.5 w-3.5" />
                    Filter
                    <ChevronDown className="ml-2 h-3.5 w-3.5" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <SlidersHorizontal className="mr-2 h-3.5 w-3.5" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <Download className="mr-2 h-3.5 w-3.5" />
                    Export
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead className="hidden md:table-cell">Department</TableHead>
                    <TableHead className="hidden lg:table-cell">Position</TableHead>
                    <TableHead className="hidden md:table-cell">Company</TableHead>
                    <TableHead className="hidden lg:table-cell">Join Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                            {employee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{employee.department}</TableCell>
                      <TableCell className="hidden lg:table-cell">{employee.position}</TableCell>
                      <TableCell className="hidden md:table-cell">{employee.company}</TableCell>
                      <TableCell className="hidden lg:table-cell">{employee.joinDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={employee.status === "Active" ? "default" : "outline"}
                          className={
                            employee.status === "Active"
                              ? "bg-green-500 hover:bg-green-500/80"
                              : employee.status === "On Leave"
                                ? "text-amber-600 border-amber-600"
                                : "text-blue-600 border-blue-600"
                          }
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit Employee</DropdownMenuItem>
                            <DropdownMenuItem>Performance Review</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="departments">
          <Card>
            <div className="p-8 flex items-center justify-center">
              <div className="text-center">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Department Management</h3>
                <p className="mt-2 text-muted-foreground">
                  This section allows you to manage departments across all companies.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="onboarding">
          <Card>
            <div className="p-8 flex items-center justify-center">
              <div className="text-center">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Employee Onboarding</h3>
                <p className="mt-2 text-muted-foreground">
                  This section allows you to manage the onboarding process for new employees.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <div className="p-8 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">HR Reports</h3>
                <p className="mt-2 text-muted-foreground">
                  This section provides access to various HR reports and analytics.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
