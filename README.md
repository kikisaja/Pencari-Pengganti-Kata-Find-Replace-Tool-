# 🔍 Find & Replace Tool

Aplikasi pencari dan pengganti kata masal (*Find & Replace Tool*) interaktif berbasis JavaScript untuk mencari kata tertentu di dalam paragraf dan menggantinya secara otomatis secara *real-time*.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Regular Expressions (RegExp):**
   Memanfaatkan objek `RegExp` dinamis dengan flag global (`g`) dan *case-insensitive* (`i`) untuk mendeteksi serta mengganti semua kemunculan kata secara serentak.
2. **Special Character Escaping:**
   Mengamankan string pencarian dari bentrok karakter khusus reguler menggunakan metode *replace* escape `/[.*+?^${}()|[\]\\]/g`.
3. **Real-time DOM Updating:**
   Merespons setiap input pada form textarea dan kotak pencarian secara instan tanpa perlu halaman dimuat ulang.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Paragraf sumber, input find/replace, checkbox opsi, & hasil
├── style.css        # Desain Neobrutalism hijau-pop, counter badge, dan layout
└── script.js        # Logika RegExp, pencarian masal, penghitung kata, & DOM