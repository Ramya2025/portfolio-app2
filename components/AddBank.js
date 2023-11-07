import React, { useState } from "react";
import PaginationComponent from './PaginationComponent';

const AddBank = () => {
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [collectedData, setCollectedData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };

  const handleBranchNameChange = (e) => {
    setBranchName(e.target.value);
  };

  const handleAbbreviationChange = (e) => {
    setAbbreviation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBank = {
      bankName,
      branchName,
      abbreviation,
    };
    setCollectedData([...collectedData, newBank]);
    setBankName("");
    setBranchName("");
    setAbbreviation("");
  };

  const totalPages = Math.ceil(collectedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = collectedData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mt-4">
      <div className="card p-2 bg-light">
        <h4 className="card-title text-center bg-success text-white p-2 mb-3">Add Bank</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="bankName" className="form-label"><strong>Bank Name:</strong></label>
            <input
              type="text"
              className="form-control"
              id="bankName"
              placeholder="Enter Bank Name"
              value={bankName}
              onChange={handleBankNameChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="branchName" className="form-label"><strong>Branch Name:</strong></label>
            <input
              type="text"
              className="form-control"
              id="branchName"
              placeholder="Enter Branch Name"
              value={branchName}
              onChange={handleBranchNameChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="abbreviation" className="form-label"><strong>Abbreviation:</strong></label>
            <input
              type="text"
              className="form-control"
              id="abbreviation"
              placeholder="Enter Abbreviation"
              value={abbreviation}
              onChange={handleAbbreviationChange}
            />
          </div>
          <button type="submit" className="btn btn-success"><strong>Submit</strong></button>
        </form>
      </div>

      <div className="card mt-4 p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <label htmlFor="pageSize" className="form-label mx-2"><strong>Page Size:</strong></label>
            <select
              className="form-select"
              id="pageSize"
              value={pageSize}
              onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
        <h4 className="card-title text-center bg-success text-white p-2 mb-3">Bank Details</h4>
        <table className="table table-bordered table-hover mt-2">
          <thead>
            <tr>
              <th><strong>Bank Name</strong></th>
              <th><strong>Branch Name</strong></th>
              <th><strong>Abbreviation</strong></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((bank, index) => (
              <tr key={index}>
                <td>{bank.bankName}</td>
                <td>{bank.branchName}</td>
                <td>{bank.abbreviation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddBank;
