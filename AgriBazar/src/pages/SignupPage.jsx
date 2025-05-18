import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Briefcase, Lock, Check, Upload, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const SignupPage = () => {
  const [logoPreview, setLogoPreview] = useState(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    setValue
  } = useForm({
    defaultValues: {
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      licenseNo: '',
      logo: null,
      password: '',
      confirmPassword: '',
      acceptTerms: false
    }
  });
  
  const { signup } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  // Watch password for confirm validation
  const password = watch('password');

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('logo', file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const signupSuccess = signup({
        id: 'usr-' + Math.floor(Math.random() * 1000),
        name: data.contactPerson,
        email: data.email,
        company: data.companyName,
        role: 'Admin'
      });
      
      if (signupSuccess) {
        addToast('Account created successfully!', 'success');
        navigate('/dashboard');
      } else {
        addToast('Failed to create account. Please try again.', 'error');
      }
    } catch (error) {
      addToast('An error occurred during signup.', 'error');
    }
  };

  return (
    <div className="relative flex justify-center items-center bg-gradient-to-br from-green-50 dark:from-neutral-900 via-white dark:via-neutral-800 to-emerald-50 dark:to-black px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      <div className="z-0 absolute inset-0">
        <div className="-top-40 -right-40 absolute bg-gradient-to-br from-primary-200/30 dark:from-primary-900/20 to-secondary-200/20 dark:to-secondary-900/10 blur-3xl rounded-full w-80 h-80"></div>
        <div className="-bottom-40 -left-40 absolute bg-gradient-to-tr to-secondary-200/20 dark:to-secondary-900/10 blur-3xl rounded-full w-80 h-80 from-accent-200/20 dark:from-accent-900/10"></div>
      </div>
      
      <div className="z-10 w-full max-w-xl">
        <div className="mb-8 text-center">
          <h2 className="font-bold text-gray-900 dark:text-white text-3xl">
            Join
            <span className="bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 ml-2 text-transparent">
              AgriSure
            </span>
          </h2>
          <p className="mt-2 text-gray-600 dark:text-neutral-400 text-sm">
            Create your insurer account
          </p>
        </div>
        
        <Card variant="glass" className="backdrop-blur-md p-8 border border-white/30 dark:border-gray-700/30">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <Input
                label="Company Name"
                id="companyName"
                type="text"
                placeholder="Your Insurance Company"
                icon={<Briefcase size={18} />}
                {...register("companyName", { 
                  required: "Company name is required" 
                })}
                error={errors.companyName?.message}
              />
              
              <Input
                label="Contact Person"
                id="contactPerson"
                type="text"
                placeholder="Full Name"
                icon={<User size={18} />}
                {...register("contactPerson", { 
                  required: "Contact person is required" 
                })}
                error={errors.contactPerson?.message}
              />
              
              <Input
                label="Email Address"
                id="email"
                type="email"
                placeholder="company@example.com"
                icon={<Mail size={18} />}
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid"
                  }
                })}
                error={errors.email?.message}
              />
              
              <Input
                label="Phone Number"
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                icon={<Phone size={18} />}
                {...register("phone", { 
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Phone number is invalid"
                  }
                })}
                error={errors.phone?.message}
              />
              
              <Input
                label="Insurance License Number"
                id="licenseNo"
                type="text"
                placeholder="License Number"
                icon={<Check size={18} />}
                {...register("licenseNo", { 
                  required: "License number is required" 
                })}
                error={errors.licenseNo?.message}
              />
              
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200 text-sm">
                  Company Logo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-gray-100 dark:bg-gray-700 rounded-md w-16 h-16 overflow-hidden">
                    {logoPreview ? (
                      <img 
                        src={logoPreview} 
                        alt="Logo Preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Briefcase className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="logo" className="cursor-pointer">
                      <div className="flex items-center space-x-2 text-primary-600 hover:text-primary-500 dark:hover:text-primary-300 dark:text-primary-400 text-sm">
                        <Upload size={18} />
                        <span>Upload Company Logo</span>
                      </div>
                      <p className="mt-1 text-gray-500 dark:text-gray-400 text-xs">
                        PNG, JPG up to 1MB
                      </p>
                    </label>
                    <input 
                      id="logo"
                      type="file"
                      className="hidden"
                      accept="image/png, image/jpeg"
                      onChange={handleLogoChange}
                    />
                  </div>
                </div>
              </div>
              
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                error={errors.password?.message}
              />
              
              <Input
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
                {...register("confirmPassword", { 
                  required: "Please confirm your password",
                  validate: value => value === password || "Passwords don't match"
                })}
                error={errors.confirmPassword?.message}
              />
              
              <div className="md:col-span-2 mt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      type="checkbox"
                      className="border-gray-300 rounded focus:ring-primary-500 w-4 h-4 text-primary-600"
                      {...register("acceptTerms", { 
                        required: "You must accept the terms and conditions" 
                      })}
                    />
                  </div>
                  <label htmlFor="acceptTerms" className="ml-2 font-medium text-gray-700 dark:text-gray-200">
                    I accept the <a href="#" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">Terms and Conditions</a>
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="mt-1 text-error-500 text-sm">{errors.acceptTerms.message}</p>
                )}
              </div>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              className="group mt-6"
            >
              {isSubmitting ? (
                <span className="flex justify-center items-center">
                  <svg className="mr-2 -ml-1 w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center">
                  Create Account
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </form>
          
          <p className="mt-6 text-gray-500 dark:text-neutral-400 text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500 dark:hover:text-neutral-300">
              Sign in now
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;