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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmployeeFormValues } from "@/components/employees/employee-form"
import { Button } from "@/components/ui/button"

interface FamilyMember {
  nameFurigana: string
  relationship: string
  occupation: string
  gender: string
  birthDate: string
  phoneNumber: string
  error?: string
}

interface BasicFormProps {
  familyMembers: Array<{
    nameFurigana: string
    relationship: string
    occupation: string
    gender: string
    birthDate: string
    phoneNumber: string
    error?: string
  }>
  setFamilyMembers: React.Dispatch<React.SetStateAction<Array<{
    nameFurigana: string
    relationship: string
    occupation: string
    gender: string
    birthDate: string
    phoneNumber: string
    error?: string
  }>>>
  disabled?: boolean
  onEmploymentCategoryChange?: (category: "employee" | "partner") => void
}

export function BasicForm({ familyMembers, setFamilyMembers, disabled = false, onEmploymentCategoryChange }: BasicFormProps) {
  const form = useFormContext<EmployeeFormValues>()

  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, {
      nameFurigana: "",
      relationship: "",
      occupation: "",
      gender: "",
      birthDate: "",
      phoneNumber: ""
    }])
  }

  const removeFamilyMember = (index: number) => {
    setFamilyMembers(familyMembers.filter((_, i) => i !== index))
  }

  const updateFamilyMember = (index: number, field: keyof FamilyMember, value: string) => {
    const updatedMembers = [...familyMembers]
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setFamilyMembers(updatedMembers)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="employment_category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employment Category</FormLabel>
                <Select 
                  onValueChange={(value) => {
                    field.onChange(value)
                    onEmploymentCategoryChange?.(value as "employee" | "partner")
                  }} 
                  defaultValue="employee" 
                  disabled={disabled}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="partner">Partner</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employee_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee ID</FormLabel>
                <FormControl>
                  <Input type="number" {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_kanji"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name (Kanji)</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_furigana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name (Furigana)</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_english"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name (English)</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_alias"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name (Alias)</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birth_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birth Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="home_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Home Address</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="home_zip_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="home_phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Home Phone</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personal_phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal Phone</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personal_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personal_line_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LINE ID</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="driving_license_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Driving License</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="qualifications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qualifications</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_education"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Education</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Family Members Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-medium mb-4">Family Members</h3>
            {familyMembers.map((member, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-4 p-4 border rounded">
                <FormItem>
                  <FormLabel>Name (Furigana)</FormLabel>
                  <FormControl>
                    <Input
                      value={member.nameFurigana}
                      onChange={(e) => updateFamilyMember(index, "nameFurigana", e.target.value)}
                      disabled={disabled}
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel>Relationship</FormLabel>
                  <FormControl>
                    <Input
                      value={member.relationship}
                      onChange={(e) => updateFamilyMember(index, "relationship", e.target.value)}
                      disabled={disabled}
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input
                      value={member.occupation}
                      onChange={(e) => updateFamilyMember(index, "occupation", e.target.value)}
                      disabled={disabled}
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    value={member.gender}
                    onValueChange={(value) => updateFamilyMember(index, "gender", value)}
                    disabled={disabled}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
                <FormItem>
                  <FormLabel>Birth Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={member.birthDate}
                      onChange={(e) => updateFamilyMember(index, "birthDate", e.target.value)}
                      disabled={disabled}
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      value={member.phoneNumber}
                      onChange={(e) => updateFamilyMember(index, "phoneNumber", e.target.value)}
                      disabled={disabled}
                    />
                  </FormControl>
                </FormItem>
                <div className="col-span-2 flex justify-end">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeFamilyMember(index)}
                    disabled={disabled}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addFamilyMember}
              className="mt-4"
              disabled={disabled}
            >
              Add Family Member
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 