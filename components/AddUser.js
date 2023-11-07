import React, { useState } from "react";
import PaginationComponent from './PaginationComponent';

const AddUser = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [collectedData, setCollectedData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      userName,
      password,
      mobileNo,
      email,
    };
    setCollectedData([...collectedData, newUser]);
    setName("");
    setUserName("");
    setPassword("");
    setMobileNo("");
    setEmail("");
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
        <h4 className="card-title text-center bg-success text-white p-2 mb-3">Add User</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label"><strong>Name:</strong></label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
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
            <label htmlFor="password" className="form-label"><strong>Password:</strong></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="mobileNo" className="form-label"><strong>Mobile No:</strong></label>
            <input
              type="text"
              className="form-control"
              id="mobileNo"
              placeholder="Enter Mobile No"
              value={mobileNo}
              onChange={handleMobileNoChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label"><strong>Email:</strong></label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
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
        <h4 className="card-title text-center bg-success text-white p-2 mb-3">User Details</h4>
        <table className="table table-bordered table-hover mt-2">
          <thead>
            <tr>
              <th><strong>Name</strong></th>
              <th><strong>User Name</strong></th>
              <th><strong>Password</strong></th>
              <th><strong>Mobile No</strong></th>
              <th><strong>Email</strong></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>{user.mobileNo}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddUser;
