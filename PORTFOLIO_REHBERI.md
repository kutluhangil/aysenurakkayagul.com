# 🌟 Ayşenur Akkaya Gül - Kişisel Portfolyo ve Akademik Profil Rehberi

Bu belge, eğitmen ve araştırmacı Ayşenur Akkaya Gül için tasarlanan premium kişisel web sitesinin mevcut durumunu, gelişim adımlarını, içerik yönetim kurallarını ve gelecekte eklenebilecek olası özellikleri detaylandırmak amacıyla hazırlanmıştır.

---

## 1. Proje Özeti ve Vizyon

Bu proje, standart bir özgeçmişin ötesine geçerek ciddi, akademik, prestijli ve güven veren bir dijital kimlik oluşturmayı amaçlamaktadır. Ziyaretçiler (öğrenciler, akademisyenler, kurumlar veya potansiyel işbirlikçiler) siteye girdiklerinde; klinik tecrübe ile akademik bilginin nasıl harmanlandığını profesyonel bir arayüzle deneyimlerler.

**Tasarım Felsefesi:**
*   **Minimalizm:** İçeriği boğmayan, odaklanmayı kolaylaştıran temiz arka planlar (Taş grisi ve krem tonları).
*   **Prestij:** Zarif "Nobel Altını" detayları ve Serif (tırnaklı) font kullanımları (Playfair Display) ile sağlanan elit görünüm.
*   **Erişilebilirlik:** Modern San-Serif fontlar (Inter) ile okunabilir ve mobil uyumlu dizilim.

---

## 2. Mevcut Mimari ve Özellikler

Şu anki aşamada sistem oldukça sağlam bir temel üzerine oturtulmuş, statik ancak etkileşimi yüksek bir yapıdadır:

