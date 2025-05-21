"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { EmployeeForm, EmployeeFormValues } from "@/components/employees/employee-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { api } from "@/services/api"
import { toast } from "sonner"

interface EditEmployeePageProps {
  params: {
    id: string
  }
}

export default function EditEmployeePage({ params }: EditEmployeePageProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("basic")
  const [employee, setEmployee] = useState<EmployeeFormValues | undefined>()

  useEffect(() => {
    loadEmployee()
  }, [params.id])

  const loadEmployee = async () => {
    try {
      const data = await api.getEmployee(params.id)
      setEmployee(data)
    } catch (error) {
      toast.error("Failed to load employee")
      console.error(error)
      router.push("/employees")
    }
  }

  const handleSubmit = async (data: EmployeeFormValues) => {
    try {
      await api.updateEmployee(params.id, data)
      toast.success("Employee updated successfully")
      router.push("/employees")
    } catch (error) {
      toast.error("Failed to update employee")
      console.error(error)
    }
  }

  const handleCancel = () => {
    router.push("/employees")
  }

  if (!employee) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Edit Employee</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="welfare">Welfare</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
              <TabsTrigger value="additional">Additional</TabsTrigger>
              <TabsTrigger value="outsourced">Outsourced</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="mt-6">
              <EmployeeForm
                initialData={employee}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="welfare" className="mt-6">
              <EmployeeForm
                initialData={employee}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="work" className="mt-6">
              <EmployeeForm
                initialData={employee}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="additional" className="mt-6">
              <EmployeeForm
                initialData={employee}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="outsourced" className="mt-6">
              <EmployeeForm
                initialData={employee}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 