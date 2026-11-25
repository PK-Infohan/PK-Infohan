const ARSIP_STORAGE_KEY = "arsip_pk_kemhan_v3";
const DB_PEJABAT_STORAGE_KEY = "db_pejabat_pk_kemhan_v2";
const USERS_STORAGE_KEY = "users_pk_kemhan_v1";
const SESSION_STORAGE_KEY = "session_pk_kemhan_v1";
const GAS_URL_STORAGE_KEY = "arsip_pk_gas_url_v1";
const DEFAULT_GAS_URL = "https://script.google.com/macros/s/AKfycbzX0lJ4554NyCUeRKr5ms_m3a7mv5j0eJf8-H6pPtMKTlmTH1Y86ZHFVxcpnrasnVI2/exec";

// ==========================================
// DATA AWAL ESELON I -> II -> III -> IV
// ==========================================
const DEFAULT_DB_PEJABAT = {
  eselon1List: [
    {
      id: "E1-SETJEN",
      namaUnit: "Sekretariat Jenderal Kemhan",
      jabatanPimpinan: "Sekretaris Jenderal Kemhan",
      namaPejabat: "",
      pangkatNrpNip: "",
      atasanJabatan: "Menteri Pertahanan Republik Indonesia",
      atasanNama: "",
      atasanPangkat: "",
      eselon2List: [
        {
          id: "E2-INFOHAN",
          namaUnit: "Biro Informasi Pertahanan",
          jabatanPimpinan: "Kepala Biro Informasi Pertahanan Setjen Kemhan",
          namaPejabat: "",
          pangkatNrpNip: "",
          bagianList: [
            {
              id: "BAG-HUBMITRA",
              namaBagian: "Bagian Hubungan Kemitraan Biro Infohan Setjen Kemhan",
              jabatanKabag: "Kepala Bagian Hubungan Kemitraan Biro Infohan Setjen Kemhan",
              namaKabag: "",
              pangkatKabag: "",
              subbagList: [
                {
                  id: "SUB-HUBMITRA-1",
                  namaSubbag: "Subbagian Hubungan Lembaga Pemerintah",
                  jabatanKasubbag: "Kasubbag Hubungan Lembaga Pemerintah Bag. Hubmitra Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-HUBMITRA-2",
                  namaSubbag: "Subbagian Hubungan Lembaga Non Pemerintah",
                  jabatanKasubbag: "Kasubbag Hubungan Lembaga Non Pemerintah Bag. Hubmitra Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-HUBMITRA-3",
                  namaSubbag: "Subbagian Tata Usaha Biro",
                  jabatanKasubbag: "Kasubbag Tata Usaha Biro Bag. Hubmitra Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                }
              ]
            },
            {
              id: "BAG-PEMBERITAAN",
              namaBagian: "Bagian Hubungan Pemberitaan Biro Infohan Setjen Kemhan",
              jabatanKabag: "Kepala Bagian Pemberitaan Biro Infohan Setjen Kemhan",
              namaKabag: "",
              pangkatKabag: "",
              subbagList: [
                {
                  id: "SUB-PEMBERITAAN-1",
                  namaSubbag: "Subbagian Produksi dan Dokumentasi",
                  jabatanKasubbag: "Kasubbag Produksi dan Dokumentasi Bag. Pemberitaan Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-PEMBERITAAN-2",
                  namaSubbag: "Subbagian Peliputan dan Publikasi",
                  jabatanKasubbag: "Kasubbag Peliputan dan Publikasi Bag. Pemberitaan Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-PEMBERITAAN-3",
                  namaSubbag: "Subbagian Hubungan Media Massa",
                  jabatanKasubbag: "Kasubbag Hubungan Media Massa Bag. Pemberitaan Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                }
              ]
            },
            {
              id: "BAG-OPINI",
              namaBagian: "Bagian Hubungan Opini Biro Infohan Setjen Kemhan",
              jabatanKabag: "Kepala Bagian Opini Biro Infohan Setjen Kemhan",
              namaKabag: "",
              pangkatKabag: "",
              subbagList: [
                {
                  id: "SUB-OPINI-1",
                  namaSubbag: "Subbagian Penyiapan Opini",
                  jabatanKasubbag: "Kasubbag Penyiapan Opini Bag. Opini Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-OPINI-2",
                  namaSubbag: "Subbagian Pembentukan Opini",
                  jabatanKasubbag: "Kasubbag Pembentukan Opini Bag. Opini Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-OPINI-3",
                  namaSubbag: "Subbagian Opini Media Internet",
                  jabatanKasubbag: "Kasubbag Opini Media Internet Bag. Opini Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                }
              ]
            },
            {
              id: "BAG-INFOPUBLIKTAKA",
              namaBagian: "Bagian Informasi Publik dan Perpustakaan Biro Infohan Setjen Kemhan",
              jabatanKabag: "Kepala Bagian Informasi Publik dan Perpustakaan Biro Infohan Setjen Kemhan",
              namaKabag: "",
              pangkatKabag: "",
              subbagList: [
                {
                  id: "SUB-INFOPUBLIKTAKA-1",
                  namaSubbag: "Subbagian Pelayanan Informasi Publik",
                  jabatanKasubbag: "Kasubbag Pelayanan Informasi Publik Bag. Infopubliktaka Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-INFOPUBLIKTAKA-2",
                  namaSubbag: "Subbagian Penerbitan dan Promosi",
                  jabatanKasubbag: "Kasubbag Penerbitan dan Promosi Bag. Infopubliktaka Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                },
                {
                  id: "SUB-INFOPUBLIKTAKA-3",
                  namaSubbag: "Subbagian Perpustakaan",
                  jabatanKasubbag: "Kasubbag Perpustakaan Bag. Infopubliktaka Biro Infohan Setjen Kemhan",
                  namaPejabat: "",
                  pangkatNrpNip: ""
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const DEFAULT_USERS = [
  {
    id: "USR-ADMIN",
    username: "admin",
    password: "adminkemhan",
    namaTampilan: "Administrator Kemhan",
    role: "admin",
    eselon2Id: ""
  },
  {
    id: "USR-INFOHAN",
    username: "infohan",
    password: "infohan123",
    namaTampilan: "Admin Satker Biro Infohan",
    role: "satker",
    eselon2Id: "E2-INFOHAN"
  }
];

function getGasUrl() {
  return localStorage.getItem(GAS_URL_STORAGE_KEY) || DEFAULT_GAS_URL;
}

let dbPejabat = JSON.parse(localStorage.getItem(DB_PEJABAT_STORAGE_KEY) || "null") || structuredClone(DEFAULT_DB_PEJABAT);
let usersList = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "null") || structuredClone(DEFAULT_USERS);
let arsipList = JSON.parse(localStorage.getItem(ARSIP_STORAGE_KEY) || "[]");
let currentUser = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || "null");
let currentActiveDoc = null;

// Elemen DOM
const loginSection = document.getElementById("loginSection");
const appShell = document.getElementById("appShell");
const formSection = document.getElementById("formSection");
const hasilSection = document.getElementById("hasilSection");
const masterSection = document.getElementById("masterSection");
const arsipSection = document.getElementById("arsipSection");
const usersSection = document.getElementById("usersSection");
const sasaranContainer = document.getElementById("sasaranContainer");
const kegiatanAnggaranBody = document.getElementById("kegiatanAnggaranBody");
const dokumenPK = document.getElementById("dokumenPK");

function escAttr(str) {
  return String(str || "").replace(/"/g, "&quot;");
}

function formatRp(angka) {
  return "Rp " + Number(angka || 0).toLocaleString("id-ID");
}

function formatRpDash(angka) {
  return "Rp. " + Number(angka || 0).toLocaleString("id-ID") + ",-";
}

function findEselon2Location(e2Id) {
  for (const e1 of dbPejabat.eselon1List || []) {
    const e2 = (e1.eselon2List || []).find(x => x.id === e2Id);
    if (e2) return { e1, e2 };
  }
  return null;
}

// ==========================================
// OTENTIKASI & HAK AKSES (ADMIN VS ADMIN SATKER)
// ==========================================
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const uname = document.getElementById("loginUsername").value.trim().toLowerCase();
  const pass = document.getElementById("loginPassword").value;
  const errEl = document.getElementById("loginError");

  const found = usersList.find(u => u.username.toLowerCase() === uname && u.password === pass);
  if (!found) {
    errEl.textContent = "Username atau password tidak sesuai.";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  currentUser = found;
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));
  initAppAfterLogin();
});

document.getElementById("btnLogout").addEventListener("click", () => {
  currentUser = null;
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  appShell.classList.add("hidden");
  loginSection.classList.remove("hidden");
  document.getElementById("loginPassword").value = "";
});

function initAppAfterLogin() {
  if (!currentUser) return;
  loginSection.classList.add("hidden");
  appShell.classList.remove("hidden");

  const isAdmin = currentUser.role === "admin";
  const loc = !isAdmin ? findEselon2Location(currentUser.eselon2Id) : null;
  const unitLabel = isAdmin ? "Semua Unit Kerja Kemhan" : (loc?.e2?.namaUnit || "Unit Kerja Terdaftar");

  document.getElementById("userBadgeInfo").textContent =
    `${currentUser.namaTampilan} (${isAdmin ? "Administrator" : "Admin Satker"}) • ${unitLabel}`;

  document.getElementById("btnKeUsers").classList.toggle("hidden", !isAdmin);
  document.getElementById("btnTambahEselon1").classList.toggle("hidden", !isAdmin);
  document.getElementById("btnResetMaster").classList.toggle("hidden", !isAdmin);
  document.getElementById("gasConfigBar").classList.toggle("hidden", !isAdmin);

  document.getElementById("masterRoleNote").textContent = isAdmin
    ? "Hak Akses Administrator: Dapat menambah dan mengedit seluruh Eselon I, Eselon II, Eselon III, dan Eselon IV."
    : `Hak Akses Admin Satker: Mengelola struktur Eselon III dan Eselon IV pada ${unitLabel}.`;

  document.getElementById("arsipRoleNote").textContent = isAdmin
    ? "Menampilkan seluruh arsip Perjanjian Kinerja Kementerian Pertahanan."
    : `Menampilkan arsip Perjanjian Kinerja khusus ${unitLabel}.`;

  const optE1 = selectLevel.querySelector('option[value="eselon1"]');
  if (optE1) optE1.disabled = !isAdmin;
  if (!isAdmin && selectLevel.value === "eselon1") {
    selectLevel.value = "subbag";
  }

  refreshUnitDropdowns();
  updateArsipCounter();
  showView("form");
}

function showView(view) {
  [formSection, hasilSection, masterSection, arsipSection, usersSection].forEach(el => el.classList.add("hidden"));
  if (view === "form") formSection.classList.remove("hidden");
  if (view === "hasil") hasilSection.classList.remove("hidden");
  if (view === "master") {
    renderMasterTree();
    masterSection.classList.remove("hidden");
  }
  if (view === "arsip") {
    renderArsipTable();
    arsipSection.classList.remove("hidden");
  }
  if (view === "users" && currentUser?.role === "admin") {
    renderUsersTable();
    usersSection.classList.remove("hidden");
  }
}

function getVisibleArsip() {
  if (!currentUser) return [];
  if (currentUser.role === "admin") return arsipList;
  return arsipList.filter(doc => doc.eselon2Id === currentUser.eselon2Id);
}

function updateArsipCounter() {
  document.getElementById("arsipCount").textContent = getVisibleArsip().length;
}

// ==========================================
// DROPDOWN & OTOMASI PEJABAT DI FORM INPUT
// ==========================================
const selectLevel = document.getElementById("selectLevel");
const selectEselon1 = document.getElementById("selectEselon1");
const selectEselon2 = document.getElementById("selectEselon2");
const selectBagian = document.getElementById("selectBagian");
const selectSubbag = document.getElementById("selectSubbag");
const wrapSelectEselon2 = document.getElementById("wrapSelectEselon2");
const wrapSelectBagian = document.getElementById("wrapSelectBagian");
const wrapSelectSubbag = document.getElementById("wrapSelectSubbag");

function refreshUnitDropdowns() {
  const isAdmin = currentUser?.role === "admin";
  const level = selectLevel.value;

  wrapSelectEselon2.classList.toggle("hidden", level === "eselon1");
  wrapSelectBagian.classList.toggle("hidden", level === "eselon1" || level === "eselon2");
  wrapSelectSubbag.classList.toggle("hidden", level !== "subbag");

  let e1Options = dbPejabat.eselon1List || [];
  if (!isAdmin && currentUser?.eselon2Id) {
    const loc = findEselon2Location(currentUser.eselon2Id);
    if (loc) e1Options = [loc.e1];
  }

  const prevE1 = selectEselon1.value;
  selectEselon1.innerHTML = e1Options.map(e1 => `<option value="${e1.id}">${e1.namaUnit}</option>`).join("");
  if (prevE1 && e1Options.some(x => x.id === prevE1)) {
    selectEselon1.value = prevE1;
  }
  selectEselon1.disabled = !isAdmin;

  refreshEselon2Dropdown();
}

function refreshEselon2Dropdown() {
  const isAdmin = currentUser?.role === "admin";
  const e1 = (dbPejabat.eselon1List || []).find(x => x.id === selectEselon1.value) || (dbPejabat.eselon1List || [])[0];
  let e2Options = e1?.eselon2List || [];

  if (!isAdmin && currentUser?.eselon2Id) {
    e2Options = e2Options.filter(x => x.id === currentUser.eselon2Id);
  }

  const prevE2 = selectEselon2.value;
  selectEselon2.innerHTML = e2Options.map(e2 => `<option value="${e2.id}">${e2.namaUnit}</option>`).join("");
  if (prevE2 && e2Options.some(x => x.id === prevE2)) {
    selectEselon2.value = prevE2;
  }
  selectEselon2.disabled = !isAdmin;

  refreshBagianDropdown();
}

function refreshBagianDropdown() {
  const e1 = (dbPejabat.eselon1List || []).find(x => x.id === selectEselon1.value) || (dbPejabat.eselon1List || [])[0];
  const e2 = (e1?.eselon2List || []).find(x => x.id === selectEselon2.value) || (e1?.eselon2List || [])[0];
  const bagList = e2?.bagianList || [];

  const prevBag = selectBagian.value;
  selectBagian.innerHTML = bagList.map(b => `<option value="${b.id}">${b.namaBagian}</option>`).join("");
  if (prevBag && bagList.some(b => b.id === prevBag)) {
    selectBagian.value = prevBag;
  }

  refreshSubbagDropdown();
}

function refreshSubbagDropdown() {
  const e1 = (dbPejabat.eselon1List || []).find(x => x.id === selectEselon1.value) || (dbPejabat.eselon1List || [])[0];
  const e2 = (e1?.eselon2List || []).find(x => x.id === selectEselon2.value) || (e1?.eselon2List || [])[0];
  const bag = (e2?.bagianList || []).find(b => b.id === selectBagian.value) || (e2?.bagianList || [])[0];
  const subList = bag?.subbagList || [];

  const prevSub = selectSubbag.value;
  selectSubbag.innerHTML = subList.map(s => `<option value="${s.id}">${s.namaSubbag}</option>`).join("");
  if (prevSub && subList.some(s => s.id === prevSub)) {
    selectSubbag.value = prevSub;
  }

  applyHierarchyToPejabatFields();
}

function applyHierarchyToPejabatFields() {
  const level = selectLevel.value;
  const e1 = (dbPejabat.eselon1List || []).find(x => x.id === selectEselon1.value) || (dbPejabat.eselon1List || [])[0];
  const e2 = (e1?.eselon2List || []).find(x => x.id === selectEselon2.value) || (e1?.eselon2List || [])[0];
  const bag = (e2?.bagianList || []).find(b => b.id === selectBagian.value) || (e2?.bagianList || [])[0];
  const sub = (bag?.subbagList || []).find(s => s.id === selectSubbag.value) || (bag?.subbagList || [])[0];

  if (level === "eselon1" && e1) {
    document.getElementById("p1Nama").value = e1.namaPejabat || "";
    document.getElementById("p1Jabatan").value = e1.jabatanPimpinan || "";
    document.getElementById("p1JabatanSingkat").value = "";
    document.getElementById("p1Pangkat").value = e1.pangkatNrpNip || "";

    document.getElementById("p2Nama").value = e1.atasanNama || "";
    document.getElementById("p2Jabatan").value = e1.atasanJabatan || "Menteri Pertahanan Republik Indonesia";
    document.getElementById("p2JabatanSingkat").value = "";
    document.getElementById("p2Pangkat").value = e1.atasanPangkat || "";
  } else if (level === "eselon2" && e2 && e1) {
    document.getElementById("p1Nama").value = e2.namaPejabat || "";
    document.getElementById("p1Jabatan").value = e2.jabatanPimpinan || "";
    document.getElementById("p1JabatanSingkat").value = "";
    document.getElementById("p1Pangkat").value = e2.pangkatNrpNip || "";

    document.getElementById("p2Nama").value = e1.namaPejabat || "";
    document.getElementById("p2Jabatan").value = e1.jabatanPimpinan || "";
    document.getElementById("p2JabatanSingkat").value = "";
    document.getElementById("p2Pangkat").value = e1.pangkatNrpNip || "";
  } else if (level === "bagian" && bag && e2) {
    document.getElementById("p1Nama").value = bag.namaKabag || "";
    document.getElementById("p1Jabatan").value = bag.jabatanKabag || "";
    document.getElementById("p1JabatanSingkat").value = "";
    document.getElementById("p1Pangkat").value = bag.pangkatKabag || "";

    document.getElementById("p2Nama").value = e2.namaPejabat || "";
    document.getElementById("p2Jabatan").value = e2.jabatanPimpinan || "";
    document.getElementById("p2JabatanSingkat").value = "";
    document.getElementById("p2Pangkat").value = e2.pangkatNrpNip || "";
  } else if (sub && bag) {
    document.getElementById("p1Nama").value = sub.namaPejabat || "";
    document.getElementById("p1Jabatan").value = sub.jabatanKasubbag || `Kepala ${sub.namaSubbag}`;
    document.getElementById("p1JabatanSingkat").value = "";
    document.getElementById("p1Pangkat").value = sub.pangkatNrpNip || "";

    document.getElementById("p2Nama").value = bag.namaKabag || "";
    document.getElementById("p2Jabatan").value = bag.jabatanKabag || "";
    document.getElementById("p2JabatanSingkat").value = "";
    document.getElementById("p2Pangkat").value = bag.pangkatKabag || "";
  }
}

selectLevel.addEventListener("change", refreshUnitDropdowns);
selectEselon1.addEventListener("change", refreshEselon2Dropdown);
selectEselon2.addEventListener("change", refreshBagianDropdown);
selectBagian.addEventListener("change", refreshSubbagDropdown);
selectSubbag.addEventListener("change", applyHierarchyToPejabatFields);

// ==========================================
// SASARAN KEGIATAN & INDIKATOR LAMPIRAN (4 KOLOM)
// ==========================================
function createIndicatorRow(ind = { indikator: "", target: "" }) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><textarea class="f-indikator" placeholder="Ketik indikator kinerja...">${ind.indikator || ""}</textarea></td>
    <td><input type="text" class="f-target" placeholder="Contoh: 12 / 100%" value="${escAttr(ind.target || "")}" /></td>
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
            <th style="width:62%;">Indikator Kinerja</th>
            <th style="width:26%;">Target</th>
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

// ==========================================
// KEGIATAN DAN ANGGARAN (DI BAWAH TABEL LAMPIRAN)
// ==========================================
function addKegiatanAnggaranRow(item = { uraian: "", anggaran: "" }) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" class="k-uraian" placeholder="Contoh: Pengelolaan Komunikasi dan Informasi Publik..." value="${escAttr(item.uraian || "")}" /></td>
    <td><input type="number" class="k-anggaran" min="0" placeholder="0" value="${item.anggaran || ""}" /></td>
    <td style="text-align:center;"><button type="button" class="btn btn-outline btn-sm btn-del-keg">×</button></td>
  `;
  tr.querySelector(".btn-del-keg").addEventListener("click", () => {
    if (kegiatanAnggaranBody.children.length > 1) tr.remove();
    else tr.querySelectorAll("input").forEach(el => (el.value = ""));
  });
  kegiatanAnggaranBody.appendChild(tr);
}

document.getElementById("btnTambahKegiatanAnggaran").addEventListener("click", () => addKegiatanAnggaranRow());

function collectFormData() {
  const sasaranList = [];

  [...sasaranContainer.querySelectorAll(".sasaran-card")].forEach(card => {
    const sasaranText = card.querySelector(".f-sasaran").value.trim();
    const indikatorList = [...card.querySelectorAll(".ind-tbody tr")].map(tr => ({
      indikator: tr.querySelector(".f-indikator").value.trim(),
      target: tr.querySelector(".f-target").value.trim()
    })).filter(x => x.indikator || x.target);

    if (sasaranText || indikatorList.length > 0) {
      sasaranList.push({ sasaran: sasaranText, indikatorList });
    }
  });

  let totalAnggaran = 0;
  const kegiatanAnggaranList = [...kegiatanAnggaranBody.querySelectorAll("tr")].map(tr => {
    const uraian = tr.querySelector(".k-uraian").value.trim();
    const anggaran = Number(tr.querySelector(".k-anggaran").value || 0);
    totalAnggaran += anggaran;
    return { uraian, anggaran };
  }).filter(k => k.uraian || k.anggaran > 0);

  const level = selectLevel.value;
  const eselon1Id = selectEselon1.value;
  const eselon1Nama = selectEselon1.options[selectEselon1.selectedIndex]?.text || "KEMENTERIAN PERTAHANAN RI";
  const eselon2Id = level !== "eselon1" ? selectEselon2.value : "";
  const eselon2Nama = level !== "eselon1" ? (selectEselon2.options[selectEselon2.selectedIndex]?.text || "") : "";
  const bagianNama = (level === "bagian" || level === "subbag") ? (selectBagian.options[selectBagian.selectedIndex]?.text || "") : "";
  const subbagNama = level === "subbag" ? (selectSubbag.options[selectSubbag.selectedIndex]?.text || "") : "";

  const tahun = document.getElementById("tahunAnggaran").value.trim();
  const lampiranSisipan = document.getElementById("lampiranSisipan").value.trim();
  const lampiranTahun = document.getElementById("lampiranTahun").value.trim() || tahun;
  const unitKegiatanLabel = document.getElementById("unitKegiatanLabel").value.trim()
    || bagianNama || eselon2Nama || eselon1Nama;

  return {
    id: "PK-" + Date.now(),
    createdAt: new Date().toLocaleString("id-ID"),
    createdBy: currentUser?.username || "",
    tahun,
    lampiranSisipan,
    lampiranTahun,
    unitKegiatanLabel,
    tempatTanggal: document.getElementById("tempatTanggal").value.trim(),
    level,
    eselon1Id,
    eselon1: eselon1Nama,
    eselon2Id,
    eselon2: eselon2Nama,
    bagian: bagianNama,
    subbag: subbagNama || bagianNama || eselon2Nama || eselon1Nama,
    pihakPertama: {
      nama: document.getElementById("p1Nama").value.trim(),
      jabatan: document.getElementById("p1Jabatan").value.trim(),
      jabatanSingkat: document.getElementById("p1JabatanSingkat").value.trim(),
      pangkat: document.getElementById("p1Pangkat").value.trim()
    },
    pihakKedua: {
      nama: document.getElementById("p2Nama").value.trim(),
      jabatan: document.getElementById("p2Jabatan").value.trim(),
      jabatanSingkat: document.getElementById("p2JabatanSingkat").value.trim(),
      pangkat: document.getElementById("p2Pangkat").value.trim()
    },
    sasaranList,
    kegiatanAnggaranList,
    totalAnggaran
  };
}

function populateFormFromData(data) {
  document.getElementById("tahunAnggaran").value = data.tahun || "2027";
  document.getElementById("lampiranSisipan").value = data.lampiranSisipan || "";
  document.getElementById("lampiranTahun").value = data.lampiranTahun || data.tahun || "2026";
  document.getElementById("unitKegiatanLabel").value = data.unitKegiatanLabel || "";
  document.getElementById("tempatTanggal").value = data.tempatTanggal || "";
  if (data.level) selectLevel.value = data.level;
  refreshUnitDropdowns();

  document.getElementById("p1Nama").value = data.pihakPertama?.nama || "";
  document.getElementById("p1Jabatan").value = data.pihakPertama?.jabatan || "";
  document.getElementById("p1JabatanSingkat").value = data.pihakPertama?.jabatanSingkat || "";
  document.getElementById("p1Pangkat").value = data.pihakPertama?.pangkat || "";
  document.getElementById("p2Nama").value = data.pihakKedua?.nama || "";
  document.getElementById("p2Jabatan").value = data.pihakKedua?.jabatan || "";
  document.getElementById("p2JabatanSingkat").value = data.pihakKedua?.jabatanSingkat || "";
  document.getElementById("p2Pangkat").value = data.pihakKedua?.pangkat || "";

  sasaranContainer.innerHTML = "";
  (data.sasaranList && data.sasaranList.length ? data.sasaranList : [{}]).forEach(addSasaranBlock);

  kegiatanAnggaranBody.innerHTML = "";
  (data.kegiatanAnggaranList && data.kegiatanAnggaranList.length ? data.kegiatanAnggaranList : [{}]).forEach(addKegiatanAnggaranRow);
}

// ==========================================
// RENDER DOKUMEN PK 2 HALAMAN TERPISAH
// ==========================================
function renderPerjanjianKinerja(data) {
  currentActiveDoc = data;

  const p1TtdJabatan = data.pihakPertama.jabatanSingkat || data.pihakPertama.jabatan;
  const p2TtdJabatan = data.pihakKedua.jabatanSingkat || data.pihakKedua.jabatan;

  let lampiranRowsHtml = "";

  (data.sasaranList || []).forEach((sObj, sIdx) => {
    const inds = sObj.indikatorList && sObj.indikatorList.length ? sObj.indikatorList : [{}];
    const cleanSasaran = String(sObj.sasaran || "").replace(/^\s*\d+[\.\)]\s*/, "");
    const sasaranNo = sIdx + 1;

    inds.forEach((ind, iIdx) => {
      const cleanIndikator = String(ind.indikator || "").replace(/^\s*\d+[\.\)]\s*/, "");
      lampiranRowsHtml += `
        <tr>
          <td style="text-align:center;">${iIdx === 0 ? sasaranNo : ""}</td>
          <td>${iIdx === 0 ? cleanSasaran : ""}</td>
          <td>${cleanIndikator}</td>
          <td style="text-align:center;">${ind.target || ""}</td>
        </tr>
      `;
    });
  });

  const kopBaris1 = data.level === "eselon1"
    ? "KEMENTERIAN PERTAHANAN REPUBLIK INDONESIA"
    : (data.eselon1 || "SEKRETARIAT JENDERAL");
  const kopBaris2 = data.level === "eselon1"
    ? (data.eselon1 || "SEKRETARIAT JENDERAL")
    : (data.eselon2 || "BIRO INFORMASI PERTAHANAN");

  const kopHtml = `
    <div class="kop-resmi">
      <img src="logo.png" class="kop-logo" alt="Lambang Kemhan" crossorigin="anonymous" />
      <div class="kop-teks">
        <p>${kopBaris1}</p>
        <p>${kopBaris2}</p>
      </div>
    </div>
  `;

  const sisipanTeks = data.lampiranSisipan ? ` ${data.lampiranSisipan}` : "";
  const tahunLampiran = data.lampiranTahun || data.tahun;
  const satkerLampiran = data.eselon2 || data.eselon1 || "Biro Informasi Pertahanan";

  const lampiranKananHtml = `
    <div class="lampiran-kanan-wrap">
      <div class="lampiran-kanan-atas">
        Lampiran${sisipanTeks} Perjanjian Kinerja<br />
        ${satkerLampiran} Tahun ${tahunLampiran}
      </div>
    </div>
  `;

  const kegList = data.kegiatanAnggaranList || [];
  const rincianRowsHtml = kegList.length
    ? kegList.map((k, idx) => `
        <tr>
          <td style="width:28px;">${idx + 1}</td>
          <td>${k.uraian || "-"}</td>
          <td class="col-rp">${formatRpDash(k.anggaran)}</td>
        </tr>
      `).join("")
    : `
        <tr>
          <td style="width:28px;">-</td>
          <td>Belum ada rincian kegiatan</td>
          <td class="col-rp">${formatRpDash(0)}</td>
        </tr>
      `;

  const kegiatanAnggaranHtml = `
    <div class="kegiatan-anggaran-box">
      <div class="kegiatan-anggaran-title">Kegiatan dan Anggaran:</div>
      <p class="kegiatan-anggaran-ringkasan">
        Kegiatan ${data.unitKegiatanLabel || data.bagian || data.eselon2 || "Biro Infohan Setjen Kemhan"} Tahun ${data.tahun},
        dengan anggaran sebesar ${formatRpDash(data.totalAnggaran)} (didapat dari penjumlahan dengan rincian kegiatan sebagai berikut :
      </p>
      <table class="rincian-keg-table">
        <thead>
          <tr>
            <th colspan="2">Kegiatan :</th>
            <th class="col-rp">Anggaran :</th>
          </tr>
        </thead>
        <tbody>
          ${rincianRowsHtml}
        </tbody>
      </table>
    </div>
  `;

  const ttdBlokHtml = `
    <div class="ttd-row">
      <div class="ttd-col">
        <div class="ttd-tanggal">&nbsp;</div>
        <div class="ttd-jabatan">Pihak Kedua,<br />${p2TtdJabatan}</div>
        <div class="ttd-space"></div>
        <div class="ttd-nama">${data.pihakKedua.nama}</div>
        <div class="ttd-pangkat">${data.pihakKedua.pangkat}</div>
      </div>
      <div class="ttd-col">
        <div class="ttd-tanggal">${data.tempatTanggal}</div>
        <div class="ttd-jabatan">Pihak Pertama,<br />${p1TtdJabatan}</div>
        <div class="ttd-space"></div>
        <div class="ttd-nama">${data.pihakPertama.nama}</div>
        <div class="ttd-pangkat">${data.pihakPertama.pangkat}</div>
      </div>
    </div>
  `;

  dokumenPK.innerHTML = `
    <div id="lembaran1" class="lembaran">
      ${kopHtml}

      <div class="judul-pk">
        PERNYATAAN PERJANJIAN KINERJA<br />
        ${data.pihakPertama.jabatan}<br />
        TAHUN ${data.tahun}
      </div>

      <p class="paragraf">Dalam rangka mewujudkan manajemen pemerintahan yang efektif, transparan dan akuntabel serta berorientasi pada hasil, kami yang bertanda tangan di bawah ini:</p>

      <table class="identitas-table">
        <tr>
          <td style="width:100px;">Nama</td>
          <td style="width:14px;">:</td>
          <td>${data.pihakPertama.nama}</td>
        </tr>
        <tr>
          <td>Jabatan</td>
          <td>:</td>
          <td>${data.pihakPertama.jabatan}</td>
        </tr>
      </table>
      <p class="paragraf">Selanjutnya disebut Pihak Pertama.</p>

      <table class="identitas-table">
        <tr>
          <td style="width:100px;">Nama</td>
          <td style="width:14px;">:</td>
          <td>${data.pihakKedua.nama}</td>
        </tr>
        <tr>
          <td>Jabatan</td>
          <td>:</td>
          <td>${data.pihakKedua.jabatan}</td>
        </tr>
      </table>
      <p class="paragraf">Selaku atasan langsung Pihak Pertama, selanjutnya disebut Pihak Kedua.</p>

      <p class="paragraf">Pihak Pertama berjanji akan mewujudkan target kinerja sesuai lampiran Perjanjian Kinerja ini, dalam rangka mencapai target kinerja jangka pendek dan jangka menengah yang telah ditetapkan dalam dokumen perencanaan. Keberhasilan dan kegagalan pencapaian target kinerja tersebut menjadi tanggung jawab kami.</p>

      <p class="paragraf">Pihak Kedua akan memberikan supervisi yang diperlukan serta akan melakukan evaluasi terhadap capaian kinerja dari perjanjian ini dan mengambil tindakan yang diperlukan dalam rangka pemberian penghargaan dan sanksi.</p>

      ${ttdBlokHtml}
    </div>

    <div id="lembaran2" class="lembaran">
      ${lampiranKananHtml}

      <div class="judul-pk">
        PERJANJIAN KINERJA<br />
        ${data.pihakPertama.jabatan}<br />
        TAHUN ${data.tahun}
      </div>

      <table class="lampiran-table">
        <thead>
          <tr>
            <th style="width:42px;">No</th>
            <th style="width:28%;">Sasaran Kegiatan</th>
            <th style="width:52%;">Indikator Kinerja</th>
            <th style="width:12%;">Target</th>
          </tr>
        </thead>
        <tbody>
          ${lampiranRowsHtml || `<tr><td colspan="4" style="text-align:center;">Belum ada rincian sasaran dan indikator</td></tr>`}
        </tbody>
      </table>

      ${kegiatanAnggaranHtml}
      ${ttdBlokHtml}
    </div>
  `;

  showView("hasil");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("btnDownloadPdf").addEventListener("click", async () => {
  const l1 = document.getElementById("lembaran1");
  const l2 = document.getElementById("lembaran2");
  if (!l1 || !l2 || !currentActiveDoc) return;

  const safeSub = (currentActiveDoc.subbag || "PK_Kemhan").replace(/[^a-zA-Z0-9_-]/g, "_");
  const filename = `PK_${safeSub}_${currentActiveDoc.tahun}.pdf`;

  const marginX = 11;
  const marginY = 9;

  const workerCfg = {
    margin: [marginY, marginX, marginY, marginX],
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  l1.classList.add("pdf-capturing");
  l2.classList.add("pdf-capturing");

  try {
    const pdf = await html2pdf().set(workerCfg).from(l1).toPdf().get("pdf");
    const canvas2 = await html2pdf().set(workerCfg).from(l2).toContainer().toCanvas().get("canvas");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const usableWidth = pageWidth - marginX * 2;
    const maxUsableHeight = pageHeight - marginY * 2;
    let pdfHeight = (canvas2.height * usableWidth) / canvas2.width;
    let drawWidth = usableWidth;

    if (pdfHeight > maxUsableHeight) {
      const ratio = maxUsableHeight / pdfHeight;
      pdfHeight = maxUsableHeight;
      drawWidth = usableWidth * ratio;
    }

    const offsetX = marginX + (usableWidth - drawWidth) / 2;

    pdf.addPage("a4", "portrait");
    pdf.addImage(canvas2.toDataURL("image/jpeg", 0.98), "JPEG", offsetX, marginY, drawWidth, pdfHeight);
    pdf.save(filename);
  } finally {
    l1.classList.remove("pdf-capturing");
    l2.classList.remove("pdf-capturing");
  }
});

// ==========================================
// MASTER PEJABAT BERJENJANG (SESUAI ROLE)
// ==========================================
function renderMasterTree() {
  const container = document.getElementById("masterTreeContainer");
  const isAdmin = currentUser?.role === "admin";
  let html = "";

  (dbPejabat.eselon1List || []).forEach((e1, e1Idx) => {
    const visibleE2s = (e1.eselon2List || [])
      .map((e2, e2Idx) => ({ e2, e2Idx }))
      .filter(item => isAdmin || item.e2.id === currentUser?.eselon2Id);

    if (!isAdmin && visibleE2s.length === 0) return;

    html += `<div class="tree-eselon1" data-e1-idx="${e1Idx}">`;

    if (isAdmin) {
      html += `
        <div class="section-head">
          <span class="tree-badge">Unit Kerja Eselon I #${e1Idx + 1}</span>
          <div class="toolbar-right">
            <button type="button" class="btn btn-secondary btn-sm" onclick="tambahEselon2(${e1Idx})">+ Tambah Unit Eselon II</button>
            ${dbPejabat.eselon1List.length > 1 ? `<button type="button" class="btn btn-danger btn-sm" onclick="hapusEselon1(${e1Idx})">Hapus Eselon I</button>` : ""}
          </div>
        </div>
        <div class="grid-4">
          <div>
            <label>Nama Unit Eselon I</label>
            <input type="text" class="m-e1-unit" value="${escAttr(e1.namaUnit)}" />
          </div>
          <div>
            <label>Jabatan Pimpinan Eselon I</label>
            <input type="text" class="m-e1-jabatan" value="${escAttr(e1.jabatanPimpinan)}" />
          </div>
          <div>
            <label>Nama Pejabat Eselon I</label>
            <input type="text" class="m-e1-nama" placeholder="Input nama pejabat..." value="${escAttr(e1.namaPejabat)}" />
          </div>
          <div>
            <label>Pangkat / NRP / NIP Eselon I</label>
            <input type="text" class="m-e1-pangkat" placeholder="Pangkat & NRP/NIP..." value="${escAttr(e1.pangkatNrpNip)}" />
          </div>
        </div>
      `;
    } else {
      html += `<strong>Unit Kerja Induk: ${e1.namaUnit}</strong>`;
    }

    visibleE2s.forEach(({ e2, e2Idx }) => {
      html += `
        <div class="tree-eselon2" data-e2-idx="${e2Idx}">
          <div class="section-head">
            <span class="tree-badge e2">Unit Kerja Eselon II • ${e2.namaUnit}</span>
            ${isAdmin && e1.eselon2List.length > 1 ? `<button type="button" class="btn btn-danger btn-sm" onclick="hapusEselon2(${e1Idx}, ${e2Idx})">Hapus Eselon II</button>` : ""}
          </div>
          <div class="grid-4">
            <div>
              <label>Nama Unit Eselon II</label>
              <input type="text" class="m-e2-unit" value="${escAttr(e2.namaUnit)}" />
            </div>
            <div>
              <label>Jabatan Pimpinan Eselon II</label>
              <input type="text" class="m-e2-jabatan" value="${escAttr(e2.jabatanPimpinan)}" />
            </div>
            <div>
              <label>Nama Pimpinan Eselon II</label>
              <input type="text" class="m-e2-nama" placeholder="Input nama pimpinan..." value="${escAttr(e2.namaPejabat)}" />
            </div>
            <div>
              <label>Pangkat / NRP / NIP</label>
              <input type="text" class="m-e2-pangkat" placeholder="Pangkat & NRP/NIP..." value="${escAttr(e2.pangkatNrpNip)}" />
            </div>
          </div>

          <div class="section-head mt-20">
            <strong>Daftar Eselon III (Bagian/Bidang) & Eselon IV (Subbagian)</strong>
            <button type="button" class="btn btn-secondary btn-sm" onclick="tambahBagian(${e1Idx}, ${e2Idx})">+ Tambah Bagian / Bidang</button>
          </div>
      `;

      (e2.bagianList || []).forEach((bag, bagIdx) => {
        html += `
          <div class="tree-bagian" data-bag-idx="${bagIdx}">
            <div class="section-head">
              <span class="tree-badge bag">Eselon III (Bagian/Bidang) #${bagIdx + 1}</span>
              <div class="toolbar-right">
                <button type="button" class="btn btn-primary btn-sm" onclick="tambahSubbag(${e1Idx}, ${e2Idx}, ${bagIdx})">+ Tambah Sub Bagian</button>
                ${e2.bagianList.length > 1 ? `<button type="button" class="btn btn-danger btn-sm" onclick="hapusBagian(${e1Idx}, ${e2Idx}, ${bagIdx})">Hapus Bagian</button>` : ""}
              </div>
            </div>

            <div class="grid-4">
              <div>
                <label>Nama Bagian / Bidang</label>
                <input type="text" class="m-bag-nama" value="${escAttr(bag.namaBagian)}" />
              </div>
              <div>
                <label>Jabatan Kepala Bagian</label>
                <input type="text" class="m-bag-jabatan" value="${escAttr(bag.jabatanKabag)}" />
              </div>
              <div>
                <label>Nama Kepala Bagian</label>
                <input type="text" class="m-bag-nama-pejabat" placeholder="Input nama pejabat..." value="${escAttr(bag.namaKabag)}" />
              </div>
              <div>
                <label>Pangkat / NRP / NIP Kabag</label>
                <input type="text" class="m-bag-pangkat" placeholder="Pangkat & NRP/NIP..." value="${escAttr(bag.pangkatKabag)}" />
              </div>
            </div>

            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="width:24%;">Nama Sub Bagian (Eselon IV)</th>
                    <th style="width:28%;">Jabatan Lengkap (Untuk Judul & TTD)</th>
                    <th style="width:22%;">Nama Pejabat Kasubbag</th>
                    <th style="width:20%;">Pangkat / Gol & NRP / NIP</th>
                    <th style="width:6%;">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  ${(bag.subbagList || []).map((sub, subIdx) => `
                    <tr data-sub-idx="${subIdx}">
                      <td><input type="text" class="m-sub-nama" value="${escAttr(sub.namaSubbag)}" /></td>
                      <td><input type="text" class="m-sub-jabatan" value="${escAttr(sub.jabatanKasubbag)}" /></td>
                      <td><input type="text" class="m-sub-pejabat" placeholder="Input nama pejabat..." value="${escAttr(sub.namaPejabat)}" /></td>
                      <td><input type="text" class="m-sub-pangkat" placeholder="Pangkat & NRP/NIP..." value="${escAttr(sub.pangkatNrpNip)}" /></td>
                      <td style="text-align:center;">
                        <button type="button" class="btn btn-danger btn-sm" onclick="hapusSubbag(${e1Idx}, ${e2Idx}, ${bagIdx}, ${subIdx})">×</button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `;
      });

      html += `</div>`;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

function syncDomToDbPejabat() {
  const isAdmin = currentUser?.role === "admin";
  const e1Cards = [...document.querySelectorAll(".tree-eselon1")];

  e1Cards.forEach(e1Card => {
    const e1Idx = Number(e1Card.dataset.e1Idx);
    const e1 = dbPejabat.eselon1List[e1Idx];
    if (!e1) return;

    if (isAdmin && e1Card.querySelector(".m-e1-unit")) {
      e1.namaUnit = e1Card.querySelector(".m-e1-unit").value.trim();
      e1.jabatanPimpinan = e1Card.querySelector(".m-e1-jabatan").value.trim();
      e1.namaPejabat = e1Card.querySelector(".m-e1-nama").value.trim();
      e1.pangkatNrpNip = e1Card.querySelector(".m-e1-pangkat").value.trim();
    }

    const e2Cards = [...e1Card.querySelectorAll(".tree-eselon2")];
    e2Cards.forEach(e2Card => {
      const e2Idx = Number(e2Card.dataset.e2Idx);
      const e2 = e1.eselon2List[e2Idx];
      if (!e2) return;

      e2.namaUnit = e2Card.querySelector(".m-e2-unit").value.trim();
      e2.jabatanPimpinan = e2Card.querySelector(".m-e2-jabatan").value.trim();
      e2.namaPejabat = e2Card.querySelector(".m-e2-nama").value.trim();
      e2.pangkatNrpNip = e2Card.querySelector(".m-e2-pangkat").value.trim();

      const bagCards = [...e2Card.querySelectorAll(".tree-bagian")];
      e2.bagianList = bagCards.map((bagCard, bagIdx) => {
        const oldBag = (e2.bagianList || [])[bagIdx] || {};
        const subRows = [...bagCard.querySelectorAll("tbody tr")];

        return {
          id: oldBag.id || ("BAG-" + Date.now() + "-" + bagIdx),
          namaBagian: bagCard.querySelector(".m-bag-nama").value.trim(),
          jabatanKabag: bagCard.querySelector(".m-bag-jabatan").value.trim(),
          namaKabag: bagCard.querySelector(".m-bag-nama-pejabat").value.trim(),
          pangkatKabag: bagCard.querySelector(".m-bag-pangkat").value.trim(),
          subbagList: subRows.map((tr, subIdx) => {
            const oldSub = (oldBag.subbagList || [])[subIdx] || {};
            return {
              id: oldSub.id || ("SUB-" + Date.now() + "-" + subIdx),
              namaSubbag: tr.querySelector(".m-sub-nama").value.trim(),
              jabatanKasubbag: tr.querySelector(".m-sub-jabatan").value.trim(),
              namaPejabat: tr.querySelector(".m-sub-pejabat").value.trim(),
              pangkatNrpNip: tr.querySelector(".m-sub-pangkat").value.trim()
            };
          })
        };
      });
    });
  });
}

document.getElementById("btnTambahEselon1").addEventListener("click", () => {
  if (currentUser?.role !== "admin") return;
  syncDomToDbPejabat();
  dbPejabat.eselon1List.push({
    id: "E1-" + Date.now(),
    namaUnit: "Unit Eselon I Baru (Contoh: Ditjen Strahan Kemhan)",
    jabatanPimpinan: "Direktur Jenderal",
    namaPejabat: "",
    pangkatNrpNip: "",
    atasanJabatan: "Menteri Pertahanan Republik Indonesia",
    atasanNama: "",
    atasanPangkat: "",
    eselon2List: [
      {
        id: "E2-" + Date.now(),
        namaUnit: "Direktorat / Biro Baru",
        jabatanPimpinan: "Direktur / Kepala Biro",
        namaPejabat: "",
        pangkatNrpNip: "",
        bagianList: [
          {
            id: "BAG-" + Date.now(),
            namaBagian: "Subdirektorat / Bagian 1",
            jabatanKabag: "Kasubdit / Kabag 1",
            namaKabag: "",
            pangkatKabag: "",
            subbagList: [
              {
                id: "SUB-" + Date.now(),
                namaSubbag: "Seksi / Subbagian 1",
                jabatanKasubbag: "Kasi / Kasubbag 1",
                namaPejabat: "",
                pangkatNrpNip: ""
              }
            ]
          }
        ]
      }
    ]
  });
  renderMasterTree();
});

window.hapusEselon1 = e1Idx => {
  if (!confirm("Hapus unit Eselon I ini beserta seluruh Eselon II, III, dan IV di dalamnya?")) return;
  syncDomToDbPejabat();
  dbPejabat.eselon1List.splice(e1Idx, 1);
  renderMasterTree();
};

window.tambahEselon2 = e1Idx => {
  syncDomToDbPejabat();
  dbPejabat.eselon1List[e1Idx].eselon2List.push({
    id: "E2-" + Date.now(),
    namaUnit: "Biro / Pusat / Direktorat Baru",
    jabatanPimpinan: "Kepala Biro / Pusat / Direktur",
    namaPejabat: "",
    pangkatNrpNip: "",
    bagianList: [
      {
        id: "BAG-" + Date.now(),
        namaBagian: "Bagian / Bidang 1",
        jabatanKabag: "Kepala Bagian / Bidang 1",
        namaKabag: "",
        pangkatKabag: "",
        subbagList: [
          {
            id: "SUB-" + Date.now(),
            namaSubbag: "Subbagian / Subbidang 1",
            jabatanKasubbag: "Kasubbag / Kasubbid 1",
            namaPejabat: "",
            pangkatNrpNip: ""
          }
        ]
      }
    ]
  });
  renderMasterTree();
};

window.hapusEselon2 = (e1Idx, e2Idx) => {
  if (!confirm("Hapus unit Eselon II ini?")) return;
  syncDomToDbPejabat();
  dbPejabat.eselon1List[e1Idx].eselon2List.splice(e2Idx, 1);
  renderMasterTree();
};

window.tambahBagian = (e1Idx, e2Idx) => {
  syncDomToDbPejabat();
  dbPejabat.eselon1List[e1Idx].eselon2List[e2Idx].bagianList.push({
    id: "BAG-" + Date.now(),
    namaBagian: "Bagian / Bidang Baru",
    jabatanKabag: "Kepala Bagian / Bidang Baru",
    namaKabag: "",
    pangkatKabag: "",
    subbagList: [
      {
        id: "SUB-" + Date.now(),
        namaSubbag: "Subbagian 1",
        jabatanKasubbag: "Kepala Subbagian 1",
        namaPejabat: "",
        pangkatNrpNip: ""
      }
    ]
  });
  renderMasterTree();
};

window.hapusBagian = (e1Idx, e2Idx, bagIdx) => {
  if (!confirm("Hapus Bagian / Bidang ini?")) return;
  syncDomToDbPejabat();
  dbPejabat.eselon1List[e1Idx].eselon2List[e2Idx].bagianList.splice(bagIdx, 1);
  renderMasterTree();
};

window.tambahSubbag = (e1Idx, e2Idx, bagIdx) => {
  syncDomToDbPejabat();
  const bag = dbPejabat.eselon1List[e1Idx].eselon2List[e2Idx].bagianList[bagIdx];
  bag.subbagList.push({
    id: "SUB-" + Date.now(),
    namaSubbag: "Subbagian Baru",
    jabatanKasubbag: `Kasubbag Baru ${bag.namaBagian}`,
    namaPejabat: "",
    pangkatNrpNip: ""
  });
  renderMasterTree();
};

window.hapusSubbag = (e1Idx, e2Idx, bagIdx, subIdx) => {
  syncDomToDbPejabat();
  const list = dbPejabat.eselon1List[e1Idx].eselon2List[e2Idx].bagianList[bagIdx].subbagList;
  if (list.length <= 1) {
    alert("Setiap Bagian minimal memiliki 1 Sub Bagian.");
    return;
  }
  list.splice(subIdx, 1);
  renderMasterTree();
};

async function handleSimpanMaster() {
  syncDomToDbPejabat();
  localStorage.setItem(DB_PEJABAT_STORAGE_KEY, JSON.stringify(dbPejabat));
  refreshUnitDropdowns();

  const gasUrl = getGasUrl();
  if (gasUrl) {
    try {
      await fetch(gasUrl, {
        method: "POST",
        body: JSON.stringify({ action: "saveMasterPejabat", payload: dbPejabat })
      });
    } catch (err) {
      console.warn("Gagal sinkron Master Pejabat ke Google Sheets:", err);
    }
  }
  alert("Database Pejabat & Struktur Unit Kerja berhasil disimpan!");
}

document.getElementById("btnSimpanMaster").addEventListener("click", handleSimpanMaster);
document.getElementById("btnSimpanMasterBottom").addEventListener("click", handleSimpanMaster);

document.getElementById("btnResetMaster").addEventListener("click", () => {
  if (currentUser?.role !== "admin") return;
  if (!confirm("Kembalikan struktur Eselon I, II, III, dan IV ke bawaan awal?")) return;
  dbPejabat = structuredClone(DEFAULT_DB_PEJABAT);
  localStorage.setItem(DB_PEJABAT_STORAGE_KEY, JSON.stringify(dbPejabat));
  renderMasterTree();
  refreshUnitDropdowns();
});

// ==========================================
// MANAJEMEN AKUN PENGGUNA (KHUSUS ADMINISTRATOR)
// ==========================================
function getAllEselon2Options() {
  const opts = [];
  (dbPejabat.eselon1List || []).forEach(e1 => {
    (e1.eselon2List || []).forEach(e2 => {
      opts.push({ id: e2.id, label: `${e2.namaUnit} (${e1.namaUnit})` });
    });
  });
  return opts;
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  const e2Opts = getAllEselon2Options();

  tbody.innerHTML = usersList.map((u, idx) => `
    <tr data-idx="${idx}">
      <td><input type="text" class="u-username" value="${escAttr(u.username)}" ${u.id === "USR-ADMIN" ? "readonly" : ""} /></td>
      <td><input type="text" class="u-password" value="${escAttr(u.password)}" /></td>
      <td><input type="text" class="u-nama" value="${escAttr(u.namaTampilan)}" /></td>
      <td>
        <select class="u-role" ${u.id === "USR-ADMIN" ? "disabled" : ""}>
          <option value="admin" ${u.role === "admin" ? "selected" : ""}>Administrator (Semua)</option>
          <option value="satker" ${u.role === "satker" ? "selected" : ""}>Admin Satker (Per Unit)</option>
        </select>
      </td>
      <td>
        <select class="u-e2">
          <option value="">-- Semua Unit (Khusus Administrator) --</option>
          ${e2Opts.map(o => `<option value="${o.id}" ${u.eselon2Id === o.id ? "selected" : ""}>${o.label}</option>`).join("")}
        </select>
      </td>
      <td style="text-align:center;">
        ${u.id !== "USR-ADMIN" ? `<button type="button" class="btn btn-danger btn-sm" onclick="hapusUser(${idx})">×</button>` : "-"}
      </td>
    </tr>
  `).join("");
}

document.getElementById("btnTambahUser").addEventListener("click", () => {
  const e2Opts = getAllEselon2Options();
  usersList.push({
    id: "USR-" + Date.now(),
    username: "satker" + (usersList.length + 1),
    password: "kemhan2027",
    namaTampilan: "Admin Satker Baru",
    role: "satker",
    eselon2Id: e2Opts[0]?.id || ""
  });
  renderUsersTable();
});

window.hapusUser = idx => {
  if (!confirm("Hapus akun pengguna ini?")) return;
  usersList.splice(idx, 1);
  renderUsersTable();
};

document.getElementById("btnSimpanUsers").addEventListener("click", async () => {
  const rows = [...document.querySelectorAll("#usersTableBody tr")];
  usersList = rows.map((tr, i) => ({
    id: usersList[i]?.id || ("USR-" + Date.now() + "-" + i),
    username: tr.querySelector(".u-username").value.trim(),
    password: tr.querySelector(".u-password").value.trim(),
    namaTampilan: tr.querySelector(".u-nama").value.trim(),
    role: tr.querySelector(".u-role").value,
    eselon2Id: tr.querySelector(".u-e2").value
  })).filter(u => u.username && u.password);

  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersList));

  const gasUrl = getGasUrl();
  if (gasUrl) {
    try {
      await fetch(gasUrl, {
        method: "POST",
        body: JSON.stringify({ action: "saveUsers", payload: usersList })
      });
    } catch (err) {
      console.warn("Gagal sinkron akun ke Google Sheets:", err);
    }
  }
  alert("Daftar akun pengguna & hak akses berhasil disimpan.");
});

// ==========================================
// ARSIP & GOOGLE SHEETS
// ==========================================
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
  const visibleDocs = getVisibleArsip();

  if (!visibleDocs.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#64748b;">Belum ada arsip Perjanjian Kinerja untuk unit kerja ini.</td></tr>`;
    return;
  }

  tbody.innerHTML = visibleDocs.map(doc => {
    const realIdx = arsipList.findIndex(x => x.id === doc.id);
    return `
      <tr>
        <td>${doc.createdAt || "-"}</td>
        <td>${doc.tahun}</td>
        <td><strong>${doc.eselon2 || doc.eselon1 || ""}</strong><br><small>${doc.subbag || ""}</small></td>
        <td>${doc.pihakPertama?.nama || "-"}</td>
        <td>${doc.pihakKedua?.nama || "-"}</td>
        <td>${formatRp(doc.totalAnggaran)}</td>
        <td>
          <div class="toolbar-right">
            <button type="button" class="btn btn-primary btn-sm" onclick="bukaArsip(${realIdx})">Buka / PDF</button>
            <button type="button" class="btn btn-outline btn-sm" onclick="editArsip(${realIdx})">Edit</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="hapusArsip(${realIdx})">Hapus</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

window.bukaArsip = idx => renderPerjanjianKinerja(arsipList[idx]);
window.editArsip = idx => {
  populateFormFromData(arsipList[idx]);
  showView("form");
};
window.hapusArsip = async idx => {
  if (!confirm("Hapus arsip ini dari penyimpanan browser dan cloud?")) return;
  const deletedDoc = arsipList[idx];
  arsipList.splice(idx, 1);
  localStorage.setItem(ARSIP_STORAGE_KEY, JSON.stringify(arsipList));
  updateArsipCounter();
  renderArsipTable();

  const gasUrl = getGasUrl();
  if (gasUrl && deletedDoc?.id) {
    try {
      await fetch(gasUrl, {
        method: "POST",
        body: JSON.stringify({ action: "deletePK", payload: { id: deletedDoc.id } })
      });
    } catch (err) {
      console.warn("Gagal hapus arsip di Google Sheets:", err);
    }
  }
};

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
document.getElementById("btnKeUsers").addEventListener("click", () => showView("users"));
document.getElementById("btnKeHasil").addEventListener("click", () => {
  if (currentActiveDoc) renderPerjanjianKinerja(currentActiveDoc);
  else renderPerjanjianKinerja(collectFormData());
});

document.getElementById("btnKosongkan").addEventListener("click", () => {
  sasaranContainer.innerHTML = "";
  addSasaranBlock();
  kegiatanAnggaranBody.innerHTML = "";
  addKegiatanAnggaranRow();
});

document.getElementById("btnIsiContoh").addEventListener("click", () => {
  document.getElementById("tahunAnggaran").value = "2027";
  document.getElementById("lampiranSisipan").value = "I";
  document.getElementById("lampiranTahun").value = "2026";
  document.getElementById("tempatTanggal").value = "Jakarta, Januari 2027";

  sasaranContainer.innerHTML = "";
  addSasaranBlock({
    sasaran: "Terwujudnya Hubungan Kemitraan Yang Baik",
    indikatorList: [
      { indikator: "1. Jumlah Pelaksanaan/Kehadiran Diseminasi Informasi Program Pemerintah dan Forum Komunikasi Kehumasan", target: "12" },
      { indikator: "2. Persentase Bahan Amanat/Sambutan Pimpinan Kemhan dan Bahan Masukan Kemhan di Bidang Pertahanan Negara Yang Ditindaklanjuti", target: "52" },
      { indikator: "3. Jumlah Kegiatan Forum Komunikasi Kehumasan Yang Diselenggarakan Oleh Kemhan", target: "2" }
    ]
  });

  kegiatanAnggaranBody.innerHTML = "";
  addKegiatanAnggaranRow({ uraian: "Pengelolaan Komunikasi dan Informasi Publik Subbagian Hubungan Lembaga Pemerintah", anggaran: 432530000 });
  addKegiatanAnggaranRow({ uraian: "Pengelolaan Komunikasi dan Informasi Publik Subbagian Hubungan Lembaga Non Pemerintah", anggaran: 215513000 });
  addKegiatanAnggaranRow({ uraian: "Pengelolaan Komunikasi dan Informasi Publik Subbagian Tata Usaha Biro", anggaran: 11994604000 });
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
    const res = await fetch(gasUrl + "?action=syncAll");
    const json = await res.json();
    if (json.status === "ok") {
      if (Array.isArray(json.arsip)) {
        arsipList = json.arsip;
        localStorage.setItem(ARSIP_STORAGE_KEY, JSON.stringify(arsipList));
      }
      if (json.masterPejabat && Array.isArray(json.masterPejabat.eselon1List)) {
        dbPejabat = json.masterPejabat;
        localStorage.setItem(DB_PEJABAT_STORAGE_KEY, JSON.stringify(dbPejabat));
      }
      if (Array.isArray(json.users) && json.users.length) {
        usersList = json.users;
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersList));
      }
      refreshUnitDropdowns();
      updateArsipCounter();
      renderArsipTable();
      alert("Data Arsip, Master Pejabat, dan Akun berhasil disinkronkan dari Google Sheets.");
    }
  } catch (err) {
    alert("Gagal menarik data dari Google Sheets: " + err.message);
  }
});

// ==========================================
// SINKRONISASI CLOUD OTOMATIS SAAT HALAMAN DIBUKA
// ==========================================
async function syncFromCloudOnLoad() {
  const gasUrl = getGasUrl();
  if (!gasUrl) return;
  try {
    const res = await fetch(gasUrl + "?action=syncAll");
    const json = await res.json();
    if (json.status === "ok") {
      if (Array.isArray(json.users) && json.users.length) {
        usersList = json.users;
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersList));
      }
      if (json.masterPejabat && Array.isArray(json.masterPejabat.eselon1List)) {
        dbPejabat = json.masterPejabat;
        localStorage.setItem(DB_PEJABAT_STORAGE_KEY, JSON.stringify(dbPejabat));
      }
      if (Array.isArray(json.arsip)) {
        arsipList = json.arsip;
        localStorage.setItem(ARSIP_STORAGE_KEY, JSON.stringify(arsipList));
      }
      if (currentUser) {
        refreshUnitDropdowns();
        updateArsipCounter();
      }
    }
  } catch (err) {
    console.warn("Sinkronisasi awal dilewati (offline/CORS):", err);
  }
}

addSasaranBlock();
addKegiatanAnggaranRow();
if (currentUser) {
  initAppAfterLogin();
}
syncFromCloudOnLoad();
