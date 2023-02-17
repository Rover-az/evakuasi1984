var daftarLokasi = document.getElementsByClassName('lokasi');
for (let i = 0; i < daftarLokasi.length; i++) {
    daftarLokasi[i].innerHTML = '\
        <select id="lokasi'+i.toString()+'">\
            <option value="A">Alpha</option>\
            <option value="B">Beta</option>\
            <option value="C">Gamma</option>\
            <option value="D">Delta</option>\
        </select>\
    ';
}
var daftarTNB = document.getElementsByClassName('tnb');
for (let i = 0; i < daftarTNB.length; i++) {
    daftarTNB[i].innerHTML = '\
        <select id="tanggal'+i.toString()+'">\
            <option value="01">01</option>\
            <option value="02">02</option>\
            <option value="03">03</option>\
            <option value="04">04</option>\
        </select>\
        <select id="bulan'+i.toString()+'">\
            <option value="Jan">Jan</option>\
            <option value="Feb">Feb</option>\
            <option value="Mar">Mar</option>\
            <option value="Apr">Apr</option>\
        </select>\
    ';
}
var daftarValidasi = document.getElementsByClassName('validasi');
for (let i = 0; i < daftarValidasi.length; i++) {
    daftarValidasi[i].innerHTML = '\
        <button type="button" class="btn btn-primary" onclick=koreksi('+i.toString()+')>Periksa!</button>\
    ';
}
//Iya, saya tahu kode ini tidak "secure", tetapi tolonglah jangan intip-intip
//Permainan seperti ini tidak seru kalau sudah baca spoiler jawabannya
//Saya tidak tahu menahu seputar "server-side processing (?)" atau apa lah itu istilahnya
var kunciLokasi = ["A","B","C","D"];
var kunciTanggal = ["01","02","03","01"];
var kunciBulan = ["Jan","Feb","Mar","Jan"];

function koreksi(apa) {
    let cekNomor = parseInt(apa);
    let cekLokasi = document.getElementById('lokasi'+apa).value;
    let cekTanggal = document.getElementById('tanggal'+apa).value;
    let cekBulan = document.getElementById('bulan'+apa).value;
    if (cekLokasi==kunciLokasi[cekNomor] & cekTanggal==kunciTanggal[cekNomor] & cekBulan==kunciBulan[cekNomor]) {
        alert("Yeah, benar.");
        document.getElementById('lokasi'+apa).setAttribute("disabled", "disabled");
        document.getElementById('tanggal'+apa).setAttribute("disabled", "disabled");
        document.getElementById('bulan'+apa).setAttribute("disabled", "disabled");
        document.getElementsByClassName('validasi')[cekNomor].innerHTML = '\
            <button type="button" class="btn btn-success">Valid</button>\
         ';
    } else {
        alert("Maaf, ada komponen yang belum tepat.");
    }
}
