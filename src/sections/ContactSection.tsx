function ContactSection() {
    return (
        <section id="contact" className="section">
            <div className="section-inner">
                <p className="section-number">06</p>

                <h2>Contact</h2>

                <p className="section-description">
                    새로운 환경에서도 빠르게 구조를 이해하고,
                    문제를 끝까지 추적해 해결하는 개발자입니다.
                </p>

                <div className="contact-card">
                    <div className="contact-main">
                        <p className="contact-label">
                            LET&apos;S WORK TOGETHER
                        </p>

                        <h3>
                            Backend Developer
                            <br />
                            정재혁
                        </h3>

                        <p>
                            Java와 Spring Boot 기반 백엔드 개발을 중심으로
                            API, 데이터베이스, 서버 연동 경험을 쌓고 있습니다.
                        </p>
                    </div>

                    <div className="contact-links">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-link"
                        >
                            <div>
                                <span>GitHub</span>
                                <strong>프로젝트 코드 보기</strong>
                            </div>

                            <span className="contact-arrow">↗</span>
                        </a>

                        <a
                            href="wogur6594@gmail.com"
                            className="contact-link"
                        >
                            <div>
                                <span>Email</span>
                                <strong>이메일 보내기</strong>
                            </div>

                            <span className="contact-arrow">→</span>
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-link"
                        >
                            <div>
                                <span>Resume</span>
                                <strong>PDF 이력서 보기</strong>
                            </div>

                            <span className="contact-arrow">↓</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection