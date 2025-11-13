/* --- File: script/script.js (Versi Lengkap Final) --- */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Bagian Menu Hamburger ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', function() {
            if (mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
                hamburgerBtn.classList.remove('active'); 
            } else {
                mobileMenu.style.display = 'block';
                hamburgerBtn.classList.add('active'); 
            }
        });
    }
    
    // --- 2. Fungsi Slideshow Hero (Slide ke Kiri) ---
    function startHeroSlideshow() {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.hero-slide');
        
        // Durasi slide Anda (3000ms = 3 detik)
        const slideDuration = 3000; 
        
        // Durasi animasi CSS (1200ms = 1.2 detik, harus SAMA dengan CSS)
        const animationDuration = 1200; 

        if (slides.length === 0) return; // Hentikan jika tidak ada gambar

        function showNextSlide() {
            // 1. Temukan slide yang sedang aktif (slide lama)
            const currentActiveSlide = document.querySelector('.hero-slide.active');

            // 2. Tentukan slide berikutnya (menggunakan modulo %)
            slideIndex = (slideIndex + 1) % slides.length; // 0, 1, 2, 0, 1, 2...
            const nextSlide = slides[slideIndex];

            // 3. Animasi keluar untuk slide lama (jika ada)
            if (currentActiveSlide) {
                currentActiveSlide.classList.add('exiting');
                currentActiveSlide.classList.remove('active');

                // 4. Hapus 'exiting' setelah animasi CSS selesai
                setTimeout(() => {
                    if (currentActiveSlide) { // Cek lagi jika masih ada
                        currentActiveSlide.classList.remove('exiting');
                    }
                }, animationDuration); // SAMA dengan transisi CSS (1.2 detik)
            }
            
            // 5. Animasi masuk untuk slide baru
            // Kita beri sedikit jeda agar animasi 'exiting' dimulai dulu
            setTimeout(() => {
                if (nextSlide) {
                    nextSlide.classList.add('active');
                }
            }, 50); // Jeda singkat

            // 6. Ulangi
            setTimeout(showNextSlide, slideDuration);
        }

        // --- Inisialisasi Slideshow ---
        // Tampilkan slide pertama secara instan (tanpa animasi)
        if (slides[0]) {
            slides[0].classList.add('active');
            slides[0].style.transition = 'none'; // Matikan transisi untuk pemuatan awal
            
            // Nyalakan transisi lagi setelah pemuatan awal
            setTimeout(() => {
                if (slides[0]) {
                    slides[0].style.transition = ''; 
                }
            }, 50);
        }
        
        // Mulai loop slideshow setelah 3 detik
        setTimeout(showNextSlide, slideDuration);
    }

    // --- 3. Bagian Modal Detail Pengurus ---

    // Ambil elemen-elemen modal
    const memberModal = document.getElementById('memberModal');
    const closeButton = document.querySelector('.close-button');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalJabatan = document.getElementById('modalJabatan');
    const modalDetail = document.getElementById('modalDetail'); 

    // Dapatkan semua kartu pengurus
    const memberCards = document.querySelectorAll('.member-card');

    // Tambahkan event listener untuk setiap kartu
    memberCards.forEach(card => {
        card.addEventListener('click', function() {
            // Dapatkan data dari kartu yang diklik
            const imageUrl = card.querySelector('img').src;
            const name = card.querySelector('h4').textContent;
            const jabatan = card.querySelector('.jabatan').textContent;
            const imgElement = card.querySelector('img');

            const objectPosition = window.getComputedStyle(imgElement).getPropertyValue('object-position');
            
            let detailText = '';
            
            // --- Kumpulan Detail Anggota ---

            if (card.id === 'member-ainur') {
                detailText = "Ainur Rohman Hardini menjabat sebagai Ketua Umum HIMASI periode ini. Bertanggung jawab atas kepemimpinan dan koordinasi seluruh kegiatan organisasi. <br>Angkatan 2023.";
            } else if (card.id === 'member-dio') {
                detailText = "Dio Ananda Maulana Wijaya adalah Wakil Ketua Umum HIMASI. Bertugas membantu Ketua Umum dalam mengkoordinasi dan mengawasi jalannya seluruh divisi. <br>Angkatan 2023.";
            }
            else if (card.id === 'member-azalia') {
                detailText = "Azalia Zulfia Fatimah adalah Sekretaris 1 HIMASI. Bertanggung jawab atas pengelolaan administrasi, surat-menyurat, dan dokumentasi organisasi. <br>Angkatan 2023.";
            }
            else if (card.id === 'member-tiana') {
                detailText = "Tiana Permatasari menjabat sebagai Bendahara Umum HIMASI. Bertanggung jawab penuh atas manajemen keuangan dan inventaris organisasi. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-amelia') {
                detailText = "Uhti Amelia adalah Sekretaris 2 HIMASI. Bertugas membantu Sekretaris Umum dalam mengelola dan mendokumentasikan kegiatan organisasi. <br>Angkatan 2024.";
            }

            // RISTEKBANG
            else if (card.id === 'member-genio') {
                detailText = "Muhammad Genio Brilian adalah Koordinator Departemen RISTEKBANG. Bertugas mengawasi dan mengkoordinasi dua divisi di bawah departemen ini: Riset dan Pengembangan. <br>Angkatan 2023.";
            }
            else if (card.id === 'member-fauzian') {
                detailText = "M. Fauzian Afshor adalah Anggota Divisi Riset HIMASI. Berperan aktif dalam pelaksanaan survei, analisis data, dan pelaporan hasil riset. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-fahmi') {
                detailText = "Mirza Fahmi adalah Ketua Divisi Riset HIMASI. Bertanggung jawab untuk merencanakan dan melaksanakan riset yang relevan dengan kebutuhan mahasiswa Sistem Informasi. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-elsa') {
                detailText = "Elsa Dwi Listari adalah Anggota Divisi Riset HIMASI. Turut serta dalam proses pengumpulan data dan analisis untuk mendukung keputusan organisasi. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-yafi') {
                detailText = "Yafi Mahardika Hariadi adalah Anggota Divisi Pengembangan HIMASI. Mendukung pelaksanaan program pelatihan dan seminar untuk peningkatan skill mahasiswa. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-syarif') {
                detailText = "Muhammad Syarif Hidayatullah adalah Ketua Divisi Pengembangan HIMASI. Bertanggung jawab merancang dan menjalankan program pengembangan minat dan bakat mahasiswa. <br>Angkatan 2023.";
            }
            else if (card.id === 'member-nela') {
                detailText = "Nela Ulivatul Zahro Maulana adalah Anggota Divisi Pengembangan HIMASI. Berperan dalam mempersiapkan materi dan kebutuhan logistik program pengembangan. <br>Angkatan 2024.";
            }

            // MEDKOMINFO
            else if (card.id === 'member-eka') {
                detailText = "Muhammad Eka Saputra adalah Koordinator Departemen MEDKOMINFO. Bertanggung jawab mengkoordinasi komunikasi, media, dan informasi antara internal dan eksternal HIMASI. <br>Angkatan 2023.";
            }
            else if (card.id === 'member-lailatul') {
                detailText = "Lailatul Nur Aifa Rahmawati adalah Anggota Divisi Media HIMASI. Turut serta dalam pembuatan konten grafis dan dokumentasi foto/video untuk publikasi. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-husain') {
                detailText = "Husain Aziz Al Rosyid adalah Ketua Divisi Media HIMASI. Bertanggung jawab penuh atas pengelolaan seluruh media sosial, publikasi visual, dan dokumentasi kegiatan. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-sania') {
                detailText = "Denis Mawar Sania adalah Anggota Divisi Media HIMASI. Membantu dalam merancang strategi konten dan memastikan konsistensi branding di media sosial. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-teddy') {
                detailText = "Muhammad Teddy Ramadhani adalah Ketua Divisi Komunikasi & Informasi HIMASI. Bertanggung jawab menjembatani komunikasi, mencari informasi lomba, beasiswa, dan peluang di luar kampus. <br>Angkatan 2024.";
            }
            else if (card.id === 'member-asykaril') {
                detailText = "Asykaril Kafifulloh adalah Anggota Divisi Komunikasi & Informasi HIMASI. Membantu penyebaran informasi penting serta menjalin relasi dengan organisasi eksternal. <br>Angkatan 2024.";
            }
            
            // Fallback jika tidak ada detail
            else {
                detailText = "Informasi detail untuk anggota ini belum tersedia.";
            }

            // --- Isi Konten Modal ---
            // Memastikan elemen ada sebelum mengisinya
            if (modalImage) modalImage.src = imageUrl;
            if (modalName) modalName.textContent = name;
            if (modalJabatan) modalJabatan.textContent = jabatan;
            
            // PERBAIKAN PENTING: Gunakan .innerHTML agar <br> berfungsi
            if (modalDetail) modalDetail.innerHTML = detailText; 

            if (modalImage) modalImage.style.objectPosition = objectPosition;

            // Tampilkan modal
            if (memberModal) memberModal.style.display = 'flex'; 
        });
    });

    // Event listener untuk tombol close modal
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            memberModal.style.display = 'none';
        });
    }

    // Tutup modal jika mengklik di luar area modal content
    if (memberModal) {
        memberModal.addEventListener('click', function(event) {
            if (event.target === memberModal) {
                memberModal.style.display = 'none';
            }
        });
    }

    // --- 4. Panggil Slideshow ---
    // Panggil Slideshow di dalam listener DOMContentLoaded yang utama
    startHeroSlideshow();

    // --- 5. Logika Lightbox Galeri ---

    // Ambil elemen modal
    const imageModal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    const closeLightbox = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.gallery-grid img'); // Semua gambar di galeri

    // 1. Tambahkan event listener untuk setiap gambar galeri
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // Tampilkan modal
            imageModal.style.display = "flex";
            // Set sumber gambar modal ke sumber gambar yang diklik
            fullImage.src = this.src;
            // Set teks keterangan (mengambil dari alt text gambar)
            document.getElementById('caption').innerHTML = this.alt;
            
            // Opsional: Hentikan body scrolling saat modal terbuka
            document.body.style.overflow = 'hidden'; 
        });
    });

    // 2. Event listener untuk menutup modal (klik tombol X)
    if (closeLightbox) {
        closeLightbox.addEventListener('click', function() {
            imageModal.style.display = "none";
            document.body.style.overflow = ''; // Kembalikan body scrolling
        });
    }

    // 3. Event listener untuk menutup modal (klik di luar area gambar)
    if (imageModal) {
        imageModal.addEventListener('click', function(event) {
            // Jika yang diklik adalah area modal itu sendiri (bukan gambar)
            if (event.target === imageModal) {
                imageModal.style.display = "none";
                document.body.style.overflow = ''; // Kembalikan body scrolling
            }
        });
    }
    
    // 4. Tutup modal dengan tombol ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && imageModal.style.display === "block") {
            imageModal.style.display = "none";
            document.body.style.overflow = ''; // Kembalikan body scrolling
        }
    });

    // --- Pastikan startHeroSlideshow() ada di akhir DCL ---
    startHeroSlideshow();

});