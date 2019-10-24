# OSSCAMP Q&A

<br><img src="./src/assets/realLogo.png" alt="ARMY Q&A">

프로젝트 명 : ARMY Q&A <br> 
개발자 : 상병 김용래 / 팀 Q&A
<br><br><br>
프로젝트 소개 ppt와 화면 정의서는 <br>
- Army Q&A 소개.pptx <br>
- Army Q&A 화면정의서.pdf <br>

파일을 참고해주시기 바랍니다.

## 프로젝트 설명

<br><br>
군 생활에 필요한 정보들을 질문과 답변을 통해 얻어갈 수 있는 페이지입니다.

<br><br>
갓 전입 온 신병에게 꼭 필요한 정보부터, 말년병장도 모르는 나만의 꿀팁까지

군 생활을 보다 윤택하게 만들어주는 정보 공유 페이지입니다.

<br><br>
이런 분들에게 필요합니다.
- 입대가 코앞으로 다가온 훈련병(진)
- 선임 이름만 간신히 외운 병아리 이등병
- 당장 다음주가 혹한기 훈련인데 뭘 챙겨야 할지 머리가 띵한 일병
- 슬슬 말년 휴가 계획은 짜야겠는데 어떻게 써야 잘썼다고 소문이 날까 궁금한 상병
- 전역 전 마지막으로 짬에서 나오는 바이브를 분출하고 싶은 병장
- 다른 병사들이 무슨 생각을 하고 사는지 궁금한 모든 군인
<br><br><br><br>

***

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
본 프로젝트는 PC 버젼 Chrome 브라우저에 최적화 되어있습니다.

하위 버전 브라우저에서는 정상적으로 작동하지 않을 수 있습니다.

<br>

## 설치 안내 (Installation Process)
아래 방법으로 node module 설치 후 실행해주시기 바랍니다. 

```
npm install 
// node module install

npm run serve
// server running on http://localhost:8080/
```

<BR>

## 사용법 (Getting Started)

메인 화면의 검색창에서 원하는 정보를 빠르게 찾아보거나<br>
새로운 질문을 작성하고, 다른 사용자의 질문에 답변할 수 있습니다.<br><br>

***주의사항*** <br>
실제 데이터베이스에 연동한 것이 아닌 json 파일을 불러오는 방식이기 때문에<br>
브라우저를 새로고침 할 경우 데이터가 ***초기화***됩니다.<br><br>

현재 질문 작성 기능은 준비중입니다.

## 파일 정보 및 목록 (File Manifest)

Project Directory<br>
- public<br>
  - mockup (mockup file directory)<br>
    - popularData.json
    - solvedData.json
    - unsolvedData.json
    - searchDummy.json
  - favicon.ico
  - index.html
- src<br>
   - assets (img file directory)<br>
   - components (vue component directory)<br>
     - board (board component directory)<br>
       - board.vue<br>
       - board-hot.vue<br>
       - board-solved.vue<br>
     - login.vue<br>
     - main.vue<br>
  - store<br>
    - module<br>
      - board<br>
        - actions.js<br>
        - getters.js<br>
        - index.js<br>
        - state.js<br>
        - types.js<br>
      - index.js<br>
    - App.vue (main vue component)<br>
    - main.js (main js file)<br>
    - router.js (router js file)<br>
- .gitignore<br>
- babel.config.js<br>
- package.json<br>
- package-lock.json<br>
- README.md<br>
- vue.config.js<br>
- Army Q&A 소개.pptx<br>
- Army Q&A 화면정의서.pdf<br>
<br>

## 저작권 및 사용권 정보 (Copyright / End User License)

The MIT License (MIT)
Copyright (c) 2007 James Newton-King
https://raw.githubusercontent.com/JamesNK/Newtonsoft.Json/master/LICENSE.md
The MIT License (MIT)
 
Copyright (c) 2007 James Newton-King
 
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## 배포자 및 개발자의 연락처 정보 (Contact Information)
김용래 (kyr9389@naver.com)

[개발자 블로그](https://usage.tistory.com/)

## 알려진 버그 (Known Issues)
해당 사항 없음

## 문제 발생에 대한 해결책 (Troubleshooting)
문제 발생시 문제가 발생한 화면을 해당 문제가 발생한 경위와 함께 개발자 이메일 주소로 보내주시기 바랍니다.

## 크레딧 (Credit)

Core by **[Vue.js](https://vuejs.org/)**<br>
UI by **[element-ui](https://element.eleme.io/)**<br>
Thanks to **[국방부오픈소스아카데미](https://osam.kr/)**<br><br>
[웹동네](http://webdongne.com) **김춘경 멘토**님 감사드립니다.


## 추가 예정 기능 (Coming soon)

<br>
- 질문 작성
   - 찾는 정보가 없을때 질문을 통해 답변을 받을 수 있도록 합니다.


- 답변 추천 기능
   - 추천을 통해 답변의 유용성을 판단하고, 나아가 이용자에게 더 높은 수준의 정보를 제공합니다.


- 커뮤니티 기능
   - 부대별, 보직별 특성에 맞는 게시판을 제공하여 보다 전문적인 데이터가 축적되도록 유도합니다.

<br>

## 업데이트 정보 (Change Log)
- version 0.0.1 (2019-10-24)


## 국방부오픈소스아카데미
본 repository는 국방부오픈소스아카데미를 위해 제작된 프로젝트입니다.


