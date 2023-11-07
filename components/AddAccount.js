import React, { useState } from "react";
import PaginationComponent from './PaginationComponent';

const AddAccount = () => {
  const [userName, setUserName] = useState("");
  const [bankName, setBankName] = useState("");
  const [balance, setBalance] = useState("");
  const [collectedData, setCollectedData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };

  const handleBalanceChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      userName,
      bankName,
      balance,
    };
    setCollectedData([...collectedData, newAccount]);
    setUserName("");
    setBankName("");
    setBalance("");
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
        <h4 className="card-title text-center bg-success text-white p-2 mb-3">Add Account</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="userName" className="form-label"><strong>User Name:</strong></label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter User Name"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
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
            <label htmlFor="balance" className="form-label"><strong>Balance:</strong></label>
            <input
              type="number"
              className="form-control"
              id="balance"
              placeholder="Enter Balance"
              value={balance}
              onChange={handleBalanceChange}
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
        <h4 className="card-title text-center bg-success text-white p-2 mb-3">Account Details</h4>
        <table className="table table-bordered table-hover mt-2">
          <thead>
            <tr>
              <th><strong>User Name</strong></th>
              <th><strong>Bank Name</strong></th>
              <th><strong>Balance</strong></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((account, index) => (
              <tr key={index}>
                <td>{account.userName}</td>
                <td>{account.bankName}</td>
                <td>{account.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddAccount;
