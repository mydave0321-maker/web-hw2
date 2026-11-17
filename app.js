


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

 // ===== Part B =====

// averageBy : 배열, 키 이름 => 해당 값의 평균
function averageBy(list, key) {
  if (list.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += Number(list[i][key]);
  }
  return sum / list.length;
}

// average : 영화 배열 => 평균 평점
function average(list) {
  return averageBy(list, "rating");
}

// best : 영화 배열 => 최고 평점 영화 객체
function best(list) {
  if (list.length === 0) return null;

  let maxIndex = 0;

  for (let i = 1; i < list.length; i++) {
    if (list[i].rating > list[maxIndex].rating) {
      maxIndex = i;
    }
  }

  return list[maxIndex];
}

// filterByRating : 배열, 최소 평점 => 새 배열
function filterByRating(list, min) {
  return list.filter(m => m.rating >= min);
}

// sortBy : 배열, 키, 내림차순 여부 => 새 배열
function sortBy(list, key, desc) {
  const sign = desc ? -1 : 1;

  return [...list].sort((a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]) * sign;
    }
    return (a[key] - b[key]) * sign;
  });
}

// search : 배열, 검색어 => 제목이 일치하는 새 배열
function search(list, keyword) {
  const word = keyword.trim().toLowerCase();

  return list.filter(m =>
    m.title.toLowerCase().includes(word)
  );
}

// formatNumber : 숫자 => 쉼표가 들어간 문자열
function formatNumber(n) {
  return Number(n).toLocaleString("ko-KR");
}

// yearsSince : 개봉일 => 개봉 후 지난 연도 수
function yearsSince(dateStr) {
  const year = new Date(dateStr).getFullYear();
  return new Date().getFullYear() - year;
}

// ===== Part B 결과 출력 =====

const bestMovie = best(movies);
const audienceMovie = sortBy(movies, "audience", true)[0];

document.getElementById("out").textContent =
  "전체 " + movies.length + "편, 평균 평점 " +
  average(movies).toFixed(1) + "점\n" +

  "최고 평점: " + bestMovie.title +
  " (" + bestMovie.rating + "점, 개봉한 지 " +
  yearsSince(bestMovie.date) + "년)\n" +

  "관객 1위: " + audienceMovie.title +
  " (누적 " + formatNumber(audienceMovie.audience) + "명)";

 // ===== Part C =====

// getList : TMDB 응답 객체 => 영화 배열
function getList(data) {
  return data.results;
}

// C1: TMDB 응답 정보
console.log(
  "C1 페이지 " + TMDB.page +
  ", 전체 페이지 " + TMDB.total_pages +
  ", 전체 영화 " + TMDB.total_results +
  ", 이번 응답 " + getList(TMDB).length + "편"
);

// C2: 현재 상영작 평균 평점
console.log(
  "C2 상영작 평균 평점:",
  averageBy(getList(TMDB), "vote_average").toFixed(1)
);

// C3: 평점 상위 5편 표
console.log("C3 평점 상위 5편");

console.table(
  sortBy(getList(TMDB), "vote_average", true).slice(0, 5),
  ["title", "release_date", "vote_average"]
);

// C4: 제목 검색 결과
console.log(
  "C4 검색 결과:",
  search(getList(TMDB), "하트").length + "편"
);
