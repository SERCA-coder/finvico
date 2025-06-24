'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function MarketInsights() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Market Insights">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4">Timely Analysis for Informed Decisions</h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        Stay ahead of the curve with our expert market insights. The Finvico research team provides timely, in-depth analysis of global markets, economic trends, and geopolitical events to help you make well-informed investment decisions. Our insights are designed to be clear, concise, and actionable.
                                    </p>
                                    
                                    {/* Featured Content Section */}
                                    <div className="featured-content mb-xxl-6 mb-xl-5 mb-4 modern-card-variant-1 position-relative">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="featured-text">
                                                    <span className="modern-badge mb-3 d-inline-flex align-items-center gap-2">
                                                        <i className="fas fa-star"></i> Featured Report
                                                    </span>
                                                    <h4 className="mb-3 d-flex align-items-center gap-2">
                                                        <i className="fas fa-chart-line theme-clr"></i> Q4 2024 Market Outlook
                                                    </h4>
                                                    <p className="mb-4">
                                                        Our comprehensive analysis of market trends, risks, and opportunities for the final quarter of 2024. Get exclusive insights into our strategic positioning recommendations.
                                                    </p>
                                                    <div className="featured-stats d-flex gap-4 mb-4">
                                                        <div className="stat-item">
                                                            <div className="stat-value">15</div>
                                                            <div className="stat-label">Pages</div>
                                                        </div>
                                                        <div className="stat-item">
                                                            <div className="stat-value">5</div>
                                                            <div className="stat-label">Asset Classes</div>
                                                        </div>
                                                        <div className="stat-item">
                                                            <div className="stat-value">12</div>
                                                            <div className="stat-label">Charts</div>
                                                        </div>
                                                    </div>
                                                    <Link href="#" className="cmn-btn d-inline-flex align-items-center gap-2">
                                                        <i className="fas fa-download"></i> Download Report
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="featured-image position-relative">
                                                    <img src="/assets/img/blog/blogv3-big.png" alt="Q4 2024 Market Outlook" className="w-100 rounded" />
                                                    <div className="image-overlay">
                                                        <div className="overlay-content">
                                                            <i className="fas fa-chart-line"></i>
                                                            <span>Latest Analysis</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h4 className="mb-xxl-4 mb-3">What We Cover</h4>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        Our comprehensive research covers all major asset classes and market developments to keep you informed and prepared.
                                    </p>

                                    {/* Market Coverage Progress */}
                                    <div className="market-coverage mb-xxl-6 mb-xl-5 mb-4">
                                        <h5 className="mb-4 d-flex align-items-center gap-2">
                                            <i className="fas fa-globe-europe"></i> Market Coverage
                                        </h5>
                                        <div className="coverage-items">
                                            <div className="coverage-item mb-3">
                                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                                    <span><i className="fas fa-chart-bar me-2 theme-clr"></i>Equity Markets</span>
                                                    <span>95%</span>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="progress-bar shimmer" style={{width: '95%'}}></div>
                                                </div>
                                            </div>
                                            <div className="coverage-item mb-3">
                                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                                    <span><i className="fas fa-file-invoice-dollar me-2 theme-clr"></i>Fixed Income</span>
                                                    <span>88%</span>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="progress-bar shimmer" style={{width: '88%'}}></div>
                                                </div>
                                            </div>
                                            <div className="coverage-item mb-3">
                                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                                    <span><i className="fas fa-coins me-2 theme-clr"></i>Commodities</span>
                                                    <span>92%</span>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="progress-bar shimmer" style={{width: '92%'}}></div>
                                                </div>
                                            </div>
                                            <div className="coverage-item">
                                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                                    <span><i className="fas fa-exchange-alt me-2 theme-clr"></i>FX Markets</span>
                                                    <span>85%</span>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="progress-bar shimmer" style={{width: '85%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modern Blog Style Cards */}
                                    <div className="row g-xxl-7 g-xl-6 g-4 mb-xxl-8 mb-xl-6 mb-5">
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/blog/mblog1.png" alt="Daily Market Briefing" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-sun"></i> Daily Briefing
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            Updated Daily
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            Daily Market Briefing
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        Start your day with a summary of key market movements, news, and what to watch for in the hours ahead.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1600}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/blog/mblog2.png" alt="Weekly Outlook" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-calendar-week"></i> Weekly Report
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            Every Monday
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            Weekly Market Outlook
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        A comprehensive review of the past week's events and a strategic outlook on the week to come for major asset classes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1800}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/blog/mblog3.png" alt="Thematic Reports" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-lightbulb"></i> Thematic
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            Monthly
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            Thematic Investment Reports
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        Deep dives into specific investment themes, such as emerging technologies, ESG trends, and macroeconomic shifts.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/blog/mblog4.png" alt="Webinars & Events" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-broadcast-tower"></i> Live Events
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            Bi-weekly
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            Webinars & Market Events
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        Join our exclusive webinars where our top analysts discuss current market conditions and answer your questions live.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mb-xxl-4 mb-3">Access for Clients</h4>
                                    <p>
                                       Our full suite of market insights is available exclusively to Finvico clients through our secure client portal. We are committed to providing you with the intelligence you need to navigate the markets with confidence.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">
                                    <div className="widget widget_categories glassmorphism">
                                        <h5 className="widget-title d-flex align-items-center gap-2"><i className="fas fa-folder-open theme-clr"></i> Resources</h5>
                                        <ul>
                                            <li className="active d-flex align-items-center gap-2"><i className="fas fa-bolt"></i><a href="/resources/market-insights">Market Insights</a></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-file-alt"></i><a href="/resources/research-reports">Research Reports</a></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-lightbulb"></i><a href="/resources/investment-strategies">Investment Strategies</a></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-question-circle"></i><a href="/faq">FAQs</a></li>
                                        </ul>
                                    </div>

                                    {/* Enhanced Contact Widget */}
                                    <div className="widget widget_contact glassmorphism mt-4">
                                        <h5 className="widget-title d-flex align-items-center gap-2"><i className="fas fa-lock theme-clr"></i> Get Premium Access</h5>
                                        <div className="contact-info">
                                            <div className="contact-item d-flex align-items-center gap-3 mb-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Daily Reports</span>
                                                    <span>Market Briefings</span>
                                                </div>
                                            </div>
                                            <div className="contact-item d-flex align-items-center gap-3 mb-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-users"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Expert Team</span>
                                                    <span>15+ Analysts</span>
                                                </div>
                                            </div>
                                            <div className="contact-item d-flex align-items-center gap-3 mb-4">
                                                <div className="contact-icon">
                                                    <i className="fas fa-shield-alt"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Secure Portal</span>
                                                    <span>24/7 Access</span>
                                                </div>
                                            </div>
                                            <Link href="/contact" className="cmn-btn w-100 text-center d-inline-flex align-items-center gap-2"><i className="fas fa-user-plus"></i> Become a Client</Link>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
} 