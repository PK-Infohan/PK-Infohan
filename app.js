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

  const kopHtml = `
    <div class="kop-resmi">
      <img src="logo.png" class="kop-logo" alt="Lambang Kemhan" />
      <div class="kop-teks">
        <p>SEKRETARIAT JENDERAL KEMHAN RI</p>
        <p>BIRO INFORMASI PERTAHANAN</p>
      </div>
    </div>
  `;

  const ttdBlokHtml = `
    <div class="ttd-row">
      <div class="ttd-col">
        <div class="ttd-tanggal">&nbsp;</div>
        <div class="ttd-jabatan">Pihak Kedua,<br />${data.pihakKedua.jabatan}</div>
        <div class="ttd-space"></div>
        <div class="ttd-nama">${data.pihakKedua.nama}</div>
        <div class="ttd-pangkat">${data.pihakKedua.pangkat}</div>
      </div>
      <div class="ttd-col">
        <div class="ttd-tanggal">${data.tempatTanggal}</div>
        <div class="ttd-jabatan">Pihak Pertama,<br />${data.pihakPertama.jabatan}</div>
        <div class="ttd-space"></div>
        <div class="ttd-nama">${data.pihakPertama.nama}</div>
        <div class="ttd-pangkat">${data.pihakPertama.pangkat}</div>
      </div>
    </div>
  `;

  dokumenPK.innerHTML = `
    <!-- LEMBARAN 1: PERNYATAAN PERJANJIAN KINERJA -->
    <div class="lembaran">
      ${kopHtml}

      <div class="judul-pk">
        PERNYATAAN PERJANJIAN KINERJA<br />
        ${data.pihakPertama.jabatan}<br />
        TAHUN ${data.tahun}
      </div>

      <p class="paragraf">Dalam rangka mewujudkan manajemen pemerintahan yang efektif, transparan dan akuntabel serta berorientasi pada hasil, kami yang bertanda tangan di bawah ini:</p>

      <table class="identitas-table">
        <tr>
          <td style="width:110px;">Nama</td>
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
          <td style="width:110px;">Nama</td>
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

    <!-- LEMBARAN 2: LAMPIRAN PERJANJIAN KINERJA -->
    <div class="lembaran page-break">
      ${kopHtml}

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
