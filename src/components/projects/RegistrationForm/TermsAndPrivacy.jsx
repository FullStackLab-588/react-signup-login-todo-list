import { useState } from "react";

export const TermsPrivacy = () => {
  const [showModal, setShowModal] = useState(null); // "terms" | "privacy"

  return (
    <>
      <p style={{ fontSize: "14px", marginTop: "10px" }}>
        By creating an account you agree to our{" "}
        <span
          style={linkStyle}
          onClick={() => setShowModal("terms")}
        >
          Terms
        </span>{" "}
        &{" "}
        <span
          style={linkStyle}
          onClick={() => setShowModal("privacy")}
        >
          Privacy Policy
        </span>
      </p>

      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            {/* Modal Title */}
            <h2 style={{ color: "#3b82f6", marginBottom: "10px" }}>
              {showModal === "terms"
                ? "Terms & Conditions"
                : "Privacy Policy"}
            </h2>

            {/* Modal Content */}
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              {showModal === "terms"
                ? `These are the Terms & Conditions of this website. 
Users must provide accurate information while signing up. 
Any misuse of the platform may result in account termination. 
This project is built for educational purposes using React.`
                : `This is the Privacy Policy of this website. 
We do not store your data on any server. 
All information is stored locally in your browser for learning purposes only. 
Your data is not shared with any third party.`}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(null)}
              style={buttonStyle}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/* -------------------- STYLES -------------------- */

const linkStyle = {
  color: "#3b82f6",
  cursor: "pointer",
  fontWeight: "bold",
  textDecoration: "underline",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#111827",
  padding: "25px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "450px",
  color: "white",
  boxShadow: "0 0 25px rgba(37,99,235,0.5)",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "8px 18px",
  backgroundColor: "#2563eb",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};