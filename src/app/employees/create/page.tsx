"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { EmployeeForm, EmployeeFormValues } from "@/components/employees/employee-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { api } from "@/services/api"
import { toast } from "sonner"

export default function CreateEmployeePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("basic")

  const handleSubmit = async (data: EmployeeFormValues) => {
    try {
      await api.createEmployee(data)
      toast.success("Employee created successfully")
      router.push("/employees")
    } catch (error) {
      toast.error("Failed to create employee")
      console.error(error)
    }
  }

  const handleCancel = () => {
    router.push("/employees")
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Add New Employee</CardTitle>
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
                initialData={undefined}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="welfare" className="mt-6">
              <EmployeeForm
                initialData={undefined}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="work" className="mt-6">
              <EmployeeForm
                initialData={undefined}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="additional" className="mt-6">
              <EmployeeForm
                initialData={undefined}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                activeTab={activeTab}
              />
            </TabsContent>
            <TabsContent value="outsourced" className="mt-6">
              <EmployeeForm
                initialData={undefined}
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