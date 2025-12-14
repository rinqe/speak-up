import React from 'react'
import "../styles/components/Footer.css";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2025 Speak Up – Të gjitha të drejtat e rezervuara</p>
      <p>Aktiviteti juaj mund të regjistrohet për qëllime sigurie dhe auditimi.</p>
      <Link to="/ligjore">Politika e Privatësisë</Link>
    </div>
  </footer>
  )
}

export default Footer