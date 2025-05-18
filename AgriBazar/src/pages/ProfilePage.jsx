import React, { useState } from 'react';
import { User, Mail, Phone, Building, Lock, Edit2, Save, X } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const { addToast } = useToast();
  
  const [profileData, setProfileData] = useState({
    name: currentUser?.name || 'John Doe',
    email: currentUser?.email || 'john@agriinsurance.com',
    company: currentUser?.company || 'Agri Insurance Co.',
    phone: '+91 9876543210',
    licenseNo: 'IN-CROP-INS-4567',
    address: '123 Business Park, New Delhi - 110001',
    bankAccount: 'HDFC Bank - XXXX1234',
    upiId: 'agriinsurance@hdfcbank'
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validateProfile = () => {
    const newErrors = {};
    
    if (!profileData.name) newErrors.name = 'Name is required';
    if (!profileData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!profileData.company) newErrors.company = 'Company name is required';
    if (!profileData.phone) newErrors.phone = 'Phone number is required';
    if (!profileData.licenseNo) newErrors.licenseNo = 'License number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validatePassword = () => {
    const newErrors = {};
    
    if (!passwordData.currentPassword) newErrors.currentPassword = 'Current password is required';
    
    if (!passwordData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    
    if (!validateProfile()) {
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setEditMode(false);
      addToast('Profile updated successfully!', 'success');
    }, 1000);
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (!validatePassword()) {
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      addToast('Password changed successfully!', 'success');
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Account Settings
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your profile and account preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
                />
                <button className="absolute bottom-0 right-0 bg-primary-500 text-white p-1.5 rounded-full shadow-md hover:bg-primary-600 transition-colors">
                  <Edit2 size={16} />
                </button>
              </div>
              
              <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {profileData.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {profileData.company}
              </p>
              <p className="mt-1 text-sm text-primary-600 dark:text-primary-400">
                Insurance Provider
              </p>
              
              <div className="mt-6 w-full">
                <div className="flex items-center justify-center p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <span className="text-xs font-medium text-primary-800 dark:text-primary-300">
                    Professional Plan
                  </span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Profile Form */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Profile Information
                </h2>
                {!editMode ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center"
                    onClick={() => setEditMode(true)}
                  >
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => setEditMode(false)}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex items-center"
                      onClick={handleProfileSubmit}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
              
              <form onSubmit={handleProfileSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    disabled={!editMode}
                    error={errors.name}
                    icon={<User size={18} />}
                  />
                  
                  <Input
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    disabled={!editMode}
                    error={errors.email}
                    icon={<Mail size={18} />}
                  />
                  
                  <Input
                    label="Company Name"
                    id="company"
                    name="company"
                    value={profileData.company}
                    onChange={handleProfileChange}
                    disabled={!editMode}
                    error={errors.company}
                    icon={<Building size={18} />}
                  />
                  
                  <Input
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    disabled={!editMode}
                    error={errors.phone}
                    icon={<Phone size={18} />}
                  />
                  
                  <Input
                    label="Insurance License No."
                    id="licenseNo"
                    name="licenseNo"
                    value={profileData.licenseNo}
                    onChange={handleProfileChange}
                    disabled={!editMode}
                    error={errors.licenseNo}
                  />
                  
                  <Input
                    label="Business Address"
                    id="address"
                    name="address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                    disabled={!editMode}
                    error={errors.address}
                  />
                </div>
              </form>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Payment Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Bank Account"
                  id="bankAccount"
                  name="bankAccount"
                  value={profileData.bankAccount}
                  onChange={handleProfileChange}
                  disabled={!editMode}
                />
                
                <Input
                  label="UPI ID"
                  id="upiId"
                  name="upiId"
                  value={profileData.upiId}
                  onChange={handleProfileChange}
                  disabled={!editMode}
                />
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Change Password
              </h2>
              
              <form onSubmit={handlePasswordSubmit}>
                <div className="space-y-4">
                  <Input
                    label="Current Password"
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    error={errors.currentPassword}
                    icon={<Lock size={18} />}
                  />
                  
                  <Input
                    label="New Password"
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    error={errors.newPassword}
                    icon={<Lock size={18} />}
                  />
                  
                  <Input
                    label="Confirm New Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    error={errors.confirmPassword}
                    icon={<Lock size={18} />}
                  />
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="flex items-center"
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      Update Password
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;