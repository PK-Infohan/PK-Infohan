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
    p1JabatanSingkat: "Kepala Biro Informasi Pertahanan",
    p1Pangkat: "Brigadir Jenderal TNI",
    p2Nama: "Letjen TNI Tri Budi Utomo",
    p2Jabatan: "Sekretaris Jenderal Kementerian Pertahanan",
    p2JabatanSingkat: "Sekretaris Jenderal",
    p2Pangkat: "Letnan Jenderal TNI"
  },
  {
    id: "U-TU",
    bagian: "Bagian Hubungan Kemitraan",
    subbag: "Subbag Tata Usaha Biro",
    p1Nama: "Letkol Cke I Putu Astika, S.T.",
    p1Jabatan: "Kasubbag Tata Usaha Biro Bag. Hubmitra Biro Infohan Setjen Kemhan",
    p1JabatanSingkat: "Kasubbag Tata Usaha Biro",
    p1Pangkat: "Letkol Cke NRP. 11020009710575",
    p2Nama: "Kolonel Inf A. Yoyok Pranowo, S.IP., M.Han.",
    p2Jabatan: "Kabag Hubungan Kemitraan Biro Infohan Setjen Kemhan",
    p2JabatanSingkat: "Kabag Hubungan Kemitraan",
    p2Pangkat: "Kolonel Inf NRP. 11970036090675"
  },
  {
    id: "U-HUBLEMPEM",
    bagian: "Bagian Hubungan Kemitraan",
    subbag: "Subbag Hubungan Lembaga Pemerintah",
    p1Nama: "Sinta Tuhuningrum, S.E., M.M.",
    p1Jabatan: "Kasubbag Hubungan Lembaga Pemerintah Bag. Hubmitra Biro Infohan Setjen Kemhan",
    p1JabatanSingkat: "Kasubbag Hublempem",
    p1Pangkat: "Penata Tk. I III/d NIP. 198706042009122001",
    p2Nama: "Kolonel Inf A. Yoyok Pranowo, S.IP., M.Han.",
    p2Jabatan: "Kabag Hubungan Kemitraan Biro Infohan Setjen Kemhan",
    p2JabatanSingkat: "Kabag Hubungan Kemitraan",
    p2Pangkat: "Kolonel Inf NRP. 11970036090675"
  },
  {
    id: "U-PRODDOK",
    bagian: "Bagian Pemberitaan",
    subbag: "Subbag Produksi dan Dokumentasi",
    p1Nama: "Citra Wulan Suci, S.Ikom., M.A.P.",
    p1Jabatan: "Kasubbag Produksi dan Dokumentasi Bagian Pemberitaan Biro Infohan Setjen Kemhan",
    p1JabatanSingkat: "Kasubbag Proddok",
    p1Pangkat: "Penata Tk. I III/d NIP. 198705032010122007",
    p2Nama: "Kolonel Inf Dikson Trisedyo, S.H., M.M.",
    p2Jabatan: "Kabag Pemberitaan Biro Infohan Setjen Kemhan",
    p2JabatanSingkat: "Kabag Pemberitaan",
    p2Pangkat: "Kolonel Inf NRP. 11980040690974"
  },
  {
    id: "U-SIAPOPINI",
    bagian: "Bagian Opini",
    subbag: "Subbag Penyiapan Opini",
    p1Nama: "Mutiara Silaen, S.Ikom., M.AP.",
    p1Jabatan: "Kasubbag Penyiapan Opini Bagian Opini Biro Infohan Setjen Kemhan",
    p1JabatanSingkat: "Kasubbag Siap Opini",
    p1Pangkat: "Penata Tk. I III/d NIP. 198511192010122003",
    p2Nama: "Kolonel Laut (P) Slamet Nurdiharto, S.H.",
    p2Jabatan: "Kepala Bagian Opini Biro Infohan Setjen Kemhan",
    p2JabatanSingkat: "Kepala Bagian Opini",
    p2Pangkat: "Kolonel Laut (P) NRP. 13268/P"
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
  document.getElementById("p1JabatanSingkat").value = unit.p1JabatanSingkat || "";
  document.getElementById("p1Pangkat").value = unit.p1Pangkat || "";
  document.getElementById("p2Nama").value = unit.p2Nama || "";
  document.getElementById("p2Jabatan").value = unit.p2Jabatan || "";
  document.getElementById("p2JabatanSingkat").value = unit.p2JabatanSingkat || "";
  document.getElementById("p2Pangkat").value = unit.p2Pangkat || "";
}

selectBagian.addEventListener("change", () => refreshSubbagDropdown());
selectSubbag.addEventListener("change", applySelectedUnitToForm);

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
    if (tbody.children.length > 1) tr.remove();
    else tr.querySelectorAll("textarea, input").forEach(el => (el.value = ""));
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

    if (sasaranText || indikatorList
