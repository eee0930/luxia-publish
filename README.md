# LUXIA Publish  

### - Deployment
**github pages:** [https://eee0930.github.io/luxia-publish](https://eee0930.github.io/luxia-publish)

### - Period
2024-12-06 ~ 2024-12-29

### - Stacks
#### Languages
<div>
<img src="https://img.shields.io/badge/JavaScript-ffae00?style=for-the-badge&logo=javascript&logoColor=ffffff"/>
<img src="https://img.shields.io/badge/HTML-333333?style=for-the-badge&logo=html&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/CSS-DB7093?style=for-the-badge&logo=css&logoColor=white"/>
</div>

#### Environment
<div>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/liveserver-F05050?style=for-the-badge&logo=liveserver&logoColor=white"/>
</div>


## 1. How to Run
### 1. 프로젝트 바로 열기
1. luxia-publish 프로젝트 Dir을 연다.
2. index.html 파일을 열어 프로젝트를 확인한다.

### 2. Live Server
1. Live Server를 설치한다. (vscode Marketplace에서 "Live Server"를 검색)
2. **Shift + command (Ctl) + P** 를 누른 후
3. **Live Server: Open with Live Server** 를 입력하여 실행한다.
4. port 5014로 이동하여 프로젝트를 확인한다.






## 2. Publish Info
### 1. breakpoint
- 모바일 버전을 지향하기 떄문에 css의 media query는 min-width를 기본으로 사용하였습니다.
- pc 버전의 section 너비가 770px이기 때문에 각 화면 section 및 components의 breakpoint는 810px로 정의하였습니다.
- layout의 breakpoint는 810, 1200 입니다.
- gnb와 menu의 breakpoint는 1200입니다.

### 2. 공통 js 와 css
- 모든 페이지에서 공통으로 사용하는 js는 src/js/common/ 경로에 있는 app.js입니다.
- src/js/common/ 경로에 있는 swiper-bundle.min.js는 swiper.js로, swiper가 필요한 페이지 (luxia_chat.html)에만 사용하고 있습니다.
- 모든 페이지에서 공통으로 사용하는 css는 src/css/common/ 경로에 있는 style.css입니다.
- style.css에는 src/css/common/ 경로에 있는 모든 components style을 import 하였으며, app.js에는 모든 components에서 사용되는 모션 및 인터렉션에 대한 구현이 담겨있습니다.

### 3. 각 페이지 js와 css
- 각 페이지는 공통 js와 공통 css를 제외하고 각각의 독립된 js와 css를 사용합니다.
- 예를 들어  luxia_chat.html 에서는 luxia_chat.js와 luxia_chat.css를 사용합니다.

### 4. dev
- 개발이 필요한 부분 (api 호출, loop, 데이터 입력 등)이 필요한 부분엔 \
<! --/* [D] 주석 내용 */-- > 주석으로 표시하였습니다.




## 3. Directory structure  
```
📂assets
 ┣ 📂fonts
 ┣ 📂icons
 ┃ ┣ 📂chat
 ┃ ┣ 📂menu
 ┣ 📂imgs
 ┃ 📂mock
 ┗ ┗ 📂imgs
📂components ---> components 예시 마크업 코드
 ┣ 📜gnb.html
 ┣ 📜jumbotron.html
 ┣ 📜layout.html
 ┣ 📜loading.html
 ┗ 📜menu.html
📂pages ---> luxia chat 화면 html
 ┣ 📂auth
 ┃ ┣ 📜login.html
 ┃ ┗ 📜sign_up.html
 ┣ 📂custom_chat
 ┃ ┣ 📜add_custom_chat.html
 ┃ ┗ 📜custom_chat.html
 ┣ 📜luxia_chat.html
 ┣ 📜luxia_docs.html
 ┣ 📜luxia_generate.html
 ┣ 📜recents.html
 ┗ 📜todays_pick.html 
📂src
 ┣ 📂css
 ┃ ┣ 📂common ---> 공통 css
 ┃ ┃ ┗ 📜style.css
 ┃ ┗ 📂pages ---> luxia chat 화면에 삽입되는 css
 ┃ ┃ ┣ 📜auth.css
 ┃ ┃ ┣ 📜custom_chat.css
 ┃ ┃ ┣ 📜luxia_chat.css
 ┃ ┃ ┣ 📜luxia_docs.css
 ┃ ┃ ┣ 📜luxia_generate.css
 ┃ ┃ ┣ 📜recents.css
 ┃ ┃ ┗ 📜todays_pick.css
 ┣ 📂js
 ┃ ┣ 📂common ---> 공통 js
 ┃ ┃ ┣ 📜app.js
 ┃ ┃ ┗ 📜swiper-bundle.min.js
 ┃ ┣ 📂pages ---> luxia chat 화면에 삽입되는 js
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜custom_chat.js
 ┃ ┃ ┣ 📜luxia_chat.js
 ┃ ┃ ┣ 📜luxia_docs.js
 ┃ ┃ ┣ 📜luxia_generate.js
 ┗ ┗ ┗ 📜todays_pick.js
📜index.html

```   


