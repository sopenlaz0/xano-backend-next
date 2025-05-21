"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { api } from "@/services/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form } from "@/components/ui/form"
import { BasicForm } from "@/components/employees/form/basic-form"
import { WelfareForm } from "@/components/employees/form/welfare-form"
import { WorkForm } from "@/components/employees/form/work-form"
import { AdditionalForm } from "@/components/employees/form/additional-form"
import { OutsourcedPartnerForm } from "@/components/employees/form/outsourced-partner-form"
import { ArrowLeft } from "lucide-react"

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

export default function NewEmployeePage() {
  const router = useRouter()
  const [employmentCategory, setEmploymentCategory] = useState<"employee" | "partner">("employee")
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

  const onSubmit = async (data: EmployeeFormValues) => {
    try {
      await api.createEmployee(data)
      toast.success("Employee created successfully")
      router.push("/employees")
    } catch (error) {
      toast.error("Failed to create employee")
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Create New Employee</h1>
      </div>

      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent>
              <BasicForm
                familyMembers={familyMembers}
                setFamilyMembers={setFamilyMembers}
                onEmploymentCategoryChange={setEmploymentCategory}
              />
            </CardContent>

            {employmentCategory === "employee" && (
              <>
                <CardContent>
                  <WelfareForm />
                </CardContent>

                <CardContent>
                  <WorkForm />
                </CardContent>
              </>
            )}

              <CardContent>
                <AdditionalForm onFileUpload={() => { }} />
              </CardContent>

            {employmentCategory === "partner" && (
                <CardContent>
                  <OutsourcedPartnerForm />
                </CardContent>
            )}

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit">Create Employee</Button>
            </div>
          </form>
        </Form>
      </FormProvider>
    </div>
  )
} 