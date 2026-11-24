# Fact-check: house-extension-malaysia

- Draft: src/data/guides.ts (first entry, id "house-extension-malaysia"), branch guide/house-extension-malaysia; closing links in src/pages/BlogDetail.tsx (NEXT_STEPS "house-extension-malaysia").
- Address: https://hidilauarchitect.com/blog/house-extension-malaysia
- Weekly guide (last guide live 16 Nov, architect fees). Keywords (keyword_volume, gl=my, 24 Nov 2026): "house extension" 90/mo (140 in Oct), "house extension malaysia" 20, "kitchen extension malaysia" 20 (40 in Oct, rising), "extension rumah" 10 (30 in Oct), "double storey extension" 10, "tambah bilik rumah teres" 10. No service or location page targets extensions; the renovation guide targets renovation permits ("ubahsuai rumah", "renovation permit") and is linked, not repeated.
- Written 24 Nov 2026 by the SEO & Website bot (Hidilau Architect). All sources opened 24 Nov 2026.

## Sources
- S1 Street, Drainage and Building Act 1974 (Act 133), AGC, as at 1 Jun 2014: https://lom.agc.gov.my/ilims/upload/portal/akta/LOM/EN/Act%20133.pdf (used in the approved 26 Oct, 31 Oct and 2 Nov guides)
- S2 Act 133 Part V as published by the National House Buyers Association: https://www.hba.org.my/laws/street/partV.htm
- S3 NEW. Majlis Bandaraya Johor Bahru, Bahagian Kawalan Bangunan, "Kerja-kerja Kecil Rumah Kediaman (untuk dimajukan bagi kelulusan MBJB) — Permohonan Kelulusan Ubahan Tambahan", kemaskini 2016 (16 pp): https://www.mbjb.gov.my/sites/default/files/2023-01/Garispanduan%20UBT%20kecil.pdf
- S4 NEW. Majlis Bandaraya Pasir Gudang, Jabatan Bangunan, "Garis Panduan Ubah Tambah Rumah Kediaman" (8 pp): https://www.mbpg.gov.my/sites/default/files/garis_panduan_ut_rev2.pdf
- S5 NEW. Majlis Perbandaran Subang Jaya, "Pindaan Garis Panduan Tambahan dan Ubahsuaian Rumah Kediaman Sedia Ada di Kawasan Pentadbiran MPSJ" (approved by the Selangor State Planning Committee): https://www.mbsj.gov.my/sites/default/files/Pindaan%20Garis%20Panduan%20Tambahan%20Dan%20Ubahsuaian%20Rumah%20Kediaman%20Sedia%20Ada%20Di%20Kawasan%20Pentadbiran%20MPSJ.pdf
- S6 Majlis Bandaraya Petaling Jaya, Building Control Department FAQ: https://www.mbpj.gov.my/en/node/1344 (approved 31 Oct)
- S7 Majlis Daerah Sabak Bernam, Panduan Ubah Suai Bangunan (13 pp): https://www.mdsb.gov.my/images/panduan-ubah-suai-bangunan-mdsb/buku_ubah_suai_bangunan_mdsb_.pdf (approved 31 Oct)
- S8 Perbadanan Putrajaya, Garis Panduan Kerja-Kerja Kecil dan Ubahsuai Bangunan Kediaman (37 pp): https://www.ppj.gov.my/storage/prosedur/164/164.pdf (approved 31 Oct)
- S9 JKT/KPKT CCC FAQ: https://jkt.kpkt.gov.my/about-lgd/faqs/certificate-of-completion-and-compliance-ccc-faq
- S10 Approved renovation guide fact-check (docs/fact-checks/house-renovation-malaysia.md, PASS 31 Oct 2026), claims cited by number below as R#.
- C1 Client's own site: src/components/FAQSection.tsx (renovation answer); src/pages/services/ArchitecturalDesign.tsx and src/pages/services/AuthoritySubmissions.tsx (processItems); src/data/projects.ts (id "iconic-terrace", image 71.jpg = it10, the kitchen render).

