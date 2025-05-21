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

export function OutsourcedPartnerForm() {
  const form = useFormContext<EmployeeFormValues>()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Outsourced Partner Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="outsourced_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Outsourced Company</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="outsourced_position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Outsourced Position</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="outsourced_joining_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Outsourced Joining Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="outsourced_contract_end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Outsourced Contract End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
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