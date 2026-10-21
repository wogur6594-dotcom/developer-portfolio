function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-inner">
                <p className="eyebrow">BACKEND DEVELOPER</p>

                <h1>
                <span>정재혁</span>'s portfolio
                </h1>

                <p className="hero-description">
                    Java와 Spring Boot를 기반으로 API와 데이터 흐름을 설계하고,
                    <br />
                    문제의 원인을 추적하여 해결하는 개발자를 지향합니다.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="primary-button">
                        프로젝트 보기
                    </a>

                    <a href="#resume" className="secondary-button">
                        이력서 보기
                    </a>
                </div>

                <div className="tech-list">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>PostgreSQL</span>
                    <span>FastAPI</span>
                    <span>React</span>
                    <span>Docker</span>
                </div>
            </div>
        </section>
    )
}

export default HeroSection