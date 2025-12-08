import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <div className="hero-section">
          <h1>Mirësevini në Speak Up</h1>
          <p className="subtitle">
            Një platformë e sigurt për raportimin e incidenteve dhe shqetësimeve brenda komunitetit tonë.
            Zëri juaj ka rëndësi, dhe ne jemi këtu për të dëgjuar.
          </p>
          
          <div className="transparency-banner">
            <strong>Njoftim Transparence:</strong> Aktiviteti juaj mund të regjistrohet për qëllime sigurie dhe auditimi.
          </div>

          <div className="cta-section">
            <Link to="/raporto" className="btn btn-primary">
              Raporto një Incident
            </Link>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <div className="card">
          <h3>🔒 E Sigurt & Anonime</h3>
          <p>Raporto incidente anonimisht për të mbrojtur identitetin tuaj duke siguruar që shqetësimet tuaja dëgjohen.</p>
        </div>

        <div className="card">
          <h3>⚖️ Etike & Ligjore</h3>
          <p>E ndërtuar me kontroll privatësie, transparencë dhe përputhje me rregulloret e mbrojtjes së të dhënave.</p>
        </div>

        <div className="card">
          <h3>🚀 I Shpejtë & I Lehtë</h3>
          <p>Proces i thjeshtë raportimi që ju udhëzon nëpër dhënien e informacionit të nevojshëm në mënyrë efikase.</p>
        </div>

        <div className="card">
          <h3>🛡️ I Mbrojtur</h3>
          <p>Të dhënat tuaja trajtohen me kujdes, dhe ju mbani kontrollin mbi informacionin tuaj personal.</p>
        </div>
      </div>

      <div className="card">
        <h2>Si Funksionon</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Raporto</h4>
            <p>Paraqitni një raport incidenti me detaje përkatëse. Zgjidhni të mbeteni anonim nëse preferoni.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Shqyrtim</h4>
            <p>Ekipi ynë i administratorëve shqyrton raportin tuaj dhe ndërmjet veprime të përshtatshme bazuar në situatë.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Zgjidhje</h4>
            <p>Gjurmoni statusin e raportit tuaj dhe ankoheni për vendimet nëse është e nevojshme përmes procesit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home