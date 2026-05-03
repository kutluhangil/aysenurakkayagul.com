export type Language = 'tr' | 'en';

export const data = {
  header: {
    title: {
      tr: "Dr. Öğr. Üyesi Ayşenur Akkaya Gül",
      en: "Assist. Prof. Dr. Ayşenur Akkaya Gül"
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
      tr: "Dr. Öğr. Üyesi Ayşenur Akkaya Gül",
      en: "Assist. Prof. Dr. Ayşenur Akkaya Gül"
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
    cvUrl: "/cv.pdf",
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
        name: { tr: "Tıbbi İlk Yardım", en: "Medical First Aid" },
        desc: { tr: "Acil durumlarda hayat kurtarıcı temel ilk yardım müdahaleleri ve prensipleri üzerine teorik ve pratik eğitim.", en: "Theoretical and practical training on life-saving basic first aid interventions and principles in emergencies." }
      },
      {
        name: { tr: "Travma I & II", en: "Trauma I & II" },
        desc: { tr: "Travma hastalarına yönelik hastane öncesi değerlendirme, stabilizasyon ve acil müdahale teknikleri.", en: "Pre-hospital assessment, stabilization, and emergency intervention techniques for trauma patients." }
      },
      {
        name: { tr: "Acil Hasta Bakımı I, II & III", en: "Emergency Patient Care I, II & III" },
        desc: { tr: "Farklı yaş grupları ve spesifik acil vakalarda olay yeri yönetimi ile kapsamlı tıbbi hasta bakımı.", en: "Comprehensive medical patient care and scene management in different age groups and specific emergencies." }
      },
      {
        name: { tr: "Klinik Uygulama I & II", en: "Clinical Practice I & II" },
        desc: { tr: "Öğrencilerin acil servis, ambulans ve benzeri klinik alanlarda teorik bilgilerini pratiğe döktüğü saha eğitimleri.", en: "Field training where students put their theoretical knowledge into practice in clinical areas such as ER and ambulances." }
      },
      {
        name: { tr: "Acil Sağlık Hizmetleri", en: "Emergency Health Services" },
        desc: { tr: "Hastane öncesi geniş çaplı acil sağlık sistemlerinin işleyişi, organizasyonu ve yönetimi konuları.", en: "The operation, organization, and management of pre-hospital comprehensive emergency health systems." }
      },
      {
        name: { tr: "Temel Mesleki Beceriler", en: "Basic Vocational Skills" },
        desc: { tr: "Geleceğin sağlık profesyonelleri için hayati önem taşıyan temel ve pratik mesleki becerilerin kazandırılması.", en: "Acquisition of basic and practical vocational skills that are vital for future healthcare professionals." }
      },
      {
        name: { tr: "Staj", en: "Internship" },
        desc: { tr: "Sahada profesyoneller eşliğinde gerçek hasta bakımı süreçleriyle deneyim kazanma ve uygulama.", en: "Gaining experience and practicing real patient care processes in the field accompanied by professionals." }
      },
      {
        name: { tr: "Ebelik – Klinik Uygulama", en: "Midwifery – Clinical Practice" },
        desc: { tr: "Ebelik öğrencileri için tasarlanmış ve anne-bebek sağlığına odaklanan klinik saha uygulama süreçleri.", en: "Clinical field practice processes designed for midwifery students and focusing on maternal and infant health." }
      },
      {
        name: { tr: "Çevre ve Sosyal Sorumluluk", en: "Environmental and Social Responsibility" },
        desc: { tr: "Topluma ve çevreye duyarlı bireyler yetiştirmeyi amaçlayan akademik sürdürülebilirlik ve sosyal farkındalık projeleri.", en: "Academic sustainability and social awareness projects aimed at raising individuals sensitive to society and the environment." }
      },
      {
        name: { tr: "Sağlık Okuryazarlığı", en: "Health Literacy" },
        desc: { tr: "Sağlıklı yaşam kararları alabilmek için tıbbi ve koruyucu sağlık bilgilerinin doğru anlaşılması ve yorumlanması.", en: "Accurate understanding and interpretation of medical and preventive health information to take healthy lifestyle decisions." }
      },
      {
        name: { tr: "Ambulans Eğitimi I (Bölüm 1 & 2)", en: "Ambulance Training I (Section 1 & 2)" },
        desc: { tr: "Ambulans donanımlarının teknik kullanımı ile hastane öncesi acil hasta ve yaralı taşıma prensiplerinin pratiği.", en: "Technical use of ambulance equipment and the practice of pre-hospital emergency patient transport principles." }
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
        type: { tr: "Makale", en: "Article" },
        date: { tr: "Yayınlanma Tarihi: 29 Mart 2024", en: "Published: 29 March 2024" },
        authors: "Ayşenur Akkaya-Gül & Nurcan Özyazıcıoğlu",
        journal: "Journal of Perinatology Volume: 44 Issue: 717–723 (2024)",
        metrics: "4077 Accesses  |  4 Citations  |  1 Altmetric",
        citation: "Akkaya-Gül, A., Özyazıcıoğlu, N. Effect of pacifier and pacifier with dextrose in reducing pain during orogastric tube insertion in newborns: a randomized controlled trial*. J Perinatol 44, 717–723 (2024). https://doi.org/10.1038/s41372-024-01948-w",
        linkUrl: "https://www.nature.com/articles/s41372-024-01948-w",
        pdfUrl: "https://www.nature.com/articles/s41372-024-01948-w.pdf",
        abstract: {
          tr: `Objective: This study aimed to assess the efficacy of pacifier use, with and without 25% dextrose, in reducing pain during orogastric tube insertion in newborns.\n\nStudy design: In a randomized controlled trial involving 60 newborns at a public hospital from April to December 2019, participants were divided into three groups: pacifier (n = 20), pacifier with 25% dextrose (n = 20), and control (n = 20). A pacifier, with and without dextrose, was used for the experimental groups, while the control group performed a routine procedure. Neonatal infant pain scale, crying duration, heart rate (HR), and oxygen saturation (SpO2) were evaluated.\n\nResults: Results indicated that the control group experienced significantly higher pain levels, elevated HRs, decreased SpO2, and prolonged crying. Conversely, the pacifier with 25% dextrose group showed a notable reduction in crying duration.\n\nConclusion: A pacifier, with and without 25% dextrose, effectively reduces pain and improves physiological and behavioral parameters during orogastric tube insertion.\n\nClinical trial number: NCT05462964\n\nClinical trial registration: The protocol for this randomized controlled experimental trial is registered on ClinicalTrials.gov. The clinical trial registration number is https://clinicaltrials.gov; NCT05462964.`,
          en: `Objective: This study aimed to assess the efficacy of pacifier use, with and without 25% dextrose, in reducing pain during orogastric tube insertion in newborns.\n\nStudy design: In a randomized controlled trial involving 60 newborns at a public hospital from April to December 2019, participants were divided into three groups: pacifier (n = 20), pacifier with 25% dextrose (n = 20), and control (n = 20). A pacifier, with and without dextrose, was used for the experimental groups, while the control group performed a routine procedure. Neonatal infant pain scale, crying duration, heart rate (HR), and oxygen saturation (SpO2) were evaluated.\n\nResults: Results indicated that the control group experienced significantly higher pain levels, elevated HRs, decreased SpO2, and prolonged crying. Conversely, the pacifier with 25% dextrose group showed a notable reduction in crying duration.\n\nConclusion: A pacifier, with and without 25% dextrose, effectively reduces pain and improves physiological and behavioral parameters during orogastric tube insertion.\n\nClinical trial number: NCT05462964\n\nClinical trial registration: The protocol for this randomized controlled experimental trial is registered on ClinicalTrials.gov. The clinical trial registration number is https://clinicaltrials.gov; NCT05462964.`
        }
      },
      {
        title: {
          tr: "Yenidoğanda orogastrik sonda yerleştirme işlemi sırasında emzik ve dekstrozlu emzik kullanımının ağrıyı azaltmadaki etkisi",
          en: "The effect of the use of pacifier and pacifier with dextrose on reducing pain during orogastric tube insertion in newborns"
        },
        type: { tr: "Tez", en: "Thesis" },
        date: { tr: "Yayınlanma Tarihi: 2020", en: "Published: 2020" },
        authors: "Ayşenur Akkaya",
        journal: "Bursa Uludağ Üniversitesi / Sağlık Bilimleri Enstitüsü / Hemşirelik Anabilim Dalı",
        metrics: "Tez No: 621724  |  Danışman: Prof. Dr. Nurcan Özyazıcıoğlu",
        linkUrl: "https://tez.yok.gov.tr/UlusalTezMerkezi/tezSorguSonucYeni.jsp",
        pdfUrl: "/621724.pdf",
        abstract: {
          tr: `Konu: Çocuk Sağlığı ve Hastalıkları\nDizin: Ağrı; Ağrı yönetimi; Ağrı ölçümü; Ağrı şiddeti; Bebek-yenidoğmuş; Bebekler; Emzik; Entübasyon-gastrointestinal; Glükoz; Sondalama\n\nAraştırma yenidoğanda orogastrik sonda (OGS) yerleştirme işlemi sırasında emzik ve dekstrozlu emzik kullanımının ağrıyı azaltmadaki etkisinin incelenmesi amacıyla randomize kontrollü deneysel araştırma olarak yapıldı. Evrenini İstanbul Tuzla Devlet Hastanesi Yenidoğan Yoğun Bakım Ünitesine Nisan-Aralık 2019 tarihleri arasında yatan term yenidoğanlar oluşturdu. Örneklem grubu ise 60 (kontrol grubu 20, müdahale grubu; yalnız emzik verilen 20, dekstrozla tatlandırılmış emzik verilen 20) yenidoğandan oluşturuldu. OGS yerleştirme işleminden 2 dakika önce müdahale gruplarındaki 20 bebeğe yalnız emzik, 20 bebeğe dekstrozla tatlandırılmış emzik verildi. İşlem emzik kenarından sondayı sızdırma şeklinde gerçekleştirildi. Kontrol grubuna rutin OGS yerleştirme işlemi gerçekleştirildi. Veri toplama süreci kamera ile kaydedildi. Veri toplama aracı olarak: emzik, %25 dekstroz, kamera, monitör, bebek ve anneye ait özellikleri içeren bilgi formu ve buna ek olarak fizyolojik ağrı yanıtlarından en yüksek kalp atım hızı ve en düşük oksijen satürasyonu, davranışsal ağrı yanıtlarından ağlama süresi ve ağrı değerlendirmesinde Yenidoğan Ağrı Değerlendirme Skalası (NIPS) kullanıldı. Araştırmanın istatistiksel analizlerinde Varyans analizi, Shapiro Wilk, Kruskal Wallis, ki-kare, Dunn Bonferro ve Wilcoxon testleri kullanıldı. İstatistiksel analizlerde SPSS v22 paket programı kullanılmış olup anlamlılık düzeyi α=0,05 alınmıştır. İşleme başlamadan önce gruplar ağrı şiddetlerini etkileyebilecek yenidoğan ve anneye ait özellikler gibi değişkenler açısından benzerdi (p>0,05). Yenidoğanlarda emzik ve %25 dekstrozla tatlandırılmış emzik kullanımı OGS yerleştirme işlemi sırasında ve sonrasında oluşan ağrı şiddetini benzer oranlarda azalttıkları aynı zamanda müdahale gruplarındaki yenidoğanların kontrol grubuna göre daha az davranışsal ve fizyolojik ağrı yanıtları gösterdikleri bulundu. Kontrol grubunda işlem sırası ve sonrasında ağrı şiddetinde artış ve daha fazla davranışsal ve fizyolojik ağrı yanıtı görüldü. Emziğin %25 dekstrozla tatlandırılarak kullanımının ağlama süresini azaltmada diğer gruplara göre daha etkili olduğu görülmüştür.`,
          en: `Subject: Child Health and Diseases\nIndex: Pain; Pain management; Pain measurement; Ache violence; Infant-newborn; Infant; Spout; Intubation-gastrointestinal; Glucose; Probing\n\nThe study was carried out as a randomized controlled experimental study in order to evaluate the effect of the use of pacifier and pacifier with dextrose in reducing pain while inserting the orogastric tube (OGT) in newborns. The population consisted of term newborns who were hospitalized in Istanbul Tuzla State Hospital Neonatal Intensive Care Unit between April and December 2019. The sample group consisted of 60 newborns (Control group: 20, Intervention group with only pacifier:20, with dextrose flavored pacifier:20). 20 babies in the intervention group were given only pacifier and 20 babies were given a pacifier flavored with dextrose 2 minutes before the OGT insertion. The procedure was performed by leaking the tube from the edge of the pacifier. Routine OGT insertion was performed in the control group. The data collection process was recorded with a camera. The data were collected using a pacifier, 25% dextrose, camera, monitor, information form including the characteristics of the infant and mother, the highest heart rate and lowest oxygen saturation from physiological pain responses, duration of crying from behavioral pain responses. Additionally, the Neonatal Infant Pain Scale (NIPS) was used for pain assessment. Variance analysis, Shapiro Wilk, Kruskal Wallis, Chi-square, Dunn Bonferro and Wilcoxon tests were used in the statistical analysis of the study. The SPSS v22 package program was used for statistical analysis and the significance level was taken α=0.05. Prior to the procedure, the groups were similar in terms of variables such as newborn and maternal characteristics that may affect the severity of pain (p>0.05). It was found that the use of pacifier and 25% dextrose-flavored pacifier in newborns reduced the severity of pain (NIPS) during and after OGT insertion and that newborns in the intervention groups showed less behavioral and physiological pain responses than the control group. In the control group, increased pain severity (NIPS) and more behavioral and physiological pain responses were observed during and after the procedure. The use of 25% dextrose-flavored pacifier has been shown to be more effective in reducing the duration of crying compared to other groups.`
        }
      },
      {
        title: {
          tr: "Dijital emzirme müzesinde Metaverse ve sanal gerçeklik destekli eğitimin annelerin emzirme bilgi düzeyi, öz-yeterliği ve başarısına etkisi",
          en: "The effect of Metaverse- and virtual reality–supported education in the digital breastfeeding museum on mothers' breastfeeding knowledge level, self-efficacy, and success"
        },
        type: { tr: "Doktora Tezi", en: "PhD Thesis" },
        date: { tr: "Yayınlanma Tarihi: 2025", en: "Published: 2025" },
        authors: "Ayşenur Akkaya Gül",
        journal: "Bursa Uludağ Üniversitesi / Sağlık Bilimleri Enstitüsü / Hemşirelik Anabilim Dalı / Çocuk Sağlığı ve Hastalıkları Hemşireliği Bilim Dalı",
        metrics: "Tez No: 955147  |  Danışman: Prof. Dr. Nurcan Özyazıcıoğlu",
        linkUrl: "https://tez.yok.gov.tr/UlusalTezMerkezi/tezSorguSonucYeni.jsp",
        pdfUrl: "/955147.pdf",
        abstract: {
          tr: `Konu: Hemşirelik ; Çocuk Sağlığı ve Hastalıkları\nDizin: Emzirme\n\nBu çalışma, primipar gebe kadınlara yönelik dijital emzirme müzesinde Metaverse ve sanal gerçeklik (VR) destekli eğitimin annelerin emzirme bilgi düzeyi, öz-yeterliği ve başarısına etkisini değerlendirmek amacıyla randomize kontrollü olarak yapıldı. Araştırmanın evrenini, Temmuz 2023-Nisan 2024 tarihleri arasında Türkiye'de üç hastanenin gebe okullarına üçüncü trimesterde ilk defa başvuran ve daha önce hiç emzirme deneyimi olmayan primipar gebeler oluşturdu. Çalışmaya katılan 53 primipar gebe, rastgele olarak müdahale(n=28) ve kontrol(n=25) gruplarına ayrıldı. Müdahale grubundaki gebelere dijital emzirme müzesinde Metaverse ve VR destekli eğitim verilirken, kontrol grubundaki gebeler rutin gebe okulu eğitimi aldı. Veri toplamak amacıyla memnuniyet ve emzirme bilgi düzeyine ilişkin soru anketi, emzirme öz-yeterlik ölçeği – kısa form ve LATCH emzirme değerlendirme ölçeği kullanıldı. Veriler, eğitim öncesi, eğitim sonrası ve doğum sonrası olmak üzere üç farklı zamanda toplandı. Analizlerde IBM SPSS 29.0.2.0 programı kullanıldı (α = 0,05). Eğitim öncesi değerlendirmelerde gruplar benzer bulunurken; eğitim sonrası ve doğum sonrası dönemlerde, müdahale grubundaki annelerin emzirme bilgi düzeyi (p <0,001; p <0,001) ve emzirme öz-yeterlilik puanlarında (p <0,001; p = 0,019) sırasıyla anlamlı artışlar görüldü. Bu artışın doğum sonrası dönemde de korunduğu görüldü. Ayrıca, doğum sonrası LATCH puanlarında da gruplar arasında anlamlı farklılık vardı. Müdahale grubunun puanları, kontrol grubuna göre daha yüksek bulundu (p <0,001). Müdahale grubunda, emzirme öz-yeterlilik puanları ile LATCH puanları arasında eğitim sonrası orta (r = 0,502; p = 0,006), doğum sonrası ise yüksek düzeyde (r = 0,641; p <0,001) anlamlı pozitif ilişki bulundu. Ayrıca doğum kilosu ile LATCH puanları arasında da pozitif yönde anlamlı bir ilişki bulundu (r = 0,400; p = 0,003). Hemşirelerin, emzirme eğitimlerinde Metaverse ve VR destekli dijital teknolojileri etkili bir yöntem olarak kullanmaları önerilmektedir. Anahtar kelimeler: Sanal Gerçeklik, Metaverse, Dijital Müze, Emzirme Eğitimi, Emzirme Bilgi Düzeyi, Emzirme Öz-Yeterliliği, Emzirme Başarısı`,
          en: `Subject: Nursing ; Child Health and Diseases\nIndex: Breast feeding\n\nThis randomized controlled study was conducted to evaluate the effect of Metaverse- and virtual reality (VR)–supported education in a digital breastfeeding museum on primiparous pregnant women's breastfeeding knowledge level, self-efficacy, and success. The study population consisted of primiparous pregnant women with no prior breastfeeding experience who attended antenatal education classes for the first time at three hospitals in Turkey during their third trimester between July 2023 and April 2024. Fifty-three primiparous pregnant women were randomly assigned to the intervention (n = 28) and control (n = 25) groups. The pregnant women in the intervention group received Metaverse- and virtual reality (VR)–supported education in the digital breastfeeding museum, while those in the control group received standard antenatal education provided through antenatal education classes. Data were collected using a satisfaction and the breastfeeding knowledge questionnaire, the breastfeeding self-efficacy scale–short form, and the LATCH breastfeeding assessment tool. Data collection occurred at three-time points: before the training, after the training, and postpartum. Statistical analyses were performed using IBM SPSS version 29.0.2.0, with a significance level set at α = 0.05. The groups were found to be similar at baseline. However, the intervention group showed significantly higher breastfeeding knowledge levels (p <0.001; p <0.001) and breastfeeding self-efficacy scores (p <0.001; p = 0.019) both after the training and postpartum. These improvements were maintained in the postpartum period. Additionally, LATCH scores were significantly higher in the intervention group compared to the control group postpartum (p <0.001). A moderate positive correlation was found between breastfeeding self-efficacy and LATCH scores after training (r = 0.502; p = 0.006), and a strong positive correlation was observed postpartum (r = 0.641; p <0.001). Moreover, a statistically significant positive correlation was found between birth weight and LATCH scores (r = 0.400; p = 0.003). It is recommended that nurses use Metaverse- and VR-supported digital technologies as an effective method in breastfeeding education. Keywords: Virtual Reality, Metaverse, Digital Museum, Breastfeeding Education, Breastfeeding Knowledge Level, Breastfeeding Self-Efficacy, Breastfeeding Success`
        }
      },
      {
        title: {
          tr: "Multisensory stimulation by mothers: impact on neonatal pain and maternal anxiety during heel blood collection: a randomized controlled trial",
          en: "Multisensory stimulation by mothers: impact on neonatal pain and maternal anxiety during heel blood collection: a randomized controlled trial"
        },
        type: { tr: "Makale", en: "Article" },
        date: { tr: "Yayınlanma Tarihi: 06 Ekim 2025", en: "Published: 06 October 2025" },
        authors: "Ayşenur Akkaya-Gül, Nurcan Özyazıcıoğlu & Ezgi Çelikboya-Kabadayı",
        journal: "Journal of Perinatology Volume: 46 Issue: 569–576 (2026)",
        metrics: "393 Accesses",
        citation: "Akkaya-Gül, A., Özyazıcıoğlu, N. & Çelikboya-Kabadayı, E. Multisensory stimulation by mothers: impact on neonatal pain and maternal anxiety during heel blood collection: a randomized controlled trial. J Perinatol 46, 569–576 (2026). https://doi.org/10.1038/s41372-025-02436-5",
        linkUrl: "https://www.nature.com/articles/s41372-025-02436-5",
        pdfUrl: "https://www.nature.com/articles/s41372-025-02436-5.pdf"
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
      works: { tr: "Makale / Yayın", en: "Works / Publications" }
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
        role: { tr: "Öğretim Görevlisi (İlk ve Acil Yardım Programı)", en: "Lecturer (First and Emergency Aid Program)" },
        company: "Fenerbahçe Üniversitesi",
        url: "https://www.fbu.edu.tr/",
        date: { tr: "Şubat 2022 - Günümüz", en: "2022-02-14 - Present" },
        description: { 
          tr: "Istanbul, Atasehir, TR. Verilen Dersler: Tıbbi İlk Yardım, Travma I, Travma II, Acil Hasta Bakımı I, Acil Hasta Bakımı II, Acil Hasta Bakımı III, Klinik Uygulama I, Klinik Uygulama 2, Acil Sağlık Hizmetleri, Staj, Temel Mesleki Beceriler, Ebelik – Klinik Uygulama, Çevre ve Sosyal Sorumluluk, Sağlık Okuryazarlığı, Ambulans Eğitimi I.", 
          en: "Istanbul, Atasehir, TR. Courses Taught: Medical First Aid, Trauma I, Trauma II, Emergency Patient Care I, Emergency Patient Care II, Emergency Patient Care III, Clinical Practice I, Clinical Practice 2, Emergency Health Services, Internship, Basic Vocational Skills, Midwifery – Clinical Practice, Environmental and Social Responsibility, Health Literacy, Ambulance Training I." 
        },
        skills: { tr: ["Hemşirelik Eğitimi", "Akademik Danışmanlık", "İlk Yardım"], en: ["Nursing Education", "Academic Mentoring", "First Aid"] }
      },
      {
        role: { tr: "Hemşire (Yenidoğan Yoğun Bakım)", en: "Nursing (Neonatal Intensive Care)" },
        company: "TC Sağlık Bakanlığı Tuzla Devlet Hastanesi",
        url: "https://tuzladh.saglik.gov.tr/",
        date: { tr: "Ekim 2017 - Şubat 2022", en: "2017-10-21 - 2022-02-14" },
        description: { tr: "Istanbul, Tuzla, TR", en: "Istanbul, Tuzla, TR" },
        skills: { tr: ["Yenidoğan Yoğun Bakım", "Klinik Deneyim", "Ağrı Yönetimi"], en: ["Neonatal ICU", "Clinical Experience", "Pain Management"] }
      },
      {
        role: { tr: "Hemşire (Yenidoğan Yoğun Bakım)", en: "Nursing (Neonatal Intensive Care)" },
        company: "Aydın Adnan Menderes Üniversitesi Uygulama ve Araştırma Hastanesi",
        url: "https://hastane.adu.edu.tr/",
        date: { tr: "Mart 2017 - Ekim 2017", en: "2017-03-21 - 2017-10-06" },
        description: { tr: "Aydin, Aydın, TR", en: "Aydin, Aydın, TR" },
        skills: { tr: ["Yenidoğan Bakımı", "Hasta Takibi"], en: ["Neonatal Care", "Patient Monitoring"] }
      },
      {
        role: { tr: "Hemşire (Pediatri Servisi)", en: "Nursing (Pediatric Service)" },
        company: "Başkent University Hospital",
        url: "https://ankara.baskenthastaneleri.com/tr/",
        date: { tr: "Ağustos 2016 - Şubat 2017", en: "2016-08-02 - 2017-02-20" },
        description: { tr: "Ankara, TR", en: "Ankara, TR" },
        skills: { tr: ["Pediatri", "Çocuk Sağlığı"], en: ["Pediatrics", "Child Health"] }
      },
      {
        role: { tr: "Stajyer Hemşire (Acil servis, Yenidoğan yoğun bakım)", en: "Intern Nursing (Emergency service, neonatal intensive care)" },
        company: "Hospital Universitario de Ceuta",
        url: "http://www.areasanitariaceuta.es/atencion-especializada/hospital-universitario-de-ceuta/",
        date: { tr: "Eylül 2014 - Şubat 2015", en: "2014-09-17 - 2015-02-02" },
        description: { tr: "Ceuta, Ceuta, ES", en: "Ceuta, Ceuta, ES" },
        skills: { tr: ["Acil Servis", "Yenidoğan Yoğun Bakım"], en: ["Emergency Service", "Neonatal ICU"] }
      }
    ],
    education: [
      {
        degree: { tr: "Doktora (PhD), Çocuk Sağlığı ve Hastalıkları Hemşireliği", en: "Doctorate (PhD), Child Health and Diseases Nursing" },
        school: "Uludağ Üniversitesi",
        date: "2020 - 2024"
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
    email: "aysenur.gul@fbu.edu.tr",
    personalEmail: "aysenurakkaya006@gmail.com",
    linkedin: "https://www.linkedin.com/in/aysenurakkayagul",
    orcid: "https://orcid.org/0000-0001-9019-8740",
    scholar: "#", // Google Scholar link can be added here
    researchgate: "#" // ResearchGate link can be added here
  }
}
