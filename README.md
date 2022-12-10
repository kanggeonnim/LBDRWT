# 🚩 SLACK CHATBOT
> This repository is an app for the 2022-JBNU-OSS-Project.
>
## ✅ Demo
> When clicking the image, you can watch the demonstration video
>
> [![Video Label](http://img.youtube.com/vi/WIMAefYGGz0/0.jpg)](https://youtu.be/WIMAefYGGz0)
>
# Watch and Follow
>
> First, just say "Hi"
> Then the chatbot will greet you
>
> Second, say "학사 일정" and Ask questions about the date. ex) 9/1
> Then the chatbot will tell you the schedule for the day.
>
> Third, say "학과 안내" and enter the department you are interested in.
> Then the chatbot will give you the department information.
>
> If you are hungry, say "오늘 밥 뭐야"
> Then the chatbot will tell you the menu for the day.
>
> If your happiness is to eat, so if you want to know the food of the week, say "이번주 뭐나와"
> Then the chatbot will tell you the menu for the week.
>
>
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
>
> #### 6. Install commit lint
> ```
> npm install --dev @commitlint/config-conventional @commitlint/cli
> ``` 
> #### 7. Now you are ready to work together.
>
## 🌈 All Versions
> ### - 1.2.0 (Latest)
> - Add feature for menu evaluation and guidance
> - Improve feature for department office information
> - Change the default notification message 
> ### - 1.1.0
> - Improve feature for random greeting
> - Add feature for academic calendar guide
> - Add feature for department office information
> ### - 1.0.0
> - Add feature for greeting
> - Output 'I'm alive' for other inputs
>
#
