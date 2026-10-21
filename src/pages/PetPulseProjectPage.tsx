import { Link } from 'react-router-dom'

function PetPulseProjectPage() {
    return (
        <section className="section project-detail-page">
            <div className="section-inner">
                <Link to="/#projects" className="project-back-link">
                    ← 프로젝트 목록으로
                </Link>

                {/* HEADER */}
                <div className="project-detail-header">
                    <p className="section-number">PROJECT 01</p>

                    <h1>PetPulse</h1>

                    <p className="project-detail-subtitle">
                        반려동물 생체정보 기반 건강 위험도 예측 서비스
                    </p>

                    <div className="project-tech">
                        <span>Java 21</span>
                        <span>Spring Boot</span>
                        <span>Spring Data JPA</span>
                        <span>PostgreSQL</span>
                        <span>FastAPI</span>
                        <span>React</span>
                        <span>Docker</span>
                    </div>
                </div>

                {/* OVERVIEW */}
                <div className="project-detail-section">
                    <p className="resume-label">OVERVIEW</p>

                    <h2>Project Overview</h2>

                    <p>
                        반려동물의 생체정보와 건강 문진 데이터를 수집하고,
                        AI 서버를 통해 건강 위험도를 예측하는 팀 프로젝트입니다.
                        예측 결과를 기반으로 건강 이상 알림과 주간 건강 리포트를
                        제공합니다.
                    </p>

                    <div className="project-summary-grid">
                        <div>
                            <span>ROLE</span>
                            <strong>Backend Developer</strong>
                        </div>

                        <div>
                            <span>TEAM</span>
                            <strong>3인 팀 프로젝트</strong>
                        </div>

                        <div>
                            <span>BACKEND</span>
                            <strong>Spring Boot</strong>
                        </div>

                        <div>
                            <span>DATABASE</span>
                            <strong>PostgreSQL</strong>
                        </div>
                    </div>
                </div>

                {/* MY ROLE */}
                <div className="project-detail-section">
                    <p className="resume-label">MY ROLE</p>

                    <h2>Backend Developer</h2>

                    <ul className="project-detail-list">
                        <li>Spring Boot REST API 설계 및 구현</li>
                        <li>PostgreSQL 데이터베이스 및 JPA Entity 설계</li>
                        <li>반려동물 CRUD API 구현</li>
                        <li>생체정보 저장 및 위험도 판정 로직 구현</li>
                        <li>건강 문진 API 구현</li>
                        <li>AI 예측 결과 저장 및 조회 API 구현</li>
                        <li>Spring Boot ↔ FastAPI 서버 연동</li>
                        <li>건강 이상 알림 기능 구현</li>
                        <li>주간 건강 리포트 생성 기능 구현</li>
                        <li>중복 데이터 방지를 위한 UNIQUE 제약 및 예외 처리</li>
                    </ul>
                </div>

                {/* ARCHITECTURE */}
                <div className="project-detail-section">
                    <p className="resume-label">ARCHITECTURE</p>

                    <h2>System Architecture</h2>

                    <div className="architecture-box">
                        <div className="architecture-item">
                            <strong>React</strong>
                            <span>Frontend</span>
                        </div>

                        <span className="architecture-arrow">
                            ↓ REST API
                        </span>

                        <div className="architecture-item">
                            <strong>Spring Boot</strong>
                            <span>Backend API Server</span>
                        </div>

                        <div className="architecture-branch">
                            <div>
                                <span>↓ Spring Data JPA</span>

                                <div className="architecture-item">
                                    <strong>PostgreSQL</strong>
                                    <span>Application Database</span>
                                </div>
                            </div>

                            <div>
                                <span>↓ HTTP Request</span>

                                <div className="architecture-item">
                                    <strong>FastAPI</strong>
                                    <span>AI Prediction Server</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="backend-flow">
                        <span>Client</span>
                        <strong>→</strong>
                        <span>Controller</span>
                        <strong>→</strong>
                        <span>Service</span>
                        <strong>→</strong>
                        <span>Repository</span>
                        <strong>→</strong>
                        <span>PostgreSQL</span>
                    </div>
                </div>

                {/* DATABASE */}
                <div className="project-detail-section">
                    <p className="resume-label">DATABASE</p>

                    <h2>Database Design</h2>

                    <p>
                        반려동물, 생체정보, 건강 문진, AI 예측 결과, 알림,
                        주간 리포트를 각각 독립적인 테이블로 분리하고
                        외래키를 통해 관계를 구성했습니다.
                    </p>

                    <div className="database-grid">
                        <article className="database-card">
                            <span>TABLE</span>
                            <h3>pets</h3>
                            <p>반려동물 기본 정보</p>

                            <ul>
                                <li>pet_id PK</li>
                                <li>user_id FK</li>
                                <li>pet_name</li>
                                <li>species</li>
                                <li>breed</li>
                                <li>birth_date</li>
                            </ul>
                        </article>

                        <article className="database-card">
                            <span>TABLE</span>
                            <h3>vital_records</h3>
                            <p>생체정보 측정 기록</p>

                            <ul>
                                <li>vital_record_id PK</li>
                                <li>pet_id FK</li>
                                <li>temperature</li>
                                <li>heart_rate</li>
                                <li>respiratory_rate</li>
                                <li>status</li>
                            </ul>
                        </article>

                        <article className="database-card">
                            <span>TABLE</span>
                            <h3>questionnaires</h3>
                            <p>건강 상태 문진 데이터</p>

                            <ul>
                                <li>questionnaire_id PK</li>
                                <li>pet_id FK</li>
                                <li>itching</li>
                                <li>vomiting</li>
                                <li>appetite_level</li>
                                <li>activity_level</li>
                            </ul>
                        </article>

                        <article className="database-card">
                            <span>TABLE</span>
                            <h3>health_predictions</h3>
                            <p>AI 건강 위험도 예측 결과</p>

                            <ul>
                                <li>prediction_id PK</li>
                                <li>questionnaire_id FK / UNIQUE</li>
                                <li>abnormal_probability</li>
                                <li>risk_grade</li>
                                <li>risk_factors_json JSONB</li>
                                <li>ai_summary</li>
                            </ul>
                        </article>

                        <article className="database-card">
                            <span>TABLE</span>
                            <h3>alerts</h3>
                            <p>건강 위험 알림</p>

                            <ul>
                                <li>alert_id PK</li>
                                <li>pet_id FK</li>
                                <li>prediction_id FK</li>
                                <li>severity</li>
                                <li>is_read</li>
                            </ul>
                        </article>

                        <article className="database-card">
                            <span>TABLE</span>
                            <h3>weekly_reports</h3>
                            <p>주간 건강 리포트</p>

                            <ul>
                                <li>report_id PK</li>
                                <li>pet_id FK</li>
                                <li>start_date</li>
                                <li>end_date</li>
                                <li>average_risk_probability</li>
                                <li>report_content</li>
                            </ul>
                        </article>
                    </div>
                </div>

                {/* ERD */}
                <div className="project-detail-section">
                    <p className="resume-label">ERD</p>

                    <h2>Entity Relationship</h2>

                    <p>
                        Pet을 중심으로 생체정보, 건강 문진, AI 예측 결과,
                        건강 알림과 주간 리포트가 연결되는 구조로 설계했습니다.
                    </p>

                    <div className="erd-container">
                        <div className="erd-row">
                            <article className="erd-entity">
                                <div className="erd-title">users</div>

                                <ul>
                                    <li>
                                        <strong>PK</strong>
                                        user_id
                                    </li>
                                    <li>email</li>
                                    <li>login_id</li>
                                    <li>role</li>
                                </ul>
                            </article>

                            <div className="erd-relation">
                                <span>1</span>
                                <div />
                                <span>N</span>
                            </div>

                            <article className="erd-entity primary">
                                <div className="erd-title">pets</div>

                                <ul>
                                    <li>
                                        <strong>PK</strong>
                                        pet_id
                                    </li>
                                    <li>
                                        <strong>FK</strong>
                                        user_id
                                    </li>
                                    <li>pet_name</li>
                                    <li>species</li>
                                    <li>breed</li>
                                </ul>
                            </article>
                        </div>

                        <div className="erd-down">
                            <span>1</span>
                            <div />
                            <span>N</span>
                        </div>

                        <div className="erd-child-grid">
                            <article className="erd-entity">
                                <div className="erd-title">vital_records</div>

                                <ul>
                                    <li>
                                        <strong>PK</strong>
                                        vital_record_id
                                    </li>
                                    <li>
                                        <strong>FK</strong>
                                        pet_id
                                    </li>
                                    <li>temperature</li>
                                    <li>heart_rate</li>
                                    <li>status</li>
                                </ul>
                            </article>

                            <article className="erd-entity">
                                <div className="erd-title">questionnaires</div>

                                <ul>
                                    <li>
                                        <strong>PK</strong>
                                        questionnaire_id
                                    </li>
                                    <li>
                                        <strong>FK</strong>
                                        pet_id
                                    </li>
                                    <li>itching</li>
                                    <li>vomiting</li>
                                    <li>activity_level</li>
                                </ul>
                            </article>

                            <article className="erd-entity">
                                <div className="erd-title">weekly_reports</div>

                                <ul>
                                    <li>
                                        <strong>PK</strong>
                                        report_id
                                    </li>
                                    <li>
                                        <strong>FK</strong>
                                        pet_id
                                    </li>
                                    <li>start_date</li>
                                    <li>end_date</li>
                                    <li>report_content</li>
                                </ul>
                            </article>
                        </div>

                        <div className="erd-down">
                            <span>1</span>
                            <div />
                            <span>1</span>
                        </div>

                        <div className="erd-row erd-bottom">
                            <article className="erd-entity">
                                <div className="erd-title">health_predictions</div>

                                <ul>
                                    <li>
                                        <strong>PK</strong>
                                        prediction_id
                                    </li>
                                    <li>
                                        <strong>FK / UNIQUE</strong>
                                        questionnaire_id
                                    </li>
                                    <li>abnormal_probability</li>
                                    <li>risk_grade</li>
                                    <li>risk_factors_json</li>
                                </ul>
                            </article>

                            <div className="erd-relation">
                                <span>1</span>
                                <div />
                                <span>N</span>
                            </div>

                            <article className="erd-entity">
                                <div className="erd-title">alerts</div>

                                <ul>
                                    <li>
                                        <strong>PK</strong>
                                        alert_id
                                    </li>
                                    <li>
                                        <strong>FK</strong>
                                        pet_id
                                    </li>
                                    <li>
                                        <strong>FK</strong>
                                        prediction_id
                                    </li>
                                    <li>severity</li>
                                    <li>is_read</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>

                {/* API DESIGN */}
                <div className="project-detail-section">
                    <p className="resume-label">API DESIGN</p>

                    <h2>REST API</h2>

                    <p>
                        기능 단위로 Resource 중심의 REST API를 설계하고
                        Spring Boot를 통해 Frontend와 AI 서버 사이의 요청을
                        관리하도록 구성했습니다.
                    </p>

                    <div className="api-table">
                        <div className="api-row api-header">
                            <span>METHOD</span>
                            <span>ENDPOINT</span>
                            <span>DESCRIPTION</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method post">POST</span>
                            <code>/api/pets</code>
                            <span>반려동물 등록</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method get">GET</span>
                            <code>/api/pets?userId={'{userId}'}</code>
                            <span>사용자의 반려동물 목록 조회</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method post">POST</span>
                            <code>/api/pets/{'{petId}'}/vitals</code>
                            <span>생체정보 등록</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method get">GET</span>
                            <code>/api/pets/{'{petId}'}/vitals/latest</code>
                            <span>최근 생체정보 조회</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method post">POST</span>
                            <code>/api/pets/{'{petId}'}/questionnaires</code>
                            <span>건강 문진 등록</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method post">POST</span>
                            <code>/api/questionnaires/{'{id}'}/predictions</code>
                            <span>AI 건강 위험도 예측 생성</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method get">GET</span>
                            <code>/api/pets/{'{petId}'}/alerts</code>
                            <span>건강 알림 조회</span>
                        </div>

                        <div className="api-row">
                            <span className="api-method post">POST</span>
                            <code>/api/pets/{'{petId}'}/reports/weekly</code>
                            <span>주간 건강 리포트 생성</span>
                        </div>
                    </div>
                </div>

                {/* AI FLOW */}
                <div className="project-detail-section">
                    <p className="resume-label">AI INTEGRATION</p>

                    <h2>Spring Boot ↔ FastAPI</h2>

                    <p>
                        Frontend가 AI 서버를 직접 호출하지 않고 Spring Boot가
                        AI 서버와 통신하는 구조로 구성했습니다.
                    </p>

                    <div className="ai-flow">
                        <div>
                            <span>01</span>
                            <strong>Questionnaire</strong>
                            <p>
                                사용자가 건강 문진 데이터를 입력합니다.
                            </p>
                        </div>

                        <div>
                            <span>02</span>
                            <strong>Spring Boot</strong>
                            <p>
                                문진 데이터를 검증하고 FastAPI 요청 데이터로 변환합니다.
                            </p>
                        </div>

                        <div>
                            <span>03</span>
                            <strong>FastAPI</strong>
                            <p>
                                건강 위험도와 주요 위험 요인을 분석합니다.
                            </p>
                        </div>

                        <div>
                            <span>04</span>
                            <strong>PostgreSQL</strong>
                            <p>
                                AI 예측 결과와 요약 정보를 저장합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CORE FEATURES */}
                <div className="project-detail-section">
                    <p className="resume-label">CORE FEATURES</p>

                    <h2>Implemented Features</h2>

                    <div className="project-feature-grid">
                        <article>
                            <span>01</span>
                            <h3>Pet Management</h3>
                            <p>
                                반려동물 등록, 조회, 수정, 삭제를 위한 REST API를
                                구현했습니다.
                            </p>
                        </article>

                        <article>
                            <span>02</span>
                            <h3>Vital Monitoring</h3>
                            <p>
                                체온, 심박수, 호흡수를 저장하고 상태를 위험 등급으로
                                분류하도록 구현했습니다.
                            </p>
                        </article>

                        <article>
                            <span>03</span>
                            <h3>Health Questionnaire</h3>
                            <p>
                                피부·소화·식욕·활동량 등의 데이터를 저장하는 건강 문진
                                API를 구현했습니다.
                            </p>
                        </article>

                        <article>
                            <span>04</span>
                            <h3>Health Prediction</h3>
                            <p>
                                건강 문진 데이터를 FastAPI AI 서버에 전달하고
                                예측 결과를 저장하도록 구현했습니다.
                            </p>
                        </article>

                        <article>
                            <span>05</span>
                            <h3>Health Alert</h3>
                            <p>
                                생체정보 또는 AI 예측 결과가 위험 상태일 경우
                                건강 알림을 생성하도록 구현했습니다.
                            </p>
                        </article>

                        <article>
                            <span>06</span>
                            <h3>Weekly Report</h3>
                            <p>
                                생체정보와 건강 예측 데이터를 집계하여 주간 건강 리포트를
                                생성하도록 구현했습니다.
                            </p>
                        </article>
                    </div>
                </div>

                {/* SCREENSHOTS */}
                <div className="project-detail-section">
                    <p className="resume-label">SCREENSHOTS</p>

                    <h2>Project Screens</h2>

                    <p>
                        실제 서비스의 주요 화면과 백엔드 기능이 프론트엔드에서
                        어떻게 사용되는지 확인할 수 있습니다.
                    </p>

                    <div className="project-screenshot-grid">
                        <article className="project-screenshot-card">
                            <div className="project-screenshot-placeholder">
                                <span>01</span>
                                <strong>Dashboard</strong>
                                <p>스크린샷 추가 예정</p>
                            </div>

                            <h3>Health Dashboard</h3>

                            <p>
                                최근 생체정보와 건강 상태, 위험 알림을 한 화면에서
                                확인하는 대시보드입니다.
                            </p>
                        </article>

                        <article className="project-screenshot-card">
                            <div className="project-screenshot-placeholder">
                                <span>02</span>
                                <strong>Questionnaire</strong>
                                <p>스크린샷 추가 예정</p>
                            </div>

                            <h3>Health Questionnaire</h3>

                            <p>
                                생체정보와 피부·소화·생활 상태를 입력하여
                                건강 위험도 예측에 사용하는 문진 화면입니다.
                            </p>
                        </article>

                        <article className="project-screenshot-card">
                            <div className="project-screenshot-placeholder">
                                <span>03</span>
                                <strong>Prediction</strong>
                                <p>스크린샷 추가 예정</p>
                            </div>

                            <h3>AI Prediction Result</h3>

                            <p>
                                FastAPI에서 생성된 건강 위험도와 위험 요인을
                                사용자에게 보여주는 예측 결과 화면입니다.
                            </p>
                        </article>

                        <article className="project-screenshot-card">
                            <div className="project-screenshot-placeholder">
                                <span>04</span>
                                <strong>Weekly Report</strong>
                                <p>스크린샷 추가 예정</p>
                            </div>

                            <h3>Weekly Health Report</h3>

                            <p>
                                일주일간의 생체정보와 AI 예측 데이터를 집계하여
                                건강 상태를 요약하는 리포트 화면입니다.
                            </p>
                        </article>
                    </div>
                </div>

                {/* TROUBLESHOOTING */}
                <div className="project-detail-section">
                    <p className="resume-label">TROUBLESHOOTING</p>

                    <h2>Key Problem Solving</h2>

                    <div className="project-problem-card">
                        <span>DATA INTEGRITY</span>

                        <h3>
                            동일 문진에 대한 AI 예측 결과 중복 생성 문제
                        </h3>

                        <p>
                            동일 questionnaire에 대해 예측 API가 여러 번 호출되면
                            예측 결과가 중복 저장될 가능성이 있었습니다.
                        </p>

                        <div className="project-problem-flow">
                            <div>
                                <strong>Cause</strong>
                                <p>
                                    애플리케이션 로직만으로 중복을 차단하고 DB 레벨 제약이
                                    부족했습니다.
                                </p>
                            </div>

                            <div>
                                <strong>Solution</strong>
                                <p>
                                    questionnaire_id UNIQUE 제약조건과 Service 중복 검사를
                                    함께 적용했습니다.
                                </p>
                            </div>

                            <div>
                                <strong>Result</strong>
                                <p>
                                    동일 문진에 하나의 예측만 저장되도록 보장하고
                                    중복 요청에는 409 Conflict를 반환하도록 구현했습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="project-problem-card">
                        <span>API INTEGRATION</span>

                        <h3>
                            Spring Boot ↔ FastAPI 연결 실패 원인 추적
                        </h3>

                        <p>
                            AI 예측 요청 과정에서 FastAPI 연결 실패와 모델 상태에 따른
                            503 응답이 발생했습니다.
                        </p>

                        <div className="project-problem-flow">
                            <div>
                                <strong>Cause</strong>
                                <p>
                                    FastAPI 서버 실행 상태와 AI 모델 로딩 상태를 구분하지 않고
                                    하나의 문제로 확인하고 있었습니다.
                                </p>
                            </div>

                            <div>
                                <strong>Solution</strong>
                                <p>
                                    health endpoint, 실행 로그, 포트, 요청 URL, 모델 상태를
                                    단계별로 분리해 확인했습니다.
                                </p>
                            </div>

                            <div>
                                <strong>Result</strong>
                                <p>
                                    서버 연결 문제와 모델 로딩 문제를 구분하여 진단하고
                                    Spring Boot와 FastAPI 간 요청 흐름을 정상화했습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REPOSITORY */}
                <div className="project-detail-section">
                    <p className="resume-label">REPOSITORY</p>

                    <h2>Source Code</h2>

                    <p>
                        프로젝트 소스 코드와 구현 내역은 GitHub Repository에서
                        확인할 수 있습니다.
                    </p>

                    <a
                        href="https://github.com/minsushin-kor/kosmo_project_02"
                        target="_blank"
                        rel="noreferrer"
                        className="project-repository-button"
                    >
                        GitHub Repository ↗
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PetPulseProjectPage