*   **Çift Dil Desteği (TR / EN):** `data.ts` dosyası üzerinden tüm metinlerin İngilizce ve Türkçe olarak sunulması.
*   **Dinamik Arama Modülü:** Menüye entegre edilmiş arama çubuğu ile projeler ve deneyimler (yetenek/etiketler dâhil) arasında anlık filtreleme yapılabilmesi.
*   **PDF Görüntüleme Modalı:** Kullanıcıların projeler/yayınlar üzerine tıkladığında sayfa değiştirmeden belgelere erişebileceği (ileride gerçek PDF'lerle güncellenecek) modern açılır pencere (Modal).
*   **Etiket / Beceri Sistemi (Skills):** Her pozisyondaki deneyimlerin altına yetkinliklerin birer etiket (tag) olarak eklenmesi.
*   **Mobil Uyum (Responsive):** Telefondan tabletlere, özel animasyonlu (Framer Motion) menüler ve ızgara (grid) sistemi.

---

## 3. İçerik Yönetimi (Sistemi Nasıl Güncelleriz?)

Sistem, VS Code (veya benzeri bir metin editörü) üzerinden herhangi bir veritabanı kurulumuna ihtiyaç duymadan güncellenecek şekilde tasarlandı. Bütün veriler `src/data.ts` dosyasında tutulmaktadır.

**Yeni Bir Yayın/Tez Eklemek İçin:**
`data.ts` dosyası içindeki `publications` dizisine aşağıdaki formatta yeni bir blok eklemeniz yeterlidir:
```typescript
{
  title: {
    tr: "Yeni Tezinizin Türkçe Adı",
    en: "English Title of Your New Thesis"
  },
  type: { tr: "Tez", en: "Thesis" }
}
```

**Dikkat Edilmesi Gerekenler:**
1.  Hiçbir zaman kodun (App.tsx) kalbine dokunmanıza gerek yoktur, sadece `data.ts` ile tüm siteyi güncelleyebilirsiniz.
2.  Gerçek PDF'ler geldiğinde `data.ts` dosyasına `pdfUrl: "link-buraya"` şeklinde bir alan eklenerek Modal'ın o PDF'i göstermesi sağlanabilir.

---

## 4. Önerilen Yeni Özellikler ve Geliştirmeler (Kısa-Orta Vade)

Siteyi bir sonraki seviyeye taşımak için yapılabilecek teknik ve fonksiyonel eklemeler:

### A. Gerçek PDF Görüntüleyici Entegrasyonu
*   Şu anda PDF'ler görsel olarak bir 'yer tutucu' (placeholder) ile çalışıyor. Eşinizin tezleri (PDF dosyaları) hazır olduğunda, ya `<iframe>` ile ya da `react-pdf` kütüphanesi kullanılarak direkt site içerisinden okunabilir hale getirilmelidir.
*   *Avantajı:* Kullanıcıları siteden uzaklaştırmadan (indirmeye zorlamadan) makale okuma deneyimi sunar.

### B. "Blog & Notlar" İçin Markdown (MD) Desteği
*   Eşiniz öğrencileri veya okuyucuları için sunum notları veya kısa makaleler paylaşmak isteyecektir. Her blog yazısını koda gömmek yerine, sisteme `react-markdown` eklenerek, `.md` (markdown) dosyalarından blog okuyan çok daha esnek bir yapı kurulabilir.

### C. Alıntı (Citation) Kopyalama Butonu
*   Akademik bir portfolyoda en önemli şeylerden biri atıf (citation) almaktır. "Science / Yayınlar" kısmındaki her bir yayının altına *“APA formatında kopyala”* veya *“BibTeX olarak indir”* butonu eklenebilir.

### D. Galeri / Medya Bölümü
*   Kongrelerde, Erasmus+ hareketliliklerinde veya laboratuvar/klinik çalışmalarında çekilmiş profesyonel fotoğrafların eklenebileceği zarif bir yatay kaydırmalı (carousel) galeri eklenebilir. Şeffaflık ve kişisellik katar.

---

## 5. İleri Düzey Eklentiler (Uzun Vade)

Eğer ileride bu site tamamen interaktif (backend destekli) bir platforma dönüştürülmek istenirse:

*   **Öğrenci Paneli / Materyal İndirme Merkezi:** Eşinizin derslerine giren öğrenciler için şifreli bir alan oluşturulabilir. Sadece derse katılanların ders notlarını ve sunumları PDF/PPT olarak indirebileceği bir "Firebase" kimlik doğrulama sistemi.
*   **İletişim Formu (Mail Entegrasyonu):** Şu an "mailto:" fonksiyonu kullanılıyor. İlerleyen süreçte (EmailJS veya benzeri bir servisle) kullanıcıların sayfadan ayrılmadan direkt mail gönderebileceği bir form eklenebilir.
*   **Karanlık Mod (Dark Mode):** Sitenin halihazırda prestijli koyu alanları (Gece siyahı vb.) var. Tüm siteyi kapsayan, akademik okumayı gece de kolaylaştıran bir "Dark Theme" geçiş butonu eklenebilir.

---

## 6. SEO ve Performans İpuçları

Web sitesi Google'da üst sıralarda çıkmalı (Örn: Birisi "Ayşenur Akkaya Gül Hemşirelik" yazdığında ilk bu siteyi görmeli).

1.  **Meta Etiketleri (Meta Tags):** Sitenin `index.html` dosyasına `og:title`, `og:description`, `og:image` etiketleri eklenerek, site LinkedIn'de paylaşıldığında eşinizin fotoğrafı ve ünvanının harika bir kart olarak çıkması sağlanmalıdır.
2.  **Görsel Optimizasyonu:** PDF'ler ve eklenecek profesyonel fotoğraflar sisteme yüklenirken WebP formatına çevrilerek boyutu ufaltılmalı, sitenin saniyenin altında açılması garantilenmelidir.
3.  **Google Analytics / Search Console:** Sitenin kimler tarafından (Öğrenciler mi? Yurtdışı üniversiteler mi?) ziyaret edildiğini analiz edebilmek için Google Analytics kodu `index.html` içine gömülmelidir.

---

**Son Söz:**
Mevcut şablon tam anlamıyla bir 'tasarım harikası' olup, akademik bir portfolyonun ihtiyacı olan güveni sonuna kadar yansıtmaktadır. Eşinizin PDF'leri ve ek içerikleri geldikçe siteyi çok daha zengin bir veri havuzu haline getirebiliriz! 🚀
