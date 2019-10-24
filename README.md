# Icebreaker
> Mobile web application for ice breaking activity

### Built With
- vue-cli
- vue-router
- vuex
- element-ui (for icons)

## Getting Started

### Prerequisites
-  Node.js
	- Installer download ([https://nodejs.org/en/download/)](https://nodejs.org/en/download/)
	- Installing via package manager ([https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/))

### Installation
1. Clone git repository
```
git clone https://github.com/coolutony/icebreaker
cd icebreaker
```

2. Install dependencies
```
npm install
```

## Usage
### Build Setup
```
# serve with hot reload at 8080 port
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### How To Play
> Note: Although this web app is designed as multiplayer ice breaking game, only multiplaying feature is not supported now because there is no back-end server.
1. Access website `http://<dev-server-ip>:8080`
	- Optimized to mobile device.
3. Select 'Create/Join Room' menu
	- When joining room, you do not have to input room ID.
4. Wait for other users to join
	- Just skip this step because you are the only user!
5. Select a question
6. Answer the question
7. Guess and match answers to players
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
For a detailed explanation on how things work, checkout the [guide]([https://vuejs-templates.github.io/webpack/](https://vuejs-templates.github.io/webpack/structure.html))

## License
Distributed under the [MIT](http://opensource.org/licenses/MIT) License.

## Contact Information
- [Sunwook Kim](https://github.com/coolutony) - [coolutony@gmail.com](mailto:coolutony@gmail.com)
- [Dongseong Kim](https://github.com/magicaquartet) - [dev.dskim@gmail.com](mailto:dev.dskim@gmail.com)

## Known Issues
- Back-end/DB server is not implemented and replaced with json files.

## Change Log
- 2019-10-24
	- ADD: Front-end Vue app