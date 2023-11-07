// import React, { useState, useEffect } from "react";

// import UserService from "../services/user.service";
// import EventBus from "../common/EventBus";

// const BoardAdmin = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     UserService.getAdminBoard().then(
//       (response) => {
//         setContent(response.data);
//       },
//       (error) => {
//         const _content =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setContent(_content);

//         if (error.response && error.response.status === 401) {
//           EventBus.dispatch("logout");
//         }
//       }
//     );
//   }, []);

//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>{content}</h3>
//       </header>
//     </div>
//   );
// };

// export default BoardAdmin;
// import React from "react";
// import { Link } from "react-router-dom";
// import './BoardAdmin.css'; // Import your custom CSS file

// const BoardAdmin = () => {
//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3 className="admin-title">Admin Dashboard</h3>
//         <div className="row">
//         <div className="col-md-4">
//             <Link to="/view-profile" className="card-link">
//               <div className="card account-card">
//                 <div className="card-body">
//                   <h5 className="card-title">View Profile</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//           <div className="col-md-4">
//             <Link to="/add-bank" className="card-link">
//               <div className="card bank-card">
//                 <div className="card-body">
//                   <h5 className="card-title">Bank</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//           <div className="col-md-4">
//             <Link to="/add-user" className="card-link">
//               <div className="card user-card">
//                 <div className="card-body">
//                   <h5 className="card-title">User</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//           <div className="col-md-4">
//             <Link to="/add-account" className="card-link">
//               <div className="card account-card">
//                 <div className="card-body">
//                   <h5 className="card-title">Account</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default BoardAdmin;
import React from "react";
import { Link } from "react-router-dom";
import './BoardAdmin.css';

const BoardAdmin = () => {
  return (
    <div className="container">
      <header className="jumbotron">
        <h3 className="admin-title">Admin Dashboard</h3>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <Link to="/view-profile" className="card-link">
              <div className="card view-profile-card">
                <div className="card-body">
                  <h5 className="card-title">View Profile</h5>
                  <p className="card-text">Click to view your profile.</p>
                  <Link to="/view-profile" className="btn btn-primary view-profile-btn">Profile</Link>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <Link to="/add-bank" className="card-link">
              <div className="card bank-card">
                <div className="card-body">
                  <h5 className="card-title">Bank</h5>
                  <p className="card-text">Click to manage banks.</p>
                  <Link to="/add-bank" className="btn btn-primary bank-btn">Add Bank</Link>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <Link to="/add-user" className="card-link">
              <div className="card user-card">
                <div className="card-body">
                  <h5 className="card-title">User</h5>
                  <p className="card-text">Click to manage users.</p>
                  <Link to="/add-user" className="btn btn-primary user-btn">Add User</Link>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <Link to="/add-account" className="card-link">
              <div className="card account-card">
                <div className="card-body">
                  <h5 className="card-title">Account</h5>
                  <p className="card-text">Click to manage accounts.</p>
                  <Link to="/add-account" className="btn btn-primary account-btn">Add Account</Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default BoardAdmin;
