'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ResearchReports() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Research Reports">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4 d-flex align-items-center gap-2">
                                        <i className="fas fa-microscope theme-clr"></i> In-Depth Analysis for Strategic Decisions
                                    </h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        Our comprehensive research reports provide deep insights into market trends, economic analysis, and investment opportunities. Each report is crafted by our team of experienced analysts and economists, offering you the detailed information needed to make informed investment decisions.
                                    </p>
                                    
                                    <h4 className="mb-xxl-4 mb-3 d-flex align-items-center gap-2">
                                        <i className="fas fa-star theme-clr"></i> Featured Reports
                                    </h4>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        Access our latest research covering global markets, sector analysis, and strategic investment themes.
                                    </p>

                                    {/* Modern Blog Style Cards */}
                                    <div className="row g-xxl-7 g-xl-6 g-4 mb-xxl-8 mb-xl-6 mb-5">
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/blog/mblog5.png" alt="Global Economic Outlook" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-chart-line"></i> Economic
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            Q1 2024
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            Global Economic Outlook 2024
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        Comprehensive analysis of global economic trends, monetary policy outlook, and their implications for investment markets.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1600}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/blog/mblog6.png" alt="Emerging Markets" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-globe-americas"></i> Emerging Markets
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            March 2024
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            Emerging Markets Investment Guide
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        Detailed analysis of emerging market opportunities, risks, and strategic allocation recommendations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1800}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/case/study-grid1.png" alt="Fixed Income Analysis" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-file-invoice-dollar"></i> Fixed Income
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            February 2024
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            Fixed Income Market Analysis
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        In-depth analysis of bond markets, yield curve dynamics, and credit risk assessment across major markets.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4 modern-card-variant-2 position-relative">
                                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                                    <img src="/assets/img/case/study-grid2.png" alt="ESG Investing" className="w-100 overflow-hidden" />
                                                </div>
                                                <div className="blog-cont">
                                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                                        <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2 d-inline-flex align-items-center gap-2">
                                                            <i className="fas fa-leaf"></i> ESG Focus
                                                            <span className="rot60 d-inline-block ml-10">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </span>
                                                        <span className="bspan-clr">
                                                            January 2024
                                                        </span>
                                                    </div>
                                                    <h5>
                                                        <Link href="#" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                            ESG Investment Trends Report
                                                            <span className="rot60">
                                                                <i className="fas fa-arrow-up theme-clr" />
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="pra-clr mt-3">
                                                        Analysis of environmental, social, and governance factors in investment decision-making and market trends.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mb-xxl-4 mb-3 d-flex align-items-center gap-2">
                                        <i className="fas fa-cogs theme-clr"></i> Research Methodology
                                    </h4>
                                    <p>
                                       Our research combines quantitative analysis, fundamental research, and expert insights to provide comprehensive market intelligence. Each report undergoes rigorous review processes to ensure accuracy and relevance.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">
                                    <div className="widget widget_categories glassmorphism">
                                        <h5 className="widget-title d-flex align-items-center gap-2"><i className="fas fa-folder-open theme-clr"></i> Resources</h5>
                                        <ul>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-bolt"></i><a href="/resources/market-insights">Market Insights</a></li>
                                            <li className="active d-flex align-items-center gap-2"><i className="fas fa-file-alt"></i><a href="/resources/research-reports">Research Reports</a></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-lightbulb"></i><a href="/resources/investment-strategies">Investment Strategies</a></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-question-circle"></i><a href="/faq">FAQs</a></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_contact glassmorphism mt-4">
                                        <h5 className="widget-title d-flex align-items-center gap-2"><i className="fas fa-search theme-clr"></i> Request Custom Research</h5>
                                        <p>Need specific analysis? Our team can create custom research reports tailored to your investment needs.</p>
                                        <Link href="/contact" className="cmn-btn w-100 text-center d-inline-flex align-items-center gap-2">
                                            <i className="fas fa-envelope"></i> Contact Us
                                        </Link>
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