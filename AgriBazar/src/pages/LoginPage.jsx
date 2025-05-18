import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const LoginPage = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });
  
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const loginSuccess = login({
        id: 'usr-123',
        name: 'John Doe',
        email: data.email,
        company: 'Agri Insurance Co.',
        role: 'Admin'
      });
      
      if (loginSuccess) {
        addToast('Logged in successfully!', 'success');
        navigate('/dashboard');
      } else {
        addToast('Failed to login. Please check your credentials.', 'error');
      }
    } catch (error) {
      addToast('An error occurred during login.', 'error');
    }
  };

  return (
    <div className="relative flex justify-center items-center bg-gradient-to-br from-green-50 dark:from-neutral-900 via-white dark:via-neutral-800 to-emerald-50 dark:to-black px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      <div className="z-0 absolute inset-0">
        <div className="-top-40 -right-40 absolute bg-gradient-to-br from-primary-200/30 dark:from-gray-700 to-secondary-200/20 dark:to-secondary-900/10 blur-3xl rounded-full w-80 h-80"></div>
        <div className="-bottom-40 -left-40 absolute bg-gradient-to-tr to-secondary-200/20 dark:to-secondary-900/70 blur-3xl rounded-full w-80 h-80 from-accent-200/20 dark:from-accent-900/10"></div>
      </div>
      
      <div className="z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <h2 className="font-bold text-gray-900 dark:text-white text-3xl">
            Welcome to 
            <span className="bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 ml-2 text-transparent">
              AgriSure
            </span>
          </h2>
          <p className="mt-2 text-gray-600 dark:text-neutral-400 text-sm">
            Sign in to your insurer account
          </p>
        </div>
        
        <Card variant="glass" className="backdrop-blur-md p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Input
                label="Email Address"
                id="email"
                type="email"
                placeholder="your@email.com"
                icon={<Mail size={18} />}
                autoComplete="username"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid"
                  }
                })}
                error={errors.email?.message}
              />
            </div>
            
            <div className="mb-6">
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
                autoComplete="current-password"
                {...register("password", { 
                  required: "Password is required" 
                })}
                error={errors.password?.message}
              />
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="border-gray-300 rounded focus:ring-primary-500 w-4 h-4 text-primary-600"
                  {...register("rememberMe")}
                />
                <label htmlFor="rememberMe" className="block ml-2 text-gray-600 dark:text-gray-400 text-sm">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500 dark:hover:text-primary-300 dark:text-primary-400">
                  Forgot password?
                </Link>
              </div>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              className="group"
            >
              {isSubmitting ? (
                <span className="flex justify-center items-center">
                  <svg className="mr-2 -ml-1 w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center">
                  Sign in
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </form>
          
          <p className="mt-6 text-gray-500 dark:text-neutral-400 text-sm text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500 dark:hover:text-neutral-300">
              Sign up now
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;