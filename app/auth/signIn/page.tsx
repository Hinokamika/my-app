import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Brain, Github, RectangleGoggles } from "lucide-react"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFDEFB]">
      <div className="w-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Brain className="w-6 h-6 mr-2 text-purple-600" />
          <h2 className="text-2xl font-bold tracking-tight">
            Content Generator
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <p>Don't have an account?</p>
          <Link href="/auth/signUp" className="ml-2 text-purple-600">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center">
        <Card className="w-full max-w-sm border-b-6 border-b-[#230FFF]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
            <CardDescription className="text-balance text-[15px]">
              Enter your details to access your AI workspace
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-purple-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full bg-purple-600 dark:bg-white text-white dark:text-black">
              Sign In
            </Button>
            <div className="relative my-2 w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Github />
              Login with Github
            </Button>
            <Button variant="outline" className="w-full">
            <RectangleGoggles />
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}