## 📝 과제 제출 가이드
```
│
├─ GDSC-1st-Frontend-Study
│     │
│     ├─ eugene028 (dir)
│     │     │ 
│     │     ├─  React를 위한 Javascript (dir)
│     │     │    ├─ README.md // 개인 기술 블로그 링크 업로드
|     |     |    ├─ index.html
|     |     |    ├─ script.js
|     |     |    └─ style.css
│     │     │
│     │     ├─  React 기본기 (dir)
│     │     │    ├─ README.md // 개인 기술 블로그 링크 업로드
│     │     │    ├─ public (dir)
│     │     │    ├─ src (dir)
|     |     |    ├─ .gitignore
|     |     |    ├─ package.json
|     |     |    └─ package-lock.json
│     │     │
│     │     ├─  React로 TODO앱 만들기 (dir)
│     │     │    └─ .. 이하 동일
│     │     │
│     │     ├─  중간고사 기간 과제 리팩토링 (dir)
│     │     │    └─ .. 이하 동일
│     │     │
│     │     │
│     │     └─ API에 대하여 이해하기 (dir)
│     │          └─ README.md
│     │ 
│     ├─ 9yujin (dir)
│     │     │ 
│     │     ├─  React를 위한 Javascript (dir)
│     │     │    ├─ README.md // 개인 기술 블로그 링크 업로드
|     |     |    ├─ index.html
|     |     |    ├─ script.js
|     |     |    └─ style.css
│     │     │
│     │     ├─  React 기본기 (dir)
│     │     │    ├─ README.md // 개인 기술 블로그 링크 업로드
│     │     │    ├─ public (dir)
│     │     │    ├─ src (dir)
|     |     |    ├─ .gitignore
|     |     |    ├─ package.json
|     |     |    └─ package-lock.json
│     │     │
│     │     ├─  React로 TODO앱 만들기 (dir)
│     │     │    └─ .. 이하 동일
│     │     │
│     │     ├─  중간고사 기간 과제 리팩토링 (dir)
│     │     │    └─ .. 이하 동일
│     │     │
│     │     │
│     │     └─ API에 대하여 이해하기 (dir)
│     │          └─ README.md
│     │ 
│     │ 
```
폴더 제출 형식을 이해해주세요.

### 📤 프로젝트 시작하기
* Visual Studio Code를 실행하고, 원격저장소를 연결해주세요.
* `git init` // 원격 저장소 init
* `git remote -v https://github.com/GDSC-Hongik/GDSC-1st-FrontEnd-Study.git` // 원격 저장소 연결
* `git pull origin master`
* Visual Studio Code의 terminal에서 자신의 branch로 checkout을 해주세요
    `git checkout origin [본인 github 아이디]`
* 작업은 해당 본인 branch에서만 진행해주세요 (❌master branch❌)
   `git branch` : 현재 branch 확인

### 🏡 작업공간 생성
* GDSC-1st-Frontend-Study (프로젝트 루트 디렉토리)
  * 본인 github 아이디명의 디렉토리를 생성해주세요
* 해당 주차 디렉토리 생성 (과제 공지 주제명으로 해주세요!)
  *리액트 소스코드 ...
* Readme에는 해당 주차의 학습을 정리한 자신의 기술 블로그 링크 달아놓기! 

| 본인 github 아이디명의 디렉토리부터 만들고 시작하시면 됩니다! 😊

### 중간 중간 commit 하기
* 파트 별로 작업을 끝냈거나 더 작은 단위로 작업을 끝낼 때 마다 commit을 해 주는 게 좋아요
```
* ❗commit convention ❗️

  * Feat: 새로운 기능 추가
  * Fix: 버그 수정
  * Docs: 문서 수정
  * Style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
  * Refactor: 코드 리펙토링
  * Test: 테스트 코드, 리펙토링 테스트 코드 추가
  * Chore: 빌드 업무 수정, 패키지 매니저 수정
```
* 예시: git commit -m "[Feat(해당 파일): OO 기능 추가]"

### ✍🏻 README.md 파일 작성하기

* 자신이 이번주에 학습한 내용을 정리한 기술 블로그 링크를 README.md 파일에 올려주세요! 

* .md 파일은 mark down 언어로 작성된 파일을 뜻해요
  * [참고] https://gist.github.com/ihoneymon/652be052a0727ad59601#24-코드


### 🙌🏻 Github 레포지토리에 push하기

* 해당 주차의 강의를 모두 듣고 작업을 모두 끝냈다면, 프로젝트 변경 사항을 remote repository(github repository)에 push 합니다
  * ```git push origin [본인 github 아이디 브랜치 명]``` : git에 등록되어 있는 origin(github repository)에 있는 자신의 branch로 프로젝트의 변경 사항을 반영합니다
* push를 완료했다면 스터디 repository에서 pull request를 진행합니다
  * 링크: https://github.com/GDSC-Hongik/GDSC-1st-Frontend-Study/pulls
* PR(Pull Request)시 메세지 제목은 다음과 같이 ```[1기_OOO] 1주차 미션 제출합니다.``` 라고 적은 후 ```create pull request``` 버튼을 눌러주세요
* PR : ```base: [master]``` <- ```compare: [본인 github 아이디]```

### 🤝 gitignore 제출 안내 
* `node_modules` 파일 용량이 너무 큰 관계로, `gitignore`에 꼭 추가하여 `node_modules`를 제외하고 레포지토리에 push해주세요! 
https://www.toptal.com/developers/gitignore
위 사이트에서 쉽게 `.gitignore`파일의 포맷을 설정 가능합니다!

### ⏰ 과제 제출 마감 기한

* 프론트엔드 스터디 전날인 목요일 23:59까지 제출해주시면 됩니다! 😊
