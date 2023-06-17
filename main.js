let nama = "FEeater"
let usia = "26"
let tinggiBadan = 156
let beratBadan
let pacar = 0
beratBadan = 60
let saldoAwal = 10000
let saldoTambahan = 5000
const hutang = 3000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

if (pacar == null) {
    pacar = "belum punya"
} else {
    pacar = "udah punya"
}

    

alert(`nama saya ${nama} usia saya ${usia} tinggi badan ${tinggiBadan} 
cm berat badan ${beratBadan} pacar ${pacar}`)

alert(`saldo kamu adalah Rp.${saldoAwal} 
& saldo akhir kamu adalah Rp.${saldoTambahan} jadi total saldo anda adalah Rp.${saldoAkhir}`)