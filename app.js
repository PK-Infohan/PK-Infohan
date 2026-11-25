const ARSIP_STORAGE_KEY = "arsip_pk_roinfohan_v1";
const GAS_URL_STORAGE_KEY = "arsip_pk_gas_url_v1";
const DEFAULT_GAS_URL = "https://script.google.com/macros/s/AKfycbyIksW2hVtI7CI6VW73tCe9weFbo7GRikodlvFnhP-IBFMZkZrP_ZEcGwEpnPErSkL1/exec";

function getGasUrl() {
  return localStorage.getItem(GAS_URL_STORAGE_KEY) || DEFAULT_GAS_URL;
}

const formSection = document.getElementById("formSection");
const hasilSection = document.getElementById("hasilSection");
const arsipSection = document.getElementById("arsipSection");
const inputRowsBody = document.getElementById("inputRowsBody");
const dokumenPK = document.getElementById("dokumenPK");

let currentActiveDoc = null;
let arsipList = JSON.parse(localStorage.getItem(ARSIP_STORAGE_KEY) || "[]");

function showView(view) {
  [formSection, hasilSection, arsipSection].forEach(el => el.classList.add("hidden"));
  if (view === "form") formSection.classList.remove("hidden");
  if (view === "hasil") hasilSection.classList.remove("hidden");
  if (view === "arsip") {
    renderArsipTable();
    arsipSection.classList.remove("hidden");
  }
}

function updateArsipCounter() {
  document.getElementById("arsipCount").textContent = arsipList.length;
}

function addRow(row = { sasaran: "", indikator: "", target: "", satuan: "", anggaran: "" }) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="row-num" style="text-align:center;"></td>
    <td><textarea class="f-sasaran" placeholder="Sasaran kegiatan...">${row.sasaran}</textarea></td>
    <td><textarea class="f-indikator" placeholder="Indikator kinerja...">${row.indikator}</textarea></td>
    <td><input type="text" class="f-target" placeholder="12 / 95%" value="${row.target}" /></td>
    <td><input type="text" class="f-satuan" placeholder="Laporan" value="${row.satuan}" /></td>
    <td><input type="number" class="f-anggaran" min="0" placeholder="0" value="${row.anggaran}" /></td>
    <td style="text-align:center;"><button type="button" class="btn btn-outline btn-sm btn-del">×</button></td>
  `;
  tr.querySelector(".btn-del").addEventListener("click", () => {
    tr.remove();
    refreshRowNumbers();
  });
  inputRowsBody.appendChild(tr);
  refreshRowNumbers();
}

function refreshRowNumbers() {
  [...inputRowsBody.querySelectorAll("tr")].forEach((tr, idx) => {
    tr.querySelector(".row-num").textContent = idx + 1;
  });
}

function formatRp(angka) {
  return "Rp " + Number(angka || 0).toLocaleString("id-ID");
}

function collectFormData() {
  const items = [...inputRowsBody.querySelectorAll("tr")].map((tr, idx) => ({
    no: idx + 1,
    sasaran: tr.querySelector(".f-sasaran").value.trim(),
    indikator: tr.querySelector(".f-indikator").value.trim(),
    target: tr.querySelector(".f-target").value.trim(),
    satuan: tr.querySelector(".f-satuan").value.trim(),
    anggaran: Number(tr.querySelector(".f-anggaran").value || 0)
  })).filter(x => x.sasaran || x.indikator || x.target || x.anggaran > 0);

  return {
    id: "PK-" + Date.now(),
    createdAt: new Date().toLocaleString("id-ID"),
    tahun: document.getElementById("tahunAnggaran").value.trim(),
    tempatTanggal: document.getElementById("tempatTanggal").value.trim(),
    unitLabel: document.getElementById("unitLabel").value.trim(),
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
    items,
    totalAnggaran: items.reduce((sum, i) => sum + i.anggaran, 0)
  };
}

function populateFormFromData(data) {
  document.getElementById("tahunAnggaran").value = data.tahun || "";
  document.getElementById("tempatTanggal").value = data.tempatTanggal || "";
  document.getElementById("unitLabel").value = data.unitLabel || "";
  document.getElementById("p1Nama").value = data.pihakPertama?.nama || "";
  document.getElementById("p1Jabatan").value = data.pihakPertama?.jabatan || "";
  document.getElementById("p1Pangkat").value = data.pihakPertama?.pangkat || "";
  document.getElementById("p2Nama").value = data.pihakKedua?.nama || "";
  document.getElementById("p2Jabatan").value = data.pihakKedua?.jabatan || "";
  document.getElementById("p2Pangkat").value = data.pihakKedua?.pangkat || "";

  inputRowsBody.innerHTML = "";
  (data.items && data.items.length ? data.items : [{}]).forEach(addRow);
}

function renderPerjanjianKinerja(data) {
  currentActiveDoc = data;
  const rowsHtml = (data.items || []).map((it, idx) => `
    <tr>
      <td style="text-align:center;">${idx + 1}</td>
      <td>${it.sasaran}</td>
      <td>${it.indikator}</td>
      <td style="text-align:center;">${it.target}</td>
      <td style="text-align:center;">${it.satuan}</td>
      <td style="text-align:right;">${formatRp(it.anggaran)}</td>
    </tr>
  `).join("");

  dokumenPK.innerHTML = `
    <div class="kop">
      <p>Kementerian Pertahanan Republik Indonesia</p>
      <p>Sekretariat Jenderal • Biro Informasi Pertahanan</p>
    </div>

    <div class="judul-pk">PERJANJIAN KINERJA TAHUN ${data.tahun}</div>

    <p style="font-size:13px;">Dalam rangka mewujudkan manajemen pemerintahan yang efektif, transparan, dan akuntabel serta berorientasi pada hasil, kami yang bertanda tangan di bawah ini:</p>

    <table class="identitas-table">
      <tr>
        <td style="width:120px;"><strong>Nama</strong></td>
        <td style="width:12px;">:</td>
        <td><strong>${data.pihakPertama.nama}</strong></td>
      </tr>
      <tr>
        <td><strong>Jabatan</strong></td>
        <td>:</td>
        <td>${data.pihakPertama.jabatan}</td>
      </tr>
    </table>
    <p style="font-size:13px;">Selanjutnya disebut <strong>Pihak Pertama</strong>.</p>

    <table class="identitas-table">
      <tr>
        <td style="width:120px;"><strong>Nama</strong></td>
        <td style="width:12px;">:</td>
        <td><strong>${data.pihakKedua.nama}</strong></td>
      </tr>
      <tr>
        <td><strong>Jabatan</strong></td>
        <td>:</td>
        <td>${data.pihakKedua.jabatan}</td>
      </tr>
    </table>
    <p style="font-size:13px;">Selaku atasan langsung Pihak Pertama, selanjutnya disebut <strong>Pihak Kedua</strong>.</p>

    <p style="font-size:13px;">Pihak Pertama berjanji akan mewujudkan target kinerja sesuai lampiran Perjanjian Kinerja ini, dalam rangka mencapai target kinerja jangka pendek dan jangka menengah yang telah ditetapkan dalam dokumen perencanaan.</p>

    <div class="judul-pk" style="margin-top:20px;">LAMPIRAN PERJANJIAN KINERJA TAHUN ${data.tahun}</div>

    <table class="pk-table">
      <thead>
        <tr>
          <th style="width:40px;">No</th>
          <th>Sasaran Kegiatan</th>
          <th>Indikator Kinerja</th>
          <th style="width:85px;">Target</th>
          <th style="width:80px;">Satuan</th>
          <th style="width:135px;">Anggaran</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml || `<tr><td colspan="6" style="text-align:center;">Belum ada rincian indikator</td></tr>`}
        <tr>
          <td colspan="5" style="text-align:right;"><strong>Jumlah Anggaran</strong></td>
          <td style="text-align:right;"><strong>${formatRp(data.totalAnggaran)}</strong></td>
        </tr>
      </tbody>
    </table>

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

  showView("hasil");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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
      <td><strong>${doc.unitLabel || "-"}</strong></td>
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

window.bukaArsip = function(idx) {
  renderPerjanjianKinerja(arsipList[idx]);
};