## Claims
| # | Claim in the guide | Sources and what they say |
|---|---|---|
| 1 | A house extension needs the local council's approval before work starts | S1 s.70(1) + s.70(16) (see #3, #4); S4 2.0: "Apa-apa perubahan atau tambahan yang hendak dijalankan hendaklah mendapat kebenaran pihak MBPG terlebih dahulu"; S6 Q1 (R1); S8 p.8 "TIDAK BOLEH dimulakan sebelum suatu kelulusan" (R1) |
| 2 | Council forms call it "ubah tambah" and "sambungan" | S4 title "GARIS PANDUAN UBAH TAMBAH RUMAH KEDIAMAN"; S3 contents "3.1.1 Sambungan di hadapan rumah teres", "Sambungan di rumah berkembar lot penjuru"; S3 title "Permohonan Kelulusan Ubahan Tambahan". ("extension rumah" is the everyday search term, keyword data above) |
| 3 | s.70(1): no one may erect a building without the local authority's prior written permission | S1, S2 s.70(1) "No person shall erect any building without the prior written permission of the local authority." (R6) |
| 4 | s.70(16): adding to or altering with new foundations, or new/partly new/bigger structure or roof on existing walls or foundations, counts as erecting a building | S1, S2 s.70(16)(b)(i)-(ii) (R7) |
| 5 | Expect drawings showing new and demolished work, prepared by an architect, engineer or registered draughtsman | S3 1.6 "perlu dikemukakan oleh orang yang berkelayakan seperti Arkitek, Jurutera Awam dan Pelukis Pelan berdaftar"; S3 conditions 1.5 (red / yellow dashed, see #22); S4 3.0 "Pemohon perlu melantik pelukis pelan / orang yang berkelayakan (PSP) untuk memajukan pelan"; S1 s.70(2) + s.3 (R18) |
| 6 | Expect setbacks, neighbour's consent where a shared wall/structure is touched, and an engineer's drawings and calculations for new concrete floors or structural changes | Setbacks: #16–#18. Neighbour: #19–#21. Engineer: #10–#12, S8 p.6 item 5 (R20) |
| 7 | Guide covers landed houses in Peninsular Malaysia | S1 s.1(2) "This Act shall apply only to Peninsular Malaysia." Framing (R5) |
| 8 | MDSB: extension adding more than 6.5 m², new loft or mezzanine, building or rebuilding a roof → approved OSC plans + CCC | S7 p.4 Kategori C (R11, R3) |
| 9 | MBPG's ready-made sketch plans cover front, rear and side extensions on the ground floor only, for terrace, cluster, semi-D and detached houses | S4 "Permohonan Pelan Setara": "pelan-pelan lakar yang disediakan di dalam pelan setara adalah melibatkan di bahagian tingkat bawah sahaja sambungan hadapan, sambungan belakang dan sambungan tepi bagi rumah jenis: 1. Rumah Teres 1 @ 2 tingkat 2. Rumah Kluster 3. Rumah Berkembar (Semi D) 4. Rumah Sesebuah". "Johor councils publish ready-made sketch plans": S3 1.1 "Pelan-pelan setara pula disediakan oleh Majlis ... pelan-pelan lakar yang disediakan" + S4 |
| 10 | Anything the sketch plans do not show, incl. an RC roof, must be submitted separately by a qualified person such as an architect, civil engineer or registered draughtsman | S3 1.6 and S4 1.0, same words: "Kerja-kerja yang melibatkan pembinaan, bumbung konkrit tetulang dan lain-lain yang tidak terdapat di pelan-pelan lakar ini hendaklah dikemukakan secara berasingan dan perlu dikemukakan oleh orang yang berkelayakan seperti Arkitek, Jurutera Awam dan Pelukis Pelan berdaftar." |
| 11 | MBPG asks for design drawings and calculations for an upper-floor extension, incl. balconies | S4 4.0 Dokumen Sokongan: "Lukisan dan perkiraan rekabentuk (untuk tambahan lantai atas termasuk balkoni)" |
| 12 | MBJB asks for RC plans and calculations certified by a registered engineer for a new RC floor slab (1.5 m threshold in its wording) or for breaking into an RC wall | S3 conditions 1.6: "Memajukan pelan RC dan perkiraannya dan disahkan oleh Jurutera berdaftar bagi binaan 'rc slab' untuk binaan lantai baru yang melebihi 1.5m atau pecahan dinding jenis 'RC wall'." Second source for engineer-certified structure: S8 p.6 item 5 (R20) |
| 13 | Extra storey on a terrace: MPSJ allows it but asks for planning permission and building plan applications together; MBPJ: planning issues → planning permission first | S5 item 3: "Binaan tambahan bilangan tingkat untuk rumah teres. (Permohonan Kebenaran Merancang dan Pelan Bangunan perlu dikemukakan SECARA SERENTAK)", options 1→1½/2, 1½→2, 2→2½, 2½→3 storeys; S6 Q17 "Sekiranya melibatkan isu-isu kebenaran merancang, perlu mendapatkan kelulusan kebenaran merancang terlebih dahulu" (R22) |
| 14 | Putrajaya does not allow a roofed dry yard to be enclosed and turned into a wet kitchen | S8 p.10–11: timber pergola roof allowed over the dry yard, but "tidak membolehkannya dijadikan sebagai suatu ruang tertutup sehingga menyebabkan perubahan kepada fungsi asal ruang sediada tersebut. Contoh: Menjadikan ruang jemuran tersebut sebagai ruang dapur basah (wet kitchen)." Also p.4 "Tambahan struktur berbumbung ... pada ruang jemuran (dry-yard) hendaklah dikekalkan fungsi asalnya" |
| 15 | Setback (anjakan bangunan) = distance from road reserve or lot boundary; each council sets its own numbers | S3 uses "ANJAKAN BANGUNAN: Rizab jalan hadapan ... Sempadan lot"; S5 uses "anjakan bangunan 10 kaki ... dari sempadan lot hadapan". Different numbers in S3 vs S5 (#17, #18). Framing |
| 16 | MBJB guide asks every drawing to show the building setback and roof overhang | S3 conditions 1.2(a) "Anjakan bangunan dan unjuran bumbung cadangan"; repeated on every sketch page "Sila nyatakan syarat yang perlu dipatuhi di atas pelan: Anjakan bangunan dan unjuran bumbung cadangan" |
| 17 | MBJB sketch plans: 6.0 m from front road reserve for walls; 2.5 m porch/terrace; 2.5 m from side road reserve on a corner lot; on some house types 2.0 m from lot boundary for the roof overhang | S3 pp.5–6: "a. Rizab jalan hadapan – 6.0 meter (dinding) b. Rizab jalan tepi (Coner) – 2.5 meter ... c. Porch / terrace – 2.5 meter"; S3 pp.8–15: "a. Rizab jalan hadapan – 6.0 meter (dinding) b. Sempadan lot – 2.0 meter (unjuran bumbung) c. Porch / Terrace – 2.5 meter". The 2/3 floor-area note on the corner page is left out (unclear in the text) |
| 18 | MPSJ: front balcony up to a line 10 ft from the front lot boundary; upper-floor rear extension up to the rear lot boundary | S5 item 1 "Binaan tambahan/ ubahsuai balkoni hadapan dengan anjakan bangunan 10 kaki (3048 mm) dari sempadan lot hadapan"; item 2 "tambahan belakang tingkat atas tanpa anjakan bangunan 5 kaki (1524 mm) dari sempadan lot belakang"; drawing note "BINAAN TAMBAHAN BELAKANG TINGKAT 1 DAN KE ATAS DIBINA SEHINGGA KE SEMPADAN LOT BELAKANG" |
| 19 | MBJB: neighbour's acknowledgement with a copy of their assessment receipt when the work involves a shared structure (terrace, semi-D, cluster) | S3 conditions 1.9 "Mamajukan perakuan jiran berserta salinan cukai harta. (bagi Rumah Kluster, Semi-D dan Teres - melibatkan perkongsian struktur)" |
| 20 | MBJB: walls, fences and dividing walls must not take in or involve the neighbour's lot without written permission | S3 1.5 "Binaan dinding/ pagar dan dinding pemisah yang dibina tidak boleh termasuk atau melibatkan lot jiran melainkan kebenaran bertulis telah diperolehi." |
| 21 | Putrajaya and Sabak Bernam also ask for a neighbour's letter for work next to their house | S8 p.5 item 3; S7 p.7 "Surat kebenaran jiran sebelah" (R21) |
| 22 | MBJB drawing list: site plan with 3 road names, lot and building numbers of the lot and the next lot, north point; floor plans and sections with setbacks, roof overhang, room names and uses, floor area of each added space; table of existing and added floor area; new work red, demolition yellow dashed | S3 "Syarat-syarat yang perlu dipatuhi di atas pelan" 1.1 (a) "3 nama jalan sediada", (b) "No. Lot dan no. bangunan di atas tapak cadangan dan Lot bersebelahan", (c) "arah utara"; 1.2 (a) anjakan, unjuran bumbung, (b) "Nama ruang dan kegunaan", (e) "Ukuran dan luas lantai bagi setiap ruang tambahan"; 1.3 "Jadual komponen ... luas lantai (GFA) bagi ruang sedia ada dan tambahan"; 1.5 "Binaan tambahan hendaklah diwarnakan dengan warna merah dan binaan yang dirobohkan ... garisan putus-putus berwarna kuning" |
| 23 | MBJB and MBPG: owner fully responsible for stability and strength of what is built | S3 1.3 and S4 1.0, same words: "Pemilik adalah bertanggungjawab sepenuhnya ke atas binaan yang dibina terutama dari segi kestabilan dan kekukuhan semua struktur-struktur yang dibina." |
| 24 | MBJB and MBPG: approval/permit lasts one year; reapply under the same council reference if it runs out | S3 1.2 "Permit yang dikeluarkan hanyalah untuk tempoh setahun (1) ... permohonan baru hendaklah dikemukakan dengan mengikut no. rujukan Majlis yang sama"; S4 1.0 "Kelulusan Pelan yang dikeluarkan hanyalah untuk tempoh setahun (1) ... mengikut no. rujukan Majlis yang sama" |
| 25 | MBJB: other bodies (fire and rescue department, water company, TNB, Indah Water) may need to give written permission where relevant | S3 1.4 "Pemilik jika perlu hendaklah mendapatkan kebenaran bertulis dari lain-lain pihak ... seperti Jabatan Bomba dan Penyelamat Malaysia, Syarikat Air Johor, Tenaga Nasional Berhad, Indah water Konsortium Sdn Bhd. dan lain-lain jika berkaitan" |
| 26 | For work under approved plans, the PSP (architect, professional engineer or registered building draughtsman) supervises and issues the CCC; issued by the PSP, not the council | S1 s.70(20); S9 "Hanya ... PSP yang layak untuk mengeluarkan CCC, bukan Pihak Berkuasa Tempatan", "PSP terdiri daripada Arkitek, jurutera profesional dan pelukis pelan berdaftar" (R18, R23) |
| 27 | s.70(11): altering without prior written permission → fine up to RM25,000; Magistrate's Court order to alter or demolish on the council's application | S1, S2 s.70(11) (R24); S4 2.1 lists "ubahsuai tanpa pelan 70(11)" as an offence |
| 28 | s.70(14): plans submitted after work started → 5 to 20 times the normal fees; MBPG also reminds owners | S1, S2 s.70(14) (R25); S4 8.0 "Di bawah Akta 133 (Seksyen 70 (14)), bagi semua hal jika kerja telah dimulakan sebelum pelan-pelan diluluskan atau suatu permit diperolehi, suatu fee Lima (5) hingga Dua Puluh (20) Kali Ganda daripada yang ditetapkan boleh dikenakan" |
| 29 | HIDI Lau Architect does structural renovations and architectural additions for landed homes, incl. bungalows, semi-D and link houses | C1 FAQSection: "We specialize in comprehensive structural renovations, architectural additions, and interior transformations for luxury landed residential properties, including custom bungalows, semi-detached homes, and link houses." (R26) |
| 30 | Architectural design work: site analysis and design feasibility, space planning, floor plans and elevations, coordination between design, structure and authority requirements | C1 ArchitecturalDesign processItems: "Site analysis and design feasibility", "Space planning and layout development", "Floor plans and elevations", "Coordination between design, structure, and authority requirements" |
| 31 | Authority submissions: submission drawings, coordinating consultants, liaising with the council, follow-up and revisions | C1 AuthoritySubmissions processItems (R28) |
| 32 | The kitchen pictured is from The Iconic Terrace, a Johor Bahru terrace house transformed into a distinctive modern home; architecture, facade and interior by the studio | C1 projects.ts "iconic-terrace": images include 71.jpg (it10, the kitchen); location "Johor Bahru, Malaysia"; description "A terrace house transformed through bold architectural intervention into a distinctive modern home"; scope "Architecture, Facade Design, Interior Design" (R27). The guide does NOT say the project was an extension |

## Page metadata
- Title tag (seoTitle): "House Extension Malaysia: Approvals, Setbacks, Neighbours" (57 chars). H1: "House Extension in Malaysia: Approvals, Setbacks and Your Neighbours".
- Meta description = excerpt (160 chars; claims #1, #15–#21, #26).
- Structured data: BlogPosting, author = Organization HIDI Lau Architect; BreadcrumbList Journal > title.
- Byline: the organisation (no named person reviewed it).
- Ends with the closing links (Authority Submissions service, contact) and the WhatsApp button (all local guides). Links in the body: renovation guide, CCC guide, Architectural Design, Authority Submissions, The Iconic Terrace.

## Only the client has
- The firm's own terrace project photo (The Iconic Terrace kitchen, Johor Bahru) and its own design and submissions process for extensions (C1).

## No prices, offers or fee claims
- No extension cost, fee amount or processing time. Money figures are statutory only (#27 RM25,000 maximum fine, #28 fee multiple). MBPG's council fees and deposits (RM130–RM1,000) and its "60 hari" processing time are left out on purpose.

## Chief of Staff check
Checked by Chief of Staff 2026-11-24: PASS

"All 32 claims hold against the sources I opened myself (the 3 new council PDFs, Act 133 from the AGC, HBA, MBPJ FAQ, MDSB, Putrajaya, KPKT CCC FAQ) and the live client pages."

1. ✓ Act 133 s.70(1) (AGC PDF p.76); MBPG p.1 "hendaklah mendapat kebenaran pihak MBPG terlebih dahulu"; Putrajaya p.8 "Kerja-Kerja Pembinaan Hanya Boleh Dijalankan Setelah Kelulusan Diperolehi".
2. ✓ MBPG title "Garis Panduan Ubah Tambah Rumah Kediaman"; MBJB contents 3.1.1 "Sambungan di hadapan rumah teres", cover "Ubahan Tambahan".
3. ✓ s.70(1) "No person shall erect any building without the prior written permission of the local authority" (AGC p.76; HBA Part V same wording).
4. ✓ s.70(16)(b)(i)–(ii) new foundations / new, partly new or increased superstructure or roof on existing walls or foundations (AGC pp.81–82; HBA same).
5. ✓ MBJB 1.6 "Arkitek, Jurutera Awam dan Pelukis Pelan berdaftar"; MBPG 3.0 "melantik pelukis pelan / orang yang berkelayakan (PSP)".
6. ✓ Summary of claims 12, 16–21; each holds.
7. ✓ s.1(2) "This Act shall apply only to Peninsular Malaysia" (AGC p.10).
8. ✓ MDSB Kategori C (PDF p.6): "pertambahan ruang melebihi 6.5 meter persegi", "pertambahan tingkat berbentuk loteng dan lantai mezzanine", "Membuat atau membina semula bumbung" → "kelulusan pelan OSC dan CCC".
9. ✓ MBPG p.4 Permohonan Pelan Setara: "tingkat bawah sahaja sambungan hadapan, sambungan belakang dan sambungan tepi" for Teres, Kluster, Berkembar (Semi D), Sesebuah.
10. ✓ MBJB 1.6 and MBPG 1.0, identical wording: RC roof and anything not in the sketch plans "dikemukakan secara berasingan" by Arkitek, Jurutera Awam, Pelukis Pelan berdaftar.
11. ✓ MBPG 4.0 "Lukisan dan perkiraan rekabentuk (untuk tambahan lantai atas termasuk balkoni)".
12. ✓ MBJB conditions 1.6: RC plan and calculations "disahkan oleh Jurutera berdaftar" for "rc slab" new floor "melebihi 1.5m" or breaking an "RC wall".
13. ✓ MPSJ p.2 item 3: extra storeys for terrace houses, "Kebenaran Merancang dan Pelan Bangunan perlu dikemukakan SECARA SERENTAK"; MBPJ FAQ Q17: "Sekiranya melibatkan isu-isu kebenaran merancang, perlu mendapatkan kelulusan kebenaran merancang terlebih dahulu".
14. ✓ Putrajaya PDF p.12: roofed dry-yard structure must not make it "ruang tertutup", example "ruang dapur basah (wet kitchen)"; p.11 no extra dry-yard walls.
15. ✓ Framing; "anjakan bangunan" is MBJB's own term (conditions 1.2(a), sketch pages).
16. ✓ MBJB 1.2(a) "Anjakan bangunan dan unjuran bumbung cadangan".
17. ✓ MBJB sketch pages 6–12: "Rizab jalan hadapan – 6.0 meter (dinding)", "Porch / terrace – 2.5 meter", "Rizab jalan tepi (Coner) – 2.5 meter", "Sempadan lot – 2.0 meter (unjuran bumbung)" on the semi-D, cluster and detached pages only. Guide's "on some house types" is right.
18. ✓ MPSJ p.2 items 1–2: front balcony "anjakan bangunan 10 kaki (3048 mm) dari sempadan lot hadapan"; upper-floor rear extension "tanpa anjakan" and p.4 "sehingga ke sempadan lot belakang".
19. ✓ MBJB 1.9 "perakuan jiran berserta salinan cukai harta (bagi Rumah Kluster, Semi-D dan Teres – melibatkan perkongsian struktur)".
20. ✓ MBJB 1.5 walls/fences/dividing walls "tidak boleh termasuk atau melibatkan lot jiran melainkan kebenaran bertulis telah diperolehi".
21. ✓ Putrajaya PDF p.6 item 3 "surat tiada halangan daripada jiran" (p.9 again); MDSB PDF p.8 "Surat kebenaran jiran sebelah" for categories B and C.
22. ✓ MBJB conditions 1.1–1.5: road names, lot and building numbers, north point; setbacks and roof overhang, room names and uses, added areas; GFA table; new work red, demolition yellow dashed.
23. ✓ MBJB 1.3 and MBPG 1.0 "Pemilik adalah bertanggungjawab sepenuhnya … kestabilan dan kekukuhan".
24. ✓ MBJB 1.2 (permit "tempoh setahun", reapply "no. rujukan Majlis yang sama"); MBPG 1.0 same for "Kelulusan Pelan".
25. ✓ MBJB 1.4: Jabatan Bomba dan Penyelamat, Syarikat Air Johor, Tenaga Nasional Berhad, Indah Water.
26–32. ✓ Covered by the Chief's verdict line above ("All 32 claims hold"); the reply as relayed to this session was cut off after claim 25.
