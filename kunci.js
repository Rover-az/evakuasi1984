var levelLokasi = [];
var levelTanggal = [];
var levelBulan = [];
for (let i = 0; i < 24; i++) {
    switch(true) {
        case ([3,4,7,8,10,13,21,22,23].contains(i)):
            levelLokasi.push("*");
            break;
        case ([0,6,9,18,19,20].contains(i)):
            levelLokasi.push("**");
            break;
        default:
            levelLokasi.push("***");
    }
    switch(true) {
        case ([0,2,8,13,14,21,23].contains(i)):
            levelTanggal.push("*");
            break;
        case ([3,4,5,6,7,11,18,20,22].contains(i)):
            levelTanggal.push("**");
            break;
        default:
            levelTanggal.push("***");
    }
    switch(true) {
        case ([0,2,8,10,13,14,21,23].contains(i)):
            levelBulan.push("*");
            break;
        case ([1,3,4,5,6,7,11,18,19,20].contains(i)):
            levelBulan.push("**");
            break;
        default:
            levelBulan.push("***");
    }
}

var daftarLokasi = document.getElementsByClassName('lokasi');
for (let i = 0; i < daftarLokasi.length; i++) {
    daftarLokasi[i].innerHTML = '\
        <select id="lokasi'+i.toString()+'">\
            <option value="">'+levelLokasi[i]+'</option>\
            <option value="A">Alpha</option>\
            <option value="B">Beta</option>\
            <option value="C">Gamma</option>\
            <option value="D">Delta</option>\
            <option value="E">Epsilon</option>\
            <option value="F">Zeta</option>\
            <option value="G">Theta</option>\
            <option value="H">Eta</option>\
            <option value="I">Iota</option>\
            <option value="J">Kappa</option>\
            <option value="K">Lamda</option>\
            <option value="L">Mu</option>\
            <option value="M">Nu</option>\
            <option value="N">Xi</option>\
            <option value="O">Omicron</option>\
            <option value="P">Pi</option>\
            <option value="Q">Rho</option>\
            <option value="R">Sigma</option>\
            <option value="S">Tau</option>\
            <option value="T">Upsilon</option>\
            <option value="U">Phi</option>\
            <option value="V">Chi</option>\
            <option value="W">Psi</option>\
            <option value="X">Omega</option>\
        </select>\
    ';
}
var daftarTNB = document.getElementsByClassName('tnb');
for (let i = 0; i < daftarTNB.length; i++) {
    daftarTNB[i].innerHTML = '\
        <select id="tanggal'+i.toString()+'">\
            <option value="">'+levelTanggal[i]+'</option>\
            <option value="01">01</option>\
            <option value="02">02</option>\
            <option value="03">03</option>\
            <option value="04">04</option>\
            <option value="05">05</option>\
            <option value="06">06</option>\
            <option value="07">07</option>\
            <option value="08">08</option>\
            <option value="09">09</option>\
            <option value="10">10</option>\
            <option value="11">11</option>\
            <option value="12">12</option>\
            <option value="13">13</option>\
            <option value="14">14</option>\
            <option value="15">15</option>\
            <option value="16">16</option>\
            <option value="17">17</option>\
            <option value="18">18</option>\
            <option value="19">19</option>\
            <option value="20">20</option>\
            <option value="21">21</option>\
            <option value="22">22</option>\
            <option value="23">23</option>\
            <option value="24">24</option>\
            <option value="25">25</option>\
            <option value="26">26</option>\
            <option value="27">27</option>\
            <option value="28">28</option>\
            <option value="29">29</option>\
            <option value="30">30</option>\
            <option value="31">31</option>\
        </select>\
        <select id="bulan'+i.toString()+'">\
            <option value="">'+levelBulan[i]+'</option>\
            <option value="Jan">Jan</option>\
            <option value="Feb">Feb</option>\
            <option value="Mar">Mar</option>\
            <option value="Apr">Apr</option>\
            <option value="Mei">Mei</option>\
            <option value="Jun">Jun</option>\
            <option value="Jul">Jul</option>\
            <option value="Agu">Agu</option>\
            <option value="Sep">Sep</option>\
            <option value="Okt">Okt</option>\
            <option value="Nov">Nov</option>\
            <option value="Des">Des</option>\
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
var kunciLokasi = ["K","M","C","X","I","H","O","G","A","N","E","U","P","J","V","T","L","R","Q","S","B","F","W","D"];
var kunciTanggal = ["20","19","12","20","21","18","01","11","20","19","06","31","13","17","10","30","25","30","31","01","29","03","19","31"];
var kunciBulan = ["Jun","Apr","Nov","Okt","Okt","Okt","Mei","Nov","Mar","Apr","Feb","Des","Des","Feb","Apr","Sep","Agu","Sep","Mei","Okt","Feb","Jan","Jul","Des"];

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
