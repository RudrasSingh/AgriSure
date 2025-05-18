import React, { useState } from 'react';
import { Calendar, Download, Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ChartCard from '../components/ui/ChartCard';
import TableHeader from '../components/ui/TableHeader';
import { analyticsData } from '../data/mockData';

const MetricCard = ({ title, value, trend, trendText, trendColor }) => (
  <Card variant="gradient" className="p-6">
    <h3 className="font-medium text-gray-500 dark:text-gray-400 text-sm">
      {title}
    </h3>
    <p className="mt-2 font-bold text-gray-900 dark:text-white text-3xl">
      {value}
    </p>
    <div className="flex items-center mt-2 text-sm">
      <span className={`font-medium ${trendColor}`}>{trend}</span>
      <span className="ml-1 text-gray-500 dark:text-gray-400">{trendText}</span>
    </div>
  </Card>
);

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const [packageFilter, setPackageFilter] = useState('all');
  
  // Generate dummy package options
  const packageOptions = [
    { id: 'all', name: 'All Packages' },
    { id: '1', name: 'Wheat Protection Plan' },
    { id: '2', name: 'Rice Crop Insurance' },
    { id: '3', name: 'Cotton Standard Coverage' },
    { id: '4', name: 'Sugarcane Elite Coverage' },
  ];

  const renderAnalyticsTable = () => {
    const tableData = [
      {
        package: "Wheat Protection Plan",
        enrollments: 124,
        claimsFiled: 42,
        approvalRate: "71%",
        revenue: "₹620,000",
        profitMargin: "24%",
        profitColor: "text-success-600 dark:text-success-400",
      },
      {
        package: "Rice Crop Insurance",
        enrollments: 231,
        claimsFiled: 28,
        approvalRate: "75%",
        revenue: "₹970,200",
        profitMargin: "32%",
        profitColor: "text-success-600 dark:text-success-400",
      },
      {
        package: "Cotton Standard Coverage",
        enrollments: 89,
        claimsFiled: 15,
        approvalRate: "60%",
        revenue: "₹578,500",
        profitMargin: "18%",
        profitColor: "text-warning-600 dark:text-warning-400",
      },
      {
        package: "Sugarcane Elite Coverage",
        enrollments: 67,
        claimsFiled: 19,
        approvalRate: "52%",
        revenue: "₹482,400",
        profitMargin: "11%",
        profitColor: "text-error-600 dark:text-error-400",
      },
    ];

    return (
      <Card className="mb-8 p-6">
        <h2 className="mb-4 font-semibold text-gray-900 dark:text-white text-lg">
          Performance Breakdown by Package
        </h2>
        <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200 dark:divide-neutral-700 min-w-full">
            <TableHeader
              headers={["Package", "Enrollments", "Claims Filed", "Approval Rate", "Revenue", "Profit Margin"]}
            />
            <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-neutral-500">
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white text-sm whitespace-nowrap">
                    {row.package}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white text-sm whitespace-nowrap">
                    {row.enrollments}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white text-sm whitespace-nowrap">
                    {row.claimsFiled}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white text-sm whitespace-nowrap">
                    {row.approvalRate}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white text-sm whitespace-nowrap">
                    {row.revenue}
                  </td>
                  <td className={`px-6 py-4 font-medium ${row.profitColor} text-sm whitespace-nowrap`}>
                    {row.profitMargin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
  };

  return (
    <div className="bg-white dark:bg-neutral-900 p-6 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between md:items-center mb-8">
          <div>
            <h1 className="font-bold text-gray-900 dark:text-white text-2xl">
              Analytics & Insights
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
              Comprehensive overview of your insurance business performance
            </p>
          </div>
          
          <div className="flex sm:flex-row flex-col sm:space-x-2 space-y-2 sm:space-y-0 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              className="flex items-center"
              onClick={() => {}}
            >
              <Download className="mr-2 w-4 h-4" />
              Export Data
            </Button>
            
            <div className="flex space-x-2">
              <div className="relative">
                <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <select
                  className="bg-white dark:bg-neutral-800 py-2 pr-8 pl-9 border border-gray-300 dark:border-neutral-600 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black dark:text-white"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option value="30days">Last 30 Days</option>
                  <option value="3months">Last 3 Months</option>
                  <option value="6months">Last 6 Months</option>
                  <option value="1year">Last Year</option>
                  <option value="all">All Time</option>
                </select>
              </div>
              
              <div className="relative">
                <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                  <Filter className="w-4 h-4 text-gray-400" />
                </div>
                <select
                  className="bg-white dark:bg-neutral-800 py-2 pr-8 pl-9 border border-neutral-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black dark:text-white"
                  value={packageFilter}
                  onChange={(e) => setPackageFilter(e.target.value)}
                >
                  {packageOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard
            title="Total Policies Sold"
            value="286"
            trend="↑ 12%"
            trendText="vs previous period"
            trendColor="text-success-600 dark:text-success-400"
          />
          <MetricCard
            title="Total Revenue"
            value="₹1.2M"
            trend="↑ 18%"
            trendText="vs previous period"
            trendColor="text-success-600 dark:text-success-400"
          />
          <MetricCard
            title="Claim Approval Rate"
            value="68%"
            trend="↓ 3%"
            trendText="vs previous period"
            trendColor="text-error-600 dark:text-error-400"
          />
          <MetricCard
            title="Avg. Claim Processing Time"
            value="3.2 days"
            trend="↓ 0.5 days"
            trendText="vs previous period"
            trendColor="text-success-600 dark:text-success-400"
          />
        </div>
        
        {/* Chart Grid */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mb-8">
          <ChartCard 
            title="Policy Sales Trend" 
            subtext="Monthly policy sales"
          >
            <div className="relative bg-gradient-to-r from-primary-500/20 dark:from-primary-500/10 to-primary-500/5 dark:to-primary-500/5 rounded-lg w-full h-64 overflow-hidden">
              <div className="bottom-0 left-0 absolute flex items-end w-full h-full">
                {analyticsData.policySales.data.map((value, index) => (
                  <div 
                    key={index}
                    className="group flex flex-col flex-1 justify-end items-center h-full"
                  >
                    <div 
                      className="bg-primary-500 dark:bg-primary-400 group-hover:bg-primary-600 rounded-t-sm w-8 group-hover:scale-105 transition-all duration-300" 
                      style={{ height: `${(value / Math.max(...analyticsData.policySales.data)) * 80}%` }}
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
            title="Revenue Collection" 
            subtext="Monthly revenue (₹)"
          >
            <div className="relative bg-gradient-to-r from-success-500/20 dark:from-success-500/10 to-success-500/5 dark:to-success-500/5 rounded-lg w-full h-64 overflow-hidden">
              <div className="bottom-0 left-0 absolute flex items-end w-full h-full">
                {analyticsData.revenueCollection.data.map((value, index) => (
                  <div 
                    key={index}
                    className="group flex flex-col flex-1 justify-end items-center h-full"
                  >
                    <div 
                      className="bg-success-500 dark:bg-success-400 group-hover:bg-success-600 rounded-t-sm w-8 group-hover:scale-105 transition-all duration-300" 
                      style={{ height: `${(value / Math.max(...analyticsData.revenueCollection.data)) * 80}%` }}
                    ></div>
                    <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs">
                      {analyticsData.revenueCollection.labels[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </div>
        
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-8">
          <ChartCard 
            title="Claims by Crop" 
            subtext="Distribution across crop types"
          >
            <div className="flex justify-center items-center w-full h-64">
              <div className="relative border-8 border-gray-100 dark:border-gray-700 rounded-full w-44 h-44">
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
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <div className="flex items-center">
                <div className="bg-primary-500 mr-1 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">Wheat (42)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary-500 mr-1 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">Rice (28)</span>
              </div>
              <div className="flex items-center">
                <div className="mr-1 rounded-full w-3 h-3 bg-accent-500"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">Cotton (15)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-success-500 mr-1 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">Others (27)</span>
              </div>
            </div>
          </ChartCard>
          
          <ChartCard 
            title="Farmers by Location" 
            subtext="Regional distribution"
          >
            <div className="flex justify-center items-center w-full h-64">
              <div className="relative border-8 border-gray-100 dark:border-gray-700 rounded-full w-44 h-44">
                {/* Simple pie chart representation with different proportions */}
                <div className="absolute inset-0 border-8 border-t-primary-500 border-transparent rounded-full" style={{ transform: 'rotate(126deg)' }}></div>
                <div className="absolute inset-0 border-8 border-transparent border-r-secondary-500 rounded-full" style={{ transform: 'rotate(198deg)' }}></div>
                <div className="absolute inset-0 border-8 border-transparent border-b-warning-500 rounded-full" style={{ transform: 'rotate(270deg)' }}></div>
                <div className="absolute inset-0 border-8 border-transparent border-l-accent-500 rounded-full" style={{ transform: 'rotate(342deg)' }}></div>
                <div className="absolute inset-0 border-8 border-tl-success-500 border-transparent rounded-full" style={{ transform: 'rotate(54deg)' }}></div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                    Total: 512
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <div className="flex items-center">
                <div className="bg-primary-500 mr-1 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">North (35%)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary-500 mr-1 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">South (20%)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-warning-500 mr-1 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">East (18%)</span>
              </div>
              <div className="flex items-center">
                <div className="mr-1 rounded-full w-3 h-3 bg-accent-500"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">West (15%)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-success-500 mr-1 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-gray-400 text-xs">Central (12%)</span>
              </div>
            </div>
          </ChartCard>
          
          <ChartCard 
            title="Claim Status Distribution" 
            subtext="Approval rate analysis"
          >
            <div className="flex flex-col justify-center p-4 w-full h-64">
              <h4 className="mb-4 font-medium text-gray-700 dark:text-gray-300 text-sm">
                Overall Claim Status
              </h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Approved</span>
                    <span className="text-gray-900 dark:text-white">68%</span>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-full h-3 overflow-hidden">
                    <div className="bg-success-500 rounded-full h-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Rejected</span>
                    <span className="text-gray-900 dark:text-white">12%</span>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-full h-3 overflow-hidden">
                    <div className="bg-error-500 rounded-full h-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Pending</span>
                    <span className="text-gray-900 dark:text-white">20%</span>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-full h-3 overflow-hidden">
                    <div className="bg-warning-500 rounded-full h-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between mb-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Avg. Processing Time</span>
                  <span className="text-gray-900 dark:text-white">3.2 days</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 w-full h-1"></div>
              </div>
            </div>
          </ChartCard>
        </div>
        
        {/* Detailed Analytics Card */}
        {renderAnalyticsTable()}
        
        {/* Insights Card */}
        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-gray-900 dark:text-white text-lg">
            Key Insights & Recommendations
          </h2>
          
          <div className="space-y-6">
            <div className="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
              <h3 className="mb-2 font-medium text-primary-800 dark:text-primary-300 text-base">
                Performance Highlights
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Rice Crop Insurance has the highest profit margin at 32%</li>
                <li>Overall claim approval rate is 68%, with Rice insurance having the highest at 75%</li>
                <li>Revenue has increased by 18% compared to the previous period</li>
              </ul>
            </div>
            
            <div className="bg-secondary-50 dark:bg-secondary-900/10 p-4 rounded-lg">
              <h3 className="mb-2 font-medium text-secondary-800 dark:text-secondary-300 text-base">
                Improvement Areas
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Sugarcane Elite Coverage has the lowest approval rate (52%) and profit margin (11%)</li>
                <li>Cotton insurance claims have increased by 28% with decreasing profit margins</li>
                <li>The North region shows highest claim frequency relative to enrollments</li>
              </ul>
            </div>
            
            <div className="bg-success-50 dark:bg-success-900/10 p-4 rounded-lg">
              <h3 className="mb-2 font-medium text-success-800 dark:text-success-300 text-base">
                Recommendations
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Revise premium structure for Sugarcane Elite Coverage to improve profitability</li>
                <li>Expand Rice Crop Insurance marketing in South and West regions</li>
                <li>Implement more stringent risk assessment for Cotton coverage in Maharashtra</li>
                <li>Reduce claim processing time from 3.2 days to under 3 days to improve farmer satisfaction</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;