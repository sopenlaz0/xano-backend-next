"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Employee {
  id: string
  name_kanji: string
  name_furigana: string
  name_english: string
  email: string
  phone: string
  department: string
  position: string
  hire_date: string
}

interface EmployeeTableProps {
  employees: Employee[]
  onEdit: (employee: Employee) => void
  onDelete: (employee: Employee) => void
}

export function EmployeeTable({ employees, onEdit, onDelete }: EmployeeTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name (Kanji)</TableHead>
            <TableHead>Name (Furigana)</TableHead>
            <TableHead>Name (English)</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Hire Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name_kanji}</TableCell>
              <TableCell>{employee.name_furigana}</TableCell>
              <TableCell>{employee.name_english}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.hire_date}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(employee)}
                >
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600"
                  onClick={() => onDelete(employee)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 