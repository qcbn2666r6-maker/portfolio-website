import profilePhoto from '../assets/profile.jpg'

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Christine_Wilhelmy_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <img
              src={profilePhoto}
              alt="Christine Wilhelmy"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Christine Wilhelmy</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Product Manager passionate about building user-centered solutions that drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700">Products Launched</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$10M+</div>
              <div className="text-gray-700">Revenue Generated</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Work
            </button>
            <button
              onClick={downloadResume}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero