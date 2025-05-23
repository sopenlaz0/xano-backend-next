"use client"

import { Employee } from "@/services/api"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityState,
  Row,
  Header,
  Cell,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useState, useMemo, useCallback, useEffect } from "react"
import { Search, RotateCcw } from "lucide-react"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface EmployeeTableProps {
  employees: Employee[]
  onDelete: (employee: Employee) => void
  onUpdate: (employee: Employee) => void
  isLoading?: boolean
}

const defaultColumns: VisibilityState = {
  name_kanji: true,
  name_furigana: true,
  name_english: true,
  gender: true,
  birth_date: true,
  joining_date: true,
  position: true,
  team: true,
  work_location: true,
  employment_type: true,
  actions: true,
}

export function EmployeeTable({ employees, onDelete, onUpdate, isLoading = false }: EmployeeTableProps) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(defaultColumns)
  const [columnSearch, setColumnSearch] = useState("")
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const resetColumns = useCallback(() => {
    setColumnVisibility(defaultColumns)
  }, [])

  const columns: ColumnDef<Employee>[] = [
    {
      accessorKey: "name_kanji",
      header: "Name (Kanji)",
    },
    {
      accessorKey: "name_furigana",
      header: "Name (Furigana)",
    },
    {
      accessorKey: "name_english",
      header: "Name (English)",
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "birth_date",
      header: "Birth Date",
    },
    {
      accessorKey: "joining_date",
      header: "Joining Date",
    },
    {
      accessorKey: "position",
      header: "Position",
    },
    {
      accessorKey: "team",
      header: "Team",
    },
    {
      accessorKey: "work_location",
      header: "Work Location",
    },
    {
      accessorKey: "employment_type",
      header: "Employment Type",
    },
    {
      accessorKey: "employee_id",
      header: "Employee ID",
    },
    {
      accessorKey: "name_alias",
      header: "Name (Alias)",
    },
    {
      accessorKey: "retirement_date",
      header: "Retirement Date",
    },
    {
      accessorKey: "blood_type",
      header: "Blood Type",
    },
    {
      accessorKey: "home_address",
      header: "Home Address",
    },
    {
      accessorKey: "home_zip_code",
      header: "Home Zip Code",
    },
    {
      accessorKey: "home_phone_number",
      header: "Home Phone",
    },
    {
      accessorKey: "personal_phone_number",
      header: "Personal Phone",
    },
    {
      accessorKey: "personal_email",
      header: "Personal Email",
    },
    {
      accessorKey: "personal_line_id",
      header: "Line ID",
    },
    {
      accessorKey: "driving_license_number",
      header: "Driving License",
    },
    {
      accessorKey: "qualifications",
      header: "Qualifications",
    },
    {
      accessorKey: "last_education",
      header: "Last Education",
    },
    {
      accessorKey: "family_info",
      header: "Family Info",
    },
    {
      accessorKey: "emergency_contact_info",
      header: "Emergency Contact",
    },
    {
      accessorKey: "company_a",
      header: "Company A",
    },
    {
      accessorKey: "company_b",
      header: "Company B",
    },
    {
      accessorKey: "graduate_or_midcareer",
      header: "Career Type",
    },
    {
      accessorKey: "midcareer_details",
      header: "Midcareer Details",
    },
    {
      accessorKey: "transferred_company",
      header: "Transferred Company",
    },
    {
      accessorKey: "company_phone_number",
      header: "Company Phone",
    },
    {
      accessorKey: "company_email",
      header: "Company Email",
    },
    {
      accessorKey: "work_accident_procedure_memo",
      header: "Work Accident Memo",
    },
    {
      accessorKey: "responsible_person_code",
      header: "Responsible Person",
    },
    {
      accessorKey: "employment_contract",
      header: "Employment Contract",
    },
    {
      accessorKey: "employment_category",
      header: "Employment Category",
    },
    {
      accessorKey: "outsourced_company",
      header: "Outsourced Company",
    },
    {
      accessorKey: "outsourced_position",
      header: "Outsourced Position",
    },
    {
      accessorKey: "outsourced_employment_type",
      header: "Outsourced Type",
    },
    {
      accessorKey: "job_type",
      header: "Job Type",
    },
    {
      accessorKey: "personal_number",
      header: "Personal Number",
    },
    {
      accessorKey: "basic_pension_number",
      header: "Basic Pension",
    },
    {
      accessorKey: "health_insurance_number",
      header: "Health Insurance",
    },
    {
      accessorKey: "health_insurance_date",
      header: "Health Insurance Date",
    },
    {
      accessorKey: "health_insurance_grade",
      header: "Health Insurance Grade",
    },
    {
      accessorKey: "welfare_pension_number",
      header: "Welfare Pension",
    },
    {
      accessorKey: "welfare_pension_date",
      header: "Welfare Pension Date",
    },
    {
      accessorKey: "welfare_pension_grade",
      header: "Welfare Pension Grade",
    },
    {
      accessorKey: "employment_insurance_number",
      header: "Employment Insurance",
    },
    {
      accessorKey: "employment_insurance_date",
      header: "Employment Insurance Date",
    },
    {
      accessorKey: "salary_transfer_details",
      header: "Salary Transfer",
    },
    {
      accessorKey: "bonus_transfer_details",
      header: "Bonus Transfer",
    },
    {
      accessorKey: "monthly_work_hours",
      header: "Monthly Work Hours",
    },
    {
      accessorKey: "employment_compensation_history",
      header: "Compensation History",
    },
    {
      accessorKey: "monthly_paid_vacation_days",
      header: "Monthly Vacation Days",
    },
    {
      accessorKey: "remaining_paid_vacation_days",
      header: "Remaining Vacation Days",
    },
    {
      accessorKey: "monthly_absence_days",
      header: "Monthly Absence Days",
    },
    {
      accessorKey: "late_and_early_leaves",
      header: "Late/Early Leaves",
    },
    {
      accessorKey: "special_paid_vacation_days",
      header: "Special Vacation Days",
    },
    {
      accessorKey: "commuting_expenses",
      header: "Commuting Expenses",
    },
    {
      accessorKey: "commuting_method",
      header: "Commuting Method",
    },
    {
      accessorKey: "car_commuting_details",
      header: "Car Commuting Details",
    },
    {
      accessorKey: "public_transport_details",
      header: "Public Transport Details",
    },
    {
      accessorKey: "commuting_time",
      header: "Commuting Time",
    },
    {
      accessorKey: "memo",
      header: "Memo",
    },
    {
      accessorKey: "maternity_leave_period",
      header: "Maternity Leave",
    },
    {
      accessorKey: "parental_leave_period",
      header: "Parental Leave",
    },
    {
      accessorKey: "health_check_date",
      header: "Health Check Date",
    },
    {
      accessorKey: "health_check_result",
      header: "Health Check Result",
    },
    {
      accessorKey: "isObligate",
      header: "Obligate Status",
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }: { row: Row<Employee> }) => {
        const employee = row.original
        return (
          <div className="flex space-x-1 sm:space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onUpdate(employee)
              }}
              className="h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm"
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onDelete(employee)
              }}
              className="h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm"
            >
              Delete
            </Button>
          </div>
        )
      },
    },
  ]

  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnVisibility,
      columnFilters,
    },
  })

  const filteredColumns = useMemo(() => {
    return table
      .getAllColumns()
      .filter((column) => column.getCanHide())
      .filter((column) =>
        column.id.toLowerCase().includes(columnSearch.toLowerCase())
      )
  }, [table, columnSearch])

  // Add effect to handle search filtering
  useEffect(() => {
    const column = table.getColumn("name_english")
    if (column) {
      column.setFilterValue(searchQuery)
    }
  }, [searchQuery, table])

  // Add effect to handle status filtering
  useEffect(() => {
    const column = table.getColumn("isObligate")
    if (column) {
      if (statusFilter === "all") {
        column.setFilterValue("")
      } else {
        column.setFilterValue(statusFilter === "active")
      }
    }
  }, [statusFilter, table])

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <Skeleton className="h-9 w-full sm:w-[200px]" />
          <Skeleton className="h-9 w-full sm:w-[180px]" />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs sm:text-sm">ID</TableHead>
                <TableHead className="text-xs sm:text-sm">Name</TableHead>
                <TableHead className="text-xs sm:text-sm">Position</TableHead>
                <TableHead className="text-xs sm:text-sm">Team</TableHead>
                <TableHead className="text-xs sm:text-sm">Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell className="py-2 sm:py-4"><Skeleton className="h-3 sm:h-4 w-12" /></TableCell>
                  <TableCell className="py-2 sm:py-4"><Skeleton className="h-3 sm:h-4 w-24 sm:w-32" /></TableCell>
                  <TableCell className="py-2 sm:py-4"><Skeleton className="h-3 sm:h-4 w-20 sm:w-24" /></TableCell>
                  <TableCell className="py-2 sm:py-4"><Skeleton className="h-3 sm:h-4 w-20 sm:w-24" /></TableCell>
                  <TableCell className="py-2 sm:py-4"><Skeleton className="h-3 sm:h-4 w-32 sm:w-40" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-[200px]"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery("")
              setStatusFilter("all")
              resetColumns()
            }}
            className="w-full sm:w-auto"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset All
          </Button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="flex items-center px-2 py-2">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <Input
                  placeholder="Search columns..."
                  value={columnSearch}
                  onChange={(e) => setColumnSearch(e.target.value)}
                  className="h-8"
                />
              </div>
              <DropdownMenuSeparator />
              <ScrollArea className="h-[300px]">
                <div className="p-1">
                  {filteredColumns.map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value: boolean) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id.replace(/_/g, " ")}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
                </div>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<Employee, unknown>) => {
                  return (
                    <TableHead key={header.id} className="whitespace-nowrap text-xs sm:text-sm font-medium">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: Row<Employee>) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => router.push(`/employees/${row.original.id}`)}
                >
                  {row.getVisibleCells().map((cell: Cell<Employee, unknown>) => (
                    <TableCell key={cell.id} className="whitespace-nowrap text-xs sm:text-sm py-2 sm:py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 