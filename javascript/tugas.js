// tugas kecil dea afrizal

/*
1. prompt untuk mengetahui saldo akhir ari apa yang diinputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
*/

/*let saldoAwal = prompt ("masukkan saldo awal anda?")
let saldoTambahan = prompt("masukkan tabungan anda?")

let saldoAkhir = parseInt(saldoAwal) + parseInt(saldoTambahan) 
alert ( `saldo awal anda adalah ${saldoAwal} dan saldo tambahan anda adalah ${saldoTambahan} berjumlah ${saldoAkhir}`) 
*/

// let hari = new Date().getDay()


switch(new Date().getDay()) {   
    case 0:
        day = "Sunday"; 
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

tanggal = new Date().getDate();
bulan = new Date().getMonth()
tahun = new Date().getFullYear()
alert(`hari ini adalah hari ${day} dan tanggal ${tanggal} bulan ${arrbulan[5]} tahun ${tahun}`)
