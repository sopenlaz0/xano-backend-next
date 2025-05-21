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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Employee ID</TableHead>
              <TableHead>Name (Kanji)</TableHead>
              <TableHead>Name (Furigana)</TableHead>
              <TableHead>Name (English)</TableHead>
              <TableHead>Name (Alias)</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Birth Date</TableHead>
              <TableHead>Joining Date</TableHead>
              <TableHead>Retirement Date</TableHead>
              <TableHead>Blood Type</TableHead>
              <TableHead>Home Address</TableHead>
              <TableHead>Home Zip Code</TableHead>
              <TableHead>Home Phone</TableHead>
              <TableHead>Personal Phone</TableHead>
              <TableHead>Personal Email</TableHead>
              <TableHead>Personal Line ID</TableHead>
              <TableHead>Driving License</TableHead>
              <TableHead>Qualifications</TableHead>
              <TableHead>Last Education</TableHead>
              <TableHead>Family Info</TableHead>
              <TableHead>Emergency Contact</TableHead>
              <TableHead>Company A</TableHead>
              <TableHead>Company B</TableHead>
              <TableHead>Graduate/Midcareer</TableHead>
              <TableHead>Midcareer Details</TableHead>
              <TableHead>Transferred Company</TableHead>
              <TableHead>Work Location</TableHead>
              <TableHead>Company Phone</TableHead>
              <TableHead>Company Email</TableHead>
              <TableHead>Work Accident Memo</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Responsible Person</TableHead>
              <TableHead>Employment Type</TableHead>
              <TableHead>Employment Contract</TableHead>
              <TableHead>Employment Category</TableHead>
              <TableHead>Outsourced Company</TableHead>
              <TableHead>Outsourced Position</TableHead>
              <TableHead>Outsourced Type</TableHead>
              <TableHead>Job Type</TableHead>
              <TableHead>Personal Number</TableHead>
              <TableHead>Basic Pension</TableHead>
              <TableHead>Health Insurance</TableHead>
              <TableHead>Health Insurance Date</TableHead>
              <TableHead>Health Insurance Grade</TableHead>
              <TableHead>Welfare Pension</TableHead>
              <TableHead>Welfare Pension Date</TableHead>
              <TableHead>Welfare Pension Grade</TableHead>
              <TableHead>Employment Insurance</TableHead>
              <TableHead>Employment Insurance Date</TableHead>
              <TableHead>Salary Transfer</TableHead>
              <TableHead>Bonus Transfer</TableHead>
              <TableHead>Monthly Work Hours</TableHead>
              <TableHead>Compensation History</TableHead>
              <TableHead>Monthly Vacation Days</TableHead>
              <TableHead>Remaining Vacation Days</TableHead>
              <TableHead>Monthly Absence Days</TableHead>
              <TableHead>Late/Early Leaves</TableHead>
              <TableHead>Special Vacation Days</TableHead>
              <TableHead>Commuting Expenses</TableHead>
              <TableHead>Commuting Method</TableHead>
              <TableHead>Car Commuting</TableHead>
              <TableHead>Public Transport</TableHead>
              <TableHead>Commuting Time</TableHead>
              <TableHead>Memo</TableHead>
              <TableHead>Maternity Leave</TableHead>
              <TableHead>Parental Leave</TableHead>
              <TableHead>Health Check Date</TableHead>
              <TableHead>Health Check Result</TableHead>
              <TableHead>Obligate</TableHead>
              <TableHead>Profile Image</TableHead>
              <TableHead>Account</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.employee_id}</TableCell>
                <TableCell>{employee.name_kanji}</TableCell>
                <TableCell>{employee.name_furigana}</TableCell>
                <TableCell>{employee.name_english}</TableCell>
                <TableCell>{employee.name_alias}</TableCell>
                <TableCell>{employee.gender}</TableCell>
                <TableCell>{employee.birth_date}</TableCell>
                <TableCell>{employee.joining_date}</TableCell>
                <TableCell>{employee.retirement_date}</TableCell>
                <TableCell>{employee.blood_type}</TableCell>
                <TableCell>{employee.home_address}</TableCell>
                <TableCell>{employee.home_zip_code}</TableCell>
                <TableCell>{employee.home_phone_number}</TableCell>
                <TableCell>{employee.personal_phone_number}</TableCell>
                <TableCell>{employee.personal_email}</TableCell>
                <TableCell>{employee.personal_line_id}</TableCell>
                <TableCell>{employee.driving_license_number}</TableCell>
                <TableCell>{employee.qualifications}</TableCell>
                <TableCell>{employee.last_education}</TableCell>
                <TableCell>{employee.family_info}</TableCell>
                <TableCell>{employee.emergency_contact_info}</TableCell>
                <TableCell>{employee.company_a}</TableCell>
                <TableCell>{employee.company_b}</TableCell>
                <TableCell>{employee.graduate_or_midcareer}</TableCell>
                <TableCell>{employee.midcareer_details}</TableCell>
                <TableCell>{employee.transferred_company}</TableCell>
                <TableCell>{employee.work_location}</TableCell>
                <TableCell>{employee.company_phone_number}</TableCell>
                <TableCell>{employee.company_email}</TableCell>
                <TableCell>{employee.work_accident_procedure_memo}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.team}</TableCell>
                <TableCell>{employee.responsible_person_code}</TableCell>
                <TableCell>{employee.employment_type}</TableCell>
                <TableCell>{employee.employment_contract}</TableCell>
                <TableCell>{employee.employment_category}</TableCell>
                <TableCell>{employee.outsourced_company}</TableCell>
                <TableCell>{employee.outsourced_position}</TableCell>
                <TableCell>{employee.outsourced_employment_type}</TableCell>
                <TableCell>{employee.job_type}</TableCell>
                <TableCell>{employee.personal_number}</TableCell>
                <TableCell>{employee.basic_pension_number}</TableCell>
                <TableCell>{employee.health_insurance_number}</TableCell>
                <TableCell>{employee.health_insurance_date}</TableCell>
                <TableCell>{employee.health_insurance_grade}</TableCell>
                <TableCell>{employee.welfare_pension_number}</TableCell>
                <TableCell>{employee.welfare_pension_date}</TableCell>
                <TableCell>{employee.welfare_pension_grade}</TableCell>
                <TableCell>{employee.employment_insurance_number}</TableCell>
                <TableCell>{employee.employment_insurance_date}</TableCell>
                <TableCell>{employee.salary_transfer_details}</TableCell>
                <TableCell>{employee.bonus_transfer_details}</TableCell>
                <TableCell>{employee.monthly_work_hours}</TableCell>
                <TableCell>{employee.employment_compensation_history}</TableCell>
                <TableCell>{employee.monthly_paid_vacation_days}</TableCell>
                <TableCell>{employee.remaining_paid_vacation_days}</TableCell>
                <TableCell>{employee.monthly_absence_days}</TableCell>
                <TableCell>{employee.late_and_early_leaves}</TableCell>
                <TableCell>{employee.special_paid_vacation_days}</TableCell>
                <TableCell>{employee.commuting_expenses}</TableCell>
                <TableCell>{employee.commuting_method}</TableCell>
                <TableCell>{employee.car_commuting_details}</TableCell>
                <TableCell>{employee.public_transport_details}</TableCell>
                <TableCell>{employee.commuting_time}</TableCell>
                <TableCell>{employee.memo}</TableCell>
                <TableCell>{employee.maternity_leave_period}</TableCell>
                <TableCell>{employee.parental_leave_period}</TableCell>
                <TableCell>{employee.health_check_date}</TableCell>
                <TableCell>{employee.health_check_result}</TableCell>
                <TableCell>{employee.isObligate}</TableCell>
                <TableCell>{employee.profile_image}</TableCell>
                <TableCell>{employee.account}</TableCell>
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
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
} 