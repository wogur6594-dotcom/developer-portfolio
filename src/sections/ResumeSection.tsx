function ResumeSection() {
    return (
        <section id="resume" className="section">
            <div className="section-inner">
                <p className="section-number">05</p>

                <h2>Resume</h2>

                <p className="section-description">
                    백엔드 개발자로서의 기술 경험과 프로젝트 수행 내용을 중심으로
                    정리한 웹 이력서입니다.
                </p>

                <div className="resume-layout">
                    <aside className="resume-profile">
                        <p className="resume-label">PROFILE</p>

                        <h3>정재혁</h3>

                        <p className="resume-position">
                            Backend Developer
                        </p>

                        <div className="resume-contact">
                            <div>
                                <span>Email</span>
                                <p>wogur6594@gmail.com</p>
                            </div>

                            <div>
                                <span>GitHub</span>
                                <p>https://github.com/wogur6594-dotcom</p>
                            </div>

                            <div>
                                <span>Portfolio</span>
                                <p>배포 주소 연결 예정</p>
                            </div>
                        </div>

                        <a href="#contact" className="resume-button">
                            Contact
                        </a>
                    </aside>

                    <div className="resume-content">
                        <div className="resume-section">
                            <p className="resume-label">INTRODUCTION</p>

                            <h3>Backend Developer</h3>

                            <p className="resume-text">
                                Java와 Spring Boot를 기반으로 REST API와 데이터베이스를
                                설계하고 구현해 왔습니다. 기능 구현에 그치지 않고 요청과
                                데이터가 시스템 내부에서 어떻게 흐르는지 추적하며 문제의
                                원인을 찾는 개발 방식을 중요하게 생각합니다.
                            </p>

                            <p className="resume-text">
                                팀 프로젝트를 통해 Spring Boot, PostgreSQL, JPA 기반
                                백엔드 개발과 FastAPI AI 서버 연동을 경험했으며,
                                React 기반 프로젝트에서는 API 연동과 JWT 인증,
                                화면 성능 개선을 담당했습니다.
                            </p>
                        </div>

                        <div className="resume-section">
                            <p className="resume-label">CORE SKILLS</p>

                            <div className="resume-skill-list">
                                <span>Java</span>
                                <span>Spring Boot</span>
                                <span>Spring Data JPA</span>
                                <span>PostgreSQL</span>
                                <span>REST API</span>
                                <span>FastAPI</span>
                                <span>React</span>
                                <span>TypeScript</span>
                                <span>Git</span>
                                <span>Docker</span>
                            </div>
                        </div>

                        <div className="resume-section">
                            <p className="resume-label">PROJECT EXPERIENCE</p>

                            <div className="resume-timeline">
                                <article className="resume-item">
                                    <div className="resume-item-period">
                                        2026.08
                                    </div>

                                    <div className="resume-item-content">
                                        <h4>PetPulse</h4>

                                        <p className="resume-item-role">
                                            Backend Developer
                                        </p>

                                        <p>
                                            반려동물 생체정보와 건강 문진을 기반으로
                                            AI 건강 위험도를 예측하는 서비스의 백엔드를
                                            담당했습니다.
                                        </p>

                                        <ul>
                                            <li>Spring Boot REST API 설계 및 구현</li>
                                            <li>PostgreSQL 데이터베이스 및 JPA Entity 설계</li>
                                            <li>생체정보 기반 위험 등급 판정 로직 구현</li>
                                            <li>건강 문진 및 AI 예측 결과 저장 API 구현</li>
                                            <li>Spring Boot ↔ FastAPI 연동</li>
                                            <li>건강 이상 알림 및 주간 리포트 구현</li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="resume-item">
                                    <div className="resume-item-period">
                                        2026.07
                                    </div>

                                    <div className="resume-item-content">
                                        <h4>Used Car Platform</h4>

                                        <p className="resume-item-role">
                                            Frontend Developer
                                        </p>

                                        <p>
                                            중고차 매매, 경매, 찜, 채팅 및 관리자 기능을
                                            제공하는 팀 프로젝트의 프론트엔드를 담당했습니다.
                                        </p>

                                        <ul>
                                            <li>React 기반 주요 서비스 화면 구현</li>
                                            <li>Spring Boot REST API 연동</li>
                                            <li>Axios 인터셉터 기반 JWT 인증 처리</li>
                                            <li>일반회원 / 딜러 / 관리자 역할 기반 라우팅</li>
                                            <li>Promise.all 기반 병렬 API 호출</li>
                                            <li>코드 스플리팅 및 hover prefetch 적용</li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="resume-item">
                                    <div className="resume-item-period">
                                        2026
                                    </div>

                                    <div className="resume-item-content">
                                        <h4>Developer Portfolio</h4>

                                        <p className="resume-item-role">
                                            Personal Project
                                        </p>

                                        <p>
                                            개발 경험과 문제 해결 과정을 단순 문서가 아닌
                                            실제 웹 서비스 형태로 보여주기 위해 제작하고 있는
                                            개인 포트폴리오입니다.
                                        </p>

                                        <ul>
                                            <li>React + TypeScript 기반 포트폴리오 UI 구현</li>
                                            <li>반응형 웹 디자인</li>
                                            <li>Spring Boot REST API 확장 예정</li>
                                            <li>PostgreSQL 및 관리자 페이지 확장 예정</li>
                                            <li>Docker / CI/CD / 실제 배포 예정</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className="resume-section">
                            <p className="resume-label">EDUCATION</p>

                            <div className="resume-education">
                                <div>
                                    <span>교육기관</span>
                                    <strong>Kosmo 한국 소프트웨어 개발원</strong>
                                </div>

                                <div>
                                    <span>교육과정</span>
                                    <strong>실무로 배우는 생성형 AI& 클라우드 서비스 개발</strong>
                                </div>

                                <div>
                                    <span>기간</span>
                                    <strong>2026-03-05 ~ 2026-09-10</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection