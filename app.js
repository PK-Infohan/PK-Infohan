const ARSIP_STORAGE_KEY = "arsip_pk_roinfohan_v2";
const MASTER_STORAGE_KEY = "master_unit_pk_roinfohan_v1";
const GAS_URL_STORAGE_KEY = "arsip_pk_gas_url_v1";
const DEFAULT_GAS_URL = "https://script.google.com/macros/s/AKfycbyIksW2hVtI7CI6VW73tCe9weFbo7GRikodlvFnhP-IBFMZkZrP_ZEcGwEpnPErSkL1/exec";

const DEFAULT_MASTER_UNITS = [
  {
    id: "U-KARO",
    bagian: "Biro Informasi Pertahanan",
    subbag: "Kepala Biro Informasi Pertahanan",
    p1Nama: "Brigjen TNI Rico Ricardo Sirait, B.S., M.MDS.",
    p1Jabatan: "Kepala Biro Informasi Pertahanan Setjen Kemhan",
    p1Pangkat: "Brigadir Jenderal TNI",
    p2Nama: "Letjen TNI Tri Budi Utomo",
    p2Jabatan: "Sekretaris Jenderal Kementerian Pertahanan",
    p2Pangkat: "Letnan Jenderal TNI"
  },
  {
    id: "U-TU",
    bagian: "Bagian Hubungan Kemitraan",
    subbag: "Subbag Tata Usaha Biro",
    p1Nama: "Letkol Cke I Putu Astika, S.T.",
    p1Jabatan: "Kasubbag Tata Usaha Biro Bag. Hubmitra Biro Infohan Setjen Kemhan",
    p1Pangkat: "Letkol Cke NRP. 11020009710575",
    p2Nama: "Kolonel Inf A. Yoyok Pranowo, S.IP., M.Han.",
    p2Jabatan: "Kabag Hubungan Kemitraan Biro Infohan Setjen Kemhan",
    p2Pangkat: "Kolonel Inf NRP. 11970036090675"
  },
  {
    id: "U-HUBLEMPEM",
    bagian: "Bagian Hubungan Kemitraan",
    subbag: "Subbag Hubungan Lembaga Pemerintah",
    p1Nama: "Sinta Tuhuningrum, S.E., M.M.",
    p1Jabatan: "Kasubbag Hubungan Lembaga Pemerintah Bag. Hubmitra Biro Infohan Setjen Kemhan",
    p1Pangkat: "Penata Tk. I III/d NIP. 198706042009122001",
    p2Nama: "Kolonel Inf A. Yoyok Pranowo, S.IP., M.Han.",
    p2Jabatan: "Kabag Hubungan Kemitraan Biro Infohan Setjen Kemhan",
    p2Pangkat: "Kolonel Inf NRP. 11970036090675"
  },
  {
    id: "U-PRODDOK",
    bagian: "Bagian Pemberitaan",
    subbag: "Subbag Produksi dan Dokumentasi",
    p1Nama: "Citra Wulan Suci, S.Ikom., M.A.P.",
    p1Jabatan: "Kasubbag Produksi dan Dokumentasi Bagian Pemberitaan Biro Infohan Setjen Kemhan",
    p1Pangkat: "Penata Tk. I III/d NIP. 198705032010122007",
    p2Nama: "Kolonel Inf Dikson Trisedyo, S.H., M.M.",
    p2Jabatan: "Kabag Pemberitaan Biro Infohan Setjen Kemhan",
    p2Pangkat: "Kolonel Inf NRP. 11980040690974"
  },
  {
    id: "U-LIPUTPUB",
    bagian: "Bagian Pemberitaan",
    subbag: "Subbag Peliputan dan Publikasi",
    p1Nama: "Mayor Laut (KH) Bondy Mulyatmo, S.Sos., M.M.",
    p1Jabatan: "Kasubbag Peliputan dan Publikasi Bag. Pemberitaan Biro Infohan Setjen Kemhan",
    p1Pangkat: "Mayor Laut (KH) NRP. 14153/P",
    p2Nama: "Kolonel Inf Dikson Trisedyo, S.H., M.M.",
    p2Jabatan: "Kabag Pemberitaan Biro Infohan Setjen Kemhan",
    p2Pangkat: "Kolonel Inf NRP. 11980040690974"
  },
  {
    id: "U-SIAPOPINI",
    bagian: "Bagian Opini",
    subbag: "Subbag Penyiapan Opini",
    p1Nama: "Mutiara Silaen, S.Ikom., M.AP.",
    p1Jabatan: "Kasubbag Penyiapan Opini Bag. Opini Biro Infohan Setjen Kemhan",
    p1Pangkat: "Penata Tk. I III/d NIP. 198511192010122003",
    p2Nama: "Kolonel Laut (P) Slamet Nurdiharto, S.H.",
    p2Jabatan: "Kepala Bagian Opini Biro Infohan Setjen Kemhan",
    p2Pangkat: "Kolonel Laut (P) NRP. 13268/P"
  },
  {
    id: "U-YANINFO",
    bagian: "Bagian Infopubliktaka",
    subbag: "Subbag Pelayanan Informasi Publik",
    p1Nama: "Nadia Maretti, S.Si., M.M.",
    p1Jabatan: "Kasubbag Pelayanan Informasi Publik Bag. Infopubliktaka Biro Infohan Setjen Kemhan",
    p1Pangkat: "Penata Tk. I III/d NIP. 197703272009122001",
    p2Nama: "Kolonel Arm Joko Riyanto, S.Sos., M.Si.",
    p2Jabatan: "Kepala Bagian Infopubliktaka Biro Infohan Setjen Kemhan",
    p2Pangkat: "Kolonel Arm NRP. 11950050281070"
  }
];

function getGasUrl() {
  return localStorage.getItem(GAS_URL_STORAGE_KEY) || DEFAULT_GAS_URL;
}

const formSection = document.getElementById("formSection");
const hasilSection = document.getElementById("hasilSection");
const masterSection = document.getElementById("masterSection");
const arsipSection = document.getElementById("arsipSection");
const sasaranContainer = document.getElementById("sasaranContainer");
const dokumenPK = document.getElementById("dokumenPK");

let masterUnits = JSON.parse(localStorage.getItem(MASTER_STORAGE_KEY) || "null") || structuredClone(DEFAULT_MASTER_UNITS);
let arsipList = JSON.parse(localStorage.getItem(ARSIP_STORAGE_KEY) || "[]");
let currentActiveDoc = null;

function showView(view) {
  [formSection, hasilSection, masterSection, arsipSection].forEach(el => el.classList.add("hidden"));
  if (view === "form") formSection.classList.remove("hidden");
  if (view === "hasil") hasilSection.classList.remove("hidden");
  if (view === "master") {
    renderMasterTable();
    masterSection.classList.remove("hidden");
  }
  if (view === "arsip") {
    renderArsipTable();
    arsipSection.classList.remove("hidden");
  }
}

function updateArsipCounter() {
  document.getElementById("arsipCount").textContent = arsipList.length;
}

function formatRp(angka) {
  return "Rp " + Number(angka || 0).toLocaleString("id-ID");
}

// Dropdown Bagian & Subbagian Otomatis dari Master
const selectBagian = document.getElementById("selectBagian");
const selectSubbag = document.getElementById("selectSubbag");

function refreshBagianSubbagDropdown(keepBagian = "", keepSubbagId = "") {
  const bagians = [...new Set(masterUnits.map(u => u.bagian))];
  selectBagian.innerHTML = bagians.map(b => `<option value="${b}">${b}</option>`).join("");
  if (keepBagian && bagians.includes(keepBagian)) {
    selectBagian.value = keepBagian;
  }
  refreshSubbagDropdown(keepSubbagId);
}

function refreshSubbagDropdown(keepSubbagId = "") {
  const chosenBagian = selectBagian.value;
  const unitsInBagian = masterUnits.filter(u => u.bagian === chosenBagian);
  selectSubbag.innerHTML = unitsInBagian.map(u => `<option value="${u.id}">${u.subbag}</option>`).join("");
  if (keepSubbagId && unitsInBagian.some(u => u.id === keepSubbagId)) {
    selectSubbag.value = keepSubbagId;
  }
  applySelectedUnitToForm();
}

function applySelectedUnitToForm() {
  const unit = masterUnits.find(u => u.id === selectSubbag.value);
  if (!unit) return;
  document.getElementById("p1Nama").value = unit.p1Nama || "";
  document.getElementById("p1Jabatan").value = unit.p1Jabatan || "";
  document.getElementById("p1Pangkat").value = unit.p1Pangkat || "";
  document.getElementById("p2Nama").value = unit.p2Nama || "";
  document.getElementById("p2Jabatan").value = unit.p2Jabatan || "";
  document.getElementById("p2Pangkat").value = unit.p2Pangkat || "";
}

