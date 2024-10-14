let nama = "Lisa Wakhidah" // tipe string
let usia = 22 // tipe number
let tinggiBadan = 158.2 //tipe double float
let beratBadan
let pacar = "jdksh"
beratBadan = 52

//pengkondisian 
if(pacar == null){
    pacar = 'belom punya'
}else{
    pacar = 'udah punya'
}
// pengkondisian switch
// switch(pacar){
//     case 1 :
//         pacar = 'sudah punya 1 ajax'
//     break
//     case 2 :
//         pacar = 'sudah punya 2 ajax'
//     break
//     default :
//     pacar = 'belom punya pacar'
//     break
// }

let saldoAwal = 90000
let saldoTambahan = 10000
const hutang = 43000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

let x = 8
let y = 4

const z = x / y

alert(`nilai x ${x} / nilai y ${y} 
maka hasilnya adalah ${z}`)

alert(`nama anda adalah ${nama} 
usia anda adalah ${usia} 
tinggi badan anda adalah ${tinggiBadan}kg
pacar anda ${pacar}`
)

alert(`saldo awal saya sebesar Rp.${saldoAwal} 
& saldo tambahan yang akan saya miliki sebesar RP.${saldoTambahan}
jadi total saldo yang saya miliki adalah sebanyak Rp.${saldoAkhir}`)