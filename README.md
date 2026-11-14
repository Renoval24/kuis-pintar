# Kuis Pintar – Kurikulum Merdeka

Game kuis untuk anak SD–SMA (kelas 1–12) sesuai Kurikulum Merdeka. Soal dibuat otomatis oleh Gemini API (gratis), dengan penilaian otomatis dan pembahasan.

## Fitur
- Pilih kelas 1–12, mata pelajaran sesuai fase (A–F), topik opsional, dan tingkat kesulitan
- Soal pilihan ganda dan uraian, jumlahnya bisa diatur per sesi
- Mode **Latihan** (langsung tahu benar/salah) dan **Tes** (hasil di akhir)
- Pilihan ganda dinilai otomatis; uraian dinilai AI (skor 0–100 + komentar)
- Pembahasan lengkap: jawaban benar, penjelasan, dan poin penting
- Muatan lokal: pilih bahasa daerah (default Jawa) di Pengaturan
- Bisa dipasang di layar utama HP (PWA) dan kerangka aplikasinya tetap terbuka tanpa internet
- Tombol 🔊 untuk membacakan soal (membantu kelas 1–2)
- Riwayat nilai, sesi bisa dilanjutkan jika browser tertutup, soal tidak mudah berulang

## Cara pasang di GitHub Pages
1. Buat repository baru di GitHub (mis. `kuis-pintar`).
2. Upload semua file ke repository dengan susunan berikut (folder `icons` harus ikut diunggah):
   ```
   index.html
   manifest.json
   sw.js
   README.md
   icons/ (icon.svg, icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, favicon-32.png)
   ```
3. Buka **Settings → Pages**. Pada *Build and deployment*, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
4. Tunggu 1–2 menit. Alamatnya: `https://USERNAME.github.io/kuis-pintar/`

## Cara pakai
1. Ambil API Key gratis di https://aistudio.google.com/apikey
2. Buka aplikasi, tekan ⚙️ **Pengaturan**, tempel API Key, lalu **Tes koneksi**.
3. Jika muncul error 404 model, tekan **Muat daftar model** dan pilih model "flash" yang tersedia.
4. Kembali ke Beranda, pilih kelas dan pelajaran, lalu **Mulai Kuis**.

## Pasang di HP
- **Android (Chrome):** buka alamat aplikasinya, lalu tekan tombol "Pasang" yang muncul, atau menu ⋮ → *Instal aplikasi* / *Tambahkan ke layar utama*.
- **iPhone/iPad (Safari):** tombol Bagikan → *Tambah ke Layar Utama*.
- Mode offline hanya membuka tampilan dan riwayat. Membuat soal baru dan menilai uraian tetap butuh internet.
- Setelah mengganti file aplikasi, ubah angka `VERSION` di `sw.js` (mis. `kuis-pintar-v2`) agar pembaruan pasti terpakai.

## Catatan penting
- **Jangan menulis API Key di dalam file/kode dan jangan di-commit ke GitHub.** Isi hanya lewat menu Pengaturan; kunci disimpan di browser perangkat itu saja (localStorage), jadi harus diisi di tiap perangkat.
- Kuota gratis Gemini terbatas per menit/hari. Jika muncul pesan kuota penuh, tunggu sebentar.
- Pada paket gratis, Google dapat memakai data permintaan untuk peningkatan produknya. Jangan masukkan data pribadi anak ke kolom topik.
- Soal dibuat AI dan bisa saja keliru; cocokkan dengan buku pelajaran bila ragu.
