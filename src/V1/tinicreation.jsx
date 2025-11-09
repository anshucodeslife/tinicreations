import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Camera, Film, Users, Award, ChevronRight, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, Sparkles, Star, Zap, Eye, TrendingUp, Heart } from 'lucide-react';

const TiniCreations = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const portfolio = [
    {
      id: 1,
      title: "Luxury Brand Redefined",
      category: "Commercial",
      color: "from-purple-500 to-pink-500",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
      stats: { views: "2.4M", engagement: "94%" }
    },
    {
      id: 2,
      title: "Fashion Revolution",
      category: "Brand Film",
      color: "from-blue-500 to-cyan-500",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
      stats: { views: "1.8M", engagement: "89%" }
    },
    {
      id: 3,
      title: "Tech Innovation Story",
      category: "Corporate",
      color: "from-green-500 to-teal-500",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      stats: { views: "3.2M", engagement: "96%" }
    },
    {
      id: 4,
      title: "Culinary Excellence",
      category: "Commercial",
      color: "from-orange-500 to-red-500",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      stats: { views: "2.1M", engagement: "91%" }
    },
    {
      id: 5,
      title: "Automotive Dreams",
      category: "Product Launch",
      color: "from-indigo-500 to-purple-500",
      thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      stats: { views: "4.5M", engagement: "98%" }
    },
    {
      id: 6,
      title: "Urban Living",
      category: "Brand Film",
      color: "from-amber-500 to-yellow-500",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      stats: { views: "1.6M", engagement: "87%" }
    }
  ];

  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Commercial Ad Films",
      description: "Cinematic storytelling that captures attention and drives conversions",
      color: "from-purple-600 to-pink-600",
      features: ["TV Commercials", "Digital Ads", "Social Media Content"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Brand Films",
      description: "Emotional narratives that build lasting connections with audiences",
      color: "from-blue-600 to-cyan-600",
      features: ["Brand Documentaries", "Story Films", "Brand Anthems"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Videos",
      description: "Professional content that communicates your vision effectively",
      color: "from-green-600 to-teal-600",
      features: ["Company Profiles", "Training Videos", "Event Coverage"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Product Launches",
      description: "High-impact reveals that generate buzz and excitement",
      color: "from-orange-600 to-red-600",
      features: ["Teaser Campaigns", "Launch Films", "Demo Videos"]
    }
  ];

  const process = [
    { step: "01", title: "Conceptualization", desc: "Ideas that spark magic", icon: <Sparkles /> },
    { step: "02", title: "Pre-Production", desc: "Planning perfection", icon: <Star /> },
    { step: "03", title: "Production", desc: "Capturing brilliance", icon: <Camera /> },
    { step: "04", title: "Post-Production", desc: "Polishing excellence", icon: <Zap /> },
    { step: "05", title: "Delivery", desc: "Exceeding expectations", icon: <Heart /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOHYtMmgydjJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <Film className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Tini Creations
                </h1>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Where Stories Come Alive</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Process'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-sm font-semibold tracking-wide"
                >
                  <span className="relative z-10 group-hover:text-amber-400 transition-colors">{item}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
              <a 
                href="#contact"
                className="relative px-8 py-3 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full font-bold text-sm overflow-hidden group"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10">
            <div className="px-6 py-8 space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-lg font-semibold hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
              Mumbai's Most Creative Production House
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent animate-pulse">
              WE CREATE
            </span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              VISUAL MAGIC
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Premium commercial ad films and brand content that don't just tell stories—
            <span className="text-amber-400 font-bold"> they create movements</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="#portfolio"
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Showreel
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform translate-x-full group-hover:translate-x-0 transition-transform"></div>
            </a>
            <a 
              href="#contact"
              className="px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/10 hover:border-amber-400 transition-all"
            >
              Let's Collaborate
            </a>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { num: "500+", label: "Projects", icon: <Film /> },
              { num: "200+", label: "Brands", icon: <Star /> },
              { num: "50+", label: "Awards", icon: <Award /> },
              { num: "10+", label: "Years", icon: <TrendingUp /> }
            ].map((stat, i) => (
              <div 
                key={i}
                className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-amber-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-black bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-pink-500 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-amber-500/30">
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-pink-500/30">
                    <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/30">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-blue-500/30">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                <span className="block text-white">Crafting</span>
                <span className="block bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                  Extraordinary
                </span>
                <span className="block text-white">Experiences</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg">
                <p className="leading-relaxed">
                  Founded by visionary filmmaker <span className="text-amber-400 font-bold">Prashant Pandey</span>, 
                  Tini Creations is Mumbai's most innovative commercial ad film and production company.
                </p>
                <p className="leading-relaxed">
                  We don't just make videos—we create <span className="text-pink-400 font-bold">cultural phenomena</span> that 
                  resonate, inspire, and drive unprecedented engagement for brands across the globe.
                </p>
                <p className="leading-relaxed">
                  From concept to completion, our award-winning team brings together cutting-edge technology, 
                  artistic brilliance, and strategic thinking to deliver content that doesn't just meet expectations—
                  <span className="text-purple-400 font-bold"> it shatters them</span>.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-amber-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-amber-500/30 flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold">Visionary Storytelling</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-blue-500/30 flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Lightning Fast Delivery</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-pink-500/30 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-pink-400" />
                  <span className="font-semibold">Award-Winning Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end production solutions that transform your brand vision into captivating visual stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button className="group/btn flex items-center space-x-2 text-amber-400 font-semibold">
                      <span>Explore More</span>
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Award-winning work that speaks for itself
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'Commercial', 'Brand Film', 'Corporate', 'Product Launch'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white'
                      : 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/50'
                  }`}
                >
                  {tab === 'all' ? 'All Work' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio
              .filter(item => activeTab === 'all' || item.category === activeTab)
              .map((item) => (
                <div 
                  key={item.id}
                  className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-90 transition-opacity`}></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-block px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full text-sm font-semibold mb-4">
                        {item.category}
                      </div>
                    </div>
                    
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-black mb-4">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{item.stats.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{item.stats.engagement}</span>
                          </div>
                        </div>
                        <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <Play className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From first spark to final cut—excellence at every step
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-black group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-white/20 mb-2">{step.step}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-20 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-amber-900/50 rounded-[3rem] overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOHYtMmgydjJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-black mb-6">
                  <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
                    Let's Create
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                    Something Amazing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready to transform your brand story? Let's start the conversation.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Email Us</h3>
                        <a href="mailto:contact@tinicreations.com" className="text-amber-400 hover:text-amber-300 text-lg">
                          contact@tinicreations.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Call Us</h3>
                        <a href="tel:+919833753123" className="text-pink-400 hover:text-pink-300 text-lg">
                          +91 98337 53123
                        </a>
                        <p className="text-gray-400 text-sm mt-1">Mon-Sat, 10AM-7PM IST</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                        <p className="text-gray-300 text-lg">Mumbai, Maharashtra</p>
                        <p className="text-gray-400 text-sm mt-1">India's Entertainment Capital</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-8">
                    <h3 className="font-bold text-lg mb-6">Follow Our Journey</h3>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { icon: <Instagram />, color: 'from-pink-500 to-purple-500', label: 'Instagram' },
                        { icon: <Facebook />, color: 'from-blue-500 to-cyan-500', label: 'Facebook' },
                        { icon: <Linkedin />, color: 'from-blue-600 to-blue-400', label: 'LinkedIn' },
                        { icon: <Youtube />, color: 'from-red-500 to-red-600', label: 'YouTube' }
                      ].map((social, i) => (
                        <a
                          key={i}
                          href="#"
                          className="group/social relative"
                          aria-label={social.label}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-xl opacity-0 group-hover/social:opacity-100 transition-opacity`}></div>
                          <div className={`relative w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center group-hover/social:scale-110 transition-transform`}>
                            {social.icon}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name *"
                      className="w-full px-6 py-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-amber-400 focus:outline-none transition-all text-lg placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address *"
                      className="w-full px-6 py-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-amber-400 focus:outline-none transition-all text-lg placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number *"
                      className="w-full px-6 py-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-amber-400 focus:outline-none transition-all text-lg placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Company Name"
                      className="w-full px-6 py-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-amber-400 focus:outline-none transition-all text-lg placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={6}
                      placeholder="Tell us about your project... *"
                      className="w-full px-6 py-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-amber-400 focus:outline-none transition-all text-lg placeholder:text-gray-500 resize-none"
                    />
                  </div>
                  <button 
                    onClick={() => alert('Thank you for reaching out! We will get back to you within 24 hours.')}
                    className="group/btn relative w-full px-8 py-6 bg-gradient-to-r from-amber-500 to-pink-500 rounded-2xl font-bold text-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <span>Send Message</span>
                      <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                  </button>
                  <p className="text-center text-sm text-gray-400">
                    We'll respond within 24 hours. Usually much faster! ⚡
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                What Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-400">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "CEO, Tech Innovations",
                image: "https://i.pravatar.cc/150?img=12",
                text: "Tini Creations didn't just deliver a video—they created a movement. Our brand engagement increased 300% after their campaign. Absolutely phenomenal work!",
                rating: 5,
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Priya Sharma",
                position: "Marketing Director, Fashion Forward",
                image: "https://i.pravatar.cc/150?img=45",
                text: "Working with Prashant and his team was transformative. They understood our vision and elevated it beyond anything we imagined. True creative partners!",
                rating: 5,
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Amit Patel",
                position: "Founder, FoodTech Startup",
                image: "https://i.pravatar.cc/150?img=33",
                text: "The ROI from our Tini Creations campaign was unprecedented. They don't just make videos—they create business results. Can't recommend them enough!",
                rating: 5,
                color: "from-green-500 to-teal-500"
              }
            ].map((testimonial, i) => (
              <div key={i} className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full overflow-hidden border-2 border-white/20`}>
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                    Tini Creations
                  </h3>
                  <p className="text-sm text-gray-400">Where Stories Come Alive</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Mumbai's premier commercial ad film and production company. We create visual magic that transforms brands and captivates audiences worldwide.
              </p>
              <p className="text-sm text-gray-500">
                Founded by <span className="text-amber-400 font-semibold">Prashant Pandey</span>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-amber-400">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio', 'Process', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-pink-400">Services</h4>
              <div className="space-y-3">
                <p className="text-gray-400">Commercial Ad Films</p>
                <p className="text-gray-400">Brand Films</p>
                <p className="text-gray-400">Corporate Videos</p>
                <p className="text-gray-400">Product Launches</p>
                <p className="text-gray-400">Digital Content</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 Tini Creations. All rights reserved. Crafted with <Heart className="w-4 h-4 inline text-pink-400" /> in Mumbai
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
          <Mail className="w-7 h-7" />
        </div>
      </a>
    </div>
  );
};

export default TiniCreations;