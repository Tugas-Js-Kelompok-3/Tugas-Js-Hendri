function bilangan(nomor) {
  if (nomor % 2 == 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}
bilangan(123213125);

// Rumus Persegi
function persegi(sisi) {
  console.log(sisi * sisi);
}

persegi(9, 9);

// Rumus Persegi Panjang
function persegipanjang(panjang, lebar) {
  console.log(panjang * lebar);
}

persegipanjang(20, 5);