selectBagian.addEventListener("change", () => refreshSubbagDropdown());
selectSubbag.addEventListener("change", applySelectedUnitToForm);

// Multi Sasaran Kegiatan -> Multi Indikator Kinerja
function createIndicatorRow(ind = { indikator: "", target: "", satuan: "", anggaran: "" }) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><textarea class="f-indikator" placeholder="Ketik indikator kinerja...">${ind.indikator}</textarea></td>
    <td><input type="text" class="f-target" placeholder="Contoh: 12 / 100%" value="${ind.target}" /></td>
    <td><input type="text" class="f-satuan" placeholder="Laporan / Giat" value="${ind.satuan}" /></td>
    <td><input type="number" class="f-anggaran" min="0" placeholder="0" value="${ind.anggaran}" /></td>
    <td style="text-align:center;"><button type="button" class="btn btn-outline btn-sm btn-del-ind">×</button></td>
  `;
  tr.querySelector(".btn-del-ind").addEventListener("click", () => {
    const tbody = tr.parentElement;
    if (tbody.children.length > 1) {
      tr.remove();
    } else {
      tr.querySelectorAll("textarea, input").forEach(el => (el.value = ""));
    }
  });
  return tr;
}

function addSasaranBlock(sasaranObj = { sasaran: "", indikatorList: [{}] }) {
  const block = document.createElement("div");
  block.className = "sasaran-card";
  block.innerHTML = `
    <div class="sasaran-top">
      <span class="sasaran-title">Sasaran Kegiatan <span class="sasaran-num"></span></span>
      <div class="toolbar-right">
        <button type="button" class="btn btn-secondary btn-sm btn-add-ind">+ Tambah Indikator</button>
        <button type="button" class="btn btn-danger btn-sm btn-del-sasaran">Hapus Sasaran</button>
      </div>
    </div>
    <textarea class="f-sasaran" placeholder="Ketik sasaran kegiatan...">${sasaranObj.sasaran || ""}</textarea>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th style="width:38%;">Indikator Kinerja</th>
            <th style="width:14%;">Target</th>
            <th style="width:14%;">Satuan</th>
            <th style="width:22%;">Anggaran (Rp)</th>
            <th style="width:12%;">Aksi</th>
          </tr>
        </thead>
        <tbody class="ind-tbody"></tbody>
      </table>
    </div>
  `;

  const tbody = block.querySelector(".ind-tbody");
  const list = sasaranObj.indikatorList && sasaranObj.indikatorList.length ? sasaranObj.indikatorList : [{}];
  list.forEach(item => tbody.appendChild(createIndicatorRow(item)));

  block.querySelector(".btn-add-ind").addEventListener("click", () => {
    tbody.appendChild(createIndicatorRow());
  });

  block.querySelector(".btn-del-sasaran").addEventListener("click", () => {
    if (sasaranContainer.children.length > 1) {
      block.remove();
      refreshSasaranNumbers();
    } else {
      alert("Minimal harus ada 1 Sasaran Kegiatan.");
    }
  });

  sasaranContainer.appendChild(block);
  refreshSasaranNumbers();
}

function refreshSasaranNumbers() {
  [...sasaranContainer.querySelectorAll(".sasaran-card")].forEach((card, i) => {
    card.querySelector(".sasaran-num").textContent = "#" + (i + 1);
  });
}

function collectFormData() {
  const sasaranList = [];
  let totalAnggaran = 0;

  [...sasaranContainer.querySelectorAll(".sasaran-card")].forEach(card => {
    const sasaranText = card.querySelector(".f-sasaran").value.trim();
    const indikatorList = [...card.querySelectorAll(".ind-tbody tr")].map(tr => {
      const anggaran = Number(tr.querySelector(".f-anggaran").value || 0);
      totalAnggaran += anggaran;
      return {
        indikator: tr.querySelector(".f-indikator").value.trim(),
        target: tr.querySelector(".f-target").value.trim(),
        satuan: tr.querySelector(".f-satuan").value.trim(),
        anggaran
      };
    }).filter(x => x.indikator || x.target || x.satuan || x.anggaran > 0);

    if (sasaranText || indikatorList.length > 0) {
      sasaranList.push({ sasaran: sasaranText, indikatorList });
    }
  });

  return {
    id: "PK-" + Date.now(),
    createdAt: new Date().toLocaleString("id-ID"),
    tahun: document.getElementById("tahunAnggaran").value.trim(),
    tempatTanggal: document.getElementById("tempatTanggal").value.trim(),
    bagian: selectBagian.value,
    subbag: selectSubbag.options[selectSubbag.selectedIndex]?.text || "",
    pihakPertama: {
      nama: document.getElementById("p1Nama").value.trim(),
      jabatan: document.getElementById("p1Jabatan").value.trim(),
      pangkat: document.getElementById("p1Pangkat").value.trim()
    },
    pihakKedua: {
      nama: document.getElementById("p2Nama").value.trim(),
      jabatan: document.getElementById("p2Jabatan").value.trim(),
      pangkat: document.getElementById("p2Pangkat").value.trim()
    },
    sasaranList,
    totalAnggaran
  };
}

function populateFormFromData(data) {
  document.getElementById("tahunAnggaran").value = data.tahun || "2026";
  document.getElementById("tempatTanggal").value = data.tempatTanggal || "";
  if (data.bagian) {
    const found = masterUnits.find(u => u.bagian === data.bagian && u.subbag === data.subbag);
    refreshBagianSubbagDropdown(data.bagian, found ? found.id : "");
  }
  document.getElementById("p1Nama").value = data.pihakPertama?.nama || "";
  document.getElementById("p1Jabatan").value = data.pihakPertama?.jabatan || "";
  document.getElementById("p1Pangkat").value = data.pihakPertama?.pangkat || "";
  document.getElementById("p2Nama").value = data.pihakKedua?.nama || "";
  document.getElementById("p2Jabatan").value = data.pihakKedua?.jabatan || "";
  document.getElementById("p2Pangkat").value = data.pihakKedua?.pangkat || "";

  sasaranContainer.innerHTML = "";
  (data.sasaranList && data.sasaranList.length ? data.sasaranList : [{}]).forEach(addSasaranBlock);
}

// Render Halaman 1 (Pernyataan + TTD) & Halaman 2 (Lampiran Multi Sasaran/Indikator + TTD)
function renderPerjanjianKinerja(data) {
  currentActiveDoc = data;

  let lampiranRowsHtml = "";
  let noCounter = 0;

  (data.sasaranList || []).forEach((sObj, sIdx) => {
    const inds = sObj.indikatorList && sObj.indikatorList.length ? sObj.indikatorList : [{}];
    inds.forEach((ind, iIdx) => {
      noCounter++;
      lampiranRowsHtml += `
        <tr>
          <td style="text-align:center;">${noCounter}</td>
          <td>${iIdx === 0 ? `<strong>${sIdx + 1}.</strong> ${sObj.sasaran}` : ""}</td>
          <td>${ind.indikator || ""}</td>
          <td style="text-align:center;">${ind.target || ""}</td>
          <td style="text-align:center;">${ind.satuan || ""}</td>
          <td style="text-align:right;">${formatRp(ind.anggaran)}</td>
        </tr>
      `;
    });
  });

  const ttdBlokHtml = `
    <div class="ttd-row">
      <div class="ttd-col">
        <div>Pihak Kedua,</div>
        <div>${data.pihakKedua.jabatan}</div>
        <div class="ttd-space"></div>
        <div><strong><u>${data.pihakKedua.nama}</u></strong></div>
        <div>${data.pihakKedua.pangkat}</div>
      </div>
      <div class="ttd-col">
        <div>${data.tempatTanggal}</div>
        <div>Pihak Pertama,</div>
        <div class="ttd-space"></div>
        <div><strong><u>${data.pihakPertama.nama}</u></strong></div>
        <div>${data.pihakPertama.pangkat}</div>
      </div>
    </div>
  `;

  dokumenPK.innerHTML = `
    <!-- LEMBARAN 1: PERNYATAAN PERJANJIAN KINERJA -->
    <div class="lembaran">
      <div class="kop">
        <p>Kementerian Pertahanan Republik Indonesia</p>
        <p>Sekretariat Jenderal Kemhan RI • Biro Informasi Pertahanan</p>
      </div>

      <div class="judul-pk">
        PERNYATAAN PERJANJIAN KINERJA<br />
        ${data.pihakPertama.jabatan}<br />
        TAHUN ${data.tahun}
      </div>

      <p class="paragraf">Dalam rangka mewujudkan manajemen pemerintahan yang efektif, transparan dan akuntabel serta berorientasi pada hasil, kami yang bertanda tangan di bawah ini:</p>

      <table class="identitas-table">
        <tr>
          <td style="width:110px;"><strong>Nama</strong></td>
          <td style="width:14px;">:</td>
          <td><strong>${data.pihakPertama.nama}</strong></td>
        </tr>
        <tr>
          <td><strong>Jabatan</strong></td>
          <td>:</td>
          <td>${data.pihakPertama.jabatan}</td>
        </tr>
      </table>
      <p class="paragraf">Selanjutnya disebut <strong>Pihak Pertama</strong>.</p>

      <table class="identitas-table">
        <tr>
          <td style="width:110px;"><strong>Nama</strong></td>
          <td style="width:14px;">:</td>
          <td><strong>${data.pihakKedua.nama}</strong></td>
        </tr>
        <tr>
          <td><strong>Jabatan</strong></td>
          <td>:</td>
          <td>${data.pihakKedua.jabatan}</td>
        </tr>
      </table>
      <p class="paragraf">Selaku atasan langsung Pihak Pertama, selanjutnya disebut <strong>Pihak Kedua</strong>.</p>

      <p class="paragraf">Pihak Pertama berjanji akan mewujudkan target kinerja sesuai lampiran Perjanjian Kinerja ini, dalam rangka mencapai target kinerja jangka pendek dan jangka menengah yang telah ditetapkan dalam dokumen perencanaan. Keberhasilan dan kegagalan pencapaian target kinerja tersebut menjadi tanggung jawab kami.</p>

      <p class="paragraf">Pihak Kedua akan memberikan supervisi yang diperlukan serta akan melakukan evaluasi terhadap capaian kinerja dari perjanjian ini dan mengambil tindakan yang diperlukan dalam rangka pemberian penghargaan dan sanksi.</p>

      ${ttdBlokHtml}
    </div>

    <!-- LEMBARAN 2: LAMPIRAN PERJANJIAN KINERJA -->
    <div class="lembaran page-break">
      <div class="kop">
        <p>Kementerian Pertahanan Republik Indonesia</p>
        <p>Sekretariat Jenderal Kemhan RI • Biro Informasi Pertahanan</p>
      </div>

      <div class="judul-pk">
        LAMPIRAN PERJANJIAN KINERJA<br />
        ${data.pihakPertama.jabatan}<br />
        TAHUN ${data.tahun}
      </div>

      <table class="lampiran-table">
        <thead>
          <tr>
            <th style="width:40px;">No</th>
            <th style="width:27%;">Sasaran Kegiatan</th>
            <th style="width:31%;">Indikator Kinerja</th>
            <th style="width:80px;">Target</th>
            <th style="width:75px;">Satuan</th>
            <th style="width:125px;">Anggaran</th>
          </tr>
        </thead>
        <tbody>
          ${lampiranRowsHtml || `<tr><td colspan="6" style="text-align:center;">Belum ada rincian sasaran dan indikator</td></tr>`}
          <tr>
            <td colspan="5" style="text-align:right;"><strong>Jumlah Anggaran</strong></td>
            <td style="text-align:right;"><strong>${formatRp(data.totalAnggaran)}</strong></td>
          </tr>
        </tbody>
      </table>

      ${ttdBlokHtml}
    </div>
  `;

  showView("hasil");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Lembar Kerja Master Bagian & Subbag
function renderMasterTable() {
  const tbody = document.getElementById("masterTableBody");
  tbody.innerHTML = masterUnits.map((u, idx) => `
    <tr data-idx="${idx}">
      <td><input type="text" class="m-bagian" value="${u.bagian || ""}" /></td>
      <td><input type="text" class="m-subbag" value="${u.subbag || ""}" /></td>
      <td><input type="text" class="m-p1Nama" value="${u.p1Nama || ""}" /></td>
      <td><input type="text" class="m-p1Jabatan" value="${u.p1Jabatan || ""}" /></td>
      <td><input type="text" class="m-p1Pangkat" value="${u.p1Pangkat || ""}" /></td>
      <td><input type="text" class="m-p2Nama" value="${u.p2Nama || ""}" /></td>
      <td><input type="text" class="m-p2Jabatan" value="${u.p2Jabatan || ""}" /></td>
      <td><input type="text" class="m-p2Pangkat" value="${u.p2Pangkat || ""}" /></td>
      <td style="text-align:center;"><button type="button" class="btn btn-danger btn-sm btn-del-master">×</button></td>
    </tr>
  `).join("");

  tbody.querySelectorAll(".btn-del-master").forEach(btn => {
    btn.addEventListener("click", () => {
      const tr = btn.closest("tr");
      const idx = Number(tr.dataset.idx);
      masterUnits.splice(idx, 1);
      renderMasterTable();
    });
  });
}

document.getElementById("btnTambahMasterUnit").addEventListener("click", () => {
  masterUnits.push({
    id: "U-" + Date.now(),
    bagian: "Bagian Hubungan Kemitraan",
    subbag: "Subbagian Baru",
    p1Nama: "",
    p1Jabatan: "",
    p1Pangkat: "",
    p2Nama: "",
    p2Jabatan: "",
    p2Pangkat: ""
  });
  renderMasterTable();
});

document.getElementById("btnSimpanMaster").addEventListener("click", () => {
  const rows = [...document.querySelectorAll("#masterTableBody tr")];
  masterUnits = rows.map((tr, i) => ({
    id: masterUnits[i]?.id || ("U-" + Date.now() + "-" + i),
    bagian: tr.querySelector(".m-bagian").value.trim(),
    subbag: tr.querySelector(".m-subbag").value.trim(),
    p1Nama: tr.querySelector(".m-p1Nama").value.trim(),
    p1Jabatan: tr.querySelector(".m-p1Jabatan").value.trim(),
    p1Pangkat: tr.querySelector(".m-p1Pangkat").value.trim(),
    p2Nama: tr.querySelector(".m-p2Nama").value.trim(),
    p2Jabatan: tr.querySelector(".m-p2Jabatan").value.trim(),
    p2Pangkat: tr.querySelector(".m-p2Pangkat").value.trim()
  })).filter(u => u.bagian && u.subbag);

  localStorage.setItem(MASTER_STORAGE_KEY, JSON.stringify(masterUnits));
  refreshBagianSubbagDropdown(selectBagian.value, selectSubbag.value);
  alert("Data Master Bagian & Subbagian berhasil diperbarui.");
});

document.getElementById("btnResetMaster").addEventListener("click", () => {
  if (!confirm("Kembalikan daftar Bagian & Subbagian ke data awal?")) return;
  masterUnits = structuredClone(DEFAULT_MASTER_UNITS);
  localStorage.setItem(MASTER_STORAGE_KEY, JSON.stringify(masterUnits));
  renderMasterTable();
  refreshBagianSubbagDropdown();
});

// Arsip & Sinkronisasi Google Sheets
async function saveToArsip(doc) {
  arsipList.unshift(doc);
  localStorage.setItem(ARSIP_STORAGE_KEY, JSON.stringify(arsipList));
  updateArsipCounter();

  const gasUrl = getGasUrl();
  if (gasUrl) {
    try {
      await fetch(gasUrl, {
        method: "POST",
        body: JSON.stringify({ action: "savePK", payload: doc })
      });
    } catch (err) {
      console.warn("Gagal sinkron ke Google Sheets:", err);
    }
  }
}

function renderArsipTable() {
  const tbody = document.getElementById("arsipTableBody");
  if (!arsipList.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#64748b;">Belum ada arsip Perjanjian Kinerja.</td></tr>`;
    return;
  }

  tbody.innerHTML = arsipList.map((doc, idx) => `
    <tr>
      <td>${doc.createdAt || "-"}</td>
      <td>${doc.tahun}</td>
      <td><strong>${doc.bagian || ""}</strong><br><small>${doc.subbag || ""}</small></td>
      <td>${doc.pihakPertama?.nama || "-"}</td>
      <td>${doc.pihakKedua?.nama || "-"}</td>
      <td>${formatRp(doc.totalAnggaran)}</td>
      <td>
        <div class="toolbar-right">
          <button type="button" class="btn btn-primary btn-sm" onclick="bukaArsip(${idx})">Buka / PDF</button>
          <button type="button" class="btn btn-outline btn-sm" onclick="editArsip(${idx})">Edit</button>
          <button type="button" class="btn btn-danger btn-sm" onclick="hapusArsip(${idx})">Hapus</button>
        </div>
      </td>
    </tr>
  `).join("");
}

window.bukaArsip = idx => renderPerjanjianKinerja(arsipList[idx]);
window.editArsip = idx => {
  populateFormFromData(arsipList[idx]);
  showView("form");
};
window.hapusArsip = idx => {
  if (!confirm("Hapus arsip ini dari penyimpanan browser?")) return;
  arsipList.splice(idx, 1);
  localStorage.setItem(ARSIP_STORAGE_KEY, JSON.stringify(arsipList));
  updateArsipCounter();
  renderArsipTable();
};

// Download PDF 2 Lembar
document.getElementById("btnDownloadPdf").addEventListener("click", () => {
  if (!currentActiveDoc) return;
  const safeSub = (currentActiveDoc.subbag || "PK_Roinfohan").replace(/[^a-zA-Z0-9_-]/g, "_");
  const filename = `PK_${safeSub}_${currentActiveDoc.tahun}.pdf`;

  const opt = {
    margin: [10, 12, 10, 12],
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opt).from(dokumenPK).save();
});

// Event Form & Navigasi
document.getElementById("pkForm").addEventListener("submit", async e => {
  e.preventDefault();
  const doc = collectFormData();
  await saveToArsip(doc);
  renderPerjanjianKinerja(doc);
});

document.getElementById("btnTambahSasaran").addEventListener("click", () => addSasaranBlock());
document.getElementById("btnEditKembali").addEventListener("click", () => showView("form"));
document.getElementById("btnKeForm").addEventListener("click", () => showView("form"));
document.getElementById("btnKeMaster").addEventListener("click", () => showView("master"));
document.getElementById("btnKeArsip").addEventListener("click", () => showView("arsip"));
document.getElementById("btnKeHasil").addEventListener("click", () => {
  if (currentActiveDoc) renderPerjanjianKinerja(currentActiveDoc);
  else renderPerjanjianKinerja(collectFormData());
});

