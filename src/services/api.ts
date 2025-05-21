const API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) {
  console.error('NEXT_PUBLIC_API_URL is not set in environment variables')
}

export interface Employee {
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

export const api = {
  async getEmployees(): Promise<Employee[]> {
    try {
      console.log('Fetching employees from:', `${API_URL}/employees`)
      const response = await fetch(`${API_URL}/employees`)
      if (!response.ok) {
        console.error('Failed to fetch employees:', response.status, response.statusText)
        throw new Error('Failed to fetch employees')
      }
      return response.json()
    } catch (error) {
      console.error('Error in getEmployees:', error)
      throw error
    }
  },

  async createEmployee(data: Omit<Employee, "id" | "data_type" | "updated_at">): Promise<Employee> {
    try {
      console.log('Creating employee:', data)
      const response = await fetch(`${API_URL}/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          data_type: "Employee",
          updated_at: Date.now()
        }),
      })
      if (!response.ok) {
        console.error('Failed to create employee:', response.status, response.statusText)
        throw new Error('Failed to create employee')
      }
      return response.json()
    } catch (error) {
      console.error('Error in createEmployee:', error)
      throw error
    }
  },

  async updateEmployee(id: number, data: Omit<Employee, "id" | "data_type" | "updated_at">): Promise<Employee> {
    try {
      if (!API_URL) {
        throw new Error('API_URL is not defined')
      }

      console.log('Updating employee:', id, data)
      const endpoint = `${API_URL}/employees/${id}`
      console.log('API URL:', endpoint)
      
      const requestBody = {
        ...data,
        data_type: "Employee",
        updated_at: Date.now()
      }
      console.log('Request body:', requestBody)

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Failed to update employee:', {
          status: response.status,
          statusText: response.statusText,
          errorText
        })
        throw new Error(`Failed to update employee: ${response.status} ${response.statusText}`)
      }
      
      const result = await response.json()
      console.log('Update successful:', result)
      return result
    } catch (error) {
      console.error('Error in updateEmployee:', error)
      throw error
    }
  },

  async deleteEmployee(id: number): Promise<void> {
    try {
      console.log('Deleting employee:', id)
      const response = await fetch(`${API_URL}/employees/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        console.error('Failed to delete employee:', response.status, response.statusText)
        throw new Error('Failed to delete employee')
      }
    } catch (error) {
      console.error('Error in deleteEmployee:', error)
      throw error
    }
  }
} 