import React from "react";

function Footer() {
  // NOTE: Angela put the const inside the function. I guess that's better practice
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {currentYear}</p>
    </footer>
  );
}

export default Footer;
