import { Outlet } from "react-router-dom";
import NestedHome from "./NestedHome";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the Contact page content.</p>
      <NestedHome />
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          float: "right",
          width: "200px",
        }}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default Contact;
