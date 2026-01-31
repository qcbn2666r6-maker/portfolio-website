import { useState, useEffect } from 'react'
import profilePhoto from '../assets/profile.jpg'

const Hero = () => {
  const taglines = [
    '"I love building tools that empower people"',
    '"I\'m passionate about the social impact of technology"',
    '"Originally from Germany, I was brought to the US by Apple"'
  ]

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length)
        setIsFading(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Christine_Wilhelmy_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#373A40]/90 to-[#686D76]/80 z-0"></div>

      {/* Profile Picture - Desktop */}
      <div className="hidden lg:flex absolute right-[10%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#686D76] to-[#373A40] border-[6px] border-[#DC5F00] items-center justify-center shadow-2xl z-10 animate-fade-in-up-delay-2">
        <img
          src={profilePhoto}
          alt="Christine Wilhelmy"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-xl">
          <p className="text-[#DC5F00] font-semibold text-lg uppercase tracking-widest mb-4 animate-fade-in-up">
            Product Manager
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up-delay-1">
            Hi, I'm Christine
          </h1>

          {/* Dynamic Tagline */}
          <div className="min-h-[80px] mb-8 animate-fade-in-up-delay-2">
            <p
              className={`text-xl sm:text-2xl text-[#EEEEEE] italic transition-opacity duration-500 ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {taglines[currentTaglineIndex]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
            <button
              onClick={() => document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#DC5F00] text-white px-8 py-3 rounded-lg hover:bg-[#ff7a1a] transition-all font-semibold hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              How I Work <span>→</span>
            </button>
            <button
              onClick={downloadResume}
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#373A40] transition-colors font-semibold"
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
