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
  id: number
  employee_id: number
  data_type: string
  updated_at: number
  name_kanji: string
  name_furigana: string
  name_english: string
  name_alias: string
  gender: string
  birth_date: string
  joining_date: string
  retirement_date: string
  blood_type: string
  home_address: string
  home_zip_code: string
  home_phone_number: string
  personal_phone_number: string
  personal_email: string
  personal_line_id: string
  driving_license_number: string
  qualifications: string
  last_education: string
  family_info: string
  emergency_contact_info: string
  company_a: string
  company_b: string
  graduate_or_midcareer: string
  midcareer_details: string
  transferred_company: string
  work_location: string
  company_phone_number: string
  company_email: string
  work_accident_procedure_memo: string
  position: string
  team: string
  responsible_person_code: string
  employment_type: string
  employment_contract: string
  employment_category: string
  outsourced_company: string
  outsourced_position: string
  outsourced_employment_type: string
  job_type: string
  personal_number: string
  basic_pension_number: string
  health_insurance_number: string
  health_insurance_date: string
  health_insurance_grade: string
  welfare_pension_number: string
  welfare_pension_date: string
  welfare_pension_grade: string
  employment_insurance_number: string
  employment_insurance_date: string
  salary_transfer_details: string
  bonus_transfer_details: string
  monthly_work_hours: number
  employment_compensation_history: string
  monthly_paid_vacation_days: string
  remaining_paid_vacation_days: number
  monthly_absence_days: number
  late_and_early_leaves: string
  special_paid_vacation_days: string
  commuting_expenses: string
  commuting_method: string
  car_commuting_details: string
  public_transport_details: string
  commuting_time: string
  memo: string
  maternity_leave_period: string
  parental_leave_period: string
  health_check_date: string
  health_check_result: string
  isObligate: string
  profile_image: string
  account: number
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
            <TableHead>Employee ID</TableHead>
            <TableHead>Name (Kanji)</TableHead>
            <TableHead>Name (Furigana)</TableHead>
            <TableHead>Name (English)</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Birth Date</TableHead>
            <TableHead>Joining Date</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Employment Type</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.employee_id}</TableCell>
              <TableCell>{employee.name_kanji}</TableCell>
              <TableCell>{employee.name_furigana}</TableCell>
              <TableCell>{employee.name_english}</TableCell>
              <TableCell>{employee.gender}</TableCell>
              <TableCell>{employee.birth_date}</TableCell>
              <TableCell>{employee.joining_date}</TableCell>
              <TableCell>{employee.team}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.employment_type}</TableCell>
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