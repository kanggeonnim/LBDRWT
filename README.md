
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
