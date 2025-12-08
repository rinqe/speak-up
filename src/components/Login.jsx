import React, { useState } from 'react'
import '../styles/components/Login.css'

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulojm një delay të vogël për login
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === '1234') {
        onLogin(true)
      } else {
        setError('Username ose password i gabuar. Provoni përsëri.')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>🛡️ Hyrje në Panelin Admin</h1>
          <p>Ju lutem identifikohuni si administrator</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Shkruani username-in"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Shkruani password-in"
              required
            />
          </div>

          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          <button 
            type="submit" 
            className={`btn btn-primary login-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Duke hyrë...' : 'Hyr'}
          </button>
        </form>

        <div className="login-info">
          <h4>Kredencialet e Demonstrimit:</h4>
          <p><strong>Username:</strong> admin</p>
          <p><strong>Password:</strong> 1234</p>
        </div>
      </div>
    </div>
  )
}

export default Login