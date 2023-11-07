// import React, { useState, useEffect } from "react";

// import UserService from "../services/user.service";
// import EventBus from "../common/EventBus";

// const BoardUser = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     UserService.getUserBoard().then(
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
//         <h1>{content}</h1>
//       </header>
//     </div>
//   );
// };

// export default BoardUser;
import React from "react";
import { Link } from "react-router-dom";
import './BoardUser.css';

const BoardUser = () => {
  return (
    <div className="container">
      <header className="jumbotron">
        <h3 className="admin-title">User Dashboard</h3>
        <div className="row">
          <div className="col-md-4">
            <Link to="/view-profile" className="card-link">
              <div className="card user-card user-profile-card"> {/* Add a specific class for styling */}
                <div className="card-body">
                  <h5 className="card-title">User Profile</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default BoardUser;
