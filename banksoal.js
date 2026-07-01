const bankSoal = [
  {
    pertanyaan: "1. Di ruang pemeriksaan penyakit dalam, seorang perawat melaporkan bahwa jarum sphygmomanometer aneroid masih bergerak, tetapi ia ingin mengetahui bagian mana yang sebenarnya mengubah tekanan udara dari manset menjadi gerakan jarum. Teknisi elektromedis menjelaskan prinsip alat kepada perawat baru sebelum alat dipakai kembali untuk pemeriksaan pasien hipertensi.\n\nKomponen utama yang bekerja mengubah tekanan udara di dalam sistem manset menjadi pergerakan mekanis jarum penunjuk adalah...",
    gambar: "",
    pilihan: [
      "A. Kolom air raksa yang naik turun mengikuti tekanan manset",
      "B. Strain gauge elektronik pada jembatan Wheatstone",
      "C. Kristal piezoelektrik yang menghasilkan tegangan listrik",
      "D. Kapsul aneroid atau diafragma logam",
      "E. Bourdon tube seperti pada pressure gauge industri"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "2. Pada kegiatan kalibrasi berkala di poli rawat jalan, teknisi menghubungkan sphygmomanometer aneroid ke sphygmomanometer standar dengan T-connector. Tekanan dinaikkan bertahap pada 80, 120, 160, dan 200 mmHg. Pada setiap titik, teknisi membandingkan selisih pembacaan alat uji dengan standar sebelum memberi label laik pakai.\n\nBatas penyimpangan pembacaan yang umumnya masih diterima untuk setiap titik ukur adalah...",
    gambar: "",
    pilihan: [
      "A. ±2 mmHg",
      "B. ±3 mmHg",
      "C. ±1 mmHg",
      "D. ±5 mmHg",
      "E. ±8 mmHg"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "3. Saat inspeksi preventif bulanan di IGD, teknisi menemukan jarum sphygmomanometer aneroid tidak kembali ke angka nol setelah seluruh tekanan manset dilepaskan. Jarum berhenti di +5 mmHg meskipun selang dan manset tidak tampak bocor. Perawat menyebut alat tersebut sering digunakan bergantian sepanjang hari.\n\nPenyebab teknis yang paling mungkin dari kondisi zero error tersebut adalah...",
    gambar: "",
    pilihan: [
      "A. Skala angka pada dial salah cetak",
      "B. Katup pelepas udara tersumbat total",
      "C. Manset mengalami kebocoran mikro",
      "D. Fatigue kapsul aneroid atau titik nol bergeser",
      "E. Tabung penghubung tersumbat oleh debu"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "4. Seorang pasien laki-laki 60 tahun datang ke IGD dengan keluhan nyeri dada. Dokter meminta rekaman ECG 12 lead segera. Teknisi membantu pemasangan elektroda prekordial karena penempatan yang tidak tepat dapat mengubah gambaran gelombang R dan segmen ST, sehingga berisiko memengaruhi interpretasi klinis.\n\nLokasi pemasangan elektroda V1 yang benar adalah...",
    gambar: "",
    pilihan: [
      "A. Sela iga ke-4 pada garis sternal kiri",
      "B. Sela iga ke-5 pada garis aksila tengah kiri",
      "C. Sela iga ke-5 pada garis midklavikula kiri",
      "D. Sela iga ke-4 pada garis sternal kanan",
      "E. Sela iga ke-5 pada garis aksila anterior kiri"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "5. Di ruang rawat jantung, hasil ECG pasien menunjukkan baseline naik turun perlahan. Gelombang QRS masih tampak, tetapi pengukuran segmen ST menjadi sulit karena garis dasar terus bergeser. Teknisi melihat pasien bernapas dalam dan elektroda di dada sedikit tertarik mengikuti pergerakan kulit.\n\nPenyebab paling mungkin dari baseline wander pada rekaman ECG tersebut adalah...",
    gambar: "",
    pilihan: [
      "A. Interferensi listrik PLN 50 Hz",
      "B. Gerak atau napas mengubah impedansi elektroda-kulit",
      "C. Gain amplifier yang terlalu rendah",
      "D. Kertas thermal hampir habis",
      "E. Frekuensi sampling ADC terlalu rendah"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "6. Unit ECG di IGD dilaporkan menghasilkan lead II berupa garis lurus, sedangkan lead lain masih terbaca. Elektroda pasien telah diganti dan pemasangan ekstremitas tampak benar. Dokter membutuhkan alat segera, tetapi teknisi harus menentukan langkah pemeriksaan yang sistematis agar tidak langsung mengganti unit.\n\nLangkah troubleshooting pertama yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Menaikkan gain ECG agar lead II muncul kembali",
      "B. Melakukan factory reset pada menu service",
      "C. Mengganti semua elektroda dan kabel sekaligus",
      "D. Langsung mengganti seluruh unit ECG",
      "E. Telusuri lead II: elektroda, kabel, konektor, modul"
    ],
    jawaban: 4
  },
  {
    pertanyaan: "7. Teknisi menerima keluhan bahwa hasil cetak ECG di poliklinik tampak pudar dan tidak merata. Sebelum menentukan apakah masalah berasal dari kertas, roller, atau kepala cetak, teknisi menjelaskan kepada pengguna bagaimana thermal recorder menghasilkan cetakan tanpa tinta.\n\nPernyataan yang paling tepat tentang prinsip kerja thermal recorder medis adalah...",
    gambar: "",
    pilihan: [
      "A. Elemen pemanas pada thermal print head memanaskan kertas termokromik secara selektif",
      "B. Kertas karbon digesek oleh kepala cetak mekanis",
      "C. Laser membakar kertas biasa untuk membentuk garis",
      "D. Pita tinta ditekan oleh pin jarum ke permukaan kertas",
      "E. Nozzle menyemprotkan tinta cair ke kertas biasa"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "8. Pada pemeliharaan berkala ECG, perawat melaporkan kertas rekaman sering tersangkut dan garis cetakan miring. Teknisi telah membersihkan serpihan kertas di jalur kertas, tetapi masalah masih berulang terutama saat alat mencetak rekaman panjang.\n\nKomponen mekanis yang paling perlu diperiksa dan dirawat untuk mencegah paper jam berulang adalah...",
    gambar: "",
    pilihan: [
      "A. Paper feed roller aus atau terkontaminasi residu",
      "B. Kapasitor pada power supply",
      "C. Filter EMI pada input ECG",
      "D. Memori buffer penyimpan data cetakan",
      "E. Baterai internal alat ECG"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "9. Di ruang KIA, bidan menggunakan Doppler fetal untuk mendengarkan denyut jantung janin. Teknisi menjelaskan bahwa probe memancarkan gelombang ultrasonik dan menerima pantulan dari struktur yang bergerak, seperti darah atau katup jantung janin.\n\nJika frekuensi yang dipancarkan probe adalah f0 dan sel darah bergerak mendekati probe, maka frekuensi pantulan yang diterima akan...",
    gambar: "",
    pilihan: [
      "A. Lebih tinggi dari f0",
      "B. Menjadi nol karena gelombang diserap jaringan",
      "C. Tidak bergantung pada arah gerak objek",
      "D. Sama persis dengan f0",
      "E. Lebih rendah dari f0"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "10. Seorang bidan kesulitan mendapatkan suara denyut jantung janin. Probe sudah diarahkan dan ditekan, tetapi sinyal tetap sangat lemah. Saat teknisi memeriksa prosedur, ternyata gel ultrasonik tidak digunakan karena stok di trolley habis.\n\nAlasan utama gel coupling wajib digunakan saat pemeriksaan Doppler adalah...",
    gambar: "",
    pilihan: [
      "A. Gel meningkatkan konduktivitas listrik kulit terhadap probe",
      "B. Gel berfungsi sebagai antiseptik utama pada kulit",
      "C. Gel menghilangkan celah udara pada kontak probe-kulit",
      "D. Gel mendinginkan probe agar tidak panas",
      "E. Gel meningkatkan frekuensi resonansi kristal piezoelektrik"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "11. Ruang ICU menerima 4 unit patient monitor baru untuk bed pasien kritis. Teknisi elektromedis diminta melakukan instalasi awal sebelum monitor digunakan. Unit akan terhubung ke listrik rumah sakit, aksesori ECG, SpO2, NIBP, suhu, serta jaringan central monitor. Tindakan instalasi awal yang paling tepat untuk memastikan alat aman dan siap digunakan adalah...",
    gambar: "",
    pilihan: [
      "A. Mengaktifkan semua alarm pada batas maksimum agar tidak mengganggu perawat saat pemantauan",
      "B. Melepas baterai internal karena monitor akan dipakai terus-menerus dengan listrik PLN",
      "C. Verifikasi listrik, aksesori, fungsi dasar, alarm, dan dokumentasi",
      "D. Langsung memasang semua sensor ke pasien pertama agar fungsi klinis dapat segera diketahui",
      "E. Menghubungkan monitor ke central station tanpa perlu menguji sensor pasien secara lokal"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "12. Pada pemeliharaan berkala patient monitor di ruang HCU, teknisi menemukan kabel ECG sering ditarik saat pemindahan pasien, manset NIBP kusam, probe SpO2 banyak residu plester, dan baterai internal cepat habis. Tindakan pemeliharaan preventif yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Periksa kabel, sensor, manset NIBP, alarm, dan baterai cadangan",
      "B. Menyimpan semua probe dalam keadaan tergulung ketat agar rapi dan tidak hilang",
      "C. Menonaktifkan alarm baterai rendah agar tidak muncul berulang saat pemeliharaan",
      "D. Mengganti modul utama monitor meskipun semua parameter masih terbaca",
      "E. Bersihkan casing saja tanpa memeriksa sensor pasien"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "13. Perawat melaporkan patient monitor di ICU tidak menampilkan nilai SpO2. Pesan yang muncul adalah \"No Sensor\". Probe sudah dipasang di jari pasien, tetapi waveform plethysmography tidak muncul. Langkah troubleshooting pertama yang paling sistematis adalah...",
    gambar: "",
    pilihan: [
      "A. Membersihkan layar monitor karena waveform tidak terlihat",
      "B. Melakukan kalibrasi NIBP karena semua parameter patient monitor saling memengaruhi",
      "C. Menaikkan batas alarm SpO2 agar pesan error hilang",
      "D. Periksa probe, kabel, konektor, lalu uji silang sensor SpO2",
      "E. Mengganti mainboard monitor karena semua gangguan SpO2 pasti berasal dari modul utama"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "14. Teknisi melakukan kalibrasi statis modul NIBP patient monitor menggunakan manometer standar dan pressure bulb melalui T-connector. Pada titik 100, 150, dan 200 mmHg, teknisi membandingkan pembacaan monitor dengan standar. Tujuan utama pengujian ini adalah...",
    gambar: "",
    pilihan: [
      "A. Menilai kemampuan algoritma oscillometric menentukan tekanan darah klinis pada semua pasien",
      "B. Mengkalibrasi sinyal ECG 1 mV agar defleksi menjadi 10 mm",
      "C. Menguji kekuatan pompa deflasi manset tanpa memperhatikan pembacaan tekanan",
      "D. Memastikan sensor tekanan NIBP sesuai standar terkalibrasi",
      ""
    ],
    jawaban: 3
  },
  {
    pertanyaan: "15. Sebuah infusion pump volumetrik baru akan dipasang pada tiang infus di ICU untuk pemberian cairan dan obat. Setelah teknisi memasang unit pada pole clamp, ia harus memastikan infusion set terpasang benar pada mekanisme pompa. Hal paling penting yang harus diverifikasi saat instalasi set infus adalah...",
    gambar: "",
    pilihan: [
      "A. Clamp pasien dibiarkan terbuka sejak awal agar cairan cepat memenuhi selang",
      "B. Gunakan set kompatibel, arah benar, anti-free-flow aktif, dan pintu terkunci",
      "C. Alarm occlusion dimatikan selama 24 jam pertama setelah instalasi",
      "D. Selang boleh memakai merek apa pun selama ukurannya terlihat sama",
      "E. Pompa dipasang miring agar cairan lebih mudah turun karena gravitasi"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "16. Pada pemeriksaan bulanan infusion pump di bangsal, teknisi menemukan bekas kristal cairan infus di area door sensor dan jalur peristaltik. Beberapa pompa kadang menampilkan alarm \"Door Open\" walaupun pintu sudah tertutup. Tindakan pemeliharaan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Bersihkan jalur pompa, sensor pintu, clamp, lalu uji fungsi",
      "B. Menyemprotkan air langsung ke bagian dalam pompa agar residu cepat hilang",
      "C. Membiarkan residu mengering karena tidak memengaruhi pembacaan sensor",
      "D. Mengoleskan oli pada seluruh jalur selang agar set infus lebih licin",
      "E. Menghapus riwayat alarm tanpa melakukan pemeriksaan fisik"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "17. Infusion pump di ICU sering memberi alarm \"Occlusion Distal\" pada beberapa pasien berbeda, padahal jalur IV sudah dicek lancar. Saat diuji dengan pressure analyzer, alarm muncul pada tekanan yang jauh lebih rendah dari spesifikasi. Komponen yang paling mungkin bermasalah adalah...",
    gambar: "",
    pilihan: [
      "A. Kabel power terlalu panjang sehingga cairan mengalir lebih lambat",
      "B. Baterai cadangan selalu penuh sehingga pompa terlalu sensitif",
      "C. Tombol start/stop macet sehingga pompa berhenti total",
      "D. Sensor tekanan occlusion mengalami drift atau kontaminasi",
      "E. Layar LCD terlalu terang sehingga alarm mudah aktif"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "18. Teknisi menguji infusion pump dengan metode gravimetri. Pompa diset 100 mL/jam selama 1 jam. Cairan yang terkumpul 96 gram, dengan asumsi densitas 1 g/mL. Hasil kalibrasi menunjukkan...",
    gambar: "",
    pilihan: [
      "A. Pompa lulus tanpa catatan karena semua nilai di bawah setting selalu aman",
      "B. Pompa under-infusion 96% karena hanya menghasilkan 96 gram",
      "C. Pompa over-infusion 4% karena volume aktual lebih besar dari setelan",
      "D. Tidak dapat dihitung karena metode gravimetri hanya untuk syringe pump",
      "E. Pompa under-infusion 4% karena volume aktual 96 mL, lebih kecil dari 100 mL"
    ],
    jawaban: 4
  },
  {
    pertanyaan: "19. Syringe pump akan digunakan untuk norepinefrin pada pasien syok di ICU. Teknisi diminta membantu perawat memastikan pemasangan syringe sebelum terapi dimulai. Pemeriksaan instalasi yang paling penting adalah...",
    gambar: "",
    pilihan: [
      "A. Menonaktifkan alarm near empty agar terapi tidak terganggu",
      "B. Syringe dipasang asal masuk karena pompa akan mengenali semua ukuran secara otomatis",
      "C. Melepas clamp pada semua jalur sebelum prime selesai",
      "D. Pastikan syringe kompatibel, terbaca benar, terkunci, dan alarm aktif",
      "E. Memasang syringe dalam posisi miring agar obat lebih cepat keluar"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "20. Pada pemeliharaan rutin syringe pump, teknisi melihat leadscrew kotor oleh debu dan sisa cairan obat yang mengering. Gerakan pendorong syringe masih berjalan tetapi terdengar kasar. Tindakan pemeliharaan yang tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Menggunakan oli mesin kendaraan karena lebih tahan panas",
      "B. Membiarkan karena leadscrew tidak berhubungan dengan akurasi flow",
      "C. Mengubah satuan dari mL/jam ke tetes/menit agar suara hilang",
      "D. Menyemprotkan disinfektan sebanyak mungkin ke dalam motor",
      "E. Bersihkan leadscrew, periksa backlash, lumasi, lalu uji laju aliran"
    ],
    jawaban: 4
  },
  {
    pertanyaan: "21. Laboratorium farmasi menerima timbangan analitik baru untuk penimbangan bahan baku dosis kecil. Teknisi elektromedis diminta menyiapkan alat sebelum digunakan oleh analis. Ruangan memiliki meja kerja biasa, ventilasi AC tepat di atas meja, dan stopkontak tersedia di sisi kiri meja.\nTindakan instalasi yang paling tepat sebelum timbangan digunakan adalah...",
    gambar: "",
    pilihan: [
      "A. Meletakkan timbangan dekat aliran AC",
      "B. Memasang pada meja stabil dan dilevelkan",
      "C. Mengisi pan dengan beban uji maksimum",
      "D. Membersihkan chamber memakai klorin pekat",
      "E. Mengaktifkan mode statistik sebelum leveling"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "22. Pada akhir shift, teknisi menemukan sisa serbuk reagen di sekitar weighing pan dan dasar ruang timbang. Pengguna meminta alat tetap dipakai untuk penimbangan berikutnya karena hasil angka masih muncul normal di layar.\nProsedur pemeliharaan harian yang paling benar adalah...",
    gambar: "",
    pilihan: [
      "A. Meniup serbuk kuat-kuat dengan kompresor",
      "B. Mencuci chamber memakai air mengalir",
      "C. Menekan pan agar kotoran turun ke bawah",
      "D. Membersihkan dengan kuas halus dan kain bebas serat",
      "E. Menyemprot parfum laboratorium ke ruang timbang"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "23. Analis melaporkan angka timbangan terus berubah meskipun tidak ada sampel di pan. Teknisi melihat bubble level tidak berada di tengah dan pintu draft shield tidak menutup rapat. Meja juga berdekatan dengan centrifuge yang sedang beroperasi.\nLangkah troubleshooting awal yang paling sistematis adalah...",
    gambar: "",
    pilihan: [
      "A. Mengganti load cell tanpa pemeriksaan awal",
      "B. Menambah beban standar di atas pan",
      "C. Memeriksa level, draft shield, dan getaran",
      "D. Menghapus semua data penyimpanan alat",
      "E. Mengganti layar karena angka berubah-ubah"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "24. Teknisi melakukan verifikasi berkala timbangan analitik kapasitas 220 g. Pengujian mencakup titik rendah, tengah, mendekati kapasitas maksimum, serta uji eksentrisitas di beberapa posisi pan.\nPeralatan standar yang paling tepat digunakan untuk kalibrasi tersebut adalah...",
    gambar: "",
    pilihan: [
      "A. Anak timbang tersertifikasi sesuai kelasnya",
      "B. Sampel garam laboratorium yang kering",
      "C. Beaker glass berisi air suling penuh",
      "D. Koin logam dengan massa hampir sama",
      "E. Botol reagen kosong sebagai pembanding"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "25. Laboratorium histologi menerima mikroskop binokuler baru. Teknisi akan menempatkan alat di ruang praktikum yang ramai. Beberapa meja berada dekat jendela, sumber panas, dan jalur lalu-lalang mahasiswa.\nPenempatan mikroskop yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Dekat jendela agar cahaya alami kuat",
      "B. Di samping water bath agar mudah dipakai",
      "C. Pada meja yang sering dipindah-pindah",
      "D. Di bawah AC agar lensa selalu dingin",
      "E. Pada meja stabil dan minim getaran"
    ],
    jawaban: 4
  },
  {
    pertanyaan: "26. Mahasiswa melaporkan gambar mikroskop tampak buram setelah penggunaan objektif 100x oil immersion. Teknisi menemukan sisa immersion oil pada ujung objektif dan pada permukaan slide holder.\nTindakan pemeliharaan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Mengelap objektif memakai tisu kasar",
      "B. Membersihkan lensa dengan lens paper",
      "C. Merendam objektif dalam alkohol semalam",
      "D. Mengikis minyak memakai pinset logam",
      "E. Menyemprot air langsung ke lensa"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "27. Lampu mikroskop tidak menyala saat sakelar dinyalakan. Stopkontak sudah dipastikan aktif. Kabel power tidak terlihat rusak dan knob intensitas cahaya telah diputar ke posisi tengah.\nPemeriksaan awal yang paling tepat dilakukan teknisi adalah...",
    gambar: "",
    pilihan: [
      "A. Membongkar seluruh lensa objektif",
      "B. Mengganti meja preparat mikroskop",
      "C. Memeriksa lampu, fuse, dan holder",
      "D. Mengubah perbesaran okuler dahulu",
      "E. Mengkalibrasi skala okuler ulang"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "28. Dosen meminta mahasiswa mengukur diameter sel dari preparat darah. Mikroskop memiliki ocular micrometer, tetapi skala pada okuler belum dikaitkan dengan ukuran sebenarnya pada tiap objektif.\nMetode kalibrasi ukuran yang paling benar adalah...",
    gambar: "",
    pilihan: [
      "A. Menggunakan penggaris plastik di meja",
      "B. Membandingkan dengan ukuran cover glass",
      "C. Mengatur fokus sampai gambar paling tajam",
      "D. Mengkalibrasi okuler memakai stage micrometer",
      "E. Mengganti lampu agar skala lebih terang"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "29. Centrifuge meja baru akan dipasang di laboratorium klinik. Alat akan digunakan untuk pemisahan serum dari sampel darah. Ruangan memiliki beberapa meja, salah satunya sempit dan berada dekat tepi wastafel.\nPersyaratan instalasi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Meja kuat, level, dan ventilasi cukup",
      "B. Meja sempit agar ruang kerja hemat",
      "C. Dekat wastafel untuk membuang tabung",
      "D. Rotor dipasang tanpa pemeriksaan tipe",
      "E. Kabel ekstensi digulung di bawah alat"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "30. Saat pemeriksaan bulanan, teknisi menemukan bucket rotor mulai berkarat dan terdapat garis retak halus di salah satu sisi. Pengguna mengatakan alat masih bisa berputar normal pada 3000 rpm.\nTindakan pemeliharaan yang paling aman adalah...",
    gambar: "",
    pilihan: [
      "A. Tetap digunakan pada kecepatan rendah",
      "B. Menutup retakan dengan perekat kuat",
      "C. Mencuci rotor dengan pemutih pekat",
      "D. Mengabaikan karena putaran masih stabil",
      "E. Mengeluarkan rotor dari layanan"
    ],
    jawaban: 4
  },
  {
    pertanyaan: "31. Seorang teknisi elektromedis diminta menyiapkan lampu infra red di ruang fisioterapi baru. Ruangan sudah memiliki stop kontak khusus peralatan medis dan tempat tidur terapi. Sebelum alat digunakan untuk pasien nyeri punggung bawah, teknisi harus memastikan posisi alat dan area kerja aman.\nTindakan instalasi awal yang paling tepat dilakukan teknisi adalah...",
    gambar: "",
    pilihan: [
      "A. Meletakkan lampu sedekat mungkin agar panas cepat terasa",
      "B. Memasang alat pada stop kontak umum tanpa pemeriksaan ground",
      "C. Memastikan dudukan stabil, jarak terapi sesuai, dan kabel aman",
      "D. Menutup seluruh area lampu agar panas tidak menyebar keluar",
      "E. Mengatur timer maksimum untuk menguji kemampuan pemanasan"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "32. Saat pemeliharaan berkala di poli rehabilitasi medik, teknisi menemukan reflektor lampu infra red berdebu, kabel daya mulai kaku, dan sakelar terasa longgar. Alat masih menyala, tetapi beberapa pasien mengeluh panas tidak merata.\nTindakan pemeliharaan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Membersihkan reflektor, memeriksa kabel, sakelar, dan dudukan lampu",
      "B. Menaikkan durasi terapi untuk menutupi panas yang tidak merata",
      "C. Mengganti stop kontak ruangan tanpa memeriksa kondisi alat",
      "D. Mengoleskan pelumas pada permukaan bola lampu infra red",
      "E. Memakai alat sampai lampu benar-benar padam saat digunakan"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "33. Petugas fisioterapi melaporkan lampu infra red tidak menyala saat tombol power ditekan. Stop kontak sudah diuji dengan alat lain dan berfungsi normal. Bola lampu juga tampak tidak pecah secara visual.\nLangkah troubleshooting pertama yang paling sistematis adalah...",
    gambar: "",
    pilihan: [
      "A. Mengganti seluruh unit tanpa pemeriksaan komponen lain",
      "B. Memeriksa kontinuitas kabel daya, fuse, sakelar, dan fitting lampu",
      "C. Menambah lama pemanasan agar filamen lampu kembali aktif",
      "D. Mengganti timer terapi sebelum mengecek jalur kelistrikan",
      "E. Membuka reflektor lalu mengubah sudut pantulan panas"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "34. Sebelum audit mutu, teknisi diminta memverifikasi kinerja lampu infra red. Terapis biasanya menggunakan jarak kerja 50 cm dari permukaan kulit pasien dan durasi terapi 15 menit.\nMetode kalibrasi/verifikasi yang paling sesuai adalah...",
    gambar: "",
    pilihan: [
      "A. Mengukur tegangan stop kontak saja lalu menyatakan alat lulus",
      "B. Membandingkan warna cahaya lampu dengan unit lain yang serupa",
      "C. Mengukur radiasi/temperatur pada jarak kerja dan akurasi timer",
      "D. Menimbang massa bola lampu untuk menilai energi yang keluar",
      "E. Mengatur jarak lampu berdasarkan keluhan panas dari pasien"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "35. Unit fisioterapi menerima elektrostimulator baru untuk terapi stimulasi otot. Teknisi diminta menyiapkan alat sebelum pelatihan penggunaan kepada terapis. Perangkat memiliki dua kanal output dan elektroda permukaan reusable.\nPemeriksaan instalasi yang paling penting sebelum alat digunakan adalah...",
    gambar: "",
    pilihan: [
      "A. Memastikan elektroda, kabel, kanal output, dan ground aman",
      "B. Memasang elektroda pada pasien tanpa uji fungsi kanal terlebih dahulu",
      "C. Mengatur arus maksimum agar kontraksi otot langsung terlihat",
      "D. Melepas label peringatan agar panel alat tampak lebih bersih",
      "E. Menggunakan satu elektroda saja untuk menguji semua mode terapi"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "36. Pada pemeriksaan mingguan, beberapa elektroda elektrostimulator terlihat kering dan permukaannya tidak lagi rata. Terapis juga melaporkan pasien sering merasa perih pada awal terapi walaupun intensitas rendah.\nTindakan pemeliharaan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Tetap memakai elektroda karena arus terapi masih dapat keluar",
      "B. Mengganti elektroda rusak dan memeriksa kabel serta konektor",
      "C. Menaikkan frekuensi pulsa untuk mengurangi rasa perih pasien",
      "D. Mengoleskan minyak biasa agar elektroda terasa lebih licin",
      "E. Menurunkan timer terapi tanpa memperbaiki elektroda yang rusak"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "37. Elektrostimulator dua kanal dilaporkan hanya menghasilkan sensasi pada kanal 1, sedangkan kanal 2 tidak terasa pada pasien. Setelah elektroda kanal 2 ditukar dengan elektroda kanal 1, keluhan tetap terjadi pada kanal 2.\nKemungkinan kerusakan yang paling perlu diperiksa adalah...",
    gambar: "",
    pilihan: [
      "A. Kerusakan elektroda karena keluhan berpindah ke kanal lain",
      "B. Masalah pada rangkaian output atau konektor kanal 2",
      "C. Kesalahan jaringan listrik karena kanal 1 tetap berfungsi normal",
      "D. Kerusakan timer utama karena semua kanal ikut mati total",
      "E. Kesalahan pasien karena kanal 2 selalu lebih lemah dari kanal 1"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "38. Teknisi melakukan kalibrasi elektrostimulator sebelum alat digunakan untuk praktikum mahasiswa. Alat memiliki parameter intensitas arus, lebar pulsa, frekuensi, dan bentuk gelombang.\nCara kalibrasi output yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Mengukur output pada beban simulasi dengan electrical analyzer",
      "B. Menyentuh elektroda langsung untuk menilai kuatnya rangsangan",
      "C. Melihat kedipan indikator panel saat intensitas dinaikkan perlahan",
      "D. Mencocokkan warna kabel kanal dengan label pada panel depan",
      "E. Mengukur suhu casing setelah alat menyala selama beberapa menit"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "39. Ruang fisioterapi memasang unit traksi lumbal elektrik. Teknisi harus menyambungkan unit kontrol, meja traksi, tali, pulley, dan sabuk pasien sebelum alat digunakan untuk terapi nyeri pinggang.\nPemeriksaan instalasi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Memastikan arah tarikan sejajar, pengunci meja aktif, dan sabuk aman",
      "B. Mengatur gaya tarikan maksimum untuk melihat kekuatan motor",
      "C. Menggunakan tali seadanya asalkan dapat menarik pasien",
      "D. Membiarkan meja bergerak bebas agar pasien mudah diposisikan",
      "E. Melepas tombol emergency stop agar terapi tidak terhenti"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "40. Saat pemeliharaan bulanan unit traksi servikal dan lumbal, teknisi menemukan tali mulai berbulu, pulley berdecit, dan sabuk pasien mulai aus pada bagian pengikat.\nTindakan pemeliharaan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Memotong bagian tali yang berbulu lalu menyambung kembali",
      "B. Mengganti tali/sabuk aus dan merawat pulley sesuai panduan",
      "C. Menaikkan gaya tarikan untuk menguji kekuatan tali yang tersisa",
      "D. Membalik posisi sabuk agar bagian aus tidak terlihat pasien",
      "E. Melanjutkan penggunaan jika alat masih dapat menarik meja"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "41. Teknisi elektromedis menerima unit electrosurgical baru untuk kamar operasi. Sebelum digunakan pada pasien, teknisi melakukan pemeriksaan instalasi listrik, kabel aktif, kabel return electrode, footswitch, dan koneksi ke patient return electrode monitoring. Tindakan instalasi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Menghubungkan ESU ke stopkontak biasa tanpa uji pembumian.",
      "B. Memastikan grounding, aksesori, mode output, dan alarm REM berfungsi.",
      "C. Menyalakan mode cut maksimum untuk memastikan percikan elektroda.",
      "D. Memasang kabel return electrode pada meja operasi logam.",
      "E. Mengabaikan footswitch karena fungsi utama ada di hand control."
    ],
    jawaban: 1
  },
  {
    pertanyaan: "42. Pada pemeliharaan berkala ESU, perawat melaporkan kadang muncul bau hangus pada konektor aktif setelah operasi. Teknisi menemukan sisa jaringan dan karbonisasi pada ujung pensil elektrokauter. Tindakan pemeliharaan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Membersihkan aksesori aktif dan mengganti bila isolasi rusak.",
      "B. Menaikkan daya coag agar jaringan lebih cepat kering.",
      "C. Menutup konektor dengan plester agar tidak longgar.",
      "D. Menggunakan ulang tip aktif tanpa pemeriksaan visual.",
      "E. Memindahkan unit ke ruang lain tanpa dokumentasi."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "43. Saat tindakan bedah, mode cut ESU tidak menghasilkan efek pemotongan, sedangkan layar dan indikator daya menyala normal. Teknisi dipanggil setelah operasi selesai untuk troubleshooting. Langkah perbaikan awal yang paling sistematis adalah...",
    gambar: "",
    pilihan: [
      "A. Mengganti main board tanpa pemeriksaan aksesori.",
      "B. Memeriksa pensil aktif, kabel aktif, footswitch, dan konektor output.",
      "C. Mengubah semua setting ke daya maksimum.",
      "D. Membuka casing saat alat masih terhubung listrik.",
      "E. Menghapus log error tanpa melakukan uji fungsi."
    ],
    jawaban: 1
  },
  {
    pertanyaan: "44.  Teknisi melakukan kalibrasi ESU menggunakan electrosurgical analyzer. Pada mode coag 50 W dengan beban 500 ohm, analyzer menunjukkan daya keluar 41 W. Evaluasi teknis yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Daya aktual lebih tinggi dari setting sehingga alat berbahaya.",
      "B. Daya aktual lebih rendah dan perlu dibandingkan toleransi pabrikan.",
      "C. Kalibrasi tidak diperlukan karena ESU hanya menghasilkan panas.",
      "D. Hasil analyzer tidak relevan untuk mode coag.",
      "E. Unit pasti aman karena masih menghasilkan output."
    ],
    jawaban: 1
  },
  {
    pertanyaan: "45. Ruang bedah menerima harmonic scalpel baru. Teknisi menyiapkan generator, handpiece, transducer, kabel, dan footswitch. Sebelum diserahkan ke operator, prosedur instalasi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Melakukan self-test generator dan mengenali handpiece sesuai tipe.",
      "B. Menghubungkan transducer tanpa mengunci konektor mekanis.",
      "C. Menyalakan mode tertinggi untuk semua jenis jaringan.",
      "D. Menggunakan kabel ESU karena bentuk konektor mirip.",
      "E. Melewati uji fungsi karena alat masih baru."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "46.  Setelah operasi, handpiece harmonic scalpel dikembalikan ke CSSD. Pada ujung blade terlihat sisa jaringan yang mengering. Tindakan pemeliharaan yang tepat sebelum sterilisasi adalah...",
    gambar: "",
    pilihan: [
      "A. Membersihkan sisa jaringan sesuai IFU sebelum proses sterilisasi.",
      "B. Merendam seluruh generator dalam disinfektan cair.",
      "C. Mengikis blade dengan benda tajam agar cepat bersih.",
      "D. Menggunakan sikat kawat keras pada permukaan blade.",
      "E. Mengabaikan sisa jaringan karena autoklaf akan membersihkan."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "47. Saat digunakan, generator harmonic scalpel menampilkan alarm transducer error. Handpiece sudah diganti, tetapi alarm tetap muncul. Tindakan troubleshooting berikutnya yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Memeriksa kabel transducer, konektor, dan kompatibilitas transducer.",
      "B. Menaikkan level energi untuk menghilangkan alarm.",
      "C. Menutup speaker alarm agar operasi tidak terganggu.",
      "D. Menggunakan handpiece dari merek berbeda.",
      "E. Menghubungkan transducer saat generator masih aktif output."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "48. Dalam uji performa berkala, teknisi diminta memastikan generator harmonic scalpel memberikan energi sesuai karakteristik pabrikan. Parameter yang paling relevan untuk diverifikasi adalah...",
    gambar: "",
    pilihan: [
      "A. Keluaran frekuensi ultrasonik dan respons self-test sistem.",
      "B. Tekanan udara central gas di ruang operasi.",
      "C. Kuat arus grounding meja operasi.",
      "D. Kecepatan aliran suction dinding.",
      "E. Kecerahan lampu tindakan pada area blade."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "49. Lampu operasi ceiling mounted dipasang di kamar bedah baru. Setelah bracket terpasang, teknisi harus memastikan lampu aman digunakan dan tidak jatuh saat lengan digerakkan. Pemeriksaan instalasi yang paling penting adalah...",
    gambar: "",
    pilihan: [
      "A. Kekuatan mounting plafon, keseimbangan arm, dan koneksi listrik.",
      "B. Warna cat dinding agar pantulan cahaya terlihat lembut.",
      "C. Jumlah sakelar ruangan tanpa uji fungsi lampu.",
      "D. Letak meja instrumen yang dekat dengan pintu.",
      "E. Volume alarm UPS di koridor ruang bedah."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "50. Pada pemeliharaan bulanan, dokter mengeluhkan bayangan area operasi tampak lebih banyak dan intensitas lampu terasa menurun. Tindakan pemeliharaan yang tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Membersihkan cover optik, memeriksa LED/module, dan mengecek fokus.",
      "B. Mengecat ulang gagang lampu agar terlihat bersih.",
      "C. Menurunkan suhu AC kamar operasi.",
      "D. Mengganti meja operasi tanpa menilai lampu.",
      "E. Membiarkan karena lampu masih menyala."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "51. Saat transfusi, blood warmer memunculkan alarm over temperature. Tidak ada lipatan pada tubing, tetapi suhu outlet yang diukur tampak lebih tinggi dari nilai target.\nTindakan teknisi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Menaikkan setpoint agar alarm berhenti",
      "B. Menghentikan alat dan memeriksa sensor",
      "C. Menutup speaker alarm sementara",
      "D. Memakai alat sampai transfusi selesai",
      "E. Mengurangi panjang selang pasien"
    ],
    jawaban: 1
  },
  {
    pertanyaan: "52. Teknisi melakukan kalibrasi blood warmer pada setpoint 37 derajat Celsius. Pengukuran harus menggambarkan suhu cairan yang keluar menuju pasien saat alat bekerja pada laju aliran tertentu.\nMetode kalibrasi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Mengukur suhu casing bagian luar",
      "B. Mencatat suhu ruangan operasi saja",
      "C. Mengukur suhu outlet cairan acuan",
      "D. Mengukur arus listrik stopkontak",
      "E. Membandingkan berat disposable set"
    ],
    jawaban: 2
  },
  {
    pertanyaan: "53. Unit blood bank refrigerator baru akan dipasang di instalasi bank darah. Alat harus menjaga suhu penyimpanan darah tetap aman dan memiliki alarm bila suhu keluar dari batas.\nPersyaratan instalasi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Sumber listrik dedicated dan ruang ventilasi",
      "B. Stopkontak berbagi dengan alat panas",
      "C. Pintu menghadap sinar matahari langsung",
      "D. Rak diisi penuh sebelum stabil",
      "E. Alarm dimatikan saat adaptasi awal"
    ],
    jawaban: 0
  },
  {
    pertanyaan: "54. Dalam pemeliharaan mingguan, teknisi melihat kondensor berdebu, gasket pintu mulai kotor, dan catatan suhu harian tidak lengkap. Suhu masih berada di rentang kerja, tetapi kompresor lebih sering menyala.\nTindakan pemeliharaan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Menaikkan setpoint agar kompresor ringan",
      "B. Menonaktifkan alarm pintu sementara",
      "C. Membuka pintu untuk mempercepat pendinginan",
      "D. Membersihkan kondensor, gasket, dan log",
      "E. Memindahkan darah ke rak paling bawah saja"
    ],
    jawaban: 3
  },
  {
    pertanyaan: "55. Alarm suhu blood bank refrigerator berbunyi. Display menunjukkan 8 derajat Celsius selama 20 menit. Di dalam alat terdapat kantong darah yang siap digunakan untuk pasien. Kompresor terdengar terus bekerja.\nTindakan awal yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Mematikan alarm dan menunggu semalam",
      "B. Menaikkan batas alarm ke 10 derajat",
      "C. Menambah kantong darah agar suhu turun",
      "D. Membuka pintu untuk memeriksa lama",
      "E. Memindahkan darah ke unit cadangan"
    ],
    jawaban: 4
  },
  {
    pertanyaan: "56. Laser tidak mau firing meskipun panel menyala. Layar menunjukkan pesan door interlock open. Tindakan perbaikan yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Memeriksa rangkaian interlock pintu dan konektornya.",
      "B. Menyambung pendek interlock secara permanen.",
      "C. Menaikkan energi laser sampai output muncul.",
      "D. Mengganti tabung laser tanpa pemeriksaan pesan error.",
      "E. Melepas semua alarm keselamatan laser."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "57. Teknisi memeriksa laser surgical unit dengan laser power meter. Setting 10 W, hasil ukur rata-rata 8,7 W pada mode kontinu. Evaluasi yang tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Menghitung deviasi output dan membandingkan dengan toleransi pabrikan.",
      "B. Mengabaikan hasil karena laser terlihat menyala terang.",
      "C. Mengukur output dengan termometer kulit operator.",
      "D. Menyimpulkan kacamata laser rusak karena output rendah.",
      "E. Mengganti kabel power sebagai satu-satunya tindakan."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "58. Sistem endoscopy dipasang di ruang tindakan. Teknisi menghubungkan endoscope, light source, camera processor, monitor, insufflator, dan suction/irrigation. Pemeriksaan instalasi yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Memastikan koneksi video, cahaya, insufflation, dan uji kebocoran scope.",
      "B. Menyalakan light source tanpa scope untuk waktu lama.",
      "C. Menyambung kabel video ke port gas insufflator.",
      "D. Menggunakan scope tanpa uji kebocoran setelah sterilisasi.",
      "E. Menonaktifkan white balance agar warna lebih kontras."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "59. Setelah tindakan, endoscope fleksibel harus diproses ulang. Perawat menanyakan urutan awal yang benar sebelum high level disinfection. Tindakan pemeliharaan awal yang tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Pre-cleaning segera, leak test, flushing channel, lalu proses disinfeksi.",
      "B. Menyimpan scope kotor sampai jadwal CSSD berikutnya.",
      "C. Merendam scope tanpa leak test terlebih dahulu.",
      "D. Meniup channel dengan udara bertekanan tinggi tanpa adaptor.",
      "E. Membersihkan hanya bagian luar karena channel tertutup."
    ],
    jawaban: 0
  },
  {
    pertanyaan: "60. Gambar endoscopy tampak gelap meskipun monitor menyala. Setelah light source dinaikkan, gambar tetap redup. Pemeriksaan troubleshooting yang paling tepat adalah...",
    gambar: "",
    pilihan: [
      "A. Memeriksa light guide cable, konektor scope, dan lampu/LED source.",
      "B. Mengganti monitor tanpa memeriksa sumber cahaya.",
      "C. Menutup ujung scope dengan kain agar fokus membaik.",
      "D. Menaikkan tekanan insufflator sampai gambar terang.",
      "E. Mengganti suction tubing sebagai penyebab utama."
    ],
    jawaban: 0
  }
];