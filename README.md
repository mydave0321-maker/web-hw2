
# 실습과제 #2 : 영화 데이터를 자바스크립트로

- 이름 / 학번 : 김민재 / 2651009
- 사이트 주소 : https://mydave0321-maker.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-26)

## 구현 항목 체크

- [x] Part A : 배열 4개와 A1~A5 계산
- [x] Part B : 영화 객체 10개와 함수 7개
- [x] Part C : TMDB 실제 응답 분석
- [x] 출력 : 콘솔 캡처 2장과 페이지 요약 3줄
- [x] 코드 품질 : 함수 주석, const와 let 사용, 원본 배열 유지
- [x] 제출 형식 : GitHub Pages 및 README 작성

## 자가 테스트 표

| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | 1,234,567 | 확인 필요 |
| 2 | average(movies).toFixed(1) | 7.6 | 확인 필요 |
| 3 | best(movies).title | 세븐 | 확인 필요 |
| 4 | sortBy(movies, "rating", true)[0].title | 세븐 | 확인 필요 |
| 5 | filterByRating(movies, 8).length | 3 | 확인 필요 |
| 6 | search(movies, " 인터 ").length | 0 | 확인 필요 |
| 7 | yearsSince("2014-11-06") | 12 | 확인 필요 |
| 8 | movies[0].title | 히트 | 확인 필요 |

## 어려웠던 점 3가지와 해결

1. TMDB JSON 데이터를 JavaScript 파일에 넣는 과정에서 문법 오류가 발생했다. JSON 구조를 확인하고 중복된 부분을 삭제하여 해결했다.
2. GitHub Pages 주소를 잘못 입력하여 404 오류가 발생했다. 정확한 GitHub 아이디와 저장소 이름을 확인하여 해결했다.
3. 영화 데이터를 배열과 객체로 구분하여 관리하는 과정이 어려웠다. 데이터 구조를 나누고 각 함수의 역할을 확인하며 해결했다.

## 참고한 자료

- 웹개발기초 수업 교재 8~11장
- TMDB API
- KOBIS 영화관입장권통합전산망
- MDN JavaScript 문서

## 생성형 AI 사용 내역

- 사용 도구 : ChatGPT
- 질문 요지 : JavaScript 배열과 객체 구성, 함수 구현, TMDB JSON 오류 및 GitHub Pages 설정 방법
- 답변 요약 : 영화 데이터 구성과 JavaScript 코드 작성, 오류 원인 분석 및 해결 방법을 안내받았다.
- 채택 여부 : 코드와 설명을 참고하여 과제에 적용하였다.
