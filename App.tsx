
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ArrowDown, Menu, X, BookOpen, GraduationCap, Award, Briefcase, Mail, Linkedin, FileText, Globe, Search, Library, FileIcon, Copy, Moon, Sun, ChevronLeft, ChevronRight, Loader2, Download, Medal, Video, School, MonitorPlay, Microscope, Users, BookmarkCheck, LayoutList, BookMarked, Home, ZoomIn, ZoomOut, Link, Send } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Markdown from 'react-markdown';
import emailjs from '@emailjs/browser';
import { data, Language } from './data';

import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';

const ExperienceCard = ({ role, company, date, delay, description, skills }: { role: string, company: string, date: string, delay: string, description?: string, skills?: string[] }) => {
  return (
    <div className="relative pl-8 border-l-2 border-stone-700 animate-fade-in-up" style={{ animationDelay: delay }}>
        <div className="absolute w-4 h-4 bg-stone-900 border-2 border-nobel-gold rounded-full -left-[9px] top-1"></div>
        <h4 className="text-xl font-medium text-white mb-1">{role}</h4>
        <p className="text-stone-400 mb-2">{company}</p>
        <p className="text-sm font-mono text-stone-500 uppercase mb-3">{date}</p>
        {description && (
            <p className="text-stone-300 text-sm leading-relaxed mb-4">{description}</p>
        )}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-stone-800 text-stone-300 border border-stone-700 text-xs rounded-full">
                      {skill}
                  </span>
              ))}
          </div>
        )}
    </div>
  );
};

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const PublicationCard = ({ id, title, type, authors, journal, metrics, date, citation, externalLink, pdfLink, onClick, lang }: { id: string, title: string, type: string, authors?: string, journal?: string, metrics?: string, date?: string, citation?: string, externalLink?: string, pdfLink?: string, onClick?: () => void, lang: Language }) => {
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (citation) {
        navigator.clipboard.writeText(citation);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (externalLink) {
        navigator.clipboard.writeText(externalLink);
    } else {
        const url = new URL(window.location.href);
        url.hash = id;
        navigator.clipboard.writeText(url.toString());
    }
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
      <div id={id} onClick={onClick} className="p-6 bg-[#F9F8F4] dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg border-l-4 border-l-nobel-gold group hover:bg-white dark:hover:bg-stone-700 transition-colors duration-300 cursor-pointer flex flex-col scroll-mt-24">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 dark:text-stone-400 tracking-wider uppercase bg-stone-200 dark:bg-stone-700 px-2 py-1 rounded inline-block">{type}</span>
            {date && <span className="text-xs font-medium text-stone-500 dark:text-stone-400">{date}</span>}
          </div>
          <p className="font-serif italic text-lg lg:text-xl text-stone-800 dark:text-stone-200 mb-2 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
              "{title}"
          </p>
          
          {(authors || journal) && (
             <div className="mb-3 text-sm text-stone-600 dark:text-stone-400">
                {authors && <div className="font-medium"><span className="text-stone-500 dark:text-stone-500">{lang === 'tr' ? 'Yazarlar: ' : 'Authors: '}</span>{authors}</div>}
                {journal && <div><span className="text-stone-500 dark:text-stone-500">{lang === 'tr' ? 'Dergi: ' : 'Journal: '}</span>{journal}</div>}
             </div>
          )}

          {metrics && (
             <div className="mb-4 text-xs font-mono text-stone-500 dark:text-stone-400 tracking-tight">
                {metrics}
             </div>
          )}

          <div className="flex flex-wrap items-center mt-auto w-full gap-4 pt-2">
              <div className="flex items-center gap-2 mr-auto">
                  {externalLink ? (
                      <a href={externalLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-3 py-1.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 rounded text-xs transition-colors" title={lang === 'tr' ? 'Bağlantı' : 'Link'}>
                        <Link size={14} />
                        {lang === 'tr' ? 'Bağlantı' : 'Link'}
                      </a>
                  ) : (
                      <button onClick={handleCopyLink} className="flex items-center gap-2 px-3 py-1.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 rounded text-xs transition-colors" title={lang === 'tr' ? 'Bağlantıyı Kopyala' : 'Copy Link'}>
                        <Link size={14} />
                        {linkCopied ? (lang === 'tr' ? 'Kopyalandı!' : 'Copied!') : (lang === 'tr' ? 'Bağlantı' : 'Link')}
                      </button>
                  )}
                  {pdfLink && (
                      <a href={pdfLink} download target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-3 py-1.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 rounded text-xs transition-colors" title={lang === 'tr' ? 'PDF İndir' : 'Download PDF'}>
                        <Download size={14} />
                        {lang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                      </a>
                  )}
              </div>

              {citation && (
                 <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 rounded text-xs transition-colors" title={lang === 'tr' ? 'Makaleyi Alıntıla' : 'Cite this article'}>
                    <Copy size={14} />
                    {copied ? (lang === 'tr' ? 'Kopyalandı!' : 'Copied!') : (lang === 'tr' ? 'Makaleyi Alıntıla' : 'Cite this article')}
                 </button>
              )}
          </div>
      </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPdf, setSelectedPdf] = useState<{title: string, type: string, url: string, abstract?: string} | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  
  const [galleryIndex, setGalleryIndex] = useState(0);

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // These should be configured in real-world via env vars
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key';

    emailjs.send(serviceId, templateId, {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    }, publicKey)
    .then(() => {
      setFormStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    });
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleLang = () => {
      setLang(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const filteredJobs = data.experience.jobs.filter(job => {
      const query = searchQuery.toLowerCase();
      const skillMatch = job.skills ? job.skills[lang].some(s => s.toLowerCase().includes(query)) : false;
      return job.role[lang].toLowerCase().includes(query) || job.company.toLowerCase().includes(query) || skillMatch;
  });

  const filteredPublications = data.projects.publications.filter(pub => {
      const query = searchQuery.toLowerCase();
      return pub.title[lang].toLowerCase().includes(query) || pub.type[lang].toLowerCase().includes(query);
  });

  return (
    <div className="min-h-screen bg-[#F9F8F4] dark:bg-stone-900 text-stone-800 dark:text-stone-200 selection:bg-nobel-gold selection:text-white transition-colors duration-300">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo / Home Button */}
          <div className="flex-none flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-full bg-stone-900 dark:bg-stone-100 flex items-center justify-center shadow-sm hover:opacity-80 transition-opacity">
               <Home className="text-white dark:text-stone-900" size={20} />
            </div>
          </div>
          
          {/* Centered Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-8 text-xs xl:text-sm font-medium tracking-wider text-stone-600 dark:text-stone-300">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.about[lang]}</a>
            <a href="#orcid" onClick={scrollToSection('orcid')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.orcid[lang]}</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.projects[lang]}</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.experience[lang]}</a>
            <a href="#certificate" onClick={scrollToSection('certificate')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.certificate[lang]}</a>
            <a href="#blog" onClick={scrollToSection('blog')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.blog[lang]}</a>
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden lg:flex flex-none justify-end items-center">
            <button onClick={toggleLang} className="flex items-center gap-1 font-bold text-stone-800 dark:text-stone-200 hover:text-nobel-gold transition-colors px-2 tracking-widest">
              <Globe size={16}/> {lang === 'tr' ? 'EN' : 'TR'}
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className="text-stone-800 dark:text-stone-200 hover:text-nobel-gold transition-colors ml-4">
              {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-stone-800 dark:text-stone-200 hover:text-nobel-gold transition-colors ml-4">
              <Search size={18}/>
            </button>
            
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')} 
              className="px-5 py-2.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm cursor-pointer ml-6 tracking-wider font-medium text-xs uppercase"
            >
              {data.header.nav.contact[lang]}
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
              <button onClick={() => setDarkMode(!darkMode)} className="text-stone-800 dark:text-stone-200">
                 {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
              </button>
              <button onClick={() => setSearchOpen(!searchOpen)} className="text-stone-800 dark:text-stone-200">
                  <Search size={18}/>
              </button>
              <button onClick={toggleLang} className="font-bold text-stone-800 dark:text-stone-200 tracking-widest text-sm flex items-center gap-1">
                 <Globe size={16}/> {lang === 'tr' ? 'EN' : 'TR'}
              </button>
              <button className="text-stone-900 dark:text-stone-200 p-2" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
              </button>
          </div>
        </div>
      </nav>

      {/* Search Bar Overlay */}
      <AnimatePresence>
          {searchOpen && (
              <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="fixed top-[80px] left-0 right-0 z-40 bg-white dark:bg-stone-800 shadow-md border-b border-stone-200 dark:border-stone-700 py-4 px-6 md:px-12"
              >
                 <div className="container mx-auto flex items-center gap-4">
                    <Search className="text-stone-400 dark:text-stone-500" size={20}/>
                    <input 
                       type="text" 
                       autoFocus
                       className="flex-1 bg-transparent border-none outline-none text-stone-800 dark:text-white text-lg md:text-xl font-serif placeholder:text-stone-400 dark:placeholder:text-stone-500"
                       placeholder={lang === 'tr' ? 'İçeriklerde ara...' : 'Search throughout the content...'}
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={() => {setSearchQuery(""); setSearchOpen(false);}} className="text-stone-500 hover:text-stone-900 dark:hover:text-white border border-transparent hover:border-stone-200 dark:hover:border-stone-700 shadow-sm transition p-1 rounded-full"><X size={16}/></button>
                 </div>
              </motion.div>
          )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
      {menuOpen && (
        <motion.div 
           initial={{ opacity: 0, x: '100%' }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: '100%' }}
           transition={{ type: "spring", stiffness: 300, damping: 30 }}
           className="fixed inset-0 z-40 bg-[#F9F8F4] dark:bg-stone-900 flex flex-col items-center justify-center gap-8 text-xl font-serif dark:text-stone-200"
        >
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.about[lang]}</a>
            <a href="#orcid" onClick={scrollToSection('orcid')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.orcid[lang]}</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.projects[lang]}</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.experience[lang]}</a>
            <a href="#certificate" onClick={scrollToSection('certificate')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.certificate[lang]}</a>
            <a href="#blog" onClick={scrollToSection('blog')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.blog[lang]}</a>
              <a 
              href="#contact" 
              onClick={scrollToSection('contact')} 
              className="px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full shadow-lg cursor-pointer mt-4"
            >
               {data.header.nav.contact[lang]}
            </a>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Hero Section */}
      {location.pathname === '/' && (
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(28,25,23,0.92)_0%,rgba(28,25,23,0.6)_50%,rgba(28,25,23,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30 dark:bg-stone-900/30">
             {data.hero.label[lang]}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium leading-[1.2] md:leading-[0.9] mb-8 text-stone-900 dark:text-stone-100 drop-shadow-sm">
            {data.hero.title[lang]} <br/><span className="italic font-normal text-stone-600 dark:text-stone-400 text-2xl sm:text-3xl md:text-5xl block mt-4">{data.hero.subtitle[lang]}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 dark:text-stone-300 font-light leading-relaxed mb-12">
            {data.hero.description[lang]}
          </p>
          
          <div className="flex justify-center">
             <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer">
                <span>{data.hero.button[lang]}</span>
                <span className="p-2 border border-stone-300 dark:border-stone-600 rounded-full group-hover:border-stone-900 dark:group-hover:border-stone-400 transition-colors bg-white/50 dark:bg-stone-800/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>
      )}

      {location.pathname === '/' && (
      <main>
        {/* Stats Section */}
        <section className="py-12 bg-nobel-gold/10 dark:bg-nobel-gold/5 border-b border-nobel-gold/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {data.stats.items.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4">
                  <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 mb-2">
                    <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm md:text-base font-medium tracking-wider text-stone-600 dark:text-stone-400 uppercase">
                    {stat.label[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white dark:bg-emerald-950/10">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.about.label[lang]}</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900 dark:text-stone-100">{data.about.title[lang]}</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-8"></div>
              {data.about.cvUrl && (
                <a href={data.about.cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm font-medium">
                  <Download size={18} />
                  <span>{data.about.cvButton[lang]}</span>
                </a>
              )}
            </div>
            <div className="lg:col-span-8 text-lg text-stone-600 dark:text-stone-300 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">{data.about.p1[lang].charAt(0)}</span>{data.about.p1[lang].slice(1)}
              </p>
              <p>
                {data.about.p2[lang]}
              </p>
              
              <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800">
                <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-3">
                  <Microscope className="text-nobel-gold" />
                  {data.research.title[lang]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.research.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-full text-sm font-medium border border-stone-200 dark:border-stone-700 shadow-sm">
                      {item[lang]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ORCID Summary Section */}
        <section id="orcid" className="py-24 bg-[#F5F4F0] dark:bg-stone-950 border-y border-stone-200 dark:border-stone-800">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.orcid_summary.label[lang]}</div>
              <h2 className="font-serif text-4xl mb-6 text-stone-900 dark:text-stone-100 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-[#A6CE39] flex items-center justify-center text-white text-sm font-bold shadow-sm">iD</span>
                 {data.orcid_summary.title[lang]}
              </h2>
              <p className="text-stone-600 dark:text-stone-400 mb-8 max-w-md">
                 {data.orcid_summary.info[lang]}
              </p>
              
              <a href="https://orcid.org/0000-0001-9019-8740" target="_blank" rel="noopener noreferrer" className="self-start px-6 py-3 bg-[#A6CE39] hover:bg-[#95B933] text-white rounded-full transition-colors shadow-sm font-medium flex items-center gap-2">
                 <span>{lang === 'tr' ? 'Tam ORCID Profilini Gör' : 'View Full ORCID Profile'}</span>
              </a>
            </div>
            
            <div className="lg:col-span-7">
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                   <div className="bg-white dark:bg-stone-900 p-6 xl:p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col items-center text-center group hover:border-nobel-gold transition-colors">
                       <Briefcase className="text-nobel-gold mb-4 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                       <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-2">5</h3>
                       <p className="text-xs font-medium text-stone-500 uppercase tracking-wider break-words text-center w-full">{data.orcid_summary.stats.employment[lang]}</p>
                   </div>
                   
                   <div className="bg-white dark:bg-stone-900 p-6 xl:p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col items-center text-center group hover:border-nobel-gold transition-colors">
                       <GraduationCap className="text-nobel-gold mb-4 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                       <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-2">4</h3>
                       <p className="text-xs font-medium text-stone-500 uppercase tracking-wider break-words text-center w-full">{data.orcid_summary.stats.education[lang]}</p>
                   </div>
                   
                   <div className="bg-white dark:bg-stone-900 p-6 xl:p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col items-center text-center group hover:border-nobel-gold transition-colors">
                       <BookOpen className="text-nobel-gold mb-4 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                       <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-2">2</h3>
                       <p className="text-xs font-medium text-stone-500 uppercase tracking-wider break-words text-center w-full">{data.orcid_summary.stats.works[lang]}</p>
                   </div>
               </div>
            </div>
          </div>
        </section>

        {/* LinkedIn Feed Section */}
        <section className="py-24 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 overflow-hidden">
          <div className="w-full max-w-[1440px] mx-auto px-6">
             <div className="mb-12 text-center flex flex-col items-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200 dark:border-stone-800 shadow-sm">
                     {lang === 'tr' ? 'Etkileşim' : 'Engagement'}
                 </div>
                 <h2 className="font-serif text-4xl text-stone-900 dark:text-white">LinkedIn Feed</h2>
             </div>
             <div className="w-full mx-auto rounded-3xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-800 bg-white">
                <div className="elfsight-app-31c4d3c3-6a14-4e86-81e5-a69a1ca957e3" data-elfsight-app-lazy></div>
             </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center lg:text-left">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                         {data.experience.label[lang]}
                     </div>
                     <h2 className="font-serif text-4xl md:text-5xl text-white">{data.experience.title[lang]}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                     {/* Education */}
                     <div>
                        <h3 className="flex items-center gap-3 font-serif text-2xl text-nobel-gold mb-8"><GraduationCap /> {lang === 'tr' ? 'Eğitim' : 'Education'}</h3>
                        <div className="space-y-8">
                            {data.experience.education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 border-l-2 border-stone-700">
                                    <div className="absolute w-4 h-4 bg-stone-900 border-2 border-nobel-gold rounded-full -left-[9px] top-1"></div>
                                    <h4 className="text-xl font-medium text-white mb-1">{edu.degree[lang]}</h4>
                                    <p className="text-stone-400 mb-2">{edu.school}</p>
                                    <p className="text-sm font-mono text-stone-500 uppercase">{edu.date}</p>
                                </div>
                            ))}
                        </div>
                     </div>

                     {/* Experience */}
                     <div>
                        <h3 className="flex items-center gap-3 font-serif text-2xl text-nobel-gold mb-8"><Briefcase /> {lang === 'tr' ? 'Deneyim' : 'Experience'}</h3>
                        <div className="space-y-8">
                            {filteredJobs.length === 0 && <p className="text-stone-500 italic text-sm">{lang === 'tr' ? 'Sonuç bulunamadı...' : 'No results found...'}</p>}
                            {filteredJobs.map((job, idx) => (
                                <ExperienceCard key={idx} role={job.role[lang]} company={job.company} date={job.date[lang]} description={job.description ? job.description[lang] : undefined} skills={job.skills ? job.skills[lang] : undefined} delay={`${idx * 0.1}s`} />
                            ))}
                        </div>
                     </div>
                </div>

                {/* Teaching */}
                <div className="mt-24">
                  <div className="mb-12 text-center lg:text-left">
                       <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                           {data.teaching.label[lang]}
                       </div>
                       <h2 className="font-serif text-3xl md:text-4xl text-white">{data.teaching.title[lang]}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {data.teaching.courses.map((course, idx) => (
                          <div key={idx} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 hover:border-nobel-gold transition-colors">
                              <School className="text-nobel-gold mb-6" size={32} />
                              <h3 className="font-serif text-xl text-white mb-4">{course.name[lang]}</h3>
                              <p className="text-stone-400 text-sm leading-relaxed">{course.desc[lang]}</p>
                          </div>
                      ))}
                  </div>
                </div>

                {/* Mentorship / Theses */}
                <div className="mt-24 pt-24 border-t border-stone-800">
                  <div className="mb-12 text-center lg:text-left">
                       <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                           {data.theses.label[lang]}
                       </div>
                       <h2 className="font-serif text-3xl md:text-4xl text-white flex items-center gap-4 justify-center lg:justify-start">
                           <Users className="text-stone-600" size={32} />
                           {data.theses.title[lang]}
                       </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.theses.items.map((thesis, idx) => (
                          <div key={idx} className="bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-stone-600 transition-colors">
                              <div className="flex justify-between items-start mb-4">
                                  <h3 className="font-serif text-xl text-white leading-tight pr-4">{thesis.student}</h3>
                                  <span className="text-xs font-mono px-2 py-1 bg-stone-800 text-nobel-gold rounded">{thesis.year}</span>
                              </div>
                              <p className="text-stone-400 text-sm mb-4 leading-relaxed font-medium">"{thesis.title[lang]}"</p>
                              <div className="inline-flex items-center gap-2 text-xs text-stone-500 font-medium uppercase tracking-wider">
                                  <BookMarked size={14} /> {thesis.type[lang]}
                              </div>
                          </div>
                      ))}
                  </div>
                </div>
            </div>
        </section>

        {/* Projects / Publications */}
        <section id="projects" className="py-24 bg-[#F9F8F4] dark:bg-stone-900/50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.projects.label[lang]}</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900 dark:text-white">{data.projects.title[lang]}</h2>
                    <div className="w-16 h-1 bg-nobel-gold mx-auto"></div>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                    {filteredPublications.length === 0 && <p className="text-stone-500 text-center italic">{lang === 'tr' ? 'Sonuç bulunamadı...' : 'No results found...'}</p>}
                    {filteredPublications.map((pub, idx) => (
                        <PublicationCard key={idx} id={`publication-${idx}`} lang={lang} title={pub.title[lang]} type={pub.type[lang]} authors={pub.authors} journal={pub.journal} metrics={pub.metrics} date={pub.date ? pub.date[lang] : undefined} citation={pub.citation} externalLink={pub.linkUrl} pdfLink={pub.pdfUrl} onClick={() => (pub.pdfUrl || pub.abstract) ? setSelectedPdf({ title: pub.title[lang], type: pub.type[lang], url: pub.pdfUrl || "", abstract: pub.abstract ? pub.abstract[lang] : undefined }) : undefined} />
                    ))}
                </div>
            </div>
        </section>

        {/* Talks & Presentations */}
        <section id="talks" className="py-24 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.talks.label[lang]}</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900 dark:text-white">{data.talks.title[lang]}</h2>
                    <div className="w-16 h-1 bg-nobel-gold mx-auto"></div>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.talks.items.map((talk, idx) => (
                        <div key={idx} className="p-8 bg-[#F5F4F0] dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-nobel-gold transition-colors flex flex-col items-center text-center">
                            <MonitorPlay className="text-nobel-gold mb-6" size={40} strokeWidth={1.5} />
                            <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-4">{talk.title[lang]}</h3>
                            <p className="text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">{talk.event[lang]}</p>
                            <span className="text-sm font-bold text-stone-500 uppercase tracking-widest mt-auto bg-white dark:bg-stone-800 px-4 py-1.5 rounded-full shadow-sm">{talk.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Certificates & Skills */}
        <section id="certificate" className="py-24 bg-white dark:bg-emerald-950/20 border-t border-stone-200 dark:border-stone-800">
             <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.certificates.label[lang]}</div>
                    <h2 className="font-serif text-4xl mb-6 text-stone-900 dark:text-stone-100">{data.certificates.title[lang]}</h2>
                    <div className="mb-8">
                       <ul className="space-y-4">
                           {data.certificates.items.map((cert, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-lg text-stone-600 dark:text-stone-300">
                                  <Award className="text-nobel-gold shrink-0 mt-1" size={24}/>
                                  <span>{cert}</span>
                              </li>
                           ))}
                       </ul>
                    </div>
                    
                    <div className="mt-4">
                        <h4 className="text-sm font-bold text-stone-500 tracking-wider uppercase mb-4">{lang === 'tr' ? 'Temel Beceriler' : 'Top Skills'}</h4>
                        <div className="flex flex-wrap gap-2">
                             {data.certificates.skills[lang].map((skill, idx) => (
                                 <span key={idx} className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm rounded-full border border-stone-200 dark:border-stone-700">
                                     {skill}
                                 </span>
                             ))}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 relative order-1 lg:order-2">
                    <div className="aspect-[4/3] bg-[#F5F4F0] dark:bg-stone-800 rounded-xl flex items-center justify-center relative border border-stone-200 dark:border-stone-700 shadow-inner overflow-hidden">
                         {/* Abstract simple design for cert section */}
                         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.8)_0%,transparent_70%)]"></div>
                         <Award size={120} className="text-stone-300 dark:text-stone-600 relative z-10" strokeWidth={1} />
                    </div>
                </div>
             </div>
        </section>

        {/* Awards & Honors */}
        <section id="awards" className="py-24 bg-[#F5F4F0] dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.awards.label[lang]}</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900 dark:text-white">{data.awards.title[lang]}</h2>
                    <div className="w-16 h-1 bg-nobel-gold mx-auto"></div>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-6">
                    {data.awards.items.map((award, idx) => (
                         <div key={idx} className="flex gap-6 items-center p-6 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-md transition-shadow">
                             <div className="w-16 h-16 shrink-0 bg-nobel-gold/10 dark:bg-nobel-gold/20 rounded-full flex items-center justify-center">
                                 <Medal className="text-nobel-gold" size={28} strokeWidth={1.5} />
                             </div>
                             <div className="flex-1">
                                 <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-1">{award.title[lang]}</h3>
                                 <p className="text-stone-600 dark:text-stone-400 font-medium">{typeof award.event === 'string' ? award.event : award.event[lang]}</p>
                             </div>
                             <div className="text-xl font-serif text-nobel-gold font-bold">
                                 {award.year}
                             </div>
                         </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Affiliations & Editorial */}
        <section id="affiliations" className="py-24 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Memberships */}
                    <div>
                        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.affiliations.label[lang]}</div>
                        <h3 className="flex items-center gap-3 font-serif text-3xl md:text-4xl text-stone-900 dark:text-white mb-8">
                            <Users className="text-nobel-gold" />
                            {lang === 'tr' ? 'Bilimsel Üyelikler' : 'Memberships'}
                        </h3>
                        <ul className="space-y-4">
                            {data.affiliations.memberships.map((membership, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors border border-transparent hover:border-stone-100 dark:hover:border-stone-800">
                                    <BookmarkCheck className="text-nobel-gold shrink-0 mt-1" size={24} />
                                    <span className="text-lg text-stone-700 dark:text-stone-300 font-medium">
                                        {membership[lang]}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Editorial & Reviewer */}
                    <div>
                        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-transparent uppercase select-none">&nbsp;</div>
                        <h3 className="flex items-center gap-3 font-serif text-3xl md:text-4xl text-stone-900 dark:text-white mb-8">
                            <LayoutList className="text-nobel-gold" />
                            {lang === 'tr' ? 'Editörlük & Hakemlik' : 'Editorial Roles'}
                        </h3>
                        <div className="space-y-4">
                            {data.affiliations.editorial.map((item, idx) => (
                                <div key={idx} className="p-5 rounded-xl bg-[#F5F4F0] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <span className="text-lg font-serif text-stone-900 dark:text-stone-100 italic">
                                        {item.journal}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-full shrink-0 text-center">
                                        {item.role[lang]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-[#F9F8F4] dark:bg-stone-900/50">
             <div className="container mx-auto px-6 min-h-[500px]">
                 <div className="text-center mb-16">
                     <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.gallery.label[lang]}</div>
                     <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900 dark:text-white">{data.gallery.title[lang]}</h2>
                 </div>
                 
                 <div className="relative max-w-5xl mx-auto flex items-center justify-center">
                     <button onClick={() => setGalleryIndex(prev => prev === 0 ? data.gallery.images.length - 1 : prev - 1)} className="absolute left-4 md:-left-8 z-20 p-3 bg-white/80 dark:bg-stone-800/80 backdrop-blur rounded-full shadow-lg hover:text-nobel-gold transition-colors">
                        <ChevronLeft size={24} />
                     </button>
                     
                     <div className="overflow-hidden rounded-2xl w-full aspect-[16/9] md:aspect-[21/9] relative shadow-xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                               key={galleryIndex}
                               src={data.gallery.images[galleryIndex].url}
                               initial={{ opacity: 0, scale: 1.05 }}
                               animate={{ opacity: 1, scale: 1 }}
                               exit={{ opacity: 0 }}
                               transition={{ duration: 0.5 }}
                               className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-serif md:text-xl text-center shadow-black drop-shadow-md">
                                {data.gallery.images[galleryIndex].caption}
                            </p>
                        </div>
                     </div>
                     
                     <button onClick={() => setGalleryIndex(prev => prev === data.gallery.images.length - 1 ? 0 : prev + 1)} className="absolute right-4 md:-right-8 z-20 p-3 bg-white/80 dark:bg-stone-800/80 backdrop-blur rounded-full shadow-lg hover:text-nobel-gold transition-colors">
                        <ChevronRight size={24} />
                     </button>
                 </div>
             </div>
        </section>



        {/* Blog & Notes */}
        <section id="blog" className="py-24 bg-[#F5F4F0] dark:bg-stone-950/30 border-t border-stone-200 dark:border-stone-800">
             <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                      <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.blog.label[lang]}</div>
                      <h2 className="font-serif text-4xl mb-6 text-stone-900 dark:text-white">{data.blog.title[lang]}</h2>
                      <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-lg mb-12">
                         {data.blog.desc[lang]}
                      </p>
                  </div>
                  
                  <div className="max-w-3xl mx-auto grid grid-cols-1 gap-12">
                     {data.blog.posts?.map((post) => (
                         <article key={post.id} className="bg-white dark:bg-stone-900 p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800">
                             <div className="text-sm font-mono text-nobel-gold mb-4">{new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                             <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-6">{post.title[lang]}</h3>
                             <div className="markdown-body prose prose-stone dark:prose-invert hover:prose-a:text-nobel-gold max-w-none">
                                <Markdown>{post.content[lang]}</Markdown>
                             </div>
                         </article>
                     ))}
                  </div>
             </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
             <div className="container mx-auto px-6 relative z-10 text-center">
                  <div className="inline-block mb-3 text-xs font-bold tracking-widest text-nobel-gold uppercase">{data.contact.label[lang]}</div>
                  <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white">{data.contact.title[lang]}</h2>
                  
                  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
                     <div>
                        <h3 className="font-serif text-3xl mb-6 text-white">{lang === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}</h3>
                        <p className="text-stone-400 mb-10 leading-relaxed text-lg">
                           {lang === 'tr' ? 'Akademik iş birlikleri, sorularınız veya projeler hakkında konuşmak için bana ulaşabilirsiniz.' : 'Feel free to reach out for academic collaborations, questions, or to discuss projects.'}
                        </p>
                        
                        <div className="flex flex-col gap-6">
                            <a href={`mailto:${data.contact.email}`} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(`mailto:${data.contact.email}`, '_blank'); }} className="flex items-center gap-4 group p-4 rounded-2xl bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-nobel-gold transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-stone-900 border border-stone-700 md:border-none flex items-center justify-center text-nobel-gold group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">Email</div>
                                    <span className="text-stone-200 group-hover:text-white transition-colors">{data.contact.email}</span>
                                </div>
                            </a>
                            
                            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-nobel-gold transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-stone-900 border border-stone-700 md:border-none flex items-center justify-center text-nobel-gold group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    <Linkedin size={22} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">LinkedIn</div>
                                    <span className="text-stone-200 group-hover:text-white transition-colors">{lang === 'tr' ? 'Profili Görüntüle' : 'View Profile'}</span>
                                </div>
                            </a>

                            <div className="flex gap-4 mt-4">
                                <a href={data.contact.orcid} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-stone-800/50 border border-stone-700/50 hover:border-nobel-gold hover:bg-stone-800 flex items-center justify-center text-nobel-gold transition-all duration-300 group" title="ORCID">
                                    <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                
                                {data.contact.scholar && data.contact.scholar !== '#' && (
                                    <a href={data.contact.scholar} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-stone-800/50 border border-stone-700/50 hover:border-nobel-gold hover:bg-stone-800 flex items-center justify-center text-nobel-gold transition-all duration-300 group" title="Google Scholar">
                                        <GraduationCap size={20} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                )}

                                {data.contact.researchgate && data.contact.researchgate !== '#' && (
                                    <a href={data.contact.researchgate} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-stone-800/50 border border-stone-700/50 hover:border-nobel-gold hover:bg-stone-800 flex items-center justify-center text-nobel-gold transition-all duration-300 group" title="ResearchGate">
                                        <Library size={20} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>
                     </div>
                     
                     <div className="bg-stone-800/30 p-8 rounded-3xl border border-stone-700/50">
                        <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                            <h3 className="font-serif text-2xl mb-2 text-white">{lang === 'tr' ? 'Bana Mesaj Gönder' : 'Send me a message'}</h3>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-bold text-stone-400 uppercase tracking-widest">{lang === 'tr' ? 'İsim' : 'Name'}</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    className="px-4 py-3 bg-stone-900 border border-stone-700 rounded-xl focus:outline-none focus:border-nobel-gold text-white transition-colors"
                                    placeholder={lang === 'tr' ? 'Adınız Soyadınız' : 'John Doe'}
                                />
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-xs font-bold text-stone-400 uppercase tracking-widest">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    className="px-4 py-3 bg-stone-900 border border-stone-700 rounded-xl focus:outline-none focus:border-nobel-gold text-white transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-xs font-bold text-stone-400 uppercase tracking-widest">{lang === 'tr' ? 'Mesaj' : 'Message'}</label>
                                <textarea 
                                    id="message" 
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    className="px-4 py-3 bg-stone-900 border border-stone-700 rounded-xl focus:outline-none focus:border-nobel-gold text-white transition-colors resize-none"
                                    placeholder={lang === 'tr' ? 'Mesajınız...' : 'Your message...'}
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={formStatus === 'sending'}
                                className="mt-4 px-6 py-4 bg-nobel-gold hover:bg-[#95B933] disabled:opacity-70 disabled:hover:bg-nobel-gold text-stone-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-3 w-full"
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        {lang === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
                                    </>
                                ) : formStatus === 'success' ? (
                                    <>
                                        {lang === 'tr' ? 'Mesaj Gönderildi!' : 'Message Sent!'}
                                    </>
                                ) : formStatus === 'error' ? (
                                    <>
                                        {lang === 'tr' ? 'Bir Hata Oluştu' : 'An Error Occurred'}
                                    </>
                                ) : (
                                    <>
                                        <span>{lang === 'tr' ? 'Gönder' : 'Send Message'}</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                     </div>
                  </div>
             </div>
        </section>

      </main>
      )}



      <footer className="bg-stone-950 text-stone-500 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
                <div className="text-stone-400 font-serif font-bold text-xl mb-1">A.K.G.</div>
                <p className="text-sm">Personal Portfolio & Academic Research</p>
            </div>
            <div className="text-sm">
                &copy; {new Date().getFullYear()} Ayşenur Akkaya Gül. All rights reserved.
            </div>
        </div>
      </footer>

      {/* PDF Modal */}
      <AnimatePresence>
          {selectedPdf && (
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="fixed inset-0 z-[100] bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
              >
                  <motion.div 
                     initial={{ scale: 0.95, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.95, opacity: 0 }}
                     className="bg-white dark:bg-stone-900 rounded-xl shadow-2xl w-full max-w-6xl h-full max-h-screen flex flex-col overflow-hidden relative"
                  >
                     <div className="flex justify-between items-center px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 gap-4">
                          <div className="flex-1 min-w-0">
                              <h3 className="font-serif font-medium text-stone-900 dark:text-stone-100 text-lg md:text-xl truncate">{selectedPdf.title}</h3>
                              <p className="text-xs text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest truncate mt-1">{selectedPdf.type}</p>
                          </div>
                          
                          <div className="flex items-center gap-2 shrink-0">
                              {selectedPdf.url && (
                                  <a href={selectedPdf.url} download target="_blank" rel="noopener noreferrer" className="p-2 text-stone-400 hover:text-nobel-gold hover:bg-stone-200 dark:hover:bg-stone-800 rounded-full transition-colors" title={lang === 'tr' ? 'İndir' : 'Download'}>
                                      <Download size={20}/>
                                  </a>
                              )}
                              <button onClick={() => setSelectedPdf(null)} className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-800 rounded-full transition-colors">
                                  <X size={24}/>
                              </button>
                          </div>
                     </div>
                     <div className="flex-1 flex overflow-hidden w-full relative">
                         {selectedPdf.abstract ? (
                            <div className="w-full h-full overflow-y-auto px-6 py-12 md:py-20 flex flex-col items-center bg-stone-50 dark:bg-stone-950">
                               <div className="w-16 h-1 bg-nobel-gold mb-8 rounded-full"></div>
                               <h4 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-100 mb-8 text-center">{lang === 'tr' ? 'Tez/Makale Özeti' : 'Research Abstract'}</h4>
                               <div className="w-full max-w-4xl text-center flex flex-col gap-6">
                                   {selectedPdf.abstract.split(/(?:\n\n|\n(?=(?:Konu|Dizin|Subject|Index|Anahtar kelimeler|Keywords|Objective|Study design|Results|Conclusion):))/i).filter(p => p.trim() !== "").map((paragraph, index) => {
                                      const match = paragraph.match(/^(Konu|Dizin|Subject|Index|Anahtar kelimeler|Keywords|Objective|Study design|Results|Conclusion):\s*(.*)/is);
                                      if (match) {
                                          return (
                                              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={index} className="bg-white dark:bg-stone-900 p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800/50 hover:shadow-md transition-shadow relative overflow-hidden group">
                                                  <div className="absolute top-0 left-0 w-2 h-full bg-nobel-gold/20 group-hover:bg-nobel-gold transition-colors"></div>
                                                  <h5 className="text-nobel-gold font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-sm md:text-base mb-3 text-left pl-2">
                                                    {match[1].trim()}
                                                  </h5>
                                                  <p className="text-stone-700 dark:text-stone-300 leading-loose text-base md:text-lg text-left pl-2">
                                                    {match[2].trim()}
                                                  </p>
                                              </motion.div>
                                          );
                                      }
                                      return (
                                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={index} className="bg-white dark:bg-stone-900 p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800/50 hover:shadow-md transition-shadow">
                                              <p className="text-stone-700 dark:text-stone-300 leading-loose text-base md:text-lg text-justify md:text-left">
                                                {paragraph.trim()}
                                              </p>
                                          </motion.div>
                                      );
                                   })}
                               </div>
                           </div>
                         ) : (
                           <div className="flex flex-col items-center justify-center w-full h-full bg-stone-50 dark:bg-stone-900 text-stone-500 px-6 text-center">
                               <div className="w-20 h-20 bg-stone-200 dark:bg-stone-700 rounded-full flex items-center justify-center mb-6">
                                 <FileIcon size={32} className="text-stone-400 dark:text-stone-500" />
                               </div>
                               <h3 className="text-xl font-serif text-stone-800 dark:text-stone-200 mb-2">{lang === 'tr' ? 'Özet Bulunamadı' : 'No Abstract Found'}</h3>
                           </div>
                         )}
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default App;