document.getElementById("btnKosongkan").addEventListener("click", () => {
  sasaranContainer.innerHTML = "";
  addSasaranBlock();
});

document.getElementById("btnIsiContoh").addEventListener("click", () => {
  document.getElementById("tahunAnggaran").value = "2025";
  document.getElementById("tempatTanggal").value = "Jakarta, Maret 2025";
  refreshBagianSubbagDropdown("Bagian Pemberitaan", "U-PRODDOK");

  sasaranContainer.innerHTML = "";
  addSasaranBlock({
    sasaran: "Terlaksananya produksi dan dokumentasi terkait pemberitaan informasi pertahanan yang berkualitas",
    indikatorList: [
      { indikator: "Jumlah Bahan Hasil Pendokumentasian Kegiatan Kemhan Yang Berkualitas", target: "288", satuan: "Dokumen", anggaran: 643695000 },
      { indikator: "Jumlah Penyiapan Konten Media Interaktif Terkait Informasi Tentang Pertahanan", target: "12", satuan: "Laporan", anggaran: 170461000 }
    ]
  });
});

document.getElementById("gasUrlInput").value = getGasUrl();
document.getElementById("btnSimpanGasUrl").addEventListener("click", () => {
  localStorage.setItem(GAS_URL_STORAGE_KEY, document.getElementById("gasUrlInput").value.trim());
  alert("URL Google Apps Script tersimpan.");
});

document.getElementById("btnTarikArsipGas").addEventListener("click", async () => {
  const gasUrl = getGasUrl();
  if (!gasUrl) return alert("Isi URL Google Apps Script terlebih dahulu.");
  try {
    const res = await fetch(gasUrl + "?action=listPK");
    const json = await res.json();
    if (json.status === "ok" && Array.isArray(json.data)) {
      arsipList = json.data;
      localStorage.setItem(ARSIP_STORAGE_KEY, JSON.stringify(arsipList));
      updateArsipCounter();
      renderArsipTable();
      alert("Arsip berhasil disinkronkan dari Google Sheets.");
    }
  } catch (err) {
    alert("Gagal menarik arsip dari Google Sheets: " + err.message);
  }
});

// Inisialisasi awal
refreshBagianSubbagDropdown();
updateArsipCounter();
addSasaranBlock();
