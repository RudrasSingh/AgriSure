import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Coins, FileText, Save, X, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { useToast } from '../context/ToastContext';

const CreateInsurancePage = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    cropType: '',
    region: '',
    coverage: '',
    premium: '',
    startDate: '',
    endDate: '',
    terms: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const cropTypes = [
    'Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Millet', 'Corn', 'Barley', 'Soybean', 'Groundnut', 'Pulses'
  ];
  
  const regions = [
    'North India', 'South India', 'East India', 'West India', 'Central India', 
    'Punjab', 'Haryana', 'Uttar Pradesh', 'Bihar', 'West Bengal', 
    'Gujarat', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Package title is required';
    if (!formData.cropType) newErrors.cropType = 'Crop type is required';
    if (!formData.region) newErrors.region = 'Region is required';
    if (!formData.coverage) newErrors.coverage = 'Coverage amount is required';
    if (!formData.premium) newErrors.premium = 'Premium amount is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = 'End date must be after start date';
    }
    if (!formData.terms) newErrors.terms = 'Terms and conditions are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
    }
  };
  
  const handlePublish = () => {
    // Simulate API call to create package
    setTimeout(() => {
      setIsModalOpen(false);
      addToast('Insurance package created successfully!', 'success');
      navigate('/packages');
    }, 1000);
  };
  
  const handleSaveDraft = () => {
    addToast('Insurance package saved as draft', 'info');
    navigate('/packages');
  };

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create New Insurance Package
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Fill in the details to create a new crop insurance package
            </p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={handleSaveDraft}
              className="flex items-center"
            >
              <Save className="mr-2 h-4 w-4" />
              Save as Draft
            </Button>
          </div>
        </div>
        
        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Input
                  label="Package Title"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Wheat Protection Premium Plan"
                  error={errors.title}
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Crop Type
                </label>
                <select
                  id="cropType"
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleChange}
                  className={`
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-white
                    border border-gray-300 dark:border-gray-600
                    rounded-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary-500 dark:focus:ring-primary-400
                    focus:border-transparent
                    transition duration-200
                    block w-full p-2.5
                    ${errors.cropType ? 'border-error-500 focus:ring-error-500' : ''}
                  `}
                >
                  <option value="">Select crop type</option>
                  {cropTypes.map((crop, index) => (
                    <option key={index} value={crop}>{crop}</option>
                  ))}
                </select>
                {errors.cropType && <p className="mt-1 text-sm text-error-500">{errors.cropType}</p>}
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Region
                </label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className={`
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-white
                    border border-gray-300 dark:border-gray-600
                    rounded-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary-500 dark:focus:ring-primary-400
                    focus:border-transparent
                    transition duration-200
                    block w-full p-2.5
                    ${errors.region ? 'border-error-500 focus:ring-error-500' : ''}
                  `}
                >
                  <option value="">Select region</option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                  ))}
                </select>
                {errors.region && <p className="mt-1 text-sm text-error-500">{errors.region}</p>}
              </div>
              
              <div>
                <Input
                  label="Coverage Amount"
                  id="coverage"
                  name="coverage"
                  value={formData.coverage}
                  onChange={handleChange}
                  placeholder="e.g., ₹50,000 per hectare"
                  error={errors.coverage}
                  icon={<Coins size={18} />}
                />
              </div>
              
              <div>
                <Input
                  label="Premium Amount"
                  id="premium"
                  name="premium"
                  value={formData.premium}
                  onChange={handleChange}
                  placeholder="e.g., ₹5,000 per season"
                  error={errors.premium}
                  icon={<Coins size={18} />}
                />
              </div>
              
              <div>
                <Input
                  label="Start Date"
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  error={errors.startDate}
                  icon={<Calendar size={18} />}
                />
              </div>
              
              <div>
                <Input
                  label="End Date"
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  error={errors.endDate}
                  icon={<Calendar size={18} />}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Terms and Conditions
                </label>
                <textarea
                  id="terms"
                  name="terms"
                  value={formData.terms}
                  onChange={handleChange}
                  rows={6}
                  className={`
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-white
                    border border-gray-300 dark:border-gray-600
                    rounded-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary-500 dark:focus:ring-primary-400
                    focus:border-transparent
                    transition duration-200
                    block w-full p-2.5
                    ${errors.terms ? 'border-error-500 focus:ring-error-500' : ''}
                  `}
                  placeholder="Enter the detailed terms and conditions for this insurance package..."
                ></textarea>
                {errors.terms && <p className="mt-1 text-sm text-error-500">{errors.terms}</p>}
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button 
                type="button" 
                variant="outline" 
                className="mr-2"
                onClick={() => navigate('/packages')}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="flex items-center"
              >
                <FileText className="mr-2 h-4 w-4" />
                Publish Package
              </Button>
            </div>
          </form>
        </Card>
      </div>
      
      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Publish Insurance Package"
        footer={
          <>
            <Button 
              variant="outline" 
              onClick={() => setIsModalOpen(false)}
              className="flex items-center"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button 
              onClick={handlePublish}
              className="flex items-center"
            >
              <Check className="mr-2 h-4 w-4" />
              Confirm Publish
            </Button>
          </>
        }
      >
        <div className="py-4">
          <p className="text-gray-600 dark:text-gray-300">
            Are you sure you want to publish this insurance package? Once published, it will be visible to farmers and open for enrollment.
          </p>
          
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Package Title:</span>
                <span className="text-sm text-gray-900 dark:text-white">{formData.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Crop Type:</span>
                <span className="text-sm text-gray-900 dark:text-white">{formData.cropType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Region:</span>
                <span className="text-sm text-gray-900 dark:text-white">{formData.region}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Coverage:</span>
                <span className="text-sm text-gray-900 dark:text-white">{formData.coverage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Premium:</span>
                <span className="text-sm text-gray-900 dark:text-white">{formData.premium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Period:</span>
                <span className="text-sm text-gray-900 dark:text-white">
                  {new Date(formData.startDate).toLocaleDateString()} to {new Date(formData.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateInsurancePage;