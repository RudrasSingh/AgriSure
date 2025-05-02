import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Dropdown from "../components/Dropdown";
import LoadingSpinner from "../components/LoadingSpinner";
import ProgressTracker from "../components/ProgressTracker";
import { Check, Upload } from "lucide-react";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [signupComplete, setSignupComplete] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    language_pref: "",
    aadhaar_number: "",
    landDocument: null,
    upi_id: "",
  });

  const [errors, setErrors] = useState({});

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "marathi", label: "Marathi" },
    { value: "gujarati", label: "Gujarati" },
    { value: "punjabi", label: "Punjabi" },
    { value: "tamil", label: "Tamil" },
    { value: "telugu", label: "Telugu" },
    { value: "kannada", label: "Kannada" },
    { value: "malayalam", label: "Malayalam" },
    { value: "bengali", label: "Bengali" },
  ];

  const steps = [
    "Personal Details",
    "Document Upload",
    "Confirmation",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "landDocument" && files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateStep = () => {
    let isValid = true;
    const newErrors = {};

    if (step === 1) {
      if (!formData.full_name.trim()) {
        newErrors.full_name = "Full name is required";
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
        isValid = false;
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
        isValid = false;
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        isValid = false;
      }

      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
        isValid = false;
      } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid 10-digit mobile number";
        isValid = false;
      }

      if (!formData.aadhaar_number) {
        newErrors.aadhaar = "Aadhaar number is required";
        isValid = false;
      } else if (!/^\d{12}$/.test(formData.aadhaar_number)) {
        newErrors.aadhaar = "Please enter a valid 12-digit Aadhaar number";
        isValid = false;
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
        isValid = false;
      }
      
      if (!formData.upi_id.trim()) {
        newErrors.upi_id = "UPI ID is required";
        isValid = false;
      }

      if (!formData.language_pref) {
        newErrors.language = "Please select your preferred language";
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.landDocument) {
        newErrors.landDocument = "Please upload your land document";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = () => {
    setIsLoading(true);

    // Create FormData object to handle file upload
    const submissionData = new FormData();

    // Add all form fields
    submissionData.append("full_name", formData.full_name);
    submissionData.append("email", formData.email);
    submissionData.append("password", formData.password);
    submissionData.append("phone", formData.phone);
    submissionData.append("address", formData.address);
    submissionData.append("language", formData.language_pref);
    submissionData.append("aadhaar", formData.aadhaar_number);
    submissionData.append("upi_id", formData.upi_id);

    // Add file if it exists
    if (formData.landDocument) {
      submissionData.append("landDocument", formData.landDocument);
    }

    // Log the form data for development purposes
    for (let pair of submissionData.entries()) {
      console.log(pair[0], pair[1]); // Prints key-value pairs
    }
   
    // Here you would normally submit the form data to your backend API
    // For example:
    // fetch('https://your-api.com/signup', {
    //   method: 'POST',
    //   body: submissionData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setIsLoading(false);
    //   setSignupComplete(true);
    //   setStep(step + 1);
    // })
    // .catch(error => {
    //   console.error('Error submitting form:', error);
    //   setIsLoading(false);
    //   setErrors({...errors, submit: 'Failed to submit form. Please try again.'});
    // });

    // handleSignup(submissionData);
  };
  
  const handleSignup = async (submissionData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/farmer/signup`,
      submissionData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response from server:", response.data);
  };

  const handleAadharVerification = () => {
    // Simulate Aadhaar verification
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step === 1) {
        if (!handleAadharVerification()) {
          setErrors({ ...errors, aadhaar: "Invalid Aadhaar number" });
          return;
        }
      }
      if (step === 2) {
        // Handle final step submission
        setIsLoading(true);
        submitForm();

        // Simulate form submission
        setTimeout(() => {
          setIsLoading(false);
          setSignupComplete(true);
          setStep(step + 1);
        }, 1500);
      } else {
        setStep(step + 1);
      }
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "application/pdf") {
        setFormData({ ...formData, landDocument: file });
        setUploadComplete(true);
        setErrors({ ...errors, landDocument: "" });
      } else {
        setErrors({ ...errors, landDocument: "Please upload a PDF file" });
      }
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="mb-6 font-semibold text-gray-900 dark:text-neutral-100 text-xl">
              Personal Details
            </h2>
            <FormInput
              label="Full Name"
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              value={formData.full_name}
              onChange={handleChange}
              error={errors.full_name}
              required
            />
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            <FormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
            <FormInput
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="Enter your 10-digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />
            <FormInput
              label="Aadhaar Number"
              type="text"
              name="aadhaar"
              placeholder="Enter your 12-digit Aadhaar number"
              value={formData.aadhaar_number}
              onChange={handleChange}
              error={errors.aadhaar}
              required
            />
            <FormInput
              label="Address"
              type="text"
              name="address"
              placeholder="Enter your full address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
              required
            />
            <FormInput
              label="UPI ID"
              type="text"
              name="upi_id"
              placeholder="Enter your UPI ID"
              value={formData.upi_id}
              onChange={handleChange}
              error={errors.upi_id}
              required
            />
            <Dropdown
              label="Preferred Language"
              name="language"
              options={languageOptions}
              value={formData.language_pref}
              onChange={handleChange}
              error={errors.language}
              required
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="mb-6 font-semibold text-gray-900 dark:text-neutral-100 text-xl">
              Upload Land Document
            </h2>
            <div className="mb-6">
              <label className="block mb-1 font-medium text-gray-700 dark:text-neutral-300 text-sm">
                Land Document (PDF)
              </label>
              <div
                className={`border-2 border-dashed ${
                  errors.landDocument
                    ? "border-red-300 dark:border-red-700"
                    : "border-gray-300 dark:border-neutral-600"
                } rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800/50`}
              >
                <input
                  type="file"
                  id="landDocument"
                  name="landDocument"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label htmlFor="landDocument" className="cursor-pointer">
                  {uploadComplete ? (
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center items-center bg-green-100 dark:bg-green-900/50 mb-2 rounded-full w-12 h-12">
                        <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="font-medium text-green-600 dark:text-green-400 text-sm">
                        {formData.landDocument?.name}
                      </span>
                      <span className="mt-1 text-gray-500 dark:text-neutral-400 text-xs">
                        Click to replace file
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="mx-auto w-12 h-12 text-gray-400 dark:text-neutral-500" />
                      <p className="mt-2 text-gray-700 dark:text-neutral-300 text-sm">
                        <span className="font-medium text-green-600 dark:text-green-400">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="mt-1 text-gray-500 dark:text-neutral-400 text-xs">
                        PDF file only (max 5MB)
                      </p>
                    </div>
                  )}
                </label>
              </div>
              {errors.landDocument && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                  {errors.landDocument}
                </p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="mb-6 font-semibold text-gray-900 dark:text-neutral-100 text-xl">
              Registration Complete, Wait for Document Verification
            </h2>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="flex justify-center items-center bg-green-100 dark:bg-green-900/50 rounded-full w-16 h-16">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="mb-2 font-medium text-green-800 dark:text-green-200 text-lg text-center">
                Your account has been successfully created! wait 24hrs for
                document verification
              </h3>
              <p className="mb-6 text-gray-600 dark:text-neutral-300 text-center">
                Thank you for registering with us. Your details have been
                submitted successfully.
              </p>
              <div className="bg-white/50 dark:bg-neutral-700/50 mb-4 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-neutral-300">
                    Name:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-neutral-100">
                    {formData.full_name}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-neutral-300">
                    Email:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-neutral-100">
                    {formData.email}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-neutral-300">
                    Phone:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-neutral-100">
                    {formData.phone}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-neutral-300">
                    Aadhaar:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-neutral-100">
                    {formData.aadhaar_number.substring(0, 4) +
                      "XXXX" +
                      formData.aadhaar_number.substring(8)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-neutral-300">
                    Document:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-neutral-100">
                    {formData.landDocument?.name || "Document uploaded"}
                  </span>
                </div>
              </div>
              <Button
                onClick={() => {
                  navigate("/login");
                }}
                fullWidth
                className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Go to Login Page
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gradient-to-br from-green-50 dark:from-neutral-900 via-white dark:via-neutral-800 to-emerald-50 dark:to-neutral-950 pt-24 pb-10">
        <div className="relative flex justify-center items-start min-h-screen overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="top-0 left-0 absolute bg-green-100 dark:bg-neutral-800 opacity-10 dark:opacity-10 blur-xl rounded-full w-96 h-96 animate-blob mix-blend-multiply filter"></div>
            <div className="top-0 right-0 absolute bg-emerald-100 dark:bg-neutral-800 opacity-20 dark:opacity-10 blur-xl rounded-full w-96 h-96 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
            <div className="-bottom-8 left-20 absolute bg-lime-100 dark:bg-neutral-800 opacity-20 dark:opacity-10 blur-xl rounded-full w-96 h-96 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
          </div>

          <div className="z-10 relative mx-auto px-4 container">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-8 font-bold text-gray-900 dark:text-neutral-100 text-3xl text-center">
                Create Your Account
              </h1>
              <ProgressTracker steps={steps} currentStep={step} />
              <div className="bg-white/80 dark:bg-neutral-800/80 shadow-lg backdrop-blur-sm mb-8 p-6 rounded-lg">
                {renderStepContent()}
                {step < 3 && (
                  <div className="flex justify-between mt-6">
                    {step > 1 && (
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        className="hover:bg-green-50 dark:hover:bg-neutral-700 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      onClick={nextStep}
                      disabled={isLoading}
                      className={`${
                        step === 1 || (step > 1 && step < 3) ? "ml-auto" : ""
                      } bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600`}
                    >
                      {isLoading ? (
                        <div className="flex justify-center items-center">
                          <LoadingSpinner size="sm" className="mr-2" />
                          <span>Processing...</span>
                        </div>
                      ) : step === 2 ? (
                        "Complete Registration"
                      ) : (
                        "Next"
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;