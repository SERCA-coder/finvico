import Link from "next/link"

export default function Blog1() {
    return (
        <>

            <section className="home-blog-version1 pb-space pt-space">
                <div className="container zindex position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                MARKET INSIGHTS
                            </div>
                            <h2 className="stitle">
                                Latest <span className="fw-400">Investment</span>
                                <span className="d-block fw-semibold">
                                    Market Analysis
                                </span>
                            </h2>
                        </div>
                    
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/mblog1.png" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/investment-products/fixed-income" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            Fixed Income
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/blog-details" className="white-clr">
                                            Emerging Market Eurobonds: Opportunities in 2024
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/mblog2.png" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/resources/investment-strategies" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            Portfolio Strategy
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/resources/market-insights" className="white-clr">
                                            Risk Management Strategies for Institutional Investors
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/mblog3.png" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/resources/market-insights" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            Market Analysis
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/blog-details" className="white-clr">
                                            Global Market Trends: What's Driving Investment Flows
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
