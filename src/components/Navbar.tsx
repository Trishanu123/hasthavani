import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="nav-logo">
          Hasthavani
        </a>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#recognition" onClick={() => setIsMenuOpen(false)}>Recognition</a>
          <a href="#creators" onClick={() => setIsMenuOpen(false)}>Creators</a>
          <a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a>
          <a href="#our-story" onClick={() => setIsMenuOpen(false)}>Our Story</a>
          <a href="#voices" onClick={() => setIsMenuOpen(false)}>Voices</a>
          <a href="#media" onClick={() => setIsMenuOpen(false)}>Media</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 