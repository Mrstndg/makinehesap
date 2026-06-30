# MakineHesap · gdntsrm.com

Makine elemanları ve mekanizmalar için **şık, kolay ve Türkçe** bir hesaplama & simülasyon uygulaması. Öğrenciler ve teknik personel için tasarlandı. Kurulum gerektirmez, çevrimdışı çalışır (PWA — telefona kurulabilir).

🌐 **Canlı:** [gdntsrm.com](https://gdntsrm.com)

## Modüller

**Güç İletimi**
- Kayış–Kasnak Mekanizması (devir, iletim oranı, kayış hızı, kayış uzunluğu)
- Silindirik Düz Dişli Çark (taksimat / diş üstü / diş dibi çapı, eksenler arası mesafe)
- Helisel Dişli Çark (alın modülü, taksimat çapları, eksenler arası mesafe)
- Zincir Dişli Çark (taksimat / diş üstü / diş dibi çapı, sıra genişlikleri)

**Makine Elemanları**
- Helisel Yay (yay boyu, tel boyu, çaplar)
- Rulman Ömrü (L₁₀ — milyon devir ve saat)

**Bağlama Elemanları**
- Civata Mukavemeti (çekme gerilmesi, gerekli çap, sıkma momenti)
- Kama Bağlantısı (kesme ve ezilme gerilmesi)
- Perçin Bağlantısı (kesme ve ezilme gerilmesi)

**Taşıma Sistemleri**
- Asansör Motor Gücü (kabin/karşı ağırlık, halat, gerekli motor gücü)

**Ölçme Araçları**
- Kumpas Simülasyonu (verniyeli kumpas — sürükle-oku, 0.1 / 0.05 / 0.02 mm, alıştırma modu)

## Teknik

Tek `index.html` (gömülü CSS/JS) + `manifest.json` + `sw.js` (servis çalışanı) + ikonlar. Bağımlılık yok.

## Yerel çalıştırma

```bash
python -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

---
© 2026 · gdntsrm.com
