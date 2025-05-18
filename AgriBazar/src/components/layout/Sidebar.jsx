import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ClipboardCheck, BarChart3, Settings, Users, HelpCircle } from 'lucide-react';

const Sidebar = ({ isMobile, closeMobileMenu }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Insurance Packages', href: '/packages', icon: Package },
    { name: 'Claims Management', href: '/claims', icon: ClipboardCheck },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Farmers Network', href: '/farmers', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Help & Support', href: '/support', icon: HelpCircle }
  ];

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleClick = () => {
    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <div className={`h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between ${
      isMobile ? 'w-full' : 'w-64'
    }`}>
      <div className="px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                onClick={handleClick}
                className={`
                  flex items-center p-2 text-base font-medium rounded-lg
                  ${isActive(item.href)
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                  group transition-colors duration-200
                `}
              >
                <item.icon 
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive(item.href) 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                  }`} 
                />
                <span className="ml-3">{item.name}</span>
                {item.name === 'Claims Management' && (
                  <span className="inline-flex items-center justify-center w-5 h-5 ml-auto text-xs font-semibold text-white bg-error-500 rounded-full">
                    3
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.pexels.com/photos/5980755/pexels-photo-5980755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Company Logo" 
            className="w-10 h-10 rounded-md object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Agri Insurance Co.</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Professional Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;