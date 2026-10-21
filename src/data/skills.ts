export type SkillCategory = {
    category: string
    title: string
    technologies: string[]
    descriptions: string[]
}

export const skills: SkillCategory[] = [
    {
        category: 'BACKEND',
        title: 'Java / Spring',
        technologies: [
            'Java 21',
            'Spring Boot',
            'Spring Data JPA',
            'Spring Security',
            'JWT',
            'Gradle',
        ],
        descriptions: [
            'REST API 설계 및 구현',
            'Controller / Service / Repository 계층 분리',
            'JPA Entity 및 연관관계 설계',
            '인증·인가 및 예외 처리',
        ],
    },
    {
        category: 'DATABASE',
        title: 'Database',
        technologies: [
            'PostgreSQL',
            'MySQL',
            'SQL',
            'JSONB',
            'Index',
        ],
        descriptions: [
            '관계형 데이터 모델 설계',
            'PK / FK / UNIQUE 제약조건 관리',
            '데이터 무결성 및 중복 방지',
            '쿼리와 인덱스 구조 이해',
        ],
    },
    {
        category: 'INTEGRATION',
        title: 'API / AI Integration',
        technologies: [
            'FastAPI',
            'Python',
            'REST',
            'LLM API',
        ],
        descriptions: [
            'Spring Boot ↔ FastAPI 서버 연동',
            '외부 API 요청·응답 DTO 설계',
            'AI 예측 결과 저장 및 가공',
            '서버 간 오류 원인 추적',
        ],
    },
    {
        category: 'FRONTEND / DEVOPS',
        title: 'Frontend & DevOps',
        technologies: [
            'React',
            'TypeScript',
            'JavaScript',
            'Vite',
            'Docker',
            'Git',
            'GitHub',
        ],
        descriptions: [
            'React 기반 API 연동 화면 구현',
            'TypeScript 기반 타입 관리',
            'Git 브랜치 기반 팀 협업',
            'Docker 및 배포 환경 구성',
        ],
    },
]