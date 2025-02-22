import { Todo } from '../types/todo';

export const mockTodos: Todo[] = [
  {
    id: '1',
    title: '프론트엔드 개발 환경 설정',
    description: 'React, TypeScript, Material-UI 설정',
    status: 'COMPLETED',
    createdAt: '2025-02-23T00:00:00Z',
    updatedAt: '2025-02-23T00:00:00Z',
  },
  {
    id: '2',
    title: '목업 데이터 구현',
    description: '개발 테스트를 위한 목업 데이터 생성',
    status: 'COMPLETED',
    createdAt: '2025-02-23T00:00:00Z',
    updatedAt: '2025-02-23T00:00:00Z',
  },
  {
    id: '3',
    title: 'TODO 컴포넌트 구현',
    description: 'TODO 목록, 생성, 수정, 삭제 기능 구현',
    status: 'PENDING',
    createdAt: '2025-02-23T00:00:00Z',
    updatedAt: '2025-02-23T00:00:00Z',
  },
];
