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

const btn1 = document.getElementById('btn1')//spesifik hanya manggil id doang
const btn2 = document.querySelector('button')
const btn3 = document.getElementById('btn3')

btn1.style.border = "none"
btn1.style.padding = "8px"
btn1.style.color = "blue"
btn1.style.background = "tomato"



function gantiWarna(){
    // alert('aman')
    // console.log(`aman`)
    btn1.style.background = `yellow`
}

function ubahText(){
    console.log('ubah textnya')
    btn1.textContent = `hahah hihih`
}

function keluarText(){
    // console.log('keluar textnya')
    // alert('kamu out dari boxnya')
    btn1.textContent = 'klik saya 1'
}

