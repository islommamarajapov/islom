// 1-savol:Scope 3 turga bo'linadi bular 1-Global, 2-Function, 3-Block. 
// if,for,while,do while bular Block scopeka turiga kiradi.
// Oddiy yozishimiz Global scopeka turiga kiradi. Masalan: let a=5; console.log(a);

// 2-savol:
function Bolunuvchi() {
    let number = parseInt(prompt("Sonni kiriting: "));
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        console.log(i);
      }
    }
  }
  Bolunuvchi();
// 3-savol:
function Number(K) {
    switch (K) {
      case 1:
        return "yomon";
      case 2:
        return "qoniqarsiz";
      case 3:
        return "qoniqarli";
      case 4:
        return "yaxshi";
      case 5:
        return "alo";
      default:
        return "xato";
    }
  }
  
  let K = 5;
  let evaluation = Number(K);
  console.log(evaluation);
// 4-savol:
function count(N) {
    let hours = Math.floor(N / 3600);
    let seconds = N % 3600;
    return [hours, seconds];
  }
  let N = 12321;
  let [hours, seconds] = count(N);
  if (hours === 1) {
    console.log(`${hours} soat ${seconds} second o'tdi kun boshlangandan beri.`);
  } else {
    console.log(`${hours} soat ${seconds} second o'tdi kun boshlangandan beri.`);
  }
// 5-savol: Java script 1995-yilda paydo bo'lgan.Va shu yil browserda islay boshladi.
// JavaScript backendda 2009-yil  ishlay boshladi..