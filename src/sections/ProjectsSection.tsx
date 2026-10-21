import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectsSection() {
    return (
        <section id="projects" className="section">
            <div className="section-inner">
                <p className="section-number">03</p>

                <h2>Projects</h2>

                <p className="section-description">
                    단순한 기능 나열보다 어떤 역할을 담당했고 어떤 기술적 문제를
                    해결했는지를 중심으로 정리했습니다.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={
                                project.featured
                                    ? 'project-card featured-project'
                                    : 'project-card'
                            }
                        >
                            <div className="project-top">
                                <div>
                                    <p className="project-index">
                                        {project.index}
                                    </p>

                                    <h3>{project.title}</h3>
                                </div>

                                <span className="project-role">
                                    {project.role}
                                </span>
                            </div>

                            <p className="project-summary">
                                {project.summary}
                            </p>

                            <div className="project-tech">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="project-details">
                                <div>
                                    <strong>Role</strong>
                                    <p>{project.role} Developer</p>
                                </div>

                                <div>
                                    <strong>{project.detailLabel}</strong>
                                    <p>{project.detailValue}</p>
                                </div>
                            </div>

                            {project.title === 'PetPulse' ? (
                                <Link
                                    to="/projects/petpulse"
                                    className="project-link"
                                >
                                    프로젝트 상세 보기 →
                                </Link>
                            ) : (
                                project.troubleshootingLink && (
                                    <a
                                        href="#troubleshooting"
                                        className="project-link"
                                    >
                                        프로젝트 핵심 문제 해결 보기 →
                                    </a>
                                )
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection