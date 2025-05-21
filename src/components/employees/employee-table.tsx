"use client"

import { Employee } from "@/services/api"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useLanguage } from "@/lib/language-context"

interface EmployeeTableProps {
  employees: Employee[]
  onEdit: (employee: Employee) => void
  onDelete: (employee: Employee) => void
}

export function EmployeeTable({ employees, onEdit, onDelete }: EmployeeTableProps) {
  const { translations } = useLanguage()

  return (
    <div className="relative">
      <ScrollArea className="w-full">
        <div className="flex">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{translations.employee_id}</TableHead>
                <TableHead>{translations.name_kanji}</TableHead>
                <TableHead>{translations.name_furigana}</TableHead>
                <TableHead>{translations.name_english}</TableHead>
                <TableHead>{translations.name_alias}</TableHead>
                <TableHead>{translations.gender}</TableHead>
                <TableHead>{translations.birth_date}</TableHead>
                <TableHead>{translations.joining_date}</TableHead>
                <TableHead>{translations.retirement_date}</TableHead>
                <TableHead>{translations.blood_type}</TableHead>
                <TableHead>{translations.home_address}</TableHead>
                <TableHead>{translations.home_zip_code}</TableHead>
                <TableHead>{translations.home_phone_number}</TableHead>
                <TableHead>{translations.personal_phone_number}</TableHead>
                <TableHead>{translations.personal_email}</TableHead>
                <TableHead>{translations.personal_line_id}</TableHead>
                <TableHead>{translations.driving_license_number}</TableHead>
                <TableHead>{translations.qualifications}</TableHead>
                <TableHead>{translations.last_education}</TableHead>
                <TableHead>{translations.family_info}</TableHead>
                <TableHead>{translations.emergency_contact_info}</TableHead>
                <TableHead>{translations.company_a}</TableHead>
                <TableHead>{translations.company_b}</TableHead>
                <TableHead>{translations.graduate_or_midcareer}</TableHead>
                <TableHead>{translations.midcareer_details}</TableHead>
                <TableHead>{translations.transferred_company}</TableHead>
                <TableHead>{translations.work_location}</TableHead>
                <TableHead>{translations.company_phone_number}</TableHead>
                <TableHead>{translations.company_email}</TableHead>
                <TableHead>{translations.work_accident_procedure_memo}</TableHead>
                <TableHead>{translations.position}</TableHead>
                <TableHead>{translations.team}</TableHead>
                <TableHead>{translations.responsible_person_code}</TableHead>
                <TableHead>{translations.employment_type}</TableHead>
                <TableHead>{translations.employmentContract}</TableHead>
                <TableHead>{translations.employment_category}</TableHead>
                <TableHead>{translations.outsourced_company}</TableHead>
                <TableHead>{translations.outsourced_position}</TableHead>
                <TableHead>{translations.outsourced_employment_type}</TableHead>
                <TableHead>{translations.job_type}</TableHead>
                <TableHead>{translations.personal_number}</TableHead>
                <TableHead>{translations.basic_pension_number}</TableHead>
                <TableHead>{translations.health_insurance_number}</TableHead>
                <TableHead>{translations.health_insurance_date}</TableHead>
                <TableHead>{translations.health_insurance_grade}</TableHead>
                <TableHead>{translations.welfare_pension_number}</TableHead>
                <TableHead>{translations.welfare_pension_date}</TableHead>
                <TableHead>{translations.welfare_pension_grade}</TableHead>
                <TableHead>{translations.employment_insurance_number}</TableHead>
                <TableHead>{translations.employment_insurance_date}</TableHead>
                <TableHead>{translations.salary_transfer_details}</TableHead>
                <TableHead>{translations.bonus_transfer_details}</TableHead>
                <TableHead>{translations.employment_compensation_history}</TableHead>
                <TableHead>{translations.commuting_method}</TableHead>
                <TableHead>{translations.maternity_leave_period}</TableHead>
                <TableHead>{translations.parental_leave_period}</TableHead>
                <TableHead>{translations.memo}</TableHead>
                <TableHead>{translations.isObligate}</TableHead>
                <TableHead>{translations.profile_image}</TableHead>
                <TableHead>{translations.account}</TableHead>
                <TableHead className="sticky right-0 bg-background z-10 text-right shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.1)]">{translations.action}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
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
                  <TableCell>{employee.employment_compensation_history}</TableCell>
                  <TableCell>{employee.commuting_method}</TableCell>
                  <TableCell>{employee.maternity_leave_period}</TableCell>
                  <TableCell>{employee.parental_leave_period}</TableCell>
                  <TableCell>{employee.memo}</TableCell>
                  <TableCell>{employee.isObligate ? translations.yes : translations.no}</TableCell>
                  <TableCell>{employee.profile_image}</TableCell>
                  <TableCell>{employee.account}</TableCell>
                  <TableCell className="sticky right-0 bg-background z-10 text-right shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit(employee)}
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete(employee)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
} 