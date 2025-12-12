import React, { useState } from 'react'
import '../styles/pages/Settings.css'

const Settings = () => {
  const [settings, setSettings] = useState({
    njoftimetEmail: true,
    emailMarketing: false,
    analitikaTeDhenave: true,
    autentikimDyFaktor: false
  })
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  const handleSettingChange = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  const handleDeleteAccount = () => {
    alert('Kërkesa për fshirje llogarie u paraqit. Do të merrni një email konfirmimi.')
    setShowDeleteModal(false)
  }

  const handleDownloadData = () => {
    alert('Shkarkimi i të dhënave tuaja filloi. Do të merrni një email me udhëzimet e shkarkimit.')
    setShowDownloadModal(false)
  }

  return (
    <div className="settings">
      <div className="card">
        <h1>Cilësimet e Llogarisë</h1>
        
        <section className="settings-section">
          <h2>Kontrollet e Privatësisë</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Njoftimet me Email</h4>
              <p>Merrni përditësime për raportet tuaja dhe ndryshimet në platformë</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.njoftimetEmail}
                onChange={() => handleSettingChange('njoftimetEmail')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h4>Komunikimet e Marketingut</h4>
              <p>Merrni buletine dhe materiale promocionale (kërkohet opt-in)</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.emailMarketing}
                onChange={() => handleSettingChange('emailMarketing')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h4>Analitika e të Dhënave</h4>
              <p>Na ndihmoni të përmirësohemi duke ndarë të dhëna anonime të përdorimit</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.analitikaTeDhenave}
                onChange={() => handleSettingChange('analitikaTeDhenave')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h4>Autentikim Dy-Faktor</h4>
              <p>Shtoni një shtresë shtesë sigurie në llogarinë tuaj</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.autentikimDyFaktor}
                onChange={() => handleSettingChange('autentikimDyFaktor')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </section>

        <section className="settings-section">
          <h2>Menaxhimi i të Dhënave</h2>
          
          <div className="data-actions">
            <button 
              className="btn btn-primary"
              onClick={() => setShowDownloadModal(true)}
            >
              Shkarko të Dhënat e Mia
            </button>
            
            <button 
              className="btn btn-error"
              onClick={() => setShowDeleteModal(true)}
            >
              Fshi Llogarinë Time
            </button>
          </div>
          
          <div className="data-info">
            <p>
              <strong>Ruajtja e të Dhënave:</strong> Raportet tuaja ruhen për 2 vjet për qëllime auditimi, 
              pas së cilës ato anonimizohen ose fshihen automatikisht.
            </p>
            <p>
              <strong>Privatësia:</strong> Ju keni të drejtën të aksesoni, korrigjoni ose fshini të dhënat tuaja personale 
              në çdo kohë përmes këtyre cilësimeve.
            </p>
          </div>
        </section>

        <div className="transparency-banner">
          <strong>Kontrolli Juaj Ka Rëndësi:</strong> Këto cilësime ju japin kontroll mbi të dhënat dhe preferencat tuaja të privatësisë. 
          Ndryshimet zbatohen menjëherë dhe ndikojnë në mënyrën se si ne i përpunojmë informacionet tuaja.
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Fshi Llogarinë</h3>
              <button 
                className="modal-close"
                onClick={() => setShowDeleteModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <p><strong>Paralajmërim: Ky veprim nuk mund të zhbëhet.</strong></p>
              <p>Fshirja e llogarisë tuaj do të:</p>
              <ul>
                <li>Largojë përgjithmonë informacionin tuaj personal</li>
                <li>Fshijë historinë tuaj të raporteve</li>
                <li>Anulojë çdo raport në pritje</li>
                <li>Largojë aksesin tuaj në platformë</li>
              </ul>
              <p>Jeni i sigurt që dëshironi të vazhdoni?</p>
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                Anulo
              </button>
              <button 
                className="btn btn-error"
                onClick={handleDeleteAccount}
              >
                Po, Fshi Llogarinë Time
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download Data Modal */}
      {showDownloadModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Shkarko të Dhënat e Tua</h3>
              <button 
                className="modal-close"
                onClick={() => setShowDownloadModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <p>Eksporti i të dhënave tuaj do të përfshijë:</p>
              <ul>
                <li>Informacionin personal të profilit</li>
                <li>Të gjitha raportet e paraqitura</li>
                <li>Historinë e statusit të raporteve</li>
                <li>Të dhënat e ankesave</li>
                <li>Regjistrimet e aktivitetit të llogarisë</li>
              </ul>
              <p>Linku i shkarkimit do t'ju dërgohet në adresën tuaj të emailit të regjistruar dhe do të jetë i disponueshëm për 24 orë.</p>
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDownloadModal(false)}
              >
                Anulo
              </button>
              <button 
                className="btn btn-primary"
                onClick={handleDownloadData}
              >
                Kërko Shkarkim të Dhënash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings