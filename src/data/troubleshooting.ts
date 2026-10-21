export type TroubleshootingCase = {
    index: string
    project: string
    title: string
    tag: string
    problem: string
    analysis: string
    solution: string
    result: string
}

export const troubleshootingCases: TroubleshootingCase[] = [
    {
        index: 'CASE 01',
        project: 'PETPULSE',
        title: 'AI 예측 결과 중복 생성 방지',
        tag: 'Data Integrity',
        problem:
            '동일한 건강 문진에 대해 예측 API가 반복 호출될 경우 여러 개의 AI 예측 결과가 저장될 가능성이 있었습니다.',
        analysis:
            'Service 계층의 중복 검증만으로는 데이터 무결성을 완전히 보장하기 어렵다고 판단했습니다.',
        solution:
            'questionnaire_id에 UNIQUE 제약조건을 적용하고, 예측 생성 전에 기존 데이터를 조회하도록 Service 로직을 보완했습니다.',
        result:
            '동일 문진에는 하나의 예측 결과만 저장되도록 보장하고, 중복 요청에는 409 Conflict를 반환하도록 구현했습니다.',
    },
    {
        index: 'CASE 02',
        project: 'PETPULSE',
        title: 'Spring Boot와 FastAPI 서버 연동 문제',
        tag: 'API Integration',
        problem:
            'Spring Boot에서 AI 예측 및 주간 리포트 생성을 요청할 때 FastAPI 서버 연결 실패와 503 응답이 발생했습니다.',
        analysis:
            'Spring Boot 로직만 확인하지 않고 FastAPI 실행 상태, 요청 URL, 포트, AI 모델 로딩 상태를 각각 분리해서 점검했습니다.',
        solution:
            'FastAPI health endpoint와 실행 로그를 기준으로 서버 상태를 확인하고 Spring Boot와 FastAPI 사이의 요청·응답 구조를 맞췄습니다.',
        result:
            '두 서버 간 API 통신을 정상화하고 AI 응답을 Spring Boot에서 가공한 뒤 PostgreSQL에 저장하는 흐름을 완성했습니다.',
    },
    {
        index: 'CASE 03',
        project: 'USED CAR PLATFORM',
        title: 'JWT 인증 환경에서 발생한 401 / 403 문제',
        tag: 'Authentication',
        problem:
            '로그인 이후 일부 API에서는 정상적으로 데이터를 조회했지만 특정 관리자 및 이미지 API에서 401 또는 403 오류가 발생했습니다.',
        analysis:
            '단순 API 오류가 아니라 Axios 요청 헤더, JWT 저장 및 전달, 사용자 권한과 Spring Security 설정을 함께 확인했습니다.',
        solution:
            'Axios 인터셉터에서 Authorization 헤더 처리를 공통화하고, 역할별 접근 경로와 백엔드 권한 설정을 일치시켰습니다.',
        result:
            '인증 처리 로직의 중복을 줄이고 일반회원, 딜러, 관리자별 API 접근 제어를 안정화했습니다.',
    },
    {
        index: 'CASE 04',
        project: 'USED CAR PLATFORM',
        title: '페이지 이동 시 발생하는 초기 로딩 지연 개선',
        tag: 'Performance',
        problem:
            '코드 스플리팅을 적용한 페이지에 처음 진입할 때 JavaScript chunk를 다운로드하면서 화면 전환이 늦게 느껴졌습니다.',
        analysis:
            '컴포넌트 렌더링 자체보다 사용자가 메뉴를 클릭한 뒤 chunk를 내려받기 시작하는 시점이 체감 지연의 원인이었습니다.',
        solution:
            '사용자가 메뉴에 마우스를 올리는 시점에 대상 페이지의 chunk를 미리 요청하도록 hover 기반 prefetch를 적용했습니다.',
        result:
            '실제 클릭 전에 필요한 리소스를 준비하여 코드 스플리팅의 장점을 유지하면서 첫 화면 전환의 체감 지연을 줄였습니다.',
    },
]