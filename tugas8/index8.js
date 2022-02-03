//Soal 3
function biji(jumlah) {
  const hasil = jumlah.map((el) => {
    const arrayBaru = '';

    return (el += arrayBaru);
  });
  const split = hasil[3].split(',');
  hasil.pop();
  console.log(hasil, split.join(' '));
}
biji(['hallo', 'nama', 'saya', ['hendriansyah', 'pratama', ['kelas', ['11', ['rpl', '2']]]]]);

//Soal 4
const obj = {
  nama: 'hendriansyah',
  kelas: 'RPL 2',
  umur: 17,
  nikah: false,
  Hp: {
    nama: 'Realme 3 Pro',
    spesifikasiHp: {
      chipset: 'Snapdragon 710G',
      ram: '4 GB',
      rom: '64 GB',
      camera: '64mp',
    },
  },
};
console.log(obj.Hp);
