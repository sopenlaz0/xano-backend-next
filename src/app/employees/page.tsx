"use client"

import { useEffect, useState } from "react"
import { EmployeeTable } from "@/components/employees/employee-table"
import { EmployeeForm, EmployeeFormValues } from "@/components/employees/employee-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { api, Employee } from "@/services/api"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>()
  const [isLoading, setIsLoading] = useState(true)
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(null)

  useEffect(() => {
    loadEmployees()
  }, [])

  const loadEmployees = async () => {
    try {
      setIsLoading(true)
      const data = await api.getEmployees()
      setEmployees(data)
    } catch (error) {
      toast.error("Failed to load employees")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreate = () => {
    setSelectedEmployee(undefined)
    setIsDialogOpen(true)
  }

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee)
    setIsDialogOpen(true)
  }

  const handleDelete = (employee: Employee) => {
    setEmployeeToDelete(employee)
  }

  const confirmDelete = async () => {
    if (!employeeToDelete) return

    try {
      await api.deleteEmployee(employeeToDelete.id)
      setEmployees(employees.filter((e) => e.id !== employeeToDelete.id))
      toast.success("Employee deleted successfully")
    } catch (error) {
      toast.error("Failed to delete employee")
      console.error(error)
    } finally {
      setEmployeeToDelete(null)
    }
  }

  const handleSubmit = async (data: EmployeeFormValues) => {
    try {
      if (selectedEmployee) {
        await api.updateEmployee(selectedEmployee.id, data)
      } else {
        await api.createEmployee(data)
      }
      toast.success("Employee saved successfully")
    } catch (error) {
      toast.error("Failed to save employee")
      console.error(error)
    }
  }

  const handleCancel = () => {
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
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <EmployeeTable
              employees={employees}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedEmployee ? "Edit Employee" : "Add Employee"}
            </DialogTitle>
          </DialogHeader>
          <EmployeeForm
            initialData={selectedEmployee}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!employeeToDelete} onOpenChange={() => setEmployeeToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the employee
              {employeeToDelete && ` "${employeeToDelete.name_english}"`}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
} 