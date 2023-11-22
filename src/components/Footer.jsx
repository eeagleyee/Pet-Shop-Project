import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#c3c6c9",
        color: "#fff",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h3>© 2023 ANOLIEFO Joseph Izuchukwu</h3>
        <p>Email: eeagleyee@gmail.com | josephizuu@gmail.com </p>
        <p>GitHub: github.com/eeagleyee</p>
      </div>
      <div>
        <p>Connect with me:</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://twitter.com/@JosephIzuu"
            style={{ marginRight: "10px" }}
          >
            Twitter
          </a>
          <a href="www.linkedin.com/in/joseph-izuchukwu-anoliefo-b0255418b">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
