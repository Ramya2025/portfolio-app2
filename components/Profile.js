import React from "react";
import AuthService from "../services/auth.service";
import Table from "react-bootstrap/Table";


// const Profile = () => {
//   const currentUser = AuthService.getCurrentUser();

//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>
//           <strong>{currentUser.username}</strong> Profile
//         </h3>
//       </header>
//       <p>
//         <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
//         {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
//       </p>
//       <p>
//         <strong>Id:</strong> {currentUser.id}
//       </p>
//       <p>
//         <strong>Email:</strong> {currentUser.email}
//       </p>
//       <strong>Authorities:</strong>
//       <ul>
//         {currentUser.roles &&
//           currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
//       </ul>
//     </div>
//   );
// };

// export default Profile;



const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Id:</th>
            <td>{currentUser.id}</td>
          </tr>
          <tr>
            <th>User name:</th>
            <td>{currentUser.username}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{currentUser.email}</td>
          </tr>
          <tr>
            <th>Roles:</th>
            <td>{currentUser.roles.join(", ")}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
