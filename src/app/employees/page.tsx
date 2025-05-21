"use client"

import { useState } from "react"
import { EmployeeTable } from "@/components/employees/employee-table"
import { EmployeeForm } from "@/components/employees/employee-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>()

  const handleCreate = () => {
    setSelectedEmployee(undefined)
    setIsDialogOpen(true)
  }

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee)
    setIsDialogOpen(true)
  }

  const handleDelete = async (employee: Employee) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      // TODO: Implement delete functionality with Xano API
      setEmployees(employees.filter((e) => e.id !== employee.id))
    }
  }

  const handleSubmit = async (data: Omit<Employee, "id">) => {
    // TODO: Implement create/update functionality with Xano API
    if (selectedEmployee) {
      // Update existing employee
      setEmployees(
        employees.map((e) =>
          e.id === selectedEmployee.id ? { ...data, id: e.id } : e
        )
      )
    } else {
      // Create new employee
      const newEmployee = { ...data, id: Date.now().toString() }
      setEmployees([...employees, newEmployee])
    }
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Employees</CardTitle>
          <Button onClick={handleCreate}>Add Employee</Button>
        </CardHeader>
        <CardContent>
          <EmployeeTable
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedEmployee ? "Edit Employee" : "Add Employee"}
            </DialogTitle>
          </DialogHeader>
          <EmployeeForm
            initialData={selectedEmployee}
            onSubmit={handleSubmit}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
} 