import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Search, Filter, Edit, Trash, Eye, MoreHorizontal } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import StatusBadge from '../components/ui/StatusBadge';
import Modal from '../components/ui/Modal';
import { useToast } from '../context/ToastContext';
import { insurancePackages } from '../data/mockData';
import TableHeader from '../components/ui/TableHeader';

const ManagePackagesPage = () => {
  const { addToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [cropFilter, setCropFilter] = useState('all');
  const [packages, setPackages] = useState(insurancePackages);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [packageToDelete, setPackageToDelete] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const uniqueCropTypes = [...new Set(insurancePackages.map(pkg => pkg.cropType))];

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.cropType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.region.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || pkg.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesCrop = cropFilter === 'all' || pkg.cropType === cropFilter;

    return matchesSearch && matchesStatus && matchesCrop;
  });

  const handleDelete = (pkg) => {
    setPackageToDelete(pkg);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setPackages(packages.filter(p => p.id !== packageToDelete.id));
    setDeleteModalOpen(false);
    addToast(`"${packageToDelete.title}" has been deleted.`, 'success');
    setPackageToDelete(null);
  };

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 p-6 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <Header />
        <Filters 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          statusFilter={statusFilter} 
          setStatusFilter={setStatusFilter} 
          cropFilter={cropFilter} 
          setCropFilter={setCropFilter} 
          uniqueCropTypes={uniqueCropTypes} 
        />
        <PackagesTable 
          filteredPackages={filteredPackages} 
          toggleMenu={toggleMenu} 
          openMenuId={openMenuId} 
          handleDelete={handleDelete} 
        />
        <DeleteConfirmationModal 
          deleteModalOpen={deleteModalOpen} 
          setDeleteModalOpen={setDeleteModalOpen} 
          packageToDelete={packageToDelete} 
          confirmDelete={confirmDelete} 
        />
      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center mb-8">
    <div>
      <h1 className="font-bold text-gray-900 dark:text-white text-2xl">
        Insurance Packages
      </h1>
      <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
        Manage your crop insurance packages
      </p>
    </div>
    <div className="mt-4 sm:mt-0">
      <Link to="/packages/create">
        <Button className="flex items-center">
          <PlusCircle className="mr-2 w-4 h-4" />
          Create Package
        </Button>
      </Link>
    </div>
  </div>
);

const Filters = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, cropFilter, setCropFilter, uniqueCropTypes }) => (
  <Card className="mb-6 p-4">
    <div className="flex md:flex-row flex-col md:items-center md:space-x-4">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-3 sm:space-y-0">
        <FilterDropdown 
          label="All Status" 
          value={statusFilter} 
          onChange={setStatusFilter} 
          options={['all', 'active', 'draft', 'expired']} 
        />
        <FilterDropdown 
          label="All Crops" 
          value={cropFilter} 
          onChange={setCropFilter} 
          options={['all', ...uniqueCropTypes]} 
        />
      </div>
    </div>
  </Card>
);

const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <div className="flex-1 mb-4 md:mb-0">
    <div className="relative">
      <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="bg-white dark:bg-neutral-700 py-2 pr-4 pl-10 border border-gray-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 w-full text-gray-900 dark:text-white"
        placeholder="Search packages..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>
);

const FilterDropdown = ({ label, value, onChange, options }) => (
  <div className="relative">
    <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
      <Filter className="w-4 h-4 text-gray-400" />
    </div>
    <select
      className="bg-white dark:bg-neutral-800 py-2 pr-8 pl-9 border border-gray-300 dark:border-neutral-600 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-900 text-gray-900 dark:text-white appearance-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const PackagesTable = ({ filteredPackages, toggleMenu, openMenuId, handleDelete }) => (
  <Card className="overflow-hidden">
    <div className="overflow-x-auto">
      <table className="divide-y divide-gray-200 dark:divide-gray-700 min-w-full">
        <TableHeader
          headers={["Package", "Coverage / Premium", "Status", "Enrollment", "Period", "Actions"]}
        />
        <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-gray-800">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <PackageRow 
                key={pkg.id} 
                pkg={pkg} 
                toggleMenu={toggleMenu} 
                openMenuId={openMenuId} 
                handleDelete={handleDelete} 
              />
            ))
          ) : (
            <NoPackagesRow />
          )}
        </tbody>
      </table>
    </div>
  </Card>
);

