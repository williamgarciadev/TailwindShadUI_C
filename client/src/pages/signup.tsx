import * as React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useAuth } from "../contexts/auth-context";
import { motion } from "framer-motion";

export function SignupPage() {
  const { signup, isLoading } = useAuth();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Hero section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Start your journey<br />with us today
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Create your account and unlock powerful tools to build, ship, and scale your products.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Free 14-day trial, no credit card required</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Access to all premium features</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">24/7 customer support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side - Signup form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create account</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Get started with your free account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Full name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-11 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-500"
              />
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Must be at least 8 characters long
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium shadow-lg shadow-purple-500/50 transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300">
                Sign in
              </Link>
            </p>
          </div>

          {/* Terms */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-center text-gray-500 dark:text-gray-500">
              By creating an account, you agree to our{" "}
              <Link to="#" className="underline hover:text-gray-700 dark:hover:text-gray-300">Terms of Service</Link>
              {" "}and{" "}
              <Link to="#" className="underline hover:text-gray-700 dark:hover:text-gray-300">Privacy Policy</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
