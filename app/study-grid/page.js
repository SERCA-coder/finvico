import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function StudyGrid() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Case Study Grid">
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        {/* Hero Section with Statistics */}
                        <div className="row mb-xxl-8 mb-xl-6 mb-5">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="mb-4">Success Stories & Portfolio Performance</h2>
                                <p className="mb-5">
                                    Discover how our strategic investment approaches have delivered exceptional results for our clients across diverse market conditions and investment objectives.
                                </p>
                                
                                {/* Performance Statistics */}
                                <div className="row g-4">
                                    <div className="col-md-3 col-6">
                                        <div className="stat-card text-center">
                                            <div className="stat-number">$500M+</div>
                                            <div className="stat-label">Portfolio Value</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="stat-card text-center">
                                            <div className="stat-number">12.5%</div>
                                            <div className="stat-label">Average Return</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="stat-card text-center">
                                            <div className="stat-number">150+</div>
                                            <div className="stat-label">Case Studies</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="stat-card text-center">
                                            <div className="stat-number">95%</div>
                                            <div className="stat-label">Success Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Case Studies */}
                        <div className="timeline-case-studies mb-xxl-8 mb-xl-6 mb-5">
                            <h3 className="text-center mb-5">Featured Case Studies</h3>
                            <div className="timeline-container">
                                <div className="timeline-item left" data-aos="fade-right" data-aos-duration={1400}>
                                    <div className="timeline-content modern-card-variant-1">
                                        <div className="timeline-date">
                                            <span className="modern-badge">2024</span>
                                        </div>
                                        <div className="timeline-image">
                                            <img src="/assets/img/case/study-grid1.png" alt="Portfolio Optimization" />
                                        </div>
                                        <div className="timeline-text">
                                            <h4>Portfolio Optimization Success</h4>
                                            <p>How we helped a high-net-worth client achieve 15% annual returns through strategic asset allocation and risk management.</p>
                                            <div className="timeline-stats d-flex gap-3 mb-3">
                                                <span className="stat-tag">+15% Return</span>
                                                <span className="stat-tag">12 Months</span>
                                                <span className="stat-tag">Low Risk</span>
                                            </div>
                                            <Link href="/study-details" className="cmn-btn">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="timeline-item right" data-aos="fade-left" data-aos-duration={1600}>
                                    <div className="timeline-content modern-card-variant-1">
                                        <div className="timeline-date">
                                            <span className="modern-badge">2023</span>
                                        </div>
                                        <div className="timeline-image">
                                            <img src="/assets/img/case/study-grid2.png" alt="Market Recovery" />
                                        </div>
                                        <div className="timeline-text">
                                            <h4>Market Recovery Strategy</h4>
                                            <p>Navigating volatile markets to protect capital while positioning for recovery opportunities.</p>
                                            <div className="timeline-stats d-flex gap-3 mb-3">
                                                <span className="stat-tag">Capital Preservation</span>
                                                <span className="stat-tag">18 Months</span>
                                                <span className="stat-tag">Moderate Risk</span>
                                            </div>
                                            <Link href="/study-details" className="cmn-btn">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="timeline-item left" data-aos="fade-right" data-aos-duration={1800}>
                                    <div className="timeline-content modern-card-variant-1">
                                        <div className="timeline-date">
                                            <span className="modern-badge">2023</span>
                                        </div>
                                        <div className="timeline-image">
                                            <img src="/assets/img/case/study-grid3.png" alt="ESG Investment" />
                                        </div>
                                        <div className="timeline-text">
                                            <h4>ESG Investment Excellence</h4>
                                            <p>Building a sustainable portfolio that delivers both financial returns and positive environmental impact.</p>
                                            <div className="timeline-stats d-flex gap-3 mb-3">
                                                <span className="stat-tag">+18% Return</span>
                                                <span className="stat-tag">24 Months</span>
                                                <span className="stat-tag">ESG Focus</span>
                                            </div>
                                            <Link href="/study-details" className="cmn-btn">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Grid */}
                        <div className="row g-xxl-7 g-xl-6 g-6">
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1400}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                        <img src="/assets/img/case/study-grid1.png" alt="img" className="w-100 overflow-hidden" />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <i className="fas fa-chart-line"></i>
                                                <span>Portfolio Management</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Portfolio
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                            <span className="modern-badge">Featured</span>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Strategic Portfolio Optimization
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                        <p className="pra-clr mt-3">
                                            How we transformed a $50M portfolio to achieve consistent 12% annual returns through strategic asset allocation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                        <img src="/assets/img/case/study-grid2.png" alt="img" className="w-100 overflow-hidden" />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <i className="fas fa-shield-alt"></i>
                                                <span>Risk Management</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Risk Management
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Transforming Challenges into Opportunities
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                        <p className="pra-clr mt-3">
                                            Navigating market volatility while protecting capital and positioning for recovery opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                        <img src="/assets/img/case/study-grid3.png" alt="img" className="w-100 overflow-hidden" />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <i className="fas fa-leaf"></i>
                                                <span>ESG Investment</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                ESG
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Sustainable Investment Excellence
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                        <p className="pra-clr mt-3">
                                            Building portfolios that deliver both financial returns and positive environmental impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1900}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                        <img src="/assets/img/case/study-grid4.png" alt="img" className="w-100 overflow-hidden" />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <i className="fas fa-globe"></i>
                                                <span>Global Markets</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Global
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                International Market Expansion
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                        <p className="pra-clr mt-3">
                                            Expanding investment horizons across emerging and developed markets for enhanced diversification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={2100}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                        <img src="/assets/img/case/study-grid5.png" alt="img" className="w-100 overflow-hidden" />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <i className="fas fa-chart-pie"></i>
                                                <span>Asset Allocation</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Allocation
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Dynamic Asset Allocation Strategy
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                        <p className="pra-clr mt-3">
                                            Adapting portfolio allocations to changing market conditions for optimal risk-adjusted returns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={2200}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                        <img src="/assets/img/case/study-grid6.png" alt="img" className="w-100 overflow-hidden" />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <i className="fas fa-trophy"></i>
                                                <span>Performance</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Performance
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Outperforming Market Benchmarks
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                        <p className="pra-clr mt-3">
                                            Consistently delivering superior returns while maintaining disciplined risk management practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}