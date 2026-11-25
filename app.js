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
