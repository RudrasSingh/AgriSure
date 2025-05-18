import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, FileText, DollarSign, Clock, AlertTriangle, PlusCircle, TrendingUp, BarChart2, ClipboardList, Settings, Package } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ChartCard from '../components/ui/ChartCard';
import StatCard from '../components/dashboard/StatCard';
import ActivityItem from '../components/dashboard/ActivityItem';
import { activityLog, riskAlerts, analyticsData } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const stats = [
  {
    title: "Total Policies Sold",
    value: "286",
    icon: <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
    change: "12%",
    changeType: "increase",
  },
  {
    title: "Active Packages",
    value: "4",
    icon: <Package className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />,
    change: "1",
    changeType: "increase",
  },
  {
    title: "Farmers Enrolled",
    value: "512",
    icon: <Users className="w-5 h-5 text-accent-600 dark:text-accent-400" />,
    change: "8%",
    changeType: "increase",
  },
  {
    title: "Pending Claims",
    value: "3",
    icon: <ClipboardList className="w-5 h-5 text-warning-600 dark:text-warning-400" />,
    change: "2",
    changeType: "decrease",
  },
  {
    title: "Total Revenue",
    value: "₹1.2M",
    icon: <DollarSign className="w-5 h-5 text-success-600 dark:text-success-400" />,
    change: "18%",
    changeType: "increase",
  },
  {
    title: "Avg. Claim Time",
    value: "3.2 days",
    icon: <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />,
    change: "0.5 days",
    changeType: "decrease",
  },
];

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const [period, setPeriod] = useState('monthly');
  
  return (
    <div className="dark:bg-neutral-900 p-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center">
          <div>
            <h1 className="font-bold text-gray-900 dark:text-white text-2xl">
              Welcome back, {currentUser?.name || 'User'}
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
              Here's what's happening with your insurance business today
            </p>
          </div>
          
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <Link to="/packages/create">
              <Button className="flex items-center">
                <PlusCircle className="mr-2 w-4 h-4" />
                New Package
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            changeType={stat.changeType}
          />
        ))}
      </div>
      
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 mb-8">
        {/* Recent Activity Timeline */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-gray-900 dark:text-white text-lg">Recent Activity</h2>
            <Link to="/activity" className="text-primary-600 hover:text-primary-500 dark:hover:text-primary-300 dark:text-primary-400 text-sm">
              View all
            </Link>
          </div>
          
          <div className="space-y-6">
            {activityLog.slice(0, 5).map(activity => (
              <ActivityItem
                key={activity.id}
                title={activity.title}
                description={activity.description}
                time={activity.time}
                status={activity.status}
              />
            ))}
          </div>
        </Card>
        
        {/* Live Risk Alerts */}
        {/* <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-gray-900 dark:text-white text-lg">Live Risk Alerts</h2>
            <Link to="/risk-alerts" className="text-primary-600 hover:text-primary-500 dark:hover:text-primary-300 dark:text-primary-400 text-sm">
              View all
            </Link>
          </div>
          
          <div className="space-y-4">
            {riskAlerts.map(alert => (
              <Card 
                key={alert.id} 
                variant={alert.severity === 'High' ? 'glass' : 'default'}
                className={`p-4 border-l-4 ${
                  alert.severity === 'High' 
                    ? 'border-l-error-500 bg-error-50 dark:bg-error-900/10' 
                    : 'border-l-warning-500 bg-warning-50 dark:bg-warning-900/10'
                }`}
              >
                <div className="flex items-start">
                  <AlertTriangle className={`h-5 w-5 mr-3 ${
                    alert.severity === 'High' 
                      ? 'text-error-500' 
                      : 'text-warning-500'
                  }`} />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{alert.title}</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{alert.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {alert.affectedCrops.map((crop, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 rounded-full font-medium text-gray-800 dark:text-gray-200 text-xs"
                        >
                          {crop}
                        </span>
                      ))}
                      <span className="inline-flex items-center bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 rounded-full font-medium text-gray-800 dark:text-gray-200 text-xs">
                        {alert.affectedRegion}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card> */}
      </div>
      
      {/* Analytics Previews */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-gray-900 dark:text-white text-lg">Analytics Overview</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setPeriod('monthly')}
              className={`px-3 py-1 text-sm rounded-md ${
                period === 'monthly' 
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod('quarterly')}
              className={`px-3 py-1 text-sm rounded-md ${
                period === 'quarterly' 
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setPeriod('yearly')}
              className={`px-3 py-1 text-sm rounded-md ${
                period === 'yearly' 
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Yearly
            </button>
            <Link to="/analytics">
              <Button variant="outline" size="sm" className="ml-2">
                <BarChart2 className="mr-1 w-4 h-4" />
                Full Analytics
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ChartCard 
            title="Monthly Policy Sales" 
            subtext={`${analyticsData.policySales.data[analyticsData.policySales.data.length - 1]} policies in June`}
          >
            <div className="relative bg-gradient-to-r from-primary-500/20 dark:from-primary-500/10 to-primary-500/5 dark:to-primary-500/5 rounded-lg w-full h-48 overflow-hidden">
              <div className="bottom-0 left-0 absolute flex items-end w-full h-full">
                {analyticsData.policySales.data.map((value, index) => (
                  <div 
                    key={index}
                    className="group flex flex-col flex-1 justify-end items-center h-full"
                  >
                    <div 
                      className="bg-primary-500 dark:bg-primary-400 group-hover:bg-primary-600 rounded-t-sm w-6 group-hover:scale-105 transition-all duration-300" 
                      style={{ height: `${(value / Math.max(...analyticsData.policySales.data)) * 100}%` }}
                    ></div>
                    <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs">
                      {analyticsData.policySales.labels[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
          
          <ChartCard 
            title="Claims by Crop" 
            subtext="Top claim categories"
          >
            <div className="flex justify-center items-center w-full h-48">
              <div className="relative border-8 border-gray-100 dark:border-gray-700 rounded-full w-36 h-36">
                {/* Simple pie chart representation */}
                <div className="absolute inset-0 border-8 border-t-primary-500 border-transparent rounded-full" style={{ transform: 'rotate(90deg)' }}></div>
                <div className="absolute inset-0 border-8 border-transparent border-r-secondary-500 rounded-full" style={{ transform: 'rotate(180deg)' }}></div>
                <div className="absolute inset-0 border-8 border-transparent border-b-accent-500 rounded-full" style={{ transform: 'rotate(270deg)' }}></div>
                <div className="absolute inset-0 border-8 border-transparent border-l-success-500 rounded-full" style={{ transform: 'rotate(0deg)' }}></div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                    Total: 112
                  </div>
                </div>
              </div>
            </div>
          </ChartCard>
          
          <ChartCard 
            title="Claim Outcomes" 
            subtext="Approval rates"
          >
            <div className="flex flex-col justify-center w-full h-48">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-full h-8 overflow-hidden">
                <div 
                  className="bg-success-500 rounded-l-full h-full"
                  style={{ width: `${analyticsData.approvalRate.data[0]}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <div className="flex items-center">
                  <div className="bg-success-500 mr-2 rounded-full w-3 h-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Approved ({analyticsData.approvalRate.data[0]}%)</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-error-500 mr-2 rounded-full w-3 h-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Rejected ({analyticsData.approvalRate.data[1]}%)</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-warning-500 mr-2 rounded-full w-3 h-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Pending ({analyticsData.approvalRate.data[2]}%)</span>
                </div>
              </div>
            </div>
          </ChartCard>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="mb-6 font-semibold text-gray-900 dark:text-white text-lg">Quick Actions</h2>
        
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <Link to="/packages/create">
            <Card 
              variant="glass" 
              className="flex flex-col justify-center items-center p-4 h-32 text-center hover:scale-105 transition-transform"
            >
              <PlusCircle className="mb-2 w-8 h-8 text-primary-500" />
              <p className="font-medium text-gray-900 dark:text-white text-sm">Create Package</p>
            </Card>
          </Link>
          
          <Link to="/packages">
            <Card 
              variant="glass" 
              className="flex flex-col justify-center items-center p-4 h-32 text-center hover:scale-105 transition-transform"
            >
              <Package className="mb-2 w-8 h-8 text-secondary-500" />
              <p className="font-medium text-gray-900 dark:text-white text-sm">Manage Packages</p>
            </Card>
          </Link>
          
          <Link to="/claims">
            <Card 
              variant="glass" 
              className="flex flex-col justify-center items-center p-4 h-32 text-center hover:scale-105 transition-transform"
            >
              <ClipboardList className="mb-2 w-8 h-8 text-warning-500" />
              <p className="font-medium text-gray-900 dark:text-white text-sm">View Claims</p>
            </Card>
          </Link>
          
          <Link to="/analytics">
            <Card 
              variant="glass" 
              className="flex flex-col justify-center items-center p-4 h-32 text-center hover:scale-105 transition-transform"
            >
              <BarChart2 className="mb-2 w-8 h-8 text-accent-500" />
              <p className="font-medium text-gray-900 dark:text-white text-sm">Full Analytics</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;