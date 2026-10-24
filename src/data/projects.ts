
export type Project = {
    index: string
    title: string
    role: string
    summary: string
    technologies: string[]
    detailLabel: string
    detailValue: string
    featured?: boolean
    troubleshootingLink?: boolean
    status?: 'Completed' | 'In Progress'
}

export const projects: Project[] = [
    {
        index: 'PROJECT 01',
        title: 'PetPulse',
        role: 'Backend',
        summary:
            '반려동물의 생체정보와 건강 문진 데이터를 기반으로 AI 서버가 건강 위험도를 예측하고 건강 알림과 주간 리포트를 제공하는 서비스입니다.',
        technologies: [
            'Java 21',
            'Spring Boot',
            'PostgreSQL',
            'FastAPI',
            'React',
        ],
        detailLabel: 'Key Work',
        detailValue:
            'REST API · DB 설계 · AI 서버 연동 · 건강 알림 · 주간 리포트',
        featured: true,
        troubleshootingLink: true,
        status: 'Completed',
    },
    {
        index: 'PROJECT 02',
        title: 'Used Car Platform',
        role: 'Frontend',
        summary:
            '중고차 매매, 경매, 찜, 1:1 채팅, 회사 및 딜러 관리, 관리자 기능을 제공하는 중고차 거래 플랫폼입니다.',
        technologies: [
            'React',
            'JavaScript',
            'Axios',
            'JWT',
            'Spring Boot',
        ],
        detailLabel: 'Key Work',
        detailValue:
            'REST API 연동 · JWT 인증 처리 · 관리자 화면 · 채팅 · 렌더링 최적화',
        troubleshootingLink: true,
        status: 'Completed',
    },
    {
        index: 'PROJECT 03',
        title: 'Developer Portfolio',
        role: 'Frontend',
        summary:
            'React와 TypeScript 기반으로 개발한 개인 포트폴리오 웹사이트입니다. 프로젝트별 기술적 기여와 문제 해결 경험을 정리하고, 이력서 PDF 제공 및 반응형 UI를 구현하여 Vercel에 배포했습니다.',
        technologies: [
            'React',
            'TypeScript',
            'Vite',
            'React Router',
            'Vercel',
        ],
        detailLabel: 'Key Work',
        detailValue:
            '반응형 UI · 프로젝트 상세 페이지 · 클라이언트 라우팅 · PDF 이력서 제공 · GitHub 연동 자동 배포',
    },
    {
        index: 'PROJECT 04',
        title: 'Calendar',
        role: 'Solo Developer',
        status: 'In Progress',
        summary:
            '사용자 간 일정 공유와 Google Calendar 양방향 동기화를 목표로 개발 중인 협업 일정 관리 웹 서비스입니다.',
        technologies: [
            'Java 21',
            'Spring Boot',
            'React',
            'TypeScript',
            'PostgreSQL',
        ],
        detailLabel: 'Development Goals',
        detailValue:
            'REST API · 데이터 모델링 · 역할 기반 권한 관리 · 초대 시스템 · Google Calendar 연동',
    },
]
