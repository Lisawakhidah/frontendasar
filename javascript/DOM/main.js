document.title = 'Lisa Wakhidah'

/*const body = document.body
body.append(`Helloworld`)

const h1 = document.createElement('h1')//<h1></h1>
h1.textContent = '<marquee>BISMILLAH BISA MASUK KE BODY TEXT</marquee>'//<h1>BISMILLAH BISA MASUK KE BODY TEXT</h1>

body.append(h1)

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee> Lisa Wakhidah</marquee>'

body.append(namaSaya)

const namaKamu = document.createElement('b')
namaKamu.innerText = '<marquee> Dea Afrizal</marquee>'

body.append(namaKamu)*/

const body = document.body
const btn1 = document.getElementById('btn1')//spesifik hanya manggil id doang
const btn2 = document.getElementById('btn2')
const btn3 = document.querySelector('btn3')

const defaultText = 'klik saya 1'
btn1.textContent = defaultText

// const namaku = 'Lisa Nusrotul Wakhidah'
// btn2.textContent = namaku

btn1.style.border = "none"
btn1.style.padding = "8px"
btn1.style.color = "blue"
btn1.style.background = "tomato"
//button 2
btn2.style.border = "none"
btn2.style.padding = "8px"
btn2.style.color = "blue"
btn2.style.background = "yellow"

let newText2

function clickButton(){
    // alert('aman')
    // console.log(`aman`)
    btn1.style.background = `yellow`
    const newText = document.createElement('p')
    newText.textContent = "Halo BUNG! apakabar"
    body.append(newText)

}

function ubahText(){
    console.log('ubah textnya')
    btn1.textContent = `hahah hihih`
}

function keluarText(){
    // console.log('keluar textnya')
    // alert('kamu out dari boxnya')
    btn1.textContent = defaultText
}

function ubahText2(){
    btn2.textContent = `hahah hihih`; // Ubah teks button2
    btn2.style.background = 'aqua'; // Ubah warna background button2
    newText2 = document.createElement('p'); // Buat paragraf baru
    newText2.textContent = 'LISA NUSROTUL WAKHIDAH'; // Tambahkan teks ke paragraf
    body.append(newText2); // Tambahkan paragraf ke body
}

// Fungsi untuk Button 2 saat mouse keluar
function keluarText2(){
    // Jika paragraf newText2 sudah ada, ubah warnanya
    if (newText2) {
        newText2.style.color = 'red'; // Ubah warna teks paragraf menjadi merah
    }
}

