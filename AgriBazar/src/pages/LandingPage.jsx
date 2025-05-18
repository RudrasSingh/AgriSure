import React from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Shield,
  BarChart2,
  Lock,
  Package,
  DollarSign,
  Layers,
  PieChart,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { subscriptionPlans, testimonials } from "../data/mockData";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          {/* Blurry Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 dark:from-neutral-800 via-purple-300 dark:via-neutral-700 to-pink-200 dark:to-neutral-900 opacity-50 blur-2xl"></div>
          {/* Blob Shapes */}
          <div className="top-10 left-10 absolute bg-pink-300 dark:bg-pink-600 opacity-70 blur-3xl rounded-full w-72 h-72 animate-blob mix-blend-multiply filter"></div>
          <div className="top-20 right-20 absolute bg-purple-300 dark:bg-violet-400 opacity-70 blur-3xl rounded-full w-96 h-96 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
          <div className="bottom-10 left-20 absolute bg-blue-300 dark:bg-blue-600 opacity-70 blur-3xl rounded-full w-80 h-80 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
        </div>

        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center gap-12 mx-auto w-9/12 text-center">
            {/* <div className="w-1/2"> */}
            <h1 className="font-bold text-gray-900 dark:text-white text-4xl md:text-5xl leading-tight">
              Empower Your Insurance Business with{" "}
              <span className="bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent">
                AgriSure
              </span>
            </h1>
            <p className="mt-6 text-gray-600 dark:text-gray-300 text-xl">
              Connect with farmers, offer tailored crop insurance, and grow your
              reach through our innovative blockchain-enabled platform.
            </p>
            <div className="flex sm:flex-row flex-col gap-4 mt-8">
              <Link to="/signup">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#subscription-plans">
                <Button variant="outline" size="lg">
                  View Subscription Plans
                </Button>
              </a>
            </div>
            {/* </div> */}

            {/* <div className="flex-1">
              <img 
                src="https://images.pexels.com/photos/5980755/pexels-photo-5980755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Farming and Technology" 
                className="shadow-2xl rounded-2xl w-full h-96 md:h-auto object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-white dark:bg-neutral-900 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-gray-900 dark:text-white text-3xl">
              Why Choose{" "}
              <span className="bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent">
                AgriSure
              </span>
              ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-neutral-400 text-lg">
              Our platform offers comprehensive tools for insurance providers to
              streamline operations and expand market reach.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            <Card
              variant="glass"
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center bg-primary-100 dark:bg-primary-900/30 mb-4 rounded-full w-12 h-12">
                <Package className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-xl">
                Seamless Farmer Onboarding
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Simplify the enrollment process with intuitive interfaces and
                automated verification.
              </p>
            </Card>

            <Card
              variant="glass"
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center bg-secondary-100 dark:bg-secondary-900/30 mb-4 rounded-full w-12 h-12">
                <BarChart2 className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-xl">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Access detailed insights into policy performance, claim
                patterns, and market trends.
              </p>
            </Card>

            <Card
              variant="glass"
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center mb-4 rounded-full w-12 h-12 bg-accent-100 dark:bg-accent-900/30">
                <Lock className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-xl">
                Secure Blockchain Transactions
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Ensure transparency and trust with blockchain-backed policies
                and claims.
              </p>
            </Card>

            <Card
              variant="glass"
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center bg-success-100 dark:bg-success-900/30 mb-4 rounded-full w-12 h-12">
                <Shield className="w-6 h-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-xl">
                Customizable Insurance Packages
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Design and deploy tailored insurance solutions for different
                crops and regions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="bg-gradient-to-br from-green-50 dark:from-neutral-900 via-white dark:via-neutral-800 to-emerald-50 dark:to-black py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-gray-900 dark:text-white text-3xl">
              Our Partnership Model
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-neutral-400 text-lg">
              AgriSure offers a transparent and mutually beneficial business
              model for insurance partners.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-3 mb-12">
            <Card
              variant="glass"
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center bg-primary-100 dark:bg-primary-900/30 mb-4 rounded-full w-12 h-12">
                <DollarSign className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-xl">
                Listing Fee
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Pay a small fee for each insurance package listed on our
                platform. Reach thousands of farmers with each listing.
              </p>
            </Card>

            <Card
              variant="glass"
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center bg-secondary-100 dark:bg-secondary-900/30 mb-4 rounded-full w-12 h-12">
                <Layers className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-xl">
                Subscription Tiers
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Choose from flexible subscription plans based on your business
                size and needs. Upgrade anytime as you grow.
              </p>
            </Card>

            <Card
              variant="glass"
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center bg-success-100 dark:bg-success-900/30 mb-4 rounded-full w-12 h-12">
                <PieChart className="w-6 h-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-xl">
                Revenue Sharing
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Transparent commission structure on policies sold through our
                platform, with competitive rates for insurance providers.
              </p>
            </Card>
          </div>

          <div className="bg-white/5 dark:bg-neutral-900/40 shadow-2xl backdrop-blur-md p-8 border border-white/10 rounded-2xl text-center">
            <h3 className="mb-6 font-bold text-gray-900 dark:text-white text-3xl">
              How It Works
            </h3>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-5">
              <div className="flex flex-col items-center md:col-span-1">
                <div className="flex justify-center items-center bg-primary-100 dark:bg-primary-900/30 mb-2 rounded-full w-16 h-16 font-bold text-primary-600 dark:text-primary-400 text-xl">
                  1
                </div>
                <p className="font-medium text-gray-900 dark:text-white text-center">
                  You Sign Up
                </p>
              </div>

              <div className="relative flex justify-center items-center md:col-span-1">
                <div className="top-[30%] absolute bg-primary-200 dark:bg-primary-700 w-full h-1"></div>
              </div>

              <div className="flex flex-col items-center md:col-span-1">
                <div className="flex justify-center items-center bg-primary-100 dark:bg-primary-900/30 mb-2 rounded-full w-16 h-16 font-bold text-primary-600 dark:text-primary-400 text-xl">
                  2
                </div>
                <p className="font-medium text-gray-900 dark:text-white text-center">
                  Create Packages
                </p>
              </div>

              <div className="relative flex justify-center items-center md:col-span-1">
                <div className="top-[30%] absolute bg-primary-200 dark:bg-primary-700 w-full h-1"></div>
              </div>

              <div className="flex flex-col items-center md:col-span-1">
                <div className="flex justify-center items-center bg-primary-100 dark:bg-primary-900/30 mb-2 rounded-full w-16 h-16 font-bold text-primary-600 dark:text-primary-400 text-xl">
                  3
                </div>
                <p className="font-medium text-gray-900 dark:text-white text-center">
                  Farmers Enroll
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section
        id="subscription-plans"
        className="bg-white dark:bg-neutral-900 py-16"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-gray-900 dark:text-white text-3xl">
              Flexible Plans for Every Insurer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-neutral-400 text-lg">
              Choose the plan that fits your business needs and scale as you
              grow.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-3">
            {subscriptionPlans.map((plan) => (
              <div key={plan.id} className="relative flex flex-col">
                {plan.isPopular && (
                  <div className="top-0 z-10 absolute inset-x-0 flex justify-center -translate-y-1/2 transform">
                    <span className="inline-flex bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-1 rounded-full font-semibold text-white text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <Card
                  variant={plan.isPopular ? "gradient" : "glass"}
                  className={`p-6 flex-grow flex flex-col justify-between ${
                    plan.isPopular
                      ? "ring-2 ring-primary-500 dark:ring-primary-400"
                      : ""
                  }`}
                >
                  <h3 className="font-bold text-gray-900 dark:text-white text-2xl">
                    {plan.name}
                  </h3>
                  <p className="flex items-baseline mt-4 text-gray-900 dark:text-white">
                    <span className="font-extrabold text-4xl tracking-tight">
                      {plan.price}
                    </span>
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                    {plan.description}
                  </p>

                  <ul className="space-y-4 mt-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <Check className="flex-shrink-0 w-5 h-5 text-success-500 dark:text-success-400" />
                        <span className="ml-3 text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link to="/signup">
                      <Button
                        variant={plan.isPopular ? "primary" : "outline"}
                        fullWidth
                        className={plan.isPopular ? "shadow-lg" : ""}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 dark:bg-neutral-800 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-gray-900 dark:text-white text-3xl">
              Trusted by Leading Insurers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-neutral-400 text-lg">
              See what our partners have to say about AgriSure.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} variant="glass" className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-medium text-gray-900 dark:text-white text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-neutral-300 italic">
                  {testimonial.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="font-bold text-3xl">Ready to Expand Your Reach?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 text-lg">
            Experience seamless integration with our growing farmer network and
            start offering your insurance products today.
          </p>
          <div className="mt-8">
            <Link to="/signup">
              <Button
                variant="glass"
                size="lg"
                className="hover:bg-white/20 border-white/20 font-semibold text-white"
              >
                Join AgriSure Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-900 pt-12 pb-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="font-semibold text-gray-400 dark:text-neutral-300 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-4 mt-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-400 dark:text-neutral-300 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-4 mt-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-400 dark:text-neutral-300 text-sm uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-4 mt-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-400 dark:text-neutral-300 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-4 mt-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white dark:text-neutral-400 text-base"
                  >
                    Partner
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between mt-12 pt-8 border-gray-200 dark:border-gray-700 border-t">
            <p className="text-gray-500 dark:text-neutral-400 text-base">
              &copy; 2025 AgriSure. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
