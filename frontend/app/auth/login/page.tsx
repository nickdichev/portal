"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { login } from '../actions'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = await login(email, password)
    if (result.success) {
      router.push('/brands')
      router.refresh() // Refresh the current route to update server components
    } else {
      setError('Login failed. Please check your credentials and try again.')
    }
  }

  return (
    <div className="max-w-[1200px] h-screen mx-auto bg-gray-100 p-4">
      <Breadcrumbs items={[{ label: 'login' }]} />

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">login</CardTitle>
        </CardHeader>
        <CardContent>
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
            <div className="space-y-2">
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link href="/auth/forgot-password" className="text-blue-600 hover:underline">
              forgot password?
            </Link>
          </div>
          <div className="mt-2 text-center text-sm">
            don't have an account?{" "}
            <Link href="/auth/register" className="text-blue-600 hover:underline">
              sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}