export type Language = 'tr' | 'en';

export const data = {
  header: {
    title: {
      tr: "Ayşenur Akkaya Gül",
      en: "Ayşenur Akkaya Gül"
    },
    subtitle: {
      tr: "Akademisyen & Ar-Ge",
      en: "Instructor & Researcher"
    },
    nav: {
      home: { tr: "Ana Sayfa", en: "Home" },
      about: { tr: "Hakkımda", en: "About" },
      projects: { tr: "Projeler", en: "Projects" },
      experience: { tr: "Deneyim", en: "Experience" },
      certificate: { tr: "Sertifikalar", en: "Certificate" },
      blog: { tr: "Blog & Notlar", en: "Blog & Notes" },
      orcid: { tr: "ORCID", en: "ORCID" },
      contact: { tr: "İletişim", en: "Contact" }
    }
  },
  hero: {
    label: {
      tr: "Fenerbahçe Üniversitesi • Eğitmen",
      en: "Fenerbahçe Üniversitesi • Instructor"
    },
    title: {
      tr: "Ayşenur Akkaya Gül",
      en: "Ayşenur Akkaya Gül"
    },
    subtitle: {
      tr: "Çocuk Sağlığı ve Hastalıkları Hemşireliği",
      en: "Child Health and Diseases Nursing"
    },
    description: {
      tr: "Hemşirelik eğitimi, yoğun bakım ve ilk yardım alanlarında uzmanlaşmış, akademiye ve klinik araştırmalara adanmış bir kariyer.",
      en: "A career dedicated to academia and clinical research, specializing in nursing education, intensive care, and first aid."
    },
    button: {
      tr: "KEŞFET",
      en: "DISCOVER"
    }
  },
  about: {
    label: { tr: "HAKKIMDA", en: "ABOUT ME" },
    title: { tr: "Klinik ve Akademi", en: "Clinical & Academia" },
    cvUrl: "/cv.pdf", // Dummy URL
    cvButton: { tr: "Özgeçmişi İndir (CV)", en: "Download CV" },
    p1: {
      tr: "Yıllarca yenidoğan yoğun bakım ve pediatri servislerinde edindiğim klinik tecrübemi, şimdi akademik alanda gelecek nesil sağlık çalışanlarına aktarıyorum. Hemşirelik eğitiminde yenilikçi yaklaşımlar ve kanıta dayalı uygulamalar üzerine odaklanmaktayım.",
      en: "I am now transferring my clinical experience gained over the years in neonatal intensive care and pediatric wards to the next generation of healthcare professionals in the academic field. I focus on innovative approaches and evidence-based practices in nursing education."
    },
    p2: {
      tr: "Araştırmalarım, özellikle yenidoğanlarda ağrı yönetimi, anne-bebek etkileşimi ve yenidoğan stres faktörlerinin azaltılması üzerinedir.",
      en: "My research focuses specifically on pain management in newborns, mother-infant interaction, and reducing neonatal stress factors."
    }
  },
  stats: {
    items: [
      { count: 10, label: { tr: "Sektörel Yıl", en: "Years in Field" } },
      { count: 15, label: { tr: "Akademik Yayın", en: "Publications" } },
      { count: 8, label: { tr: "Eğitim Programı", en: "Educational Programs" } },
      { count: 50, suffix: "+", label: { tr: "Mezun Öğrenci", en: "Graduated Students" } }
    ]
  },
  teaching: {
    label: { tr: "EĞİTİM & DERSLER", en: "TEACHING & COURSES" },
    title: { tr: "Verilen Dersler", en: "Courses Taught" },
    courses: [
      {
        name: { tr: "Çocuk Sağlığı ve Hastalıkları Hemşireliği", en: "Child Health and Diseases Nursing" },
        desc: { tr: "Lisans düzeyinde temel pediatri hemşireliği prensipleri ve çocuk sağlığına bütüncül yaklaşım.", en: "Undergraduate level fundamental pediatric nursing principles and holistic approach to child health." }
      },
      {
        name: { tr: "İlk ve Acil Yardım", en: "First and Emergency Aid" },
        desc: { tr: "Acil durumlarda kritik karar verme, hayat kurtarıcı müdahaleler ve temel yaşam desteği.", en: "Critical decision making in emergencies, life-saving interventions, and basic life support." }
      },
      {
        name: { tr: "Temel ve İleri Yaşam Desteği", en: "Basic and Advanced Life Support" },
        desc: { tr: "Profesyonel yaşam desteği protokolleri, CPR uygulamaları ve hava yolu yönetimi.", en: "Professional life support protocols, CPR applications, and airway management." }
      }
    ]
  },
  awards: {
    label: { tr: "ÖDÜLLER & BAŞARILAR", en: "AWARDS & HONORS" },
    title: { tr: "Akademik Başarılar", en: "Academic Achievements" },
    items: [
      {
        title: { tr: "En İyi Sözlü Bildiri Ödülü", en: "Best Oral Presentation Award" },
        event: { tr: "8. Ulusal Pediatri Hemşireliği Kongresi", en: "8th National Pediatric Nursing Congress" },
        year: "2023"
      },
      {
        title: { tr: "Akademik Teşvik Ödülü", en: "Academic Incentive Award" },
        event: "Fenerbahçe Üniversitesi",
        year: "2022"
      },
      {
        title: { tr: "En İyi Poster Bildirisi", en: "Best Poster Presentation" },
        event: { tr: "Uluslararası Yenidoğan Sempozyumu", en: "International Neonatal Symposium" },
        year: "2021"
      }
    ]
  },
  talks: {
    label: { tr: "MEDYA & KONUŞMALAR", en: "MEDIA & TALKS" },
    title: { tr: "Konferanslar ve Sempozyumlar", en: "Talks & Presentations" },
    items: [
      {
        title: { tr: "Yenidoğanlarda Ağrı Yönetimi ve Hemşirelik Yaklaşımları", en: "Pain Management in Newborns and Nursing Approaches" },
        event: { tr: "Ulusal Çocuk Sağlığı Kongresi (Davetli Konuşmacı)", en: "National Child Health Congress (Invited Speaker)" },
        year: "2024",
        link: "#"
      },
      {
        title: { tr: "Çocuklarda İlkyardım Farkındalığı", en: "First Aid Awareness in Children" },
        event: { tr: "Sağlık TV Gündem Programı", en: "Health TV Agenda Program" },
        year: "2023",
        link: "#"
      }
    ]
  },
  research: {
    label: { tr: "UZMANLIK", en: "EXPERTISE" },
    title: { tr: "Araştırma Alanları", en: "Research Interests" },
    items: [
      { tr: "Yenidoğan Yoğun Bakım", en: "Neonatal Intensive Care" },
      { tr: "Pediatrik Ağrı Yönetimi", en: "Pediatric Pain Management" },
      { tr: "Anne-Bebek Etkileşimi", en: "Mother-Infant Interaction" },
      { tr: "Hemşirelikte İnovasyon", en: "Innovation in Nursing" }
    ]
  },
  theses: {
    label: { tr: "DANIŞMANLIKLAR", en: "MENTORSHIP" },
    title: { tr: "Yönetilen Tezler", en: "Supervised Theses" },
    items: [
      { student: "Ayşe Yılmaz", title: { tr: "Prematüre bebeklerde ağrı yönetimi üzerine bir çalışma...", en: "A study on pain management in premature infants..." }, year: "2023", type: { tr: "Yüksek Lisans Tezi", en: "Master's Thesis" } },
      { student: "Mehmet Demir", title: { tr: "Yenidoğan yoğun bakımda aile merkezli bakım modelleri...", en: "Family-centered care models in NICU..." }, year: "Devam Ediyor", type: { tr: "Yüksek Lisans Tezi", en: "Master's Thesis" } }
    ]
  },
  affiliations: {
    label: { tr: "AKADEMİK HİZMETLER", en: "ACADEMIC SERVICES" },
    title: { tr: "Üyelikler ve Hakemlikler", en: "Memberships & Editorial" },
    memberships: [
      { tr: "Türk Pediatri Kurumu", en: "Turkish Pediatric Association" },
      { tr: "Neonatoloji Hemşireleri Derneği", en: "Neonatal Nurses Society" },
      { tr: "Uluslararası Hemşireler Konseyi (ICN)", en: "International Council of Nurses (ICN)" }
    ],
    editorial: [
      { journal: "Journal of Pediatric Nursing", role: { tr: "Hakem", en: "Reviewer" } },
      { journal: "Türkiye Klinikleri Hemşirelik Bilimleri Dergisi", role: { tr: "Yayın Kurulu Üyesi", en: "Editorial Board Member" } }
    ]
  },
  projects: {
    label: { tr: "YAYINLAR & PROJELER", en: "PUBLICATIONS & PROJECTS" },
    title: { tr: "Akademik Çalışmalar", en: "Academic Works" },
    publications: [
      {
        title: {
          tr: "Effect of pacifier and pacifier with dextrose in reducing pain during orogastric tube insertion in newborns: a randomized controlled trial*",
          en: "Effect of pacifier and pacifier with dextrose in reducing pain during orogastric tube insertion in newborns: a randomized controlled trial*"
        },
        type: { tr: "Makale • Journal of Perinatology (2024)", en: "Article • Journal of Perinatology (2024)" },
        citation: "Akcay, A., & Akkaya, A. (2024). Effect of pacifier and pacifier with dextrose in reducing pain during orogastric tube insertion in newborns: a randomized controlled trial. Journal of Perinatology. DOI: 10.1038/s41372-024-01948-w",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      {
        title: {
          tr: "Yenidoğanda Orogastrik Sonda Yerleştirme İşlemi Sırasında Emzik ve Dekstrozlu Emzik Kullanımının Ağrıyı Azaltmadaki Etkisi’, Randomize Kontrollü Deneysel Araştırma, 2020",
          en: "The Effect of Using Pacifier and Pacifier with Dextrose on Reducing Pain During Orogastric Tube Insertion in Newborns', Randomized Controlled Experimental Research, 2020"
        },
        type: { tr: "Makale / Tez", en: "Article / Thesis" },
        citation: "Akkaya Gül, A. (2020). Yenidoğanda Orogastrik Sonda Yerleştirme İşlemi Sırasında Emzik ve Dekstrozlu Emzik Kullanımının Ağrıyı Azaltmadaki Etkisi. Yüksek Lisans Tezi.",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      {
        title: {
          tr: "Multisensory stimulation by mothers: impact on neonatal pain and maternal anxiety during heel blood collection: a randomized controlled trial",
          en: "Multisensory stimulation by mothers: impact on neonatal pain and maternal anxiety during heel blood collection: a randomized controlled trial"
        },
        type: { tr: "Makale • Journal of Perinatology (2026)", en: "Article • Journal of Perinatology (2026)" },
        citation: "Akkaya Gül, A., Özyazıcıoğlu, N., & Çelikboya-Kabadayı, E. (2026). Multisensory stimulation by mothers: impact on neonatal pain and maternal anxiety during heel blood collection: a randomized controlled trial. Journal of Perinatology. DOI: 10.1038/s41372-025-02436-5",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },
  orcid_summary: {
    label: { tr: "AKADEMİK KİMLİK", en: "ACADEMIC IDENTITY" },
    title: { tr: "ORCID Profili Özeti", en: "ORCID Profile Summary" },
    info: {
      tr: "0000-0001-9019-8740 numaralı ORCID kayıtlarına göre onaylanmış bilgiler.",
      en: "Verified information based on ORCID record 0000-0001-9019-8740."
    },
    stats: {
      employment: { tr: "İş Deneyimi", en: "Employment Records" },
      education: { tr: "Eğitim Kaydı", en: "Education Records" },
      works: { tr: "Makale/Yayın", en: "Works/Publications" }
    }
  },
  gallery: {
    label: { tr: "GALERİ", en: "GALLERY" },
    title: { tr: "Anılar & Etkinlikler", en: "Memories & Events" },
    images: [
      { url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2940&auto=format&fit=crop", caption: "Conference 2023" },
      { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop", caption: "Clinical Practice" },
      { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2940&auto=format&fit=crop", caption: "Academic Research" },
      { url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop", caption: "Seminar Presentation" }
    ]
  },
  experience:{
    label: { tr: "KARİYER", en: "CAREER" },
    title: { tr: "Deneyim & Eğitim", en: "Experience & Education" },
    jobs: [
      {
        role: { tr: "Öğretim Görevlisi - İlk ve Acil Yardım", en: "Lecturer - First and Emergency Aid" },
        company: "Fenerbahçe Üniversitesi",
        date: { tr: "Şubat 2022 - Günümüz", en: "February 2022 - Present" },
        skills: { tr: ["Hemşirelik Eğitimi", "Akademik Danışmanlık", "İlk Yardım"], en: ["Nursing Education", "Academic Mentoring", "First Aid"] }
      },
      {
        role: { tr: "Öğretim Görevlisi (Erasmus+ Hareketliliği)", en: "Lecturer (Erasmus+ Mobility)" },
        company: "University of Granada",
        date: { tr: "Mart 2023", en: "March 2023" },
        skills: { tr: ["Uluslararası Deneyim", "Hemşirelik Eğitimi"], en: ["International Experience", "Nursing Education"] }
      },
      {
        role: { tr: "Hemşire (RN) - Yenidoğan Yoğun Bakım", en: "RN, Neonatal Intensive Care Unit" },
        company: "İstanbul Tuzla Devlet Hastanesi",
        date: { tr: "Ekim 2017 - Şubat 2022", en: "October 2017 - February 2022" },
        skills: { tr: ["Yenidoğan Yoğun Bakım", "Klinik Deneyim", "Ağrı Yönetimi"], en: ["Neonatal ICU", "Clinical Experience", "Pain Management"] }
      },
       {
        role: { tr: "Hemşire (RN) - Yenidoğan Yoğun Bakım", en: "RN, Neonatal Intensive Care Unit" },
        company: "Aydın Adnan Menderes Üniversitesi",
        date: { tr: "Mart 2017 - Haziran 2017", en: "March 2017 - June 2017" },
        skills: { tr: ["Yenidoğan Bakımı", "Hasta Takibi"], en: ["Neonatal Care", "Patient Monitoring"] }
      },
      {
        role: { tr: "Hemşire (RN) - Pediatri Servisi", en: "RN, Pediatric Service" },
        company: "Özel Başkent Hastanesi",
        date: { tr: "Ağustos 2016 - Şubat 2017", en: "August 2016 - February 2017" },
        skills: { tr: ["Pediatri", "Çocuk Sağlığı"], en: ["Pediatrics", "Child Health"] }
      },
      {
        role: { tr: "Stajyer Hemşire (Acil Servis, Yenidoğan Yoğun Bakım)", en: "Intern Nursing (Emergency service, neonatal ICU)" },
        company: "Hospital Universitario de Ceuta",
        date: { tr: "Eylül 2014 - Şubat 2015", en: "September 2014 - February 2015" },
        skills: { tr: ["Acil Servis", "Yenidoğan Yoğun Bakım"], en: ["Emergency Service", "Neonatal ICU"] }
      }
    ],
    education: [
      {
        degree: { tr: "Doktora (PhD), Çocuk Sağlığı ve Hastalıkları Hemşireliği", en: "Doctorate (PhD), Child Health and Diseases Nursing" },
        school: "Uludağ Üniversitesi",
        date: "2020 - Present"
      },
      {
        degree: { tr: "Yüksek Lisans (MSc), Çocuk Sağlığı ve Hastalıkları Hemşireliği", en: "Master(MSc), Child Health and Diseases Nursing" },
        school: "Uludağ Üniversitesi",
        date: "2017 - 2020"
      },
      {
        degree: { tr: "Lisans, Hemşirelik", en: "Bachelor's degree, Nursing" },
        school: "Hitit Üniversitesi",
        date: "2012 - 2016"
      },
      {
        degree: { tr: "Erasmus Programı", en: "Erasmus Program" },
        school: "Universidad de Granada",
        date: "2014 - 2015"
      }
    ]
  },
  certificates: {
    label: { tr: "YETKİNLİKLER", en: "QUALIFICATIONS" },
    title: { tr: "Sertifikalar & Beceriler", en: "Certificates & Skills" },
    items: [
      "Neonatal Resuscitation Program Practitioner Certificate",
    ],
    skills: {
      tr: ["Hemşirelik Eğitimi", "Yoğun Bakım", "İlk Yardım", "Makale Yazımı", "Akademik Araştırma"],
      en: ["Nursing Education", "Intensive Care", "First Aid", "Article Writing", "Academic Research"]
    }
  },
  blog: {
    label: { tr: "NOTLAR", en: "NOTES" },
    title: { tr: "Blog & Notlar", en: "Blog & Notes" },
    desc: {
      tr: "Sunumlar, ders notları ve güncel araştırmalarım yakında buralara eklenecektir.",
      en: "Presentations, lecture notes, and my current research will be added here soon."
    },
    posts: [
      {
        id: "1",
        title: { tr: "Yenidoğan Ağrı Yönetimi Üzerine Notlar", en: "Notes on Neonatal Pain Management" },
        date: "2023-11-15",
        content: {
          tr: "## Yenidoğanlarda Ağrı\n\nYenidoğan döneminde yaşanan ağrı tecrübesinin, uzun dönemde nörolojik ve davranışsal gelişim üzerinde etkileri olduğu kanıtlanmıştır.\n\n*   Non-farmakolojik yöntemler (emzik, anne sütü, ten-tene temas vb.)\n*   Çevresel stresörlerin azaltılması\n\nBu konularda yapılan son araştırmalar ışığında...",
          en: "## Neonatal Pain\n\nIt has been proven that the experience of pain in the neonatal period has effects on neurological and behavioral development in the long term.\n\n*   Non-pharmacological methods (pacifier, breast milk, skin-to-skin contact, etc.)\n*   Reduction of environmental stressors\n\nIn the light of the latest research on these subjects..."
        }
      }
    ]
  },

  contact: {
    label: { tr: "İLETİŞİM", en: "CONTACT" },
    title: { tr: "Bize Ulaşın", en: "Get In Touch" },
    email: "aysenurakkaya006@gmail.com",
    linkedin: "https://www.linkedin.com/in/aysenurakkayagul",
    orcid: "https://orcid.org/0000-0001-9019-8740",
    scholar: "#", // Google Scholar link can be added here
    researchgate: "#" // ResearchGate link can be added here
  }
}