const PackageRow = ({ pkg, toggleMenu, openMenuId, handleDelete }) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div>
          <div className="font-medium text-gray-900 dark:text-white text-sm">
            {pkg.title}
          </div>
          <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-sm">
            <span className="mr-2">{pkg.cropType}</span>
            <span className="inline-flex items-center bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded font-medium text-gray-800 dark:text-gray-300 text-xs">
              {pkg.region}
            </span>
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-gray-900 dark:text-white text-sm">{pkg.coverage}</div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">{pkg.premium}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <StatusBadge status={pkg.status} />
    </td>
    <td className="px-6 py-4 text-gray-900 dark:text-white text-sm whitespace-nowrap">
      {pkg.enrollmentCount} farmers
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-gray-900 dark:text-white text-sm">
        {new Date(pkg.startDate).toLocaleDateString()}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        to {new Date(pkg.endDate).toLocaleDateString()}
      </div>
    </td>
    <td className="px-6 py-4 font-medium text-sm text-right whitespace-nowrap">
      <ActionsMenu 
        pkg={pkg} 
        toggleMenu={toggleMenu} 
        openMenuId={openMenuId} 
        handleDelete={handleDelete} 
      />
    </td>
  </tr>
);

const ActionsMenu = ({ pkg, toggleMenu, openMenuId, handleDelete }) => (
  <div className="inline-block relative text-left">
    <button
      onClick={() => toggleMenu(pkg.id)}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-md focus:outline-none text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400"
    >
      <MoreHorizontal className="w-5 h-5" />
    </button>

    {openMenuId === pkg.id && (
      <div className="right-0 z-10 absolute bg-white dark:bg-gray-800 ring-opacity-5 shadow-lg mt-2 rounded-md focus:outline-none ring-1 ring-black w-48 origin-top-right">
        <div className="py-1" role="menu">
          <Link 
            to={`/packages/${pkg.id}`} 
            className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-sm"
            onClick={() => toggleMenu(null)}
          >
            <Eye className="mr-3 w-4 h-4" />
            View Details
          </Link>
          <Link 
            to={`/packages/${pkg.id}/edit`} 
            className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-sm"
            onClick={() => toggleMenu(null)}
          >
            <Edit className="mr-3 w-4 h-4" />
            Edit
          </Link>
          <button 
            className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-error-600 dark:text-error-400 text-sm"
            onClick={() => {
              handleDelete(pkg);
              toggleMenu(null);
            }}
          >
            <Trash className="mr-3 w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    )}
  </div>
);

const NoPackagesRow = () => (
  <tr>
    <td colSpan="6" className="px-6 py-8 text-gray-500 dark:text-gray-400 text-center">
      <div className="flex flex-col justify-center items-center">
        <svg className="mb-4 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="font-medium text-lg">No packages found</p>
        <p className="mt-1 text-sm">Try adjusting your search or filter criteria</p>
        <Link to="/packages/create" className="mt-4">
          <Button variant="outline" size="sm" className="flex items-center">
            <PlusCircle className="mr-2 w-4 h-4" />
            Create New Package
          </Button>
        </Link>
      </div>
    </td>
  </tr>
);

const DeleteConfirmationModal = ({ deleteModalOpen, setDeleteModalOpen, packageToDelete, confirmDelete }) => (
  <Modal
    isOpen={deleteModalOpen}
    onClose={() => setDeleteModalOpen(false)}
    title="Delete Insurance Package"
    footer={
      <>
        <Button 
          variant="outline" 
          onClick={() => setDeleteModalOpen(false)}
        >
          Cancel
        </Button>
        <Button 
          variant="error"
          onClick={confirmDelete}
          className="flex items-center"
        >
          <Trash className="mr-2 w-4 h-4" />
          Delete Package
        </Button>
      </>
    }
  >
    <div className="py-4">
      <p className="text-gray-600 dark:text-gray-300">
        Are you sure you want to delete the insurance package <span className="font-medium text-gray-900 dark:text-white">{packageToDelete?.title}</span>?
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
        This action cannot be undone. This will permanently delete this package and remove it from our servers.
      </p>
      {packageToDelete?.enrollmentCount > 0 && (
        <div className="bg-error-50 dark:bg-error-900/10 mt-4 p-4 rounded-md text-error-800 dark:text-error-300">
          <p className="font-medium text-sm">Warning: This package has {packageToDelete.enrollmentCount} active enrollments.</p>
          <p className="mt-1 text-sm">Deleting it will affect farmers who have already enrolled.</p>
        </div>
      )}
    </div>
  </Modal>
);

export default ManagePackagesPage;