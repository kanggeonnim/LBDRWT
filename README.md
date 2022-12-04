# 🚩슬랙 챗봇 - 26
> 이 챗봇은 2022 전북대학교 오픈소스소프웨어개발의 팀프로젝트로 만든 챗봇입니다.
>
> ![Feature1_AdobeExpress](https://user-images.githubusercontent.com/61104736/203731470-f411fbe1-1e6c-4c75-9ed5-be7f01af7f99.gif)
>
> ![Feature2_AdobeExpress](https://user-images.githubusercontent.com/61104736/203731861-e1dd9cca-edfd-4532-b01d-48509d90c2c5.gif)
>
> ![Feature4_AdobeExpress](https://user-images.githubusercontent.com/61104736/203732245-fa0b028d-5094-41be-9995-64f03785c3dc.gif)

## 🛠 개발 환경
> ### 개발 환경은 다음과 같습니다.
> - 운영체제: Windows10(or MacOS)
> - JS런타임 툴:  Node.js(18.12.0 버전)
> - 코드편집기: VSCode
> - 코드 컨벤션: ESLint(Airbnb-base) 및 Prettier
> - Git Hook: Husky를 통한 강제(pre-commit, commit-msg)
> - 주석: Doxygen 활용
>
## ⚙ 테스트 및 운영 환경
> ### 테스트 및 운영에 사용되는 환경입니다.
> - 클라우드 서버: Ubuntu 18.04 LTS
> - JS런타임 툴: Node.js
>
## 📕 가이드라인
> ### 사용법은 다음과 같습니다.
> 1. Slack 챗봇 사용을 위한 API를 받습니다.
> 2. Node.js(18버전)와 VSCode를 설치합니다.
> 3. 해당 레포지토리의 Clone 버튼을 클릭하고, Download Zip을 클릭합니다.
> 4. 다운로드 받은 LBDRWT-main.zip 파일의 압축을 해제해줍니다.
> 5. VSCode에서 폴더열기를 통해 LBDRWT-main 폴더를 열어줍니다.
> 6. 루트 디렉토리에 data라는 이름의 폴더를 생성하고, token.js 파일을 만들어 내용을 아래와 같이 입력하여 줍니다.
> ```
> const data = '당신의 토큰입력';
> 
> function getToken() {
>   return data;
> }
> 
> module.exports.getToken = getToken;
> 
> ```
> 7. VSCode의 터미널을 열어 루트 디렉토리에서 아래와 같이 입력합니다.
> ```
> node index.js
> ```
> 8. 토큰번호가 출력되면, 정상적으로 실행이 된 것입니다.

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
