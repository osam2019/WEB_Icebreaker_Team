# Icebreaker
> 아이스 브레이커 친목 활동을 위한 모바일 웹앱  
> This readme is also available in [English](https://github.com/coolutony/icebreaker/blob/master/README.eng.md)

## 프로젝트 개요
### 프로젝트명
아이스 브레이커 (Icebreaker)

### 팀명/개발자
팀 아이스 브레이커
- 상병 김선욱
- 일병 김동성

### 주요내용
처음 만나 서로 서먹서먹한 모임에서 어색함을 없애고 친목을 다지기 위해 하는 활동을 아이스 브레이킹이라고 합니다. 이 때 주로 하는 활동 중 하나가 질문을 하나 제시하면 각자 그 질문에 대한 답변을 익명으로 제출한 뒤 서로 이야기를 나누며 누가 어떤 답을 썼는지 알아맞추는 활동입니다. 저희는 그러한 활동을 간편하게 즐길 수 있도록 모바일 웹 어플리케이션으로 개발하는 프로젝트를 기획하였습니다.

## Getting Started

### Prerequisites
-  Node.js
	- 설치파일 다운로드 ([https://nodejs.org/en/download/)](https://nodejs.org/en/download/)
	- Package manger를 이용한 설치 ([https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/))

### Installation
1. Git repository를 클론합니다
```
git clone https://github.com/coolutony/icebreaker
cd icebreaker
```

2. 실행에 필요한 패키지들을 설치합니다.
```
npm install
```

### Built With
- vue-cli
- vue-router
- vuex
- element-ui (for icons)

## Usage
### 빌드 세팅
```
# serve with hot reload at 8080 port
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
더 자세한 작동법은 이 [가이드](http://vuejs-templates.github.io/webpack/)와 [vue-loader를 위한 문서](http://vuejs.github.io/vue-loader)에서 확인하십시오.

### 사용법
> 알림: 본 웹앱은 멀티플레이 기능이 주 목적이지만 아직 백엔드 서버가 구축이 안되어 멀티플레이어가 불가능합니다. 현재 있는 버전은 실제로 사용했을 때 나타날 화면들을 보여주는 모의 버전입니다.
1. `http://<dev-server-ip>:8080`로 사이트 접속
	- 모바일 환경에 최적화되어 있습니다.
3. 'Create/Join Room' 메뉴 선택
	- 현재는 모의 버전으로, Join Room 선택시 room ID를 넣지 않아도 진행이 됩니다.
4. 다른 사용자들이 접속할 때까지 대기
	- 현재 멀티플레이어 기능이 지원되지 않아 대기하지 않고 바로 Start 버튼을 누르면 됩니다.
5. 질문 선택
6. 질문에 대한 답변 작성
7. 각 답변을 작성한 것 같은 사람 선택 후 Guess 버튼으로 정답 여부 확인
## File Manifest
```
├── build/              # webpack config files
├── config/             # main project config
├── src/
|    ├── api/           # "fake" server api
|    ├── assets/
|    ├── components/    # vue components
|    ├── public/        # json files
|    ├── router/        # vue-router
|    ├── store/         # vuex modules
|    ├── App.vue        # main app component
|    └── main.js        # app entry file
├── ...
├── package.json        # build scripts and dependencies
└── README.md
```
더 자세한 작동법은 이 [가이드](https://vuejs-templates.github.io/webpack/)에서 확인하십시오.

## License
본 프로젝트는 [MIT](http://opensource.org/licenses/MIT) 라이센스 하에 배포되어있습니다.

## Contact Information
- [김선욱](https://github.com/coolutony) - [coolutony@gmail.com](mailto:coolutony@gmail.com)
- [김동성](https://github.com/magicaquartet) - [dev.dskim@gmail.com](mailto:dev.dskim@gmail.com)

## Known Issues
- 백엔드/데이터베이스 서버가 구현되어 있지 않으며 현재 json 파일들로 대체되어있습니다.

## Change Log
- 2019-10-24
	- 추가: Front-end Vue 앱
