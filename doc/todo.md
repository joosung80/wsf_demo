# 🚀 TODO 어플리케이션 구현 체크리스트

## 📅 작업 일지 (2025-02-23)

### 오늘의 작업 내역
- 설계 문서 작성 및 초기 설정 완료
- 다음 작업: 프론트엔드 개발 환경 구성 예정

## 1. 🎯 프로젝트 초기 설정
- [x] GitHub 저장소 생성
- [x] 기본 .gitignore 설정
- [x] 프로젝트 디렉토리 구조 설정

## 2. 💻 프론트엔드 (React + GitHub Pages)
### 🔧 초기 설정
- [ ] Create React App으로 프로젝트 생성
- [ ] TypeScript 설정
- [ ] 필요한 dependencies 설치 (Material-UI/Tailwind, axios 등)
- [ ] GitHub Pages 배포 설정
- [ ] CICD 파이프라인 설정 (.github/workflows)

### 🧩 컴포넌트 구현
- [ ] 기본 레이아웃 구현
- [ ] TodoList 컴포넌트
- [ ] TodoItem 컴포넌트
- [ ] AddTodoForm 컴포넌트
- [ ] FilterBar 컴포넌트

### ⚡ 상태 관리 및 API 연동
- [ ] Context API 설정
- [ ] API 호출 커스텀 훅 구현
- [ ] 에러 처리 로직 구현
- [ ] 로딩 상태 처리

## 3. 🛠️ 백엔드 (AWS CDK)
### 📦 CDK 프로젝트 설정
- [ ] CDK 프로젝트 초기화
- [ ] TypeScript 설정
- [ ] 환경 변수 설정 (.env)

### 🏗️ 인프라 스택 구현
- [ ] StorageStack (DynamoDB)
  - [ ] Todo 테이블 생성
  - [ ] 인덱스 설정
- [ ] ApiStack
  - [ ] API Gateway 설정
  - [ ] CORS 설정
  - [ ] Lambda 함수 구현
    - [ ] createTodo
    - [ ] getTodos
    - [ ] updateTodo
    - [ ] deleteTodo
- [ ] AuthStack
  - [ ] Cognito Identity Pool 설정
  - [ ] 익명 사용자 접근 설정
  - [ ] IAM 역할 및 정책 설정

### 🔌 API 구현
- [ ] Lambda 함수 로직 구현
- [ ] API 테스트 코드 작성
- [ ] API 문서화

## 4. 🧪 테스트
- [ ] 프론트엔드 단위 테스트
- [ ] 백엔드 단위 테스트
- [ ] 통합 테스트
- [ ] E2E 테스트

## 5. 🚀 배포
- [ ] 프론트엔드 GitHub Pages 배포
- [ ] 백엔드 AWS 배포
- [ ] 도메인 설정 (필요한 경우)

## 6. 📝 문서화
- [ ] README.md 업데이트
- [ ] API 문서 작성
- [ ] 배포 프로세스 문서화
- [ ] 트러블슈팅 가이드 작성

## 7. 📊 모니터링 및 로깅 설정
- [ ] CloudWatch 로그 설정
- [ ] 에러 모니터링 설정
- [ ] 성능 모니터링 설정

## ✨ 진행 상황
- [x] 설계 문서 작성 완료 (design.md)
- [ ] 프로젝트 초기 설정 진행 중

## 💡 참고사항
- 각 단계 완료 후 todo.md 업데이트하기
- 커밋 전 작업 내용 todo.md에 반영하기
- 주요 설정 변경사항 문서화하기
