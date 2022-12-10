# 🚩슬랙 챗봇 - 26
> 이 챗봇은 2022 전북대학교 오픈소스소프웨어개발의 팀프로젝트로 만든 챗봇입니다.
## 🛠 개발 환경
> ### 개발 환경은 다음과 같습니다.
> - 운영체제: Windows10(or MacOS)
> - JS런타임 툴:  Node.js(18.12.0 버전)
> - 코드편집기: VSCode
> - 코드 컨벤션: ESLint(Airbnb-base) 및 Prettier
> - Git Hook: Husky를 통한 강제
>
## ⚙ 테스트 및 운영 환경
> ### 테스트 및 운영에 사용되는 환경입니다.
> - 클라우드 서버: Ubuntu 18.04 LTS
> - JS런타임 툴: Node.js
>
## 📕 가이드라인
> ### 사용법은 다음과 같습니다. (이 부분은 수정이 필요합니다.)
> 1. 어쩌구
> 2. 저쩌구
> 3. 삼치기
> 4. 사골국
> 5. ...추가 필요
## 🌈 모든 버전
> ### - 1.0.0 (최신)
>
>
<<<<<<< HEAD
=======
## 📕 Guide Line
> - ### FOR USERS
> #### 1. Install Node.js(ver. 18) and Visual Studio Code.
> #### 2. Clone our repository or Unzip the **LBDRWT-main.zip**.
> #### 3. Open the (**LBDRWT-main** or clone) directory in Visual Studio Code.
> #### 4. Open a terminal window in vscode and type the following:
> ```
> npm install
> ```
> #### 5. Create a new directory named **'data'**, and create **token.js** in the 'data directory'.
> ```
> const data = 'Enter your token';
> 
> function getToken() {
>   return data;
> }
> 
> module.exports.getToken = getToken;
> 
> ```
> #### 6. Type the following:
> ```
> node index.js
> ```
> #### 7. When it runs normally, you can see the token printed out.
> #
> - ### FOR NEW COLLABORATORS
> #### 1. Complete all of the above guides.(For git clone, use github desktop or git bash.)
> #### 2. Install the following from VSCode's extensions:
> ![image](https://user-images.githubusercontent.com/61104736/206609028-55d060e1-ce5f-4c2a-ab4e-65753538cf2e.png)
> #### 3. Open a terminal window in vscode and type the following:
> ```
> npm install -g eslint eslint-config-airbnb-base eslint-plugin-import
> eslint --init
> ```
> ![image](https://user-images.githubusercontent.com/61104736/206612844-dc05321e-d241-4171-b52c-8c313906cc52.png)
> ```
> npx install-peerdeps --dev eslint-config-airbnb
> ```
> #### 4. Edit .eslintrc.js
> ```
> module.exports = {
>  root: true,
>  env: {
>    browser: true,
>    es2021: true,
>  },
>  extends: ['airbnb-base'],
>  overrides: [
>  ],
>  parserOptions: {
>    ecmaVersion: 'latest',
>    sourceType: 'module',
>  },
>  rules: {
>    'linebreak-style': 0,
>  },
>};
> ```
> #### 5. Install husky for git hook
> ```
> npx husky-init
> npm install
> npx husky add .husky/pre-commit 'eslint . --ext .js'
> ```
> Delete 'npm test' in pre-commit file.
>>>>>>> 168d3417560f143e82e96d915e0d3bc9e283194c
>
>
>
#
