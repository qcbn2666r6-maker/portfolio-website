const Skills = () => {
  const skillCategories = [
    {
      icon: '📋',
      title: 'Product Strategy',
      skills: ['Roadmap Planning', 'Market Research', 'Competitive Analysis', 'Go-to-Market', 'OKRs & KPIs', 'Product Vision']
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      skills: ['SQL', 'A/B Testing', 'Funnel Analysis', 'Cohort Analysis', 'Data Visualization', 'Metrics Definition']
    },
    {
      icon: '🎨',
      title: 'Design & UX',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Thinking', 'Journey Mapping']
    },
    {
      icon: '🤝',
      title: 'Leadership',
      skills: ['Cross-functional Teams', 'Stakeholder Management', 'Agile/Scrum', 'Mentoring', 'Executive Presentation']
    }
  ]

  const tools = [
    { icon: '📊', name: 'Amplitude' },
    { icon: '📋', name: 'Jira' },
    { icon: '🎨', name: 'Figma' },
    { icon: '📈', name: 'Mixpanel' },
    { icon: '📝', name: 'Notion' },
    { icon: '💬', name: 'Slack' },
    { icon: '🔥', name: 'Hotjar' },
    { icon: '🗺️', name: 'Miro' },
    { icon: '📉', name: 'Looker' },
    { icon: '🔄', name: 'Productboard' }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#373A40] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#686D76] max-w-2xl mx-auto">
            Core competencies developed over 10+ years in product management
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-[#DC5F00] font-semibold text-lg mb-4 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#EEEEEE] text-[#373A40] text-sm rounded-full hover:bg-[#DC5F00] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#373A40] mb-4">
            Tools I Use
          </h3>
          <p className="text-[#686D76]">
            Software and platforms I work with daily
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{tool.icon}</div>
              <div className="text-[#686D76] font-medium text-sm">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
