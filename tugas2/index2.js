// perulangan For, For in, For off
const archon = ['Invoker', 'Bara', 'Ursa', 'Axe'];

for (let i = 0; i < archon.length; i++) {
  console.log(archon[i]);
}

const gender = ['Male', 'Female', 'Gay'];
let a = 0;
for (let a in gender) {
  console.log(gender[a]);
}

const nickname = ['Meracle', 'Miracle', 'Hendri'];
for (let x of nickname) {
  console.log(x);
}
