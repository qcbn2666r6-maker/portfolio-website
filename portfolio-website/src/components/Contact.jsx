const Contact = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Christine_Wilhelmy_Resume.pdf'
    link.click()
  }

  return (
    <section id="contact" className="py-20 bg-[#373A40]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#EEEEEE] max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:cwilhelmy@icloud.com"
                className="flex items-center gap-4 text-[#EEEEEE] hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-[#DC5F00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-[#686D76]">Email</div>
                  <div className="font-medium">cwilhelmy@icloud.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/christinewilhelmy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#EEEEEE] hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-[#DC5F00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <div className="text-sm text-[#686D76]">LinkedIn</div>
                  <div className="font-medium">Connect with me</div>
                </div>
              </a>

              <a
                href="tel:+14158465075"
                className="flex items-center gap-4 text-[#EEEEEE] hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-[#DC5F00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <div className="text-sm text-[#686D76]">Phone</div>
                  <div className="font-medium">+1 415 846 5075</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#EEEEEE]">
                <div className="w-12 h-12 bg-[#DC5F00] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <div className="text-sm text-[#686D76]">Location</div>
                  <div className="font-medium">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download Card */}
          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              📄 Download Resume
            </h3>
            <p className="text-[#EEEEEE] mb-6">
              Get a detailed overview of my experience, skills, and qualifications in PDF format.
            </p>
            <button
              onClick={downloadResume}
              className="bg-[#DC5F00] text-white px-8 py-3 rounded-lg hover:bg-[#ff7a1a] transition-all font-semibold inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Download PDF <span>↓</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#686D76] text-sm">
              © {new Date().getFullYear()} Christine Wilhelmy. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/christinewilhelmy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#686D76] hover:bg-[#DC5F00] rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#686D76] hover:bg-[#DC5F00] rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-1"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
