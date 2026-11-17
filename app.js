


 // ===== Part A =====

let sumA = 0;
let maxA = 0;
let countA = 0;

let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countBeforeA = 0;

let bigA = "";

for (let i = 0; i < titles.length; i++) {

  // A1 : 평점 합계
  sumA += ratings[i];

  // A2 : 최고 평점 영화
  if (ratings[i] > ratings[maxA]) {
    maxA = i;
  }

  // A3 : 평점 8점 이상
  if (ratings[i] >= 8) {
    countA++;
  }

  // A4 : 연도대별 영화 수
  if (years[i] >= 2020) {
    count2020A++;
  } else if (years[i] >= 2010) {
    count2010A++;
  } else if (years[i] >= 2000) {
    count2000A++;
  } else {
    countBeforeA++;
  }

  // A5 : 관객 100만 이상
  if (audiences[i] >= 1000000) {
    bigA += titles[i] + " ";
  }
}

// A1 : 평균 평점
console.log("A1 평균 평점:", sumA / ratings.length);

// A2 : 최고 평점
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);

// A3 : 8점 이상 영화 수
console.log("A3 8점 이상:", countA + "편");

// A4 : 연도대별 영화 수
console.log(
  "A4 2020년대", count2020A + "편,",
  "2010년대", count2010A + "편,",
  "2000년대", count2000A + "편,",
  "그 이전", countBeforeA + "편"
);

// A5 : 관객 100만 이상
console.log(
  "A5 관객 100만 이상:",
  bigA === "" ? "없음" : bigA
);
