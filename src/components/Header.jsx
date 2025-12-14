import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/components/Header.css'

const Header = ({ userRole, setUserRole, isAdminLoggedIn, onAdminLogout }) => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    onAdminLogout()
    if (location.pathname === '/admin') {
      window.location.href = '/'
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🗣️ Speak Up
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Kryefaqja
          </Link>
          <Link 
            to="/raporto" 
            className={`nav-link ${isActive('/raporto') ? 'active' : ''}`}
          >
            Raporto Incident
          </Link>
          <Link 
            to="/ligjore" 
            className={`nav-link ${isActive('/ligjore') ? 'active' : ''}`}
          >
            Burime
          </Link>
          <Link 
            to="/settings" 
            className={`nav-link ${isActive('/settings') ? 'active' : ''}`}
          >
            Settings
          </Link>
          
          {isAdminLoggedIn && (
            <>
              <Link 
                to="/admin" 
                className={`nav-link ${isActive('/admin') ? 'active' : ''}`}
              >
                Paneli Admin
              </Link>
              <button 
                className="btn btn-secondary logout-btn"
                onClick={handleLogout}
              >
                Dil
              </button>
            </>
          )}
          
          {!isAdminLoggedIn && (
            <div className="role-switcher">
              <button
                className={`role-btn ${userRole === 'student' ? 'active' : ''}`}
                onClick={() => setUserRole('student')}
              >
                Student
              </button>
              <Link 
                to="/admin"
                className="role-btn admin-login-btn"
              >
                Admin Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header