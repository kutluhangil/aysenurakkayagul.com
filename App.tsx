
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ArrowDown, Menu, X, BookOpen, GraduationCap, Award, Briefcase, Mail, Linkedin, FileText, Globe, Search, Library, FileIcon, Copy, Moon, Sun, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import Markdown from 'react-markdown';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { data, Language } from './data';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ExperienceCard = ({ role, company, date, delay, skills }: { role: string, company: string, date: string, delay: string, skills?: string[] }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-start p-8 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-md transition-all duration-300 w-full hover:border-nobel-gold/50 dark:hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-2">{role}</h3>
      <div className="w-8 h-0.5 bg-nobel-gold mb-3 opacity-60 group-hover:w-16 transition-all duration-300"></div>
      <p className="text-sm text-stone-800 dark:text-stone-300 font-medium mb-1">{company}</p>
      <p className="text-xs text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest leading-relaxed mb-4">{date}</p>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
            {skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-600 text-xs rounded-full">
                    {skill}
                </span>
            ))}
        </div>
      )}
    </div>
  );
};

const PublicationCard = ({ title, type, citation, onClick, lang }: { title: string, type: string, citation?: string, onClick?: () => void, lang: Language }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (citation) {
        navigator.clipboard.writeText(citation);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
      <div onClick={onClick} className="p-6 bg-[#F9F8F4] dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg border-l-4 border-l-nobel-gold group hover:bg-white dark:hover:bg-stone-700 transition-colors duration-300 cursor-pointer flex flex-col">
          <p className="font-serif italic text-lg lg:text-xl text-stone-800 dark:text-stone-200 mb-4 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
              "{title}"
          </p>
          <div className="flex flex-wrap justify-between items-center mt-auto w-full gap-4">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 tracking-wider uppercase">— {type}</span>
              {citation && (
                 <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 rounded text-xs transition-colors" title={lang === 'tr' ? 'Alıntıyı Kopyala' : 'Copy Citation'}>
                    <Copy size={14} />
                    {copied ? (lang === 'tr' ? 'Kopyalandı!' : 'Copied!') : (lang === 'tr' ? 'Alıntıyı Kopyala' : 'Copy Citation')}
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
  const [selectedPdf, setSelectedPdf] = useState<{title: string, type: string, url: string} | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  
  const [galleryIndex, setGalleryIndex] = useState(0);

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
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">A</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity dark:text-white ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              AKKAYA <span className="font-normal text-stone-500 dark:text-stone-400">GÜL</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium tracking-wider text-stone-600 dark:text-stone-300">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.about[lang]}</a>
            <a href="#orcid" onClick={scrollToSection('orcid')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.orcid[lang]}</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.projects[lang]}</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.experience[lang]}</a>
            <a href="#certificate" onClick={scrollToSection('certificate')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.certificate[lang]}</a>
            <a href="#blog" onClick={scrollToSection('blog')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.blog[lang]}</a>
            <a href="#posts" onClick={scrollToSection('posts')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.posts[lang]}</a>
            
            <button onClick={toggleLang} className="flex items-center gap-1 font-bold text-stone-800 dark:text-stone-200 hover:text-nobel-gold transition-colors ml-4 px-2 tracking-widest">
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
              className="px-5 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm cursor-pointer ml-2"
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
            <a href="#posts" onClick={scrollToSection('posts')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{data.header.nav.posts[lang]}</a>
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
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(28,25,23,0.92)_0%,rgba(28,25,23,0.6)_50%,rgba(28,25,23,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30 dark:bg-stone-900/30">
             {data.hero.label[lang]}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-medium leading-[1.1] md:leading-[0.9] mb-8 text-stone-900 dark:text-stone-100 drop-shadow-sm">
            {data.hero.title[lang]} <br/><span className="italic font-normal text-stone-600 dark:text-stone-400 text-3xl md:text-5xl block mt-4">{data.hero.subtitle[lang]}</span>
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

      <main>
        {/* About Section */}
        <section id="about" className="py-24 bg-white dark:bg-emerald-950/10">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.about.label[lang]}</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900 dark:text-stone-100">{data.about.title[lang]}</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 dark:text-stone-300 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">{data.about.p1[lang].charAt(0)}</span>{data.about.p1[lang].slice(1)}
              </p>
              <p>
                {data.about.p2[lang]}
              </p>
            </div>
          </div>
        </section>

        {/* ORCID Summary Section */}
        <section id="orcid" className="py-24 bg-[#F5F4F0] dark:bg-stone-950 border-y border-stone-200 dark:border-stone-800">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 flex flex-col justify-center">
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
            
            <div className="md:col-span-7">
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col items-center text-center group hover:border-nobel-gold transition-colors">
                       <Briefcase className="text-nobel-gold mb-4 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                       <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-2">5</h3>
                       <p className="text-sm font-medium text-stone-500 uppercase tracking-widest">{data.orcid_summary.stats.employment[lang]}</p>
                   </div>
                   
                   <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col items-center text-center group hover:border-nobel-gold transition-colors">
                       <GraduationCap className="text-nobel-gold mb-4 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                       <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-2">4</h3>
                       <p className="text-sm font-medium text-stone-500 uppercase tracking-widest">{data.orcid_summary.stats.education[lang]}</p>
                   </div>
                   
                   <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col items-center text-center group hover:border-nobel-gold transition-colors">
                       <BookOpen className="text-nobel-gold mb-4 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                       <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-2">2</h3>
                       <p className="text-sm font-medium text-stone-500 uppercase tracking-widest">{data.orcid_summary.stats.works[lang]}</p>
                   </div>
               </div>
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
                                <ExperienceCard key={idx} role={job.role[lang]} company={job.company} date={job.date[lang]} skills={job.skills ? job.skills[lang] : undefined} delay={`${idx * 0.1}s`} />
                            ))}
                        </div>
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
                        <PublicationCard key={idx} lang={lang} title={pub.title[lang]} type={pub.type[lang]} citation={pub.citation} onClick={() => pub.pdfUrl ? setSelectedPdf({ title: pub.title[lang], type: pub.type[lang], url: pub.pdfUrl }) : null} />
                    ))}
                </div>
            </div>
        </section>

        {/* Certificates & Skills */}
        <section id="certificate" className="py-24 bg-white dark:bg-emerald-950/20 border-t border-stone-200 dark:border-stone-800">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
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
                <div className="md:col-span-7 relative order-1 md:order-2">
                    <div className="aspect-[4/3] bg-[#F5F4F0] dark:bg-stone-800 rounded-xl flex items-center justify-center relative border border-stone-200 dark:border-stone-700 shadow-inner overflow-hidden">
                         {/* Abstract simple design for cert section */}
                         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.8)_0%,transparent_70%)]"></div>
                         <Award size={120} className="text-stone-300 dark:text-stone-600 relative z-10" strokeWidth={1} />
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

        {/* Posts */}
        <section id="posts" className="py-24 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
             <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                      <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 dark:text-stone-400 uppercase">{data.posts.label[lang]}</div>
                      <h2 className="font-serif text-4xl text-stone-900 dark:text-white">{data.posts.title[lang]}</h2>
                  </div>
                  
                  <div className="max-w-2xl mx-auto grid grid-cols-1 gap-12">
                     {data.posts.items.map((post) => (
                         <article key={post.id} className="bg-[#F9F8F4] dark:bg-stone-950 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden">
                             <div className="p-6 md:p-8">
                                 <div className="flex items-center gap-4 mb-6">
                                     <div className="w-12 h-12 rounded-full bg-nobel-gold flex items-center justify-center font-serif font-bold text-xl text-white shadow-sm">
                                        A
                                     </div>
                                     <div>
                                        <h4 className="font-bold text-stone-900 dark:text-stone-100">Ayşenur Akkaya Gül</h4>
                                        <p className="text-xs text-stone-500 dark:text-stone-400">
                                            {new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                     </div>
                                 </div>
                                 <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
                                    <p>{post.content[lang]}</p>
                                 </div>
                             </div>
                             {post.image && (
                                <div className="border-t border-stone-200 dark:border-stone-800">
                                     <img src={post.image} alt="Post media" className="w-full h-auto object-cover max-h-[500px]" />
                                </div>
                             )}
                             {post.images && post.images.length > 0 && (
                                <div className={`border-t border-stone-200 dark:border-stone-800 grid gap-1 ${post.images.length === 1 ? 'grid-cols-1' : post.images.length === 2 ? 'grid-cols-2' : post.images.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                                     {post.images.map((img: string, idx: number) => (
                                         <div key={idx} className="aspect-square relative overflow-hidden bg-stone-100 dark:bg-stone-900">
                                             <img src={img} alt={`Post media ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
                                         </div>
                                     ))}
                                </div>
                             )}
                         </article>
                     ))}
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
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                      <a href={`mailto:${data.contact.email}`} className="flex flex-col items-center gap-4 group">
                          <div className="w-16 h-16 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-nobel-gold group-hover:scale-110 group-hover:bg-nobel-gold group-hover:text-stone-900 transition-all duration-300">
                              <Mail size={24} />
                          </div>
                          <span className="text-stone-400 group-hover:text-white transition-colors">{data.contact.email}</span>
                      </a>
                      
                      <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                          <div className="w-16 h-16 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-nobel-gold group-hover:scale-110 group-hover:bg-nobel-gold group-hover:text-stone-900 transition-all duration-300">
                              <Linkedin size={24} />
                          </div>
                          <span className="text-stone-400 group-hover:text-white transition-colors">LinkedIn Profile</span>
                      </a>

                      <a href={data.contact.orcid} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                          <div className="w-16 h-16 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-nobel-gold group-hover:scale-110 group-hover:bg-nobel-gold group-hover:text-stone-900 transition-all duration-300">
                              <BookOpen size={24} />
                          </div>
                          <span className="text-stone-400 group-hover:text-white transition-colors">ORCID Portfolio</span>
                      </a>
                      
                      {data.contact.scholar && data.contact.scholar !== '#' && (
                          <a href={data.contact.scholar} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                              <div className="w-16 h-16 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-nobel-gold group-hover:scale-110 group-hover:bg-nobel-gold group-hover:text-stone-900 transition-all duration-300">
                                  <GraduationCap size={24} />
                              </div>
                              <span className="text-stone-400 group-hover:text-white transition-colors">Google Scholar</span>
                          </a>
                      )}

                      {data.contact.researchgate && data.contact.researchgate !== '#' && (
                          <a href={data.contact.researchgate} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                              <div className="w-16 h-16 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-nobel-gold group-hover:scale-110 group-hover:bg-nobel-gold group-hover:text-stone-900 transition-all duration-300">
                                  <Library size={24} />
                              </div>
                              <span className="text-stone-400 group-hover:text-white transition-colors">ResearchGate</span>
                          </a>
                      )}
                  </div>
             </div>
        </section>

      </main>

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
                          <button onClick={() => setSelectedPdf(null)} className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-800 rounded-full transition-colors shrink-0">
                              <X size={24}/>
                          </button>
                     </div>
                     <div className="flex-1 bg-stone-100 dark:bg-stone-800 overflow-y-auto w-full relative">
                           <Document 
                              file={selectedPdf.url} 
                              className="flex flex-col items-center py-8 gap-4"
                              loading={
                                <div className="flex flex-col items-center justify-center h-64 text-stone-500">
                                  <Loader2 className="animate-spin mb-4" size={32} />
                                  <p>{lang === 'tr' ? 'PDF Yükleniyor...' : 'Loading PDF...'}</p>
                                </div>
                              }
                              error={
                                <div className="flex flex-col items-center justify-center h-64 text-stone-500 px-6 text-center">
                                  <FileIcon size={48} className="mb-4 opacity-50" />
                                  <p className="mb-2">{lang === 'tr' ? 'PDF yüklenirken bir hata oluştu veya dosya bulunamadı.' : 'Failed to load PDF or file not found.'}</p>
                                  <p className="text-sm opacity-70">URL: {selectedPdf.url}</p>
                                </div>
                              }
                           >
                              <Page pageNumber={1} width={Math.min(window.innerWidth * 0.9, 800)} className="shadow-lg" renderTextLayer={false} renderAnnotationLayer={false} />
                              {/* Only rendering first page for preview, full integration could map through numPages */}
                           </Document>
                     </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default App;

