import React, { useState } from 'react'
import '../styles/pages/AdminDashboard.css'

const AdminDashboard = ({ raportet, onUpdateReport }) => {
  const [filters, setFilters] = useState({
    kategoria: '',
    statusi: '',
    dataNga: '',
    dataDeri: ''
  })
  const [selectedReport, setSelectedReport] = useState(null)
  const [showReportModal, setShowReportModal] = useState(false)

  const kategorite = ['Maltretim', 'Ngacmim', 'Mashtrim Akademik', 'Shqetësim Sigurie', 'Diskriminim', 'Tjetër']
  const statuset = ['në pritje', 'në shqyrtim', 'i zgjidhur']

  const filteredReports = raportet.filter(raport => {
    return (
      (!filters.kategoria || raport.kategoria === filters.kategoria) &&
      (!filters.statusi || raport.statusi === filters.statusi) &&
      (!filters.dataNga || new Date(raport.krijuarMe) >= new Date(filters.dataNga)) &&
      (!filters.dataDeri || new Date(raport.krijuarMe) <= new Date(filters.dataDeri))
    )
  })

  const handleStatusChange = (idRaportit, statusiIRi) => {
    onUpdateReport(idRaportit, { statusi: statusiIRi })
  }

  const openReportDetails = (raport) => {
    setSelectedReport(raport)
    setShowReportModal(true)
  }

  return (
    <div className="admin-dashboard">
      <div className="card">
        <div className="admin-header">
          <h1>👨‍💼 Paneli i Administratorit</h1>
          <p className="admin-subtitle">Mirësevini në panelin e menaxhimit të raporteve</p>
        </div>
        
        <div className="stats-overview">
          <div className="stat-card">
            <h3>{raportet.length}</h3>
            <p>Total Raporte</p>
          </div>
          <div className="stat-card">
            <h3>{raportet.filter(r => r.statusi === 'në pritje').length}</h3>
            <p>Në Pritje</p>
          </div>
          <div className="stat-card">
            <h3>{raportet.filter(r => r.statusi === 'në shqyrtim').length}</h3>
            <p>Në Shqyrtim</p>
          </div>
          <div className="stat-card">
            <h3>{raportet.filter(r => r.statusi === 'i zgjidhur').length}</h3>
            <p>Te Zgjidhur</p>
          </div>
        </div>
        
        <div className="filters">
          <h3>Filtrat</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Kategoria</label>
              <select
                value={filters.kategoria}
                onChange={(e) => setFilters(prev => ({ ...prev, kategoria: e.target.value }))}
                className="form-select"
              >
                <option value="">Të gjitha Kategoritë</option>
                {kategorite.map(kat => (
                  <option key={kat} value={kat}>{kat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Statusi</label>
              <select
                value={filters.statusi}
                onChange={(e) => setFilters(prev => ({ ...prev, statusi: e.target.value }))}
                className="form-select"
              >
                <option value="">Të gjitha Statuset</option>
                {statuset.map(status => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Nga Data</label>
              <input
                type="date"
                value={filters.dataNga}
                onChange={(e) => setFilters(prev => ({ ...prev, dataNga: e.target.value }))}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Deri në Datë</label>
              <input
                type="date"
                value={filters.dataDeri}
                onChange={(e) => setFilters(prev => ({ ...prev, dataDeri: e.target.value }))}
                className="form-input"
              />
            </div>
          </div>
        </div>

        <div className="reports-table">
          <h3>Lista e Raporteve ({filteredReports.length})</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulli</th>
                <th>Kategoria</th>
                <th>Data</th>
                <th>Lokacioni</th>
                <th>Anonim</th>
                <th>Statusi</th>
                <th>Veprimet</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map(raport => (
                <tr key={raport.id}>
                  <td>#{raport.id}</td>
                  <td>{raport.titulli}</td>
                  <td>{raport.kategoria}</td>
                  <td>{new Date(raport.krijuarMe).toLocaleDateString()}</td>
                  <td>{raport.lokacioni || 'N/A'}</td>
                  <td>{raport.anonime ? 'Po' : 'Jo'}</td>
                  <td>
                    <span className={`status-badge status-${raport.statusi.replace(' ', '-')}`}>
                      {raport.statusi}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn btn-secondary"
                        onClick={() => openReportDetails(raport)}
                      >
                        Shiko
                      </button>
                      <select
                        value={raport.statusi}
                        onChange={(e) => handleStatusChange(raport.id, e.target.value)}
                        className="form-select"
                        style={{ marginLeft: '0.5rem', width: 'auto' }}
                      >
                        {statuset.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredReports.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '2rem' }}>
                    📝 Nuk u gjetën raporte që përputhen me filtrat aktuale.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showReportModal && selectedReport && (
        <ReportDetailsModal
          raport={selectedReport}
          onClose={() => setShowReportModal(false)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  )
}

const ReportDetailsModal = ({ raport, onClose, onStatusChange }) => {
  const [appealText, setAppealText] = useState('')
  const [showAppealForm, setShowAppealForm] = useState(false)

  return (
    <div className="modal-overlay">
      <div className="modal" style={{ maxWidth: '600px' }}>
        <div className="modal-header">
          <h3>📋 Detajet e Raportit #{raport.id}</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="report-details">
          <div className="detail-row">
            <strong>Titulli:</strong>
            <span>{raport.titulli}</span>
          </div>
          <div className="detail-row">
            <strong>Kategoria:</strong>
            <span>{raport.kategoria}</span>
          </div>
          <div className="detail-row">
            <strong>Paraqitur:</strong>
            <span>{new Date(raport.krijuarMe).toLocaleString()}</span>
          </div>
          <div className="detail-row">
            <strong>Lokacioni:</strong>
            <span>{raport.lokacioni || 'Nuk është specifikuar'}</span>
          </div>
          <div className="detail-row">
            <strong>Anonim:</strong>
            <span>{raport.anonime ? 'Po' : 'Jo'}</span>
          </div>
          <div className="detail-row">
            <strong>Statusi:</strong>
            <span className={`status-badge status-${raport.statusi.replace(' ', '-')}`}>
              {raport.statusi}
            </span>
          </div>

          <div className="detail-section">
            <strong>Përshkrimi:</strong>
            <p>{raport.pershkrimi}</p>
          </div>

          {raport.statusi === 'i zgjidhur' && (
            <div className="detail-section">
              <button 
                className="btn btn-warning"
                onClick={() => setShowAppealForm(!showAppealForm)}
              >
                ⚖️ Ankohu / Shpreh Shqetësim për këtë vendim
              </button>

              {showAppealForm && (
                <div style={{ marginTop: '1rem' }}>
                  <textarea
                    value={appealText}
                    onChange={(e) => setAppealText(e.target.value)}
                    className="form-textarea"
                    placeholder="Ju lutemi shpjegoni pse po ankoheni për këtë vendim..."
                    rows="4"
                  />
                  <button 
                    className="btn btn-primary"
                    style={{ marginTop: '0.5rem' }}
                    onClick={() => {
                      alert('✅ Ankesa u paraqit me sukses')
                      setShowAppealForm(false)
                      setAppealText('')
                    }}
                  >
                    Paraqit Ankesën
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Mbyll
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => {
              onStatusChange(raport.id, 'në shqyrtim')
              onClose()
            }}
          >
            Shëno si në Shqyrtim
          </button>
          <button 
            className="btn btn-success"
            onClick={() => {
              onStatusChange(raport.id, 'i zgjidhur')
              onClose()
            }}
          >
            Zgjidh
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard