const About = () => {
  const highlights = [
    { icon: '🎯', title: 'Strategic Vision', description: 'Roadmapping & prioritization' },
    { icon: '📊', title: 'Data-Driven', description: 'Analytics & experimentation' },
    { icon: '🤝', title: 'Cross-Functional', description: 'Engineering, design & business' },
    { icon: '💡', title: 'User-Centric', description: 'Research & empathy' }
  ]

  const stats = [
    { number: '50', suffix: 'M+', label: 'Revenue' },
    { number: '37', suffix: '', label: 'Products Shipped' },
    { number: '10', suffix: '+', label: 'Years Experience' },
    { number: '10', suffix: 'M+', label: 'Users' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#373A40]">
              About <span className="text-[#DC5F00]">Me</span>
            </h2>
            <p className="text-[#686D76] text-lg leading-relaxed">
              Product Manager with expertise in driving growth for B2B and B2C platforms
              through data-driven experimentation and user-centered design. Proven track
              record scaling marketplaces and SaaS products at Apple and high-growth startups,
              delivering measurable impact including 42% quarter-over-quarter growth in active
              users, 20% reduction in operational inefficiencies, and consistent conversion
              rate improvements through systematic A/B testing.
            </p>
            <p className="text-[#686D76] text-lg leading-relaxed">
              Skilled at leveraging network effects, recommendation algorithms, and API
              integrations to create scalable product experiences. Strong technical background
              with M.A. in Information Science and hands-on experience with SQL, experimentation
              frameworks, and cross-functional collaboration.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#EEEEEE] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#373A40]">{item.title}</h4>
                    <p className="text-sm text-[#686D76]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#EEEEEE] p-8 rounded-xl text-center hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#DC5F00] mb-2">
                  {stat.number}<span className="text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-sm text-[#686D76] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
