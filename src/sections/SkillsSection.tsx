import { skills } from '../data/skills'

function SkillsSection() {
    return (
        <section id="skills" className="section">
            <div className="section-inner">
                <p className="section-number">02</p>

                <h2>Skills</h2>

                <p className="section-description">
                    프로젝트에서 실제로 사용한 기술을 중심으로 정리했습니다.
                    단순한 숙련도 수치보다 어떤 문제를 해결하는 데 사용했는지를
                    중요하게 생각합니다.
                </p>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <article
                            key={skill.category}
                            className="skill-card"
                        >
                            <p className="skill-category">
                                {skill.category}
                            </p>

                            <h3>{skill.title}</h3>

                            <div className="skill-tags">
                                {skill.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <ul>
                                {skill.descriptions.map((description) => (
                                    <li key={description}>
                                        {description}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection