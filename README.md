# 🚩 SLACK CHATBOT
> This repository is an app for the 2022-JBNU-OSS-Project.
>
## ✅ Demo
> When clicking the image, you can watch the demonstration video
>
> [![Video Label](http://img.youtube.com/vi/VmyVv6OCSCE/0.jpg)](https://youtu.be/VmyVv6OCSCE)
## 🛠 Development Environment
> - OS: Windows 10 (or MacOS)
> - JavaScript-Runtime: Node.js (ver. 18.12.0)
> - Code Editor: Visual Studio Code
> - Code Convention: ESLint(Airbnb-base), Prettier
> - Git Hook: Use Husky (pre-commit, commit-msg)
> - Comments: Doxygen
>
## ⚙ Test & Production Environment
> - Cloud Server: Ubuntu 22.04 LTS
> - JavaScript-Runtime: Node.js (ver. 18.12.0)
> - Git: ver. 2.34.1
>
## 📕 Guide Line
> - ### FOR USERS
> 1. Install Node.js(ver. 18) and Visual Studio Code.
> 2. Clone our repository.
> 3. Unzip the **LBDRWT-main.zip**.
> 4. Open the **LBDRWT-main** directory in Visual Studio Code.
> 5. Open a terminal window in vscode and type the following:
> ```
> npm init
> ```
> 6. Create a new directory named **'data'**, and create **token.js** in the 'data directory'.
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
> 7. Type the following:
> ```
> node index.js
> ```
> 8. When it runs normally, you can see the token printed out.

## 🌈 모든 버전
> ### - 1.1.0 (최신)
> - 랜덤 인사 추가
> - 학사 일정 기능 추가
> - 오피스 위치 추가
> ### - 1.0.0
> - 인사 기능
> - 그외의 단어 입력 시 I'm alive 출력
>
#
