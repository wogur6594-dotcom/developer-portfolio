import { troubleshootingCases } from '../data/troubleshooting'

function TroubleshootingSection() {
    return (
        <section id="troubleshooting" className="section">
            <div className="section-inner">
                <p className="section-number">04</p>

                <h2>Troubleshooting</h2>

                <p className="section-description">
                    개발 과정에서 발생한 문제를 단순히 수정하는 데 그치지 않고,
                    원인을 추적하고 재발을 방지하는 방향으로 해결한 경험을 정리했습니다.
                </p>

                <div className="troubleshooting-list">
                    {troubleshootingCases.map((item) => (
                        <article
                            key={`${item.project}-${item.index}`}
                            className="trouble-card"
                        >
                            <div className="trouble-header">
                                <div>
                                    <p className="trouble-index">
                                        {item.index} · {item.project}
                                    </p>

                                    <h3>{item.title}</h3>
                                </div>

                                <span className="trouble-tag">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="trouble-grid">
                                <div className="trouble-item">
                                    <strong>Problem</strong>
                                    <p>{item.problem}</p>
                                </div>

                                <div className="trouble-item">
                                    <strong>Analysis</strong>
                                    <p>{item.analysis}</p>
                                </div>

                                <div className="trouble-item">
                                    <strong>Solution</strong>
                                    <p>{item.solution}</p>
                                </div>

                                <div className="trouble-item result">
                                    <strong>Result</strong>
                                    <p>{item.result}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TroubleshootingSection