"use client"

import { useFormContext } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmployeeFormValues } from "@/components/employees/employee-form"

interface WelfareFormProps {
  disabled?: boolean
}

export function WelfareForm({ disabled = false }: WelfareFormProps) {
  const form = useFormContext<EmployeeFormValues>()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welfare & Insurance Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="basic_pension_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Basic Pension Number</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="welfare_pension_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Welfare Pension Number</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="welfare_pension_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Welfare Pension Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="welfare_pension_grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Welfare Pension Grade</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="health_insurance_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Health Insurance Number</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="health_insurance_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Health Insurance Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="health_insurance_grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Health Insurance Grade</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employment_insurance_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employment Insurance Number</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employment_insurance_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employment Insurance Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employment_compensation_history"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employment Compensation History</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
} 