window.editArsip = function(idx) {
  populateFormFromData(arsipList[idx]);
  showView("form");
};

window.hapusArsip = function(idx) {
  if (!confirm("Hapus arsip Perjanjian Kinerja ini dari daftar lokal?")) return;
  arsipList.splice(idx, 1);
  localStorage.setItem(ARSIP_STORAGE_KEY, JSON.stringify(arsipList));
  updateArsipCounter();
  renderArsipTable();
};

// Download PDF langsung menggunakan html2pdf.js
document.getElementById("btnDownloadPdf").addEventListener("click", () => {
  if (!currentActiveDoc) return;
  const safeUnit = (currentActiveDoc.unitLabel || "Biro_Infohan").replace(/[^a-zA-Z0-9_-]/g, "_");
  const filename = `PK_${safeUnit}_${currentActiveDoc.tahun}.pdf`;

  const opt = {
    margin: [12, 14, 12, 14],
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opt).from(dokumenPK).save();
});

// Submit Form -> Simpan Arsip & Tampilkan Dokumen PK
document.getElementById("pkForm").addEventListener("submit", async e => {
  e.preventDefault();
  const doc = collectFormData();
  await saveToArsip(doc);
  renderPerjanjianKinerja(doc);
});

// Navigasi & Tombol Pendukung
document.getElementById("btnTambahBaris").addEventListener("click", () => addRow());
document.getElementById("btnEditKembali").addEventListener("click", () => showView("form"));
document.getElementById("btnKeForm").addEventListener("click", () => showView("form"));
document.getElementById("btnKeHasil").addEventListener("click", () => {
  if (currentActiveDoc) renderPerjanjianKinerja(currentActiveDoc);
  else renderPerjanjianKinerja(collectFormData());
});
document.getElementById("btnKeArsip").addEventListener("click", () => showView("arsip"));

document.getElementById("btnKosongkan").addEventListener("click", () => {
  document.getElementById("pkForm").reset();
  inputRowsBody.innerHTML = "";
  addRow();
});

// Konfigurasi Google Apps Script untuk Arsip Cloud
document.getElementById("gasUrlInput").value = getGasUrl();
document.getElementById("btnSimpanGasUrl").addEventListener("click", () => {
  localStorage.setItem(GAS_URL_STORAGE_KEY, document.getElementById("gasUrlInput").value.trim());
  alert("URL Google Apps Script untuk arsip cloud tersimpan.");
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

document.getElementById("btnIsiContoh").addEventListener("click", () => {
  document.getElementById("tahunAnggaran").value = "2026";
  document.getElementById("tempatTanggal").value = "Jakarta, Januari 2026";
  document.getElementById("unitLabel").value = "Subbag Tata Usaha Biro Bag Hubmitra";
  document.getElementById("p1Nama").value = "I Putu Astika, S.T.";
  document.getElementById("p1Jabatan").value = "Kasubbag Tata Usaha Biro Bag. Hubmitra Biro Infohan Setjen Kemhan";
  document.getElementById("p1Pangkat").value = "Letkol Cke NRP. 11020009710575";
  document.getElementById("p2Nama").value = "A. Yoyok Pranowo, S.IP., M.Han.";
  document.getElementById("p2Jabatan").value = "Kabag Hubmitra Biro Infohan Setjen Kemhan";
  document.getElementById("p2Pangkat").value = "Kolonel Inf NRP. 11970036090675";

  inputRowsBody.innerHTML = "";
  [
    { sasaran: "Terlaksananya Layanan Umum, Ketatausahaan, Kerumahtanggaan dan Kepegawaian Biro Yang Tepat Waktu", indikator: "Persentase Pengelolaan BMN Yang Tertib", target: "90%", satuan: "Persen", anggaran: 1714602000 },
    { sasaran: "Tersedianya Dokumen Perencanaan, Penganggaran dan Pelaporan Biro Informasi Pertahanan", indikator: "Persentase Produk Perencanaan dan Penganggaran Biro Yang Akuntabel", target: "95%", satuan: "Persen", anggaran: 136880000 }
  ].forEach(addRow);
});

updateArsipCounter();
addRow();
