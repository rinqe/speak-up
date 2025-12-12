import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/pages/ReportForm.css'

const ReportForm = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    titulli: '',
    pershkrimi: '',
    kategoria: '',
    lokacioni: '',
    data: '',
    koha: '',
    anonime: false,
    ePasigurtPerDatën: false
  })
  const [shfaqModalKonfirmimi, setShfaqModalKonfirmimi] = useState(false)

  const kategorite = [
    'Maltretim',
    'Ngacmim',
    'Mashtrim Akademik',
    'Shqetësim Sigurie',
    'Diskriminim',
    'Tjetër'
  ]

  const lokacionet = [
    'Kampusi Kryesor',
    'Kampusi Verior',
    'Kampusi Jugor',
    'Online',
    'Jashtë Kampusi',
    'Tjetër'
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShfaqModalKonfirmimi(true)
  }

  const confirmSubmit = () => {
    onSubmit(formData)
    setShfaqModalKonfirmimi(false)
    navigate('/')
  }

  return (
    <div className="report-form">
      <div className="card">
        <h1>Raporto një Incident</h1>
        <p className="subtitle">
          Ju lutemi jepni informacion të detajuar për incidentin. Të gjitha raportet trajtohen në mënyrë konfidenciale.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Titulli *</label>
            <input
              type="text"
              name="titulli"
              value={formData.titulli}
              onChange={handleChange}
              className="form-input"
              placeholder="Përshkrim i shkurtër i incidentit"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Përshkrimi *</label>
            <textarea
              name="pershkrimi"
              value={formData.pershkrimi}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Ju lutemi jepni informacion të detajuar për atë që ndodhi, duke përfshirë njerëzit e përfshirë, vendndodhjen dhe çdo detaj tjetër përkatës..."
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Kategoria *</label>
            <select
              name="kategoria"
              value={formData.kategoria}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Zgjidhni një kategori</option>
              {kategorite.map(kat => (
                <option key={kat} value={kat}>{kat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Lokacioni</label>
            <select
              name="lokacioni"
              value={formData.lokacioni}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Zgjidhni lokacionin</option>
              {lokacionet.map(lok => (
                <option key={lok} value={lok}>{lok}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="ePasigurtPerDatën"
                checked={formData.ePasigurtPerDatën}
                onChange={handleChange}
                className="checkbox"
              />
              <label className="form-label">E pasigurt për datën dhe kohën</label>
            </div>
          </div>

          {!formData.ePasigurtPerDatën && (
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Data</label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Koha</label>
                <input
                  type="time"
                  name="koha"
                  value={formData.koha}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="anonime"
                checked={formData.anonime}
                onChange={handleChange}
                className="checkbox"
              />
              <label className="form-label">
                Paraqitni anonimisht
                <small style={{ display: 'block', color: '#64748b', marginTop: '0.25rem' }}>
                  Nëse zgjidhni anonim, identifikuesit personalë nuk do të përfshihen në pamjen e administratorit.
                </small>
              </label>
            </div>
          </div>

          <div className="transparency-banner">
            <strong>Njoftim Privatësie:</strong> Raporti juaj do të trajtohet sipas politikës sonë të privatësisë. 
            Mund të shkarkoni ose fshini të dhënat tuaja në çdo kohë nga Cilësimet.
          </div>

          <button type="submit" className="btn btn-primary">
            Paraqit Raportin
          </button>
        </form>
      </div>

      {shfaqModalKonfirmimi && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Konfirmo Paraqitjen</h3>
              <button 
                className="modal-close"
                onClick={() => setShfaqModalKonfirmimi(false)}
              >
                ×
              </button>
            </div>
            <p>
              {formData.anonime 
                ? "Keni zgjedhur të paraqisni këtë raport anonimisht. Informacioni juaj personal nuk do të ndahet me administratorët. Jeni i sigurt që dëshironi të paraqisni?"
                : "Jeni i sigurt që dëshironi të paraqisni këtë raport? Informacioni juaj do të jetë i dukshëm për administratorët."
              }
            </p>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShfaqModalKonfirmimi(false)}
              >
                Anulo
              </button>
              <button 
                className="btn btn-primary" 
                onClick={confirmSubmit}
              >
                Konfirmo Paraqitjen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportForm