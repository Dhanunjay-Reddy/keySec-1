

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "antd";
// import { UserOutlined } from "@ant-design/icons";

// import logo from "../assets/logo.svg";

// const Hero = () => {
//   const { isAuthenticated } = useAuth0();

//   const redirectToPage = () => {
//     window.open("http://localhost:7777/", "_blank");
//   };

//   const redirectToPageTwo = () => {
//     window.open("http://localhost:9999/", "_blank");
//   };

//   const redirectToPageThree = () => {
//     window.open("http://localhost:5555/", "_blank");
//   };

//   return (
//     <div className="text-center hero my-5">
//       <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
//       <h1 className="mb-4">KeySec</h1>

//       <p className="lead">
//         KeySec, a pioneer in bringing never seen technologies to the end users.
//       </p>

//       {isAuthenticated && (
//         <fieldset>
//           <legend>Authenticate with KeySec</legend>
//           <Button
//             type="primary"
//             shape="round"
//             icon={<UserOutlined />}
//             onClick={redirectToPageThree}
//           >
//             Any Text
//           </Button>
//           <Button
//             type="primary"
//             shape="round"
//             icon={<UserOutlined />}
//             onClick={redirectToPage}
//           >
//             Login
//           </Button>
//           <Button
//             type="primary"
//             shape="round"
//             icon={<UserOutlined />}
//             onClick={redirectToPageTwo}
//           >
//             Same Text
//           </Button>
//         </fieldset>
//       )}
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

//import logo from "../assets/logo.svg";

const Hero = () => {
  const { isAuthenticated } = useAuth0();

  const redirectToPage = () => {
    window.location.href = "http://localhost:7777/";
  };
  
  const redirectToPageTwo = () => {
    window.location.href = "http://localhost:9999/";
  };
  
  const redirectToPageThree = () => {
    window.location.href = "http://localhost:5555/";
  };
  

  return (
    <div className="text-center hero my-5">
      {/*<img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />*/}
      <h1 className="mb-4">KeySec</h1>

      <p className="lead">
        KeySec, a pioneer in bringing never seen technologies to the end users.
      </p>

      {isAuthenticated && (
        <fieldset style={{ border: "1px solid #ddd", padding: "1rem", marginTop:"-70px" }}>
          <legend style={{ textAlign: "center" }}>Authenticate with KeySec</legend>
          <div style={{ display: "flex",justifyContent:"center", gap: "1rem"}}>
            <Button
              type="primary"
              shape="round"
              icon={<UserOutlined />}
              onClick={redirectToPageThree}
              bordered
            >
              Any Text
            </Button>
            <Button
              type="primary"
              shape="round"
              icon={<UserOutlined />}
              onClick={redirectToPage}
              bordered
            >
              Login
            </Button>
            <Button
              type="primary"
              shape="round"
              icon={<UserOutlined />}
              onClick={redirectToPageTwo}
              bordered
            >
              Same Text
            </Button>
          </div>
        </fieldset>
      )}
    </div>
  );
};

export default Hero;

