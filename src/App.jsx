import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, Award, GraduationCap, Mail, Phone, Linkedin, Download, Eye, TrendingUp, Target, Users, Zap, CheckCircle, ArrowRight, DollarSign, Globe, Clock, Shield, Sparkles, Cpu, GitBranch, Database, Server, Cloud, Terminal, Smartphone, PenTool, BarChart, MessageSquare, MapPin, Calendar, ExternalLink, ChevronRight, Menu, X, Facebook, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showQuickWins, setShowQuickWins] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tabContentRef = useRef(null);

  // Handle tab click for both mobile and desktop
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
    
    // Mobile behavior: scroll to tab content
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const contentElement = document.querySelector('.tab-content-area');
        if (contentElement) {
          const yOffset = -80; // Offset for mobile header
          const y = contentElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); // Small delay to allow tab to render
    }
    // Desktop behavior: do NOT scroll, just switch content smoothly
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="font-bold text-xl tracking-tight">
            <span className="text-amber-700">Tomusange</span> David
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 ml-4" // Added ml-4 for better positioning
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="px-4 pb-4 border-t border-gray-200 bg-white">
            {[
              { id: 'overview', label: 'Why Hire Me', icon: Target },
              { id: 'proof', label: 'Proof of Results', icon: Award },
              { id: 'skills', label: 'Technical Skills', icon: Code },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Elegant Header with Gold Accent */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:px-8 pt-24 lg:pt-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Profile Photo - Responsive */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full blur-xl"></div>
                <img 
                  src="/assets/tom.jpg" 
                  alt="Tomusange David" 
                  className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=Tomusange+David&background=amber-700&color=fff&size=256&bold=true`;
                  }}
                />
                <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  <Sparkles size={14} className="inline mr-1" />
                  Available
                </div>
              </div>
            </div>

            {/* Header Content */}
            <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-sm font-medium">
                <Sparkles size={14} />
                AVAILABLE FOR IMMEDIATE HIRE
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300">
                  Tomusange David
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
                Business-First Technologist · Transforming Complex Problems into Measurable Results
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
                <a 
                  href="mailto:tomusangedavid2020@gmail.com" 
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Mail size={18} />
                  <span>Hire Me</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/256759691160" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="/assets/cv.pdf" 
                  download="Tomusange_David_CV.pdf"
                  className="group flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://linkedin.com/in/tomusange-david" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-gray-300" />
                </a>
                <a 
                  href="https://www.facebook.com/TomuSangeInTech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-gray-300" />
                </a>
                <a 
                  href="https://x.com/TomuSangeInTech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <MetricCard icon={TrendingUp} value="80%" label="Sales Growth" accent="amber" />
            <MetricCard icon={Target} value="99%" label="System Uptime" accent="gray" />
            <MetricCard icon={DollarSign} value="$10K" label="Deals Closed" accent="amber" />
            <MetricCard icon={Users} value="1.2K+" label="Users Impacted" accent="gray" />
          </div>
        </div>
      </div>

      {/* Immediate Value Section */}
      {showQuickWins && (
        <div className="relative bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-8 md:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Zap size={20} className="text-amber-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Immediate Value (Day 1)</h2>
              </div>
              <button 
                onClick={() => setShowQuickWins(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ValueCard icon={Shield} title="99.9% Uptime" description="Critical systems reliability" color="amber" />
              <ValueCard icon={Code} title="Full-Stack Ready" description="Production-ready immediately" color="gray" />
              <ValueCard icon={Users} title="User Enablement" description="Training & documentation" color="amber" />
              <ValueCard icon={Clock} title="Fast ROI" description="40% engagement growth in Year 1" color="gray" />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12 md:px-8 tab-content-area" ref={tabContentRef}>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-wrap gap-1 mb-12 bg-white rounded-xl p-1.5 shadow-sm border border-gray-200">
          {[
            { id: 'overview', label: 'Why Hire Me', icon: Target },
            { id: 'proof', label: 'Proof of Results', icon: Award },
            { id: 'skills', label: 'Technical Skills', icon: Code },
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'education', label: 'Education', icon: GraduationCap }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <Section title="The Investment Proposition">
                <div className="grid md:grid-cols-2 gap-6">
                  <Proposition
                    title="ROI-First Development"
                    icon={<DollarSign className="text-amber-600" size={20} />}
                    points={[
                      "36% conversion rate increase → Revenue growth",
                      "25% faster processing → Cost reduction",
                      "80% sales growth → Market expansion",
                      "99.9% uptime → Zero downtime costs"
                    ]}
                  />
                  <Proposition
                    title="Business Partner Mindset"
                    icon={<Users className="text-gray-700" size={20} />}
                    points={[
                      "Co-founded successful ed-tech platform",
                      "$10K international partnerships secured",
                      "100M UGX government grant winner",
                      "Stakeholder-first approach"
                    ]}
                  />
                  <Proposition
                    title="Problem Solving DNA"
                    icon={<Target className="text-amber-600" size={20} />}
                    points={[
                      "COVID response: Door-to-door training",
                      "Resource constraints: Personal equipment leveraged",
                      "User adoption: Self-produced tutorial videos",
                      "Pressure delivery: Consistent on-time delivery"
                    ]}
                  />
                  <Proposition
                    title="Adoption-Driven Design"
                    icon={<CheckCircle className="text-gray-700" size={20} />}
                    points={[
                      "1200+ active engaged users",
                      "40% engagement increase via UX",
                      "Systems becoming organizational standards",
                      "Training as core deliverable"
                    ]}
                  />
                </div>
              </Section>

              <Section title="The Differentiator">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-amber-50/50 to-amber-100/30 rounded-2xl p-6 sm:p-8 border border-amber-100">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Sparkles className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Initiative Over Instruction</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          During COVID-19 lockdowns, while others awaited direction, I initiated door-to-door training for 15+ teachers across 4 cities. Result: 79% increase in course content when the organization needed it most.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Briefcase className="text-gray-700" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Owner's Mindset</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          As Yukudemy co-founder, I operated beyond coding—handling marketing, partnership negotiations, cross-city staff training, and grant acquisition. I understand P&L implications, not just pull requests.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 rounded-2xl p-6 sm:p-8 border border-amber-100">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <MessageSquare className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Cross-Functional Communication</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          Equally comfortable training non-technical teachers via WhatsApp and pitching to the Prime Minister of Buganda Kingdom. I bridge the technical-business divide effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 sm:p-10 text-white">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">The Tomusange Difference</h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed font-medium">
                    Most technologists build specifications. I build business outcomes. Most react to problems. I architect solutions that prevent them. Most deliver features. I deliver measurable impact.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                      <div className="text-3xl sm:text-4xl font-bold text-amber-300 mb-2">4+</div>
                      <div className="text-sm text-gray-400">Years Business Experience</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                      <div className="text-3xl sm:text-4xl font-bold text-amber-300 mb-2">5+</div>
                      <div className="text-sm text-gray-400">Systems Modernized</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                      <div className="text-3xl sm:text-4xl font-bold text-amber-300 mb-2">Zero</div>
                      <div className="text-sm text-gray-400">Excuses Mindset</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'proof' && (
            <div className="space-y-12">
              <Section title="Documented Business Impact">
                <div className="space-y-8">
                  <CaseStudy
                    company="Yukudemy Limited"
                    period="COVID-19 Response"
                    challenge="Pandemic lockdown halted traditional education. Existing platform underutilized due to low digital literacy. Zero training budget."
                    solution={[
                      "Implemented door-to-door training program using personal devices",
                      "Created WhatsApp support groups and video tutorials",
                      "Built trust through physical presence during crisis"
                    ]}
                    results={[
                      { value: "79%", label: "Course content increase" },
                      { value: "80%", label: "Sales growth" },
                      { value: "1.2K+", label: "Students served" },
                      { value: "100M UGX", label: "Grant secured" }
                    ]}
                    impact="Platform recognized by government as essential COVID response tool"
                  />

                  <CaseStudy
                    company="Enabel International"
                    period="Partnership Acquisition"
                    challenge="Early-stage startup requiring credibility and international partnerships for scale."
                    solution={[
                      "Strategic networking at industry events",
                      "Value-aligned pitch demonstrating mutual benefits",
                      "Professional follow-up and relationship building"
                    ]}
                    results={[
                      { value: "$10K", label: "Partnership value" },
                      { value: "First", label: "International client" },
                      { value: "Free", label: "Innovation week invitation" }
                    ]}
                    impact="Established template for future international partnerships"
                  />
                </div>
              </Section>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Independent Validation</h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <Award className="text-amber-600 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Most Innovative Contributor 2023</div>
                      <div className="text-sm text-gray-600 font-medium">Ddowoolezo Center</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <Shield className="text-gray-700 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Government of Uganda</div>
                      <div className="text-sm text-gray-600 font-medium">100M UGX COVID-19 grant recipient</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <Globe className="text-amber-600 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Enabel (Belgian Development)</div>
                      <div className="text-sm text-gray-600 font-medium">$10K partnership & app development</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <Users className="text-gray-700 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Buganda Kingdom</div>
                      <div className="text-sm text-gray-600 font-medium">Kingdom-wide course delivery partnership</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-12">
              <Section title="Technical Capabilities">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <SkillCategory
                    title="Full-Stack Development"
                    icon={<Terminal className="text-amber-600" size={20} />}
                    skills={[
                      { name: "Python (Flask, Django)", level: 95 },
                      { name: "JavaScript/TypeScript", level: 90 },
                      { name: "React & Vue.js", level: 85 },
                      { name: "Database Design", level: 88 },
                      { name: "RESTful APIs", level: 92 }
                    ]}
                  />
                  <SkillCategory
                    title="Infrastructure"
                    icon={<Server className="text-gray-700" size={20} />}
                    skills={[
                      { name: "Microsoft 365 Admin", level: 85 },
                      { name: "Cloud Systems", level: 82 },
                      { name: "Network Management", level: 75 },
                      { name: "System Monitoring", level: 95 },
                      { name: "Webinar Production", level: 88 }
                    ]}
                  />
                  <SkillCategory
                    title="Modern Tech & AI"
                    icon={<Cpu className="text-amber-600" size={20} />}
                    skills={[
                      { name: "Prompt Engineering", level: 85 },
                      { name: "Web Scraping", level: 90 },
                      { name: "API Integration", level: 92 },
                      { name: "Automation", level: 80 }
                    ]}
                  />
                  <SkillCategory
                    title="Project Leadership"
                    icon={<Target className="text-gray-700" size={20} />}
                    skills={[
                      { name: "Systems Analysis", level: 95 },
                      { name: "Requirements Gathering", level: 94 },
                      { name: "Stakeholder Management", level: 90 },
                      { name: "Agile/Waterfall", level: 87 }
                    ]}
                  />
                  <SkillCategory
                    title="Data & Analytics"
                    icon={<BarChart className="text-amber-600" size={20} />}
                    skills={[
                      { name: "Data Analysis", level: 88 },
                      { name: "Statistical Methods", level: 85 },
                      { name: "Business Intelligence", level: 78 },
                      { name: "Performance Metrics", level: 90 }
                    ]}
                  />
                  <SkillCategory
                    title="Business Skills"
                    icon={<Briefcase className="text-gray-700" size={20} />}
                    skills={[
                      { name: "Digital Marketing", level: 92 },
                      { name: "Sales & Negotiation", level: 85 },
                      { name: "Strategic Planning", level: 88 },
                      { name: "User Training", level: 95 }
                    ]}
                  />
                </div>
              </Section>

              <Section title="Continuous Learning">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-amber-50/50 to-yellow-50/30 rounded-2xl p-6 sm:p-8 border border-amber-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <GraduationCap className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Harvard CS50 Track</h3>
                        <p className="text-sm text-gray-600 font-medium">Currently Enrolled</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Web Programming</span>
                        <span className="text-sm text-amber-600 font-medium">In Progress</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Databases with SQL</span>
                        <span className="text-sm text-amber-600 font-medium">In Progress</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Cybersecurity</span>
                        <span className="text-sm text-amber-600 font-medium">Next</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Award className="text-gray-700" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Academic Foundation</h3>
                        <p className="text-sm text-gray-600 font-medium">B.Sc. Information Systems</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">CGPA</span>
                        <span className="text-xl font-bold text-gray-900">3.65</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Class</span>
                        <span className="font-medium text-gray-900">Second Class Upper</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-4 font-medium">
                        Comprehensive curriculum in Systems Analysis, Software Engineering, Database Management, and Business Intelligence
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-12">
              <Section title="Professional Journey">
                <div className="space-y-8">
                  <ExperienceCard
                    title="IT Support & Development Lead"
                    company="Ddowoolezo Center for Teaching & Learning"
                    period="2022 - Present"
                    achievements={[
                      "Modernized 5+ platforms, increasing engagement by 40%",
                      "Reduced document processing time by 25%",
                      "Maintained 99.9% uptime for critical systems",
                      "Built digital book record system now used organization-wide",
                      "Created 10 model-centered curricula"
                    ]}
                    tags={["Leadership", "Systems Modernization", "UX Design"]}
                  />
                  <ExperienceCard
                    title="General Marketing Manager (Co-Founder)"
                    company="Yukudemy Limited"
                    period="2018 - 2022"
                    achievements={[
                      "Increased conversion rates by 36%",
                      "Transitioned to e-learning: 79% content increase",
                      "Trained 15+ teachers across 4 cities",
                      "Led platform optimization and testing",
                      "Managed partnership negotiations"
                    ]}
                    tags={["Entrepreneurship", "Growth", "Partnerships"]}
                  />
                  <ExperienceCard
                    title="Skills Development Consultant"
                    company="Independent"
                    period="2021 - 2022"
                    achievements={[
                      "Coached Makula TikTokers Association on content strategy",
                      "Enhanced data collection and documentation processes",
                      "Positioned organizations for government recognition",
                      "Developed marketing strategies for digital presence"
                    ]}
                    tags={["Consulting", "Training", "Strategy"]}
                  />
                </div>
              </Section>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-12">
              <Section title="Academic Background">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-3">
                          <GraduationCap size={14} />
                          Bachelor's Degree
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Information Systems</h3>
                        <p className="text-gray-600 font-medium">Muni University, Arua City</p>
                      </div>
                      <div className="mt-4 sm:mt-0 text-left sm:text-right">
                        <div className="text-4xl font-bold text-amber-600">3.65</div>
                        <div className="text-sm text-gray-600 font-medium">CGPA</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Core Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                          {["Systems Analysis", "Software Engineering", "Database Management", "IT Security", "Project Management", "Business Intelligence", "Enterprise Architecture", "Digital Marketing"].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Certificate (UACE)</h3>
                      <p className="text-gray-600 font-medium mb-2">Masaka Secondary School</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="text-amber-600" size={16} />
                          <span className="text-gray-700 font-medium">Physics, Chemistry, Mathematics</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-3 font-medium">Strong STEM foundation supporting technical innovation and problem-solving.</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 text-white">
                      <h3 className="text-xl font-semibold mb-4">Learning Philosophy</h3>
                      <p className="text-gray-300 leading-relaxed font-medium">
                        "Technology evolves rapidly; continuous learning isn't optional. I dedicate weekly hours to mastering new technologies, ensuring my solutions remain cutting-edge and effective."
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
            </div>
          )}
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Let's discuss how we can drive measurable results for your organization. I'm ready to contribute from day one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <a href="mailto:tomusangedavid2020@gmail.com" className="group flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <Mail size={22} />
              tomusangedavid2020@gmail.com
              <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:+256759691160" className="group flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 border border-amber-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200">
                <Phone size={22} />
                +256 759 691160
              </a>
              <a href="https://wa.me/256759691160" className="group flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200">
                <MessageSquare size={22} />
                WhatsApp
              </a>
            </div>
          </div>
          
          {/* Social Media Links in Footer */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="font-medium">Kampala, Uganda</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="font-medium">Available Immediately</span>
            </div>
            
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/tomusange-david" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin size={18} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/TomuSangeInTech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Facebook size={18} />
                <span className="font-medium">Facebook</span>
              </a>
              <a href="https://x.com/TomuSangeInTech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Twitter size={18} />
                <span className="font-medium">X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component Definitions (unchanged)
function MetricCard({ icon: Icon, value, label, accent }) {
  const accentColors = {
    amber: 'bg-amber-500',
    gray: 'bg-gray-600'
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-200">
      <div className={`p-3 ${accentColors[accent]} rounded-lg w-fit mb-4`}>
        <Icon className="text-white" size={24} />
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-300 font-medium">{label}</div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description, color }) {
  const colorClasses = {
    amber: 'text-amber-600 bg-amber-50 border-amber-100',
    gray: 'text-gray-700 bg-gray-100 border-gray-200'
  };

  return (
    <div className={`bg-white rounded-xl p-5 border ${colorClasses[color]} transition-all duration-200 hover:shadow-md`}>
      <div className={`p-2 rounded-lg w-fit mb-4 border ${colorClasses[color].replace('text-', 'border-').replace('bg-', 'border-')}`}>
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 font-medium">{description}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">{title}</h2>
      {children}
    </div>
  );
}

function Proposition({ title, icon, points }) {
  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
            <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={14} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudy({ company, period, challenge, solution, results, impact }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
          <p className="text-sm text-gray-500 font-medium">{period}</p>
        </div>
        <span className="mt-2 sm:mt-0 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium w-fit">
          Case Study
        </span>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Challenge</h4>
          <p className="text-gray-700 font-medium">{challenge}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Solution</h4>
          <ul className="space-y-2">
            {solution.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium">
                <ArrowRight className="text-amber-600 shrink-0 mt-1" size={14} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Results</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {results.map((result, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{result.value}</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Impact</h4>
          <p className="text-gray-700 italic font-medium">{impact}</p>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, icon, skills }) {
  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="font-semibold text-gray-900">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, achievements, tags }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg text-amber-600">{company}</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            {period}
          </span>
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
            <CheckCircle className="text-amber-500 shrink-0 mt-1" size={16} />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
