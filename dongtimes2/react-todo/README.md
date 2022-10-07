# 개요

간단한 React를 이용하여 TodoList 웹을 제작하였습니다.

# 구성

page는

- Main.js

한 개만 존재하며

Component는

- 입력을 받는 부분인 InputTodo.js
- 현재 진행중인 Todo를 표시하는 ProgressTodo.js
- 마지막으로 완료된 Todo를 표시하는 CompleteTodo.js

로 구성되어 있습니다.

Main.js에는 useState를 이용하여 todo들의 값이 저장된 리스트를 상태관리하고 있으며,
이 상태 값은 각각의 컴포넌트들에게 전달됩니다.

한 개의 todo가 생성될 때마다 id값과, todo의 내용, 그리고 todo가 완료되었는지를 판별하는 boolean 값이 함께 저장됩니다.

# 제작자

dongtimes2

# 라이센스

MIT
