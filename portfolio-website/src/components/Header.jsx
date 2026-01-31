import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-[#373A40] hover:text-[#DC5F00] transition-colors"
          >
            Christine <span className="text-[#DC5F00]">Wilhelmy</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#686D76] hover:text-[#DC5F00] transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DC5F00] after:transition-all hover:after:w-full"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#686D76] hover:text-[#DC5F00] transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DC5F00] after:transition-all hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-[#686D76] hover:text-[#DC5F00] transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DC5F00] after:transition-all hover:after:w-full"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-[#686D76] hover:text-[#DC5F00] transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DC5F00] after:transition-all hover:after:w-full"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#686D76] hover:text-[#DC5F00] transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DC5F00] after:transition-all hover:after:w-full"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#373A40] hover:text-[#DC5F00] p-2"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#686D76] hover:text-[#DC5F00] text-left font-medium"
              >
                Profile
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#686D76] hover:text-[#DC5F00] text-left font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-[#686D76] hover:text-[#DC5F00] text-left font-medium"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-[#686D76] hover:text-[#DC5F00] text-left font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#686D76] hover:text-[#DC5F00] text-left font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
