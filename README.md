# Kuis Pintar – Kurikulum Merdeka

Game kuis untuk anak SD–SMA (kelas 1–12) sesuai Kurikulum Merdeka. Soal dibuat otomatis oleh Gemini API (gratis), dengan penilaian otomatis dan pembahasan.

## Fitur
- Pilih kelas 1–12, mata pelajaran sesuai fase (A–F), topik opsional, dan tingkat kesulitan
- Soal pilihan ganda dan uraian, jumlahnya bisa diatur per sesi
- Mode **Latihan** (langsung tahu benar/salah) dan **Tes** (hasil di akhir)
- Pilihan ganda dinilai otomatis; uraian dinilai AI (skor 0–100 + komentar)
- Pembahasan lengkap: jawaban benar, penjelasan, dan poin penting
- Muatan lokal: pilih bahasa daerah (default Jawa) di Pengaturan
- Tombol 🔊 untuk membacakan soal (membantu kelas 1–2)
- Riwayat nilai, sesi bisa dilanjutkan jika browser tertutup, soal tidak mudah berulang

## Cara pasang di GitHub Pages
1. Buat repository baru di GitHub (mis. `kuis-pintar`).
2. Upload `index.html` dan `README.md` ke repository.
3. Buka **Settings → Pages**. Pada *Build and deployment*, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
4. Tunggu 1–2 menit. Alamatnya: `https://USERNAME.github.io/kuis-pintar/`

## Cara pakai
1. Ambil API Key gratis di https://aistudio.google.com/apikey
2. Buka aplikasi, tekan ⚙️ **Pengaturan**, tempel API Key, lalu **Tes koneksi**.
3. Jika muncul error 404 model, tekan **Muat daftar model** dan pilih model "flash" yang tersedia.
4. Kembali ke Beranda, pilih kelas dan pelajaran, lalu **Mulai Kuis**.

## Catatan penting
- **Jangan menulis API Key di dalam file/kode dan jangan di-commit ke GitHub.** Isi hanya lewat menu Pengaturan; kunci disimpan di browser perangkat itu saja (localStorage), jadi harus diisi di tiap perangkat.
- Kuota gratis Gemini terbatas per menit/hari. Jika muncul pesan kuota penuh, tunggu sebentar.
- Pada paket gratis, Google dapat memakai data permintaan untuk peningkatan produknya. Jangan masukkan data pribadi anak ke kolom topik.
- Soal dibuat AI dan bisa saja keliru; cocokkan dengan buku pelajaran bila ragu.
