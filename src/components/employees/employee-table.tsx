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
import Link from "next/link"

interface EmployeeTableProps {
  employees: Employee[]
  onDelete: (employee: Employee) => void
}

export function EmployeeTable({ employees, onDelete }: EmployeeTableProps) {
  return (
    <ScrollArea className="h-[calc(100vh-13rem)]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee ID</TableHead>
            <TableHead>Name (English)</TableHead>
            <TableHead>Name (Kanji)</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.employee_id}</TableCell>
              <TableCell>{employee.name_english}</TableCell>
              <TableCell>{employee.name_kanji}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.team}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Link href={`/employees/${employee.id}/edit`}>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(employee)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
} 