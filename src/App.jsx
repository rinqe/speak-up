import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Home from './pages/Home'
import ReportForm from './pages/ReportForm'
import AdminDashboard from './pages/AdminDashboard'
import Legal from './pages/Legal'
import Settings from './pages/Settings'
import './styles/main.css'
import Footer from './components/Footer'

function App() {
  const [userRole, setUserRole] = useState('student')
  const [raportet, setRaportet] = useState([])
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  const shtoRaport = (raportIRi) => {
    const raporti = {
      id: Date.now(),
      ...raportIRi,
      statusi: 'në pritje',
      krijuarMe: new Date().toISOString()
    }
    setRaportet(prev => [...prev, raporti])
  }

  const perditesoRaport = (idRaportit, perditesime) => {
    setRaportet(prev => 
      prev.map(raport => 
        raport.id === idRaportit ? { ...raport, ...perditesime } : raport
      )
    )
  }

  const handleAdminLogin = (success) => {
    if (success) {
      setIsAdminLoggedIn(true)
      setUserRole('admin')
    }
  }

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false)
    setUserRole('student')
  }

  return (
    <Router>
      <div className="app">
        <Header 
          userRole={userRole} 
          setUserRole={setUserRole}
          isAdminLoggedIn={isAdminLoggedIn}
          onAdminLogout={handleAdminLogout}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/raporto" 
              element={<ReportForm onSubmit={shtoRaport} />} 
            />
            <Route 
              path="/admin" 
              element={
                isAdminLoggedIn ? 
                <AdminDashboard 
                  raportet={raportet} 
                  onUpdateReport={perditesoRaport}
                /> : 
                <Login onLogin={handleAdminLogin} />
              } 
            />
            <Route path="/ligjore" element={<Legal />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App