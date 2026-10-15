//Controlled Component
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddUser() {
  const [obj, setObj] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(obj);
    navigate("/admin");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>Add User</h1>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setObj({ ...obj, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setObj({ ...obj, email: e.target.value })}
          />
        </p>

    
        <p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setObj({ ...obj, password: e.target.value })}
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="Role"
            onChange={(e) => setObj({ ...obj, role: e.target.value })}
          />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}

// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// export default function AddUser() {
//   const nameRef = useRef();
//   const navigate = useNavigate();
//   console.log("Component Rendered");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(nameRef.current.value);
//     navigate("/admin");
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <form onSubmit={handleSubmit}>
//         <h1>Add User</h1>
//         <p>
//           <input type="text" placeholder="Name" ref={nameRef} />
//         </p>
//         <p>
//           <input type="email" placeholder="Email" />
//         </p>

//         <p>
//           <input type="number" placeholder="Phone" />
//         </p>

//         <p>
//           <input type="text" placeholder="Address" />
//         </p>

//         <p>
//           <input type="number" placeholder="Initial Balance" />
//         </p>

//         <p>
//           <input type="password" placeholder="Password" />
//         </p>

//         <p>
//           <input type="text" placeholder="Role" />
//         </p>
//         <p>
//           <button>Submit</button>
//         </p>
//       </form>
//     </div>
//   );
// }
