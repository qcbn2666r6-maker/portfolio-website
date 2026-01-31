import { useState } from 'react'
import recommendationEngine from '../assets/recommendation-engine.png'
import networkEffect from '../assets/network-effect-marketplace.png'
import featureInContext from '../assets/feature-in-context.png'
import progressiveDisclosure from '../assets/progressive-disclosure.png'
import garageband from '../assets/garageband.png'

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState(null)
  const [filter, setFilter] = useState('all')

  const caseStudies = [
    {
      id: 1,
      title: "Recommendation Engine",
      category: "b2c",
      image: recommendationEngine,
      excerpt: "Led development of algorithms for recommendation engines, leveraging itemized collaborative filtering to boost multi-campaign contributions by 15%.",
      challenge: "Indiegogo is a crowdfunding platform with diverse campaigns ranging from electronics to beauty products. Most contributors arrive to support a specific campaign and leave after contributing, missing other relevant opportunities. Contributors land on specific campaign pages rather than the homepage, limiting cross-campaign discovery.",
      approach: "Implemented Itemized Collaborative Filtering as the AI personalization technique. This approach avoids pigeonholing contributors while making relevant campaign suggestions—just because you came to support a tech campaign doesn't mean you wouldn't be interested in food campaigns.",
      results: [
        "15% increase in multi-campaign contributions",
        "Improved contributor engagement across platform",
        "Enhanced campaign discovery experience",
        "Increased average transaction value"
      ],
      tags: ["AI/ML", "Personalization", "Collaborative Filtering", "Crowdfunding"]
    },
    {
      id: 2,
      title: "Network Effect as Growth Strategy",
      category: "b2c",
      image: networkEffect,
      excerpt: "Leveraged Network Effects to drive marketplace growth, achieving 42% increase in campaigner onboarding and 15% revenue increase q/q.",
      challenge: "After rapid early-stage growth, crowdfunding platforms faced market fatigue. Shifting consumer behavior alarmed investors, demanding improved net burn rates and cash-positive status by end of quarter. The key question: How can we attract established crowdfunders with sizable, loyal communities to use our platform?",
      approach: "Conducted user research to understand why successful crowdfunders avoided Indiegogo. Found key blockers: legacy campaign page editor, no preview capability before going live. Used RICE prioritization to identify high-impact, low-effort solutions. Key feature: staging environment for campaign preview. Created milestones for CES launch, exclusive access for new campaigners, and ongoing feedback collection.",
      results: [
        "42% increase in new campaigner onboarding",
        "15% revenue increase quarter-over-quarter",
        "Won over five high-impact campaigners with 2M+ campaigns",
        "Achieved cash-positive status by EOQ"
      ],
      tags: ["Network Effects", "Growth Strategy", "User Research", "Marketplace"]
    },
    {
      id: 3,
      title: "Network Effect as Growth Strategy (Mobility)",
      category: "b2b",
      image: featureInContext,
      excerpt: "Drove adoption of cloud-based analytics tools in public transport, increasing on-time performance by 12% while reducing late fees.",
      challenge: "Public Transport Agencies use capital-intensive legacy systems to capture and process data, paid by seat. Only a few people have access to relevant data within an agency. Analysts often need a full day to go through hundreds of pages to find the root cause of an issue.",
      approach: "Introduced cloud-based solutions providing relevant and actionable insights from existing agency data. Conducted user research to understand pain points, mapped current experience, identified critical information needs. Designed visual dashboards for meaningful data presentation. Tested prototypes with Customer Council of Operations leaders in Public Transport.",
      results: [
        "12% increase in on-time performance (OTP Adherence)",
        "Reduced late fees for transport agencies",
        "Analysis time reduced from 1 day to seconds",
        "Expanded data access across agency teams"
      ],
      tags: ["B2B SaaS", "Public Transport", "Cloud Analytics", "Data Visualization"]
    },
    {
      id: 4,
      title: "Growth Experiments & A/B Testing",
      category: "b2c",
      image: progressiveDisclosure,
      excerpt: "Ran systematic growth experiments on campaign pages and payflow, achieving 3% conversion rate increase through Progressive Disclosure.",
      challenge: "We were cannibalizing our campaigners' marketing success through low conversion rates from the campaign funding page to the 'Thank You' page where payment is confirmed. Needed to find pain points in the campaign page and payflow where crowdfunders were dropping off.",
      approach: "Step 1: Collected hypotheses on conversion rate blockers through data analysis and customer feedback. Step 2: Prioritized by estimated impact and engineering/design effort. Strategy 1: Productized successful merchandising tactics (e.g., urgency timers on Perk Cards). Strategy 2: Created series of growth experiments based on design changes to Perk Cards and payflow.",
      results: [
        "3% conversion rate increase through Progressive Disclosure",
        "Design changes to perk card had biggest revenue impact",
        "Established systematic A/B testing framework",
        "Improved contributor checkout experience"
      ],
      tags: ["A/B Testing", "Growth Experiments", "Conversion Optimization", "UX Design"]
    },
    {
      id: 5,
      title: "Democratizing Access to Music Creation",
      category: "b2c",
      image: garageband,
      excerpt: "Responsible for the narrative around Apple's line of creative applications. Apple's creative apps democratize access to production tools and allow both consumers and professionals to work with photos, videos, and music.",
      challenge: "Music creation has traditionally required expensive equipment, years of training, and technical expertise. This created significant barriers preventing everyday people from expressing themselves through music.",
      approach: "Conducted user research to understand the needs of aspiring music creators. Developed a compelling product narrative centered on accessibility and empowerment. Collaborated with design and engineering teams to simplify complex music creation workflows.",
      results: [
        "Expanded access to music creation tools",
        "Simplified user onboarding experience",
        "Increased engagement among new creators",
        "Developed compelling brand narrative"
      ],
      tags: ["Narrative Development", "Accessibility", "Music Tech", "User Empowerment"]
    }
  ]

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'B2B', value: 'b2b' },
    { label: 'B2C', value: 'b2c' }
  ]

  const filteredStudies = filter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === filter)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="case-studies" className="py-20 bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#373A40] mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-[#686D76] max-w-2xl mx-auto">
            Detailed breakdowns of my product management work, from problem discovery to shipped solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === f.value
                  ? 'bg-[#DC5F00] text-white'
                  : 'bg-transparent border-2 border-[#686D76] text-[#686D76] hover:border-[#DC5F00] hover:text-[#DC5F00]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gradient-to-br from-[#686D76] to-[#373A40] flex items-center justify-center">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#DC5F00] text-white text-xs font-semibold uppercase rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#373A40] mb-3">
                    {study.title}
                  </h3>
                  <p className="text-[#686D76] mb-4">
                    {study.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#EEEEEE] text-[#373A40] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              <div
                className={`overflow-hidden transition-all duration-500 bg-[#EEEEEE] ${
                  expandedId === study.id ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-[#DC5F00] text-sm uppercase tracking-wider font-semibold mb-3">
                      The Challenge
                    </h4>
                    <p className="text-[#373A40] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#DC5F00] text-sm uppercase tracking-wider font-semibold mb-3">
                      My Approach
                    </h4>
                    <p className="text-[#373A40] leading-relaxed">
                      {study.approach}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#DC5F00] text-sm uppercase tracking-wider font-semibold mb-3">
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-[#373A40] flex items-start gap-2">
                          <span className="text-[#DC5F00]">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => toggleExpand(study.id)}
                className="w-full py-4 bg-[#EEEEEE] text-[#DC5F00] font-semibold flex items-center justify-center gap-2 hover:bg-[#DC5F00] hover:text-white transition-colors"
              >
                <span>{expandedId === study.id ? 'Hide Details' : 'Show Details'}</span>
                <span
                  className={`transition-transform duration-300 ${
                    expandedId === study.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
