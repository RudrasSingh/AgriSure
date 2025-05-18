import React, { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Check,
  X,
  FileText,
  Download,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import StatusBadge from "../components/ui/StatusBadge";
import Modal from "../components/ui/Modal";
import TableHeader from "../components/ui/TableHeader";
import { useToast } from "../context/ToastContext";
import { claims } from "../data/mockData";

const ViewClaimsPage = () => {
  const { addToast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [claimsList, setClaimsList] = useState(claims);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [currentClaim, setCurrentClaim] = useState(null);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [actionNotes, setActionNotes] = useState("");

  // Filter claims based on search term and status filter
  const filteredClaims = claimsList.filter((claim) => {
    const matchesSearch =
      claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.packageTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      claim.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const handleViewClaim = (claim) => {
    setCurrentClaim(claim);
    setViewModalOpen(true);
  };

  const handleClaimAction = (claim, action) => {
    setCurrentClaim(claim);
    setActionType(action);
    setActionNotes("");
    setActionModalOpen(true);
  };

  const confirmAction = () => {
    const updatedClaims = claimsList.map((claim) => {
      if (claim.id === currentClaim.id) {
        return {
          ...claim,
          status: actionType === "approve" ? "Approved" : "Rejected",
        };
      }
      return claim;
    });

    setClaimsList(updatedClaims);
    setActionModalOpen(false);

    addToast(
      `Claim ${currentClaim.id} has been ${
        actionType === "approve" ? "approved" : "rejected"
      }.`,
      actionType === "approve" ? "success" : "info"
    );
  };

  // Render the filters section
  const renderFilters = () => (
    <Card className="mb-6 p-4">
      <div className="flex md:flex-row flex-col md:items-center md:space-x-4">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="relative">
            <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white dark:bg-neutral-800 py-2 pr-4 pl-10 border border-gray-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 w-full text-gray-900 dark:text-white"
              placeholder="Search claims by ID, farmer name, or package..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="relative">
          <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
            <Filter className="w-4 h-4 text-gray-400" />
          </div>
          <select
            className="bg-white dark:bg-neutral-800 py-2 pr-8 pl-9 border border-gray-300 dark:border-neutral-600 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-gray-900 dark:text-white appearance-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
    </Card>
  );

  // Render the claims table
  const renderClaimsTable = () => (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="divide-y divide-gray-200 dark:divide-neutral-700 min-w-full">
          <TableHeader
            headers={[
              "Claim ID",
              "Farmer",
              "Package",
              "Description",
              "Date",
              "Status",
              "Actions",
            ]}
          />
          <tbody className="bg-white dark:bg-neutral-900 divide-y divide-gray-200 dark:divide-neutral-800">
            {filteredClaims.length > 0 ? (
              filteredClaims.map((claim) => (
                <tr
                  key={claim.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white text-sm whitespace-nowrap">
                    {claim.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {claim.farmerName}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">
                      ID: {claim.farmerId}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-900 dark:text-white text-sm">
                      {claim.packageTitle}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs text-gray-900 dark:text-white text-sm truncate">
                      {claim.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white text-sm whitespace-nowrap">
                    {new Date(claim.dateSubmitted).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={claim.status} />
                  </td>
                  <td className="flex space-x-2 px-6 py-4 font-medium text-sm whitespace-nowrap">
                    <button
                      onClick={() => handleViewClaim(claim)}
                      className="text-primary-600 hover:text-primary-900 dark:hover:text-primary-300 dark:text-primary-400"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    {claim.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleClaimAction(claim, "approve")}
                          className="text-success-600 hover:text-success-900 dark:hover:text-success-300 dark:text-success-400"
                        >
                          <Check className="w-5 h-5" />
                        </button>

                        <button
                          onClick={() => handleClaimAction(claim, "reject")}
                          className="text-error-600 hover:text-error-900 dark:hover:text-error-300 dark:text-error-400"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-8 text-gray-500 dark:text-gray-400 text-center"
                >
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      className="mb-4 w-12 h-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="font-medium text-lg">No claims found</p>
                    <p className="mt-1 text-sm">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );

  return (
    <div className="bg-white dark:bg-neutral-900 p-6 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="font-bold text-black dark:text-white text-2xl">
            Claims Management
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
            Review and process insurance claims from farmers
          </p>
        </div>

        {renderFilters()}
        {renderClaimsTable()}
      </div>

      {/* Modals */}
      {/* View Claim Modal */}
      <Modal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title={`Claim Details: ${currentClaim?.id}`}
        size="lg"
      >
        {/* Modal content */}
      </Modal>

      {/* Approve/Reject Modal */}
      <Modal
        isOpen={actionModalOpen}
        onClose={() => setActionModalOpen(false)}
        title={`${actionType === "approve" ? "Approve" : "Reject"} Claim: ${
          currentClaim?.id
        }
        ${
          "set for AI approval check after 24hrs"
          }
        
        `}
        footer={
          <>
            <Button variant="outline" onClick={() => setActionModalOpen(false)}>
              Cancel
            </Button>
            <Button
              disabled={true}
              variant={actionType === "approve" ? "success" : "error"}
              onClick={confirmAction}
              className="flex items-center"
            >
              {actionType === "approve" ? (
                <Check className="mr-2 w-4 h-4" />
              ) : (
                <X className="mr-2 w-4 h-4" />
              )}
              {actionType === "approve" ? "Approve Claim" : "Reject Claim"}
            </Button>
          </>
        }
      >
        {/* Modal content */}
      </Modal>
    </div>
  );
};

export default ViewClaimsPage;
