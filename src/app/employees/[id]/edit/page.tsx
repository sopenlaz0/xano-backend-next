"use client"

import { useState, useEffect, use } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { api, Employee } from "@/services/api"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BasicForm } from "@/components/employees/form/basic-form"
import { WelfareForm } from "@/components/employees/form/welfare-form"
import { WorkForm } from "@/components/employees/form/work-form"
import { AdditionalForm } from "@/components/employees/form/additional-form"
import { OutsourcedPartnerForm } from "@/components/employees/form/outsourced-partner-form"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

const employeeFormSchema = z.object({
  employee_id: z.number(),
  name_kanji: z.string().min(1, "Name in Kanji is required"),
  name_furigana: z.string().min(1, "Name in Furigana is required"),
  name_english: z.string().min(1, "Name in English is required"),
  name_alias: z.string(),
  gender: z.string(),
  birth_date: z.string(),
  joining_date: z.string(),
  retirement_date: z.string(),
  blood_type: z.string(),
  home_address: z.string(),
  home_zip_code: z.string(),
  home_phone_number: z.string(),
  personal_phone_number: z.string(),
  personal_email: z.string().email("Invalid email address"),
  personal_line_id: z.string(),
  driving_license_number: z.string(),
  qualifications: z.string(),
  last_education: z.string(),
  family_info: z.string(),
  emergency_contact_info: z.string(),
  company_a: z.string(),
  company_b: z.string(),
  graduate_or_midcareer: z.string(),
  midcareer_details: z.string(),
  transferred_company: z.string(),
  work_location: z.string(),
  company_phone_number: z.string(),
  company_email: z.string().email("Invalid company email address"),
  work_accident_procedure_memo: z.string(),
  position: z.string(),
  team: z.string(),
  responsible_person_code: z.string(),
  employment_type: z.string(),
  employment_contract: z.string(),
  employment_category: z.string(),
  outsourced_company: z.string(),
  outsourced_position: z.string(),
  outsourced_employment_type: z.string(),
  job_type: z.string(),
  personal_number: z.string(),
  basic_pension_number: z.string(),
  health_insurance_number: z.string(),
  health_insurance_date: z.string(),
  health_insurance_grade: z.string(),
  welfare_pension_number: z.string(),
  welfare_pension_date: z.string(),
  welfare_pension_grade: z.string(),
  employment_insurance_number: z.string(),
  employment_insurance_date: z.string(),
  salary_transfer_details: z.string(),
  bonus_transfer_details: z.string(),
  monthly_work_hours: z.number(),
  employment_compensation_history: z.string(),
  monthly_paid_vacation_days: z.string(),
  remaining_paid_vacation_days: z.number(),
  monthly_absence_days: z.number(),
  late_and_early_leaves: z.string(),
  special_paid_vacation_days: z.string(),
  commuting_expenses: z.string(),
  commuting_method: z.string(),
  car_commuting_details: z.string(),
  public_transport_details: z.string(),
  commuting_time: z.string(),
  memo: z.string(),
  maternity_leave_period: z.string(),
  parental_leave_period: z.string(),
  health_check_date: z.string(),
  health_check_result: z.string(),
  isObligate: z.string(),
  profile_image: z.string(),
  account: z.number(),
})

type EmployeeFormValues = z.infer<typeof employeeFormSchema>

interface EditEmployeePageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditEmployeePage({ params }: EditEmployeePageProps) {
  const router = useRouter()
  const { id } = use(params)
  const [activeTab, setActiveTab] = useState("basic")
  const [profileImage, setProfileImage] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [familyMembers, setFamilyMembers] = useState<Array<{
    nameFurigana: string
    relationship: string
    occupation: string
    gender: string
    birthDate: string
    phoneNumber: string
    error?: string
  }>>([])

  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      employee_id: 0,
      name_kanji: "",
      name_furigana: "",
      name_english: "",
      name_alias: "",
      gender: "",
      birth_date: "",
      joining_date: "",
      retirement_date: "",
      blood_type: "",
      home_address: "",
      home_zip_code: "",
      home_phone_number: "",
      personal_phone_number: "",
      personal_email: "",
      personal_line_id: "",
      driving_license_number: "",
      qualifications: "",
      last_education: "",
      family_info: "",
      emergency_contact_info: "",
      company_a: "",
      company_b: "",
      graduate_or_midcareer: "",
      midcareer_details: "",
      transferred_company: "",
      work_location: "",
      company_phone_number: "",
      company_email: "",
      work_accident_procedure_memo: "",
      position: "",
      team: "",
      responsible_person_code: "",
      employment_type: "",
      employment_contract: "",
      employment_category: "",
      outsourced_company: "",
      outsourced_position: "",
      outsourced_employment_type: "",
      job_type: "",
      personal_number: "",
      basic_pension_number: "",
      health_insurance_number: "",
      health_insurance_date: "",
      health_insurance_grade: "",
      welfare_pension_number: "",
      welfare_pension_date: "",
      welfare_pension_grade: "",
      employment_insurance_number: "",
      employment_insurance_date: "",
      salary_transfer_details: "",
      bonus_transfer_details: "",
      monthly_work_hours: 0,
      employment_compensation_history: "",
      monthly_paid_vacation_days: "",
      remaining_paid_vacation_days: 0,
      monthly_absence_days: 0,
      late_and_early_leaves: "",
      special_paid_vacation_days: "",
      commuting_expenses: "",
      commuting_method: "",
      car_commuting_details: "",
      public_transport_details: "",
      commuting_time: "",
      memo: "",
      maternity_leave_period: "",
      parental_leave_period: "",
      health_check_date: "",
      health_check_result: "",
      isObligate: "",
      profile_image: "",
      account: 0,
    },
  })

  // Function to clean data by converting "None" to empty string
  const cleanData = (data: Employee): Employee => {
    const cleanedData = { ...data }
    Object.keys(cleanedData).forEach((key) => {
      const value = cleanedData[key as keyof Employee]
      if (value === "None" || value === null) {
        if (typeof value === "string" || value === null) {
          (cleanedData as Record<string, string | number>)[key] = ""
        }
      }
    })
    return cleanedData
  }

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const employees = await api.getEmployees()
        const data = employees.find(emp => emp.id === parseInt(id))
        if (!data) {
          throw new Error('Employee not found')
        }
        const cleanedData = cleanData(data)
        form.reset(cleanedData)
        setProfileImage(cleanedData.profile_image || "")
      } catch (error) {
        toast.error("Failed to load employee")
        console.error(error)
        router.push("/employees")
      }
    }

    loadEmployee()
  }, [id, form, router])

  const handleProfileImageUpload = async (file: File) => {
    try {
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)
      form.setValue("profile_image", imageUrl)
    } catch (error) {
      toast.error("Failed to upload profile image")
      console.error(error)
    }
  }

  const handleFileUpload = async (file: File) => {
    try {
      const fileUrl = URL.createObjectURL(file)
      form.setValue("employment_contract", fileUrl)
    } catch (error) {
      toast.error("Failed to upload employment contract")
      console.error(error)
    }
  }

  const handleCancel = () => {
    router.push("/employees")
  }

  const employmentCategory = form.watch("employment_category")

  // Function to find the first tab with errors
  const findFirstErrorTab = () => {
    const errors = form.formState.errors
    const employmentCategory = form.watch("employment_category")
    
    // Common fields for both employee and partner
    const basicFields = ['name_kanji', 'name_furigana', 'name_english', 'gender', 'birth_date', 'joining_date', 'personal_email'] as const
    
    // Employee-specific fields
    const employeeWelfareFields = ['health_insurance_number', 'welfare_pension_number', 'employment_insurance_number'] as const
    const employeeWorkFields = ['work_location', 'position', 'team', 'employment_type'] as const
    
    // Partner-specific fields
    const partnerFields = ['outsourced_company', 'outsourced_position', 'outsourced_employment_type'] as const
    
    // Additional fields (common)
    const additionalFields = ['memo', 'health_check_date', 'health_check_result'] as const

    if (basicFields.some(field => field in errors)) return "basic"
    
    if (employmentCategory === "employee") {
      if (employeeWelfareFields.some(field => field in errors)) return "welfare"
      if (employeeWorkFields.some(field => field in errors)) return "work"
    } else if (employmentCategory === "partner") {
      if (partnerFields.some(field => field in errors)) return "outsourced"
    }
    
    if (additionalFields.some(field => field in errors)) return "additional"

    return "basic" // Default to basic tab if no specific errors found
  }

  const handleUpdateClick = async (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    console.log("Update button clicked directly")
    e.preventDefault()
    
    try {
      console.log("Starting form submission process...")
      const formData = form.getValues()
      console.log("Current form data:", formData)
      
      const result = await form.trigger()
      console.log("Form validation result:", result)
      
      if (!result) {
        const errors = form.formState.errors
        console.log("Validation errors:", errors)
        const errorTab = findFirstErrorTab()
        console.log("Validation failed, switching to tab:", errorTab)
        setActiveTab(errorTab)
        toast.error("Please fix the errors in the form")
        return
      }

      console.log("Form validation passed, proceeding with update...")
      setIsSubmitting(true)
      
      try {
        // Convert all undefined values to empty strings and ensure required fields are present
        const cleanedData: Omit<Employee, "id" | "data_type" | "updated_at"> = {
          employee_id: formData.employee_id,
          name_kanji: formData.name_kanji,
          name_furigana: formData.name_furigana,
          name_english: formData.name_english,
          name_alias: formData.name_alias || "",
          gender: formData.gender || "",
          birth_date: formData.birth_date || "",
          joining_date: formData.joining_date || "",
          retirement_date: formData.retirement_date || "",
          blood_type: formData.blood_type || "",
          home_address: formData.home_address || "",
          home_zip_code: formData.home_zip_code || "",
          home_phone_number: formData.home_phone_number || "",
          personal_phone_number: formData.personal_phone_number || "",
          personal_email: formData.personal_email || "",
          personal_line_id: formData.personal_line_id || "",
          driving_license_number: formData.driving_license_number || "",
          qualifications: formData.qualifications || "",
          last_education: formData.last_education || "",
          family_info: formData.family_info || "",
          emergency_contact_info: formData.emergency_contact_info || "",
          company_a: formData.company_a || "",
          company_b: formData.company_b || "",
          graduate_or_midcareer: formData.graduate_or_midcareer || "",
          midcareer_details: formData.midcareer_details || "",
          transferred_company: formData.transferred_company || "",
          work_location: formData.work_location || "",
          company_phone_number: formData.company_phone_number || "",
          company_email: formData.company_email || "",
          work_accident_procedure_memo: formData.work_accident_procedure_memo || "",
          position: formData.position || "",
          team: formData.team || "",
          responsible_person_code: formData.responsible_person_code || "",
          employment_type: formData.employment_type || "",
          employment_contract: formData.employment_contract || "",
          employment_category: formData.employment_category || "",
          outsourced_company: formData.outsourced_company || "",
          outsourced_position: formData.outsourced_position || "",
          outsourced_employment_type: formData.outsourced_employment_type || "",
          job_type: formData.job_type || "",
          personal_number: formData.personal_number || "",
          basic_pension_number: formData.basic_pension_number || "",
          health_insurance_number: formData.health_insurance_number || "",
          health_insurance_date: formData.health_insurance_date || "",
          health_insurance_grade: formData.health_insurance_grade || "",
          welfare_pension_number: formData.welfare_pension_number || "",
          welfare_pension_date: formData.welfare_pension_date || "",
          welfare_pension_grade: formData.welfare_pension_grade || "",
          employment_insurance_number: formData.employment_insurance_number || "",
          employment_insurance_date: formData.employment_insurance_date || "",
          salary_transfer_details: formData.salary_transfer_details || "",
          bonus_transfer_details: formData.bonus_transfer_details || "",
          monthly_work_hours: formData.monthly_work_hours || 0,
          employment_compensation_history: formData.employment_compensation_history || "",
          monthly_paid_vacation_days: formData.monthly_paid_vacation_days || "",
          remaining_paid_vacation_days: formData.remaining_paid_vacation_days || 0,
          monthly_absence_days: formData.monthly_absence_days || 0,
          late_and_early_leaves: formData.late_and_early_leaves || "",
          special_paid_vacation_days: formData.special_paid_vacation_days || "",
          commuting_expenses: formData.commuting_expenses || "",
          commuting_method: formData.commuting_method || "",
          car_commuting_details: formData.car_commuting_details || "",
          public_transport_details: formData.public_transport_details || "",
          commuting_time: formData.commuting_time || "",
          memo: formData.memo || "",
          maternity_leave_period: formData.maternity_leave_period || "",
          parental_leave_period: formData.parental_leave_period || "",
          health_check_date: formData.health_check_date || "",
          health_check_result: formData.health_check_result || "",
          isObligate: formData.isObligate || "",
          profile_image: formData.profile_image || "",
          account: formData.account || 0,
        }
        
        console.log("Calling updateEmployee API with cleaned data:", cleanedData)
        await api.updateEmployee(parseInt(id), cleanedData)
        console.log("Update successful")
        toast.success("Employee updated successfully")
        router.push("/employees")
      } catch (error) {
        console.error("API update error:", error)
        toast.error("Failed to update employee")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("An error occurred while submitting the form")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Edit Employee</CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <Form {...form}>
              <form 
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  console.log("Form submit event triggered")
                  e.preventDefault()
                  handleUpdateClick(e)
                }} 
                className="space-y-8"
              >
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={profileImage} alt="Profile" />
                      <AvatarFallback>Profile</AvatarFallback>
                    </Avatar>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          handleProfileImageUpload(file)
                        }
                      }}
                    />
                  </div>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className={`grid w-full ${
                    employmentCategory === "employee" 
                      ? "grid-cols-4" 
                      : "grid-cols-3"
                  } max-w-2xl mx-auto`}>
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    {employmentCategory === "employee" && (
                      <>
                        <TabsTrigger value="welfare">Welfare</TabsTrigger>
                        <TabsTrigger value="work">Work</TabsTrigger>
                      </>
                    )}
                    <TabsTrigger value="additional">Additional</TabsTrigger>
                    {employmentCategory === "partner" && (
                      <TabsTrigger value="outsourced">Outsourced</TabsTrigger>
                    )}
                  </TabsList>

                  <TabsContent value="basic" className="mt-6">
                    <BasicForm
                      familyMembers={familyMembers}
                      setFamilyMembers={setFamilyMembers}
                    />
                  </TabsContent>

                  {employmentCategory === "employee" && (
                    <>
                      <TabsContent value="welfare" className="mt-6">
                        <WelfareForm />
                      </TabsContent>

                      <TabsContent value="work" className="mt-6">
                        <WorkForm />
                      </TabsContent>
                    </>
                  )}

                  <TabsContent value="additional" className="mt-6">
                    <AdditionalForm onFileUpload={handleFileUpload} />
                  </TabsContent>

                  {employmentCategory === "partner" && (
                    <TabsContent value="outsourced" className="mt-6">
                      <OutsourcedPartnerForm />
                    </TabsContent>
                  )}
                </Tabs>

                <div className="flex justify-end space-x-2 mt-8">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleCancel}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleUpdateClick}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Updating...
                      </>
                    ) : (
                      "Update"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  )
} 