var hex = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

var hex_verse = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

let to_decimal = (from, num = "") => {
  num = num.toUpperCase();

  if (from == 10) {
    return num;
  }

  let [cor, adv] = num.split(".");
  if (adv == undefined) {
    adv = "";
  }
  let numAfter = 0;
  for (let i = 0; i < cor.length; i++) {
    const ele = cor[i];
    numAfter += hex[ele] * Math.pow(from, cor.length - i - 1);
    //console.log(cor.length - i - 1);
  }
  for (let i = 0; i < adv.length; i++) {
    const ele = adv[i];
    numAfter += hex[ele] * Math.pow(from, -(i + 1));
  }

  return String(numAfter);
};
let from_decimal = (to, num = "") => {
  num = num.toUpperCase();
  let [cor, adv] = num.split(".");
  cor = Number(cor);
  if (adv == undefined) {
    adv = 0;
  }
  let arr = [];
  let emo = cor;
  while (emo) {
    let reminder = emo % to;
    arr.push(reminder);
    emo = Math.floor(emo / to);
  }
  let ans = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    const ele = arr[i];
    ans += String(hex_verse[ele]);
  }
  arr = [];
  let i = 10;

  while (i && adv && adv !== undefined) {
    adv = "0." + adv;
    adv = Number(adv);
    console.log(adv);
    if (i == 10) {
      ans += ".";
    }
    adv = adv * to;
    let [ber, advv] = String(adv).split(".");
    adv = Number(advv);
    ans += hex_verse[ber];
    i--;
  }

  return ans;
};

const baseConvert = (from, to, num) => {
  return from_decimal(to, to_decimal(from, num));
};

console.log(from_decimal( 10 , "790.8125"));;
export default baseConvert;