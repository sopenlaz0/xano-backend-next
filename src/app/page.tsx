import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Employee Management System</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            A modern employee management system built with Next.js and Xano.
          </p>
          <Button asChild>
            <Link href="/employees">View Employees</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
