"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Breadcrumbs from '@/components/ui/breadcrumbs'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the forgot password logic
    console.log('Forgot password requested for:', email)
    setSubmitted(true)
  }

  return (
    <div className="max-w-[1200px] h-screen mx-auto bg-gray-100 p-4">
      <Breadcrumbs items={[{ label: 'forgot password' }]} />

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">forgot password</CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                reset password
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p>if an account exists with the email {email}, you will receive a password reset link shortly.</p>
            </div>
          )}
          <div className="mt-4 text-center text-sm">
            remember your password?{" "}
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}