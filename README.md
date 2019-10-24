# Icebreaker
> 아이스 브레이커 친목 활동을 위한 모바일 웹앱
> This readme is also available in [English](https://github.com/coolutony/icebreaker/blob/master/README.eng.md)
### Built With
- vue-cli
- vue-router
- vuex
- element-ui (for icons)

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
