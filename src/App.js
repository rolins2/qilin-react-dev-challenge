import React from "react";
import RegistrationForm from "./RegistrationForm";

export default function App({}) {
  return (
    <div >
    
      {/* Add any additional instructions or guidance for candidates here */}

      <RegistrationForm />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  description: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.5",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
};
