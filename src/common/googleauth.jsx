// import React, { useState, useEffect } from "react";
// import jwt_decode from "jwt-decode";

// const Authgoogle = ({ handleLogin }) => {
//   const [user, setUser] = useState({});

//   function handleCallbackResponse(response) {
//     console.log("Encoded jwt ID token: " + response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log(userObject);
//     setUser(userObject);
//     document.getElementById("signInDiv").hidden = true;

//     // Call the handleLogin function from the parent component
//     handleLogin();
//   }

//   function handleSignOut(event) {
//     setUser({});
//     document.getElementById("signInDiv").hidden = false;
//   }

//   useEffect(() => {
//     const loadGoogleSignInLibrary = () => {
//       const script = document.createElement("script");
//       script.src = "https://accounts.google.com/gsi/client";
//       script.async = true;
//       document.body.appendChild(script);

//       script.onload = () => {
//         /* global google */
//         google.accounts.id.initialize({
//           client_id: "233971682660-6risqr03ktvvgujkqdqsu68cdn8kvo8j.apps.googleusercontent.com",
//           callback: handleCallbackResponse,
//         });
//         google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//           theme: "outline",
//           size: "large",
//         });
//         google.accounts.id.prompt();
//       };
//     };

//     loadGoogleSignInLibrary();
//   }, []);

//   return (
//     <div>
//       <div id="signInDiv"></div>
//       {Object.keys(user).length !== 0 && (
//         <button onClick={(e) => handleSignOut(e)}>Sign out</button>
//       )}

//       {Object.keys(user).length !== 0 && (
//         <div>
//           <img src={user.picture} alt="User Profile"></img>
//           <h3>{user.name}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Authgoogle;
