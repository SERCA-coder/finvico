'use client'
import Layout from "@/components/layout/Layout"

// Podaci o uslugama - lakše za održavanje
const servicesData = [
    {
        icon: "fas fa-chart-pie",
        title: "Asset Management",
        description: "Strategic management of your assets to maximize returns and mitigate risks, tailored to your financial goals.",
        features: [
            "Portfolio Analysis",
            "Risk Assessment",
            "Investment Strategy",
            "Performance Tracking"
        ]
    },
    {
        icon: "fas fa-shield-alt",
        title: "Custody & Clearing",
        description: "Secure and efficient custody of your assets, with seamless clearing and settlement services for all your transactions.",
        features: [
            "Secure Asset Holding",
            "Trade Settlement",
            "Corporate Actions",
            "Regulatory Reporting"
        ]
    },
    {
        icon: "fas fa-handshake",
        title: "Brokerage Services",
        description: "Comprehensive brokerage solutions providing access to global markets for equities, fixed income, and derivatives.",
        features: [
            "Global Market Access",
            "Execution Services",
            "Research & Analytics",
            "Advisory Support"
        ]
    },
    {
        icon: "fas fa-exchange-alt",
        title: "Foreign Exchange",
        description: "Competitive FX rates and tailored hedging strategies to manage currency risk in your international investments.",
        features: [
            "Spot & Forward FX",
            "Hedging Solutions",
            "Market Analysis",
            "24/7 Trading Desk"
        ]
    },
        {
        icon: "fas fa-file-contract",
        title: "Derivatives Trading",
        description: "Access to a wide range of derivative products for hedging, speculation, and complex investment strategies.",
        features: [
            "Options & Futures",
            "Structured Products",
            "Risk Management",
            "Expert Advisory"
        ]
    },
    {
        icon: "fas fa-building",
        title: "Corporate Finance",
        description: "Expert advice on capital structure, M&A, and financing to help your business achieve its strategic objectives.",
        features: [
            "Mergers & Acquisitions",
            "Capital Raising",
            "Valuation Services",
            "Strategic Advisory"
        ]
    }
];

export default function Service() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Our Services">
                <section className="service-section-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row justify-content-center mb-xxl-15 mb-xl-10 mb-lg-8 mb-6">
                            <div className="col-lg-8 text-center">
                                <div className="pricing-title">
                                    <h2 className="stitle mb-xxl-6 mb-xl-5 mb-4">
                                        Comprehensive <span className="fw-400">Financial Solutions</span>
                                    </h2>
                                    <p className="pra-clr">
                                        We provide a full spectrum of portfolio management and financial services, meticulously designed to meet the complex needs of our clients. Our expertise ensures your financial future is secure and prosperous.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row g-xxl-7 g-xl-5 g-4">
                            {servicesData.map((service, index) => (
                                <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={800 + index * 200}>
                                    <div className="modern-service-card bg1-clr p-xxl-8 p-xl-6 p-5 h-100 d-flex flex-column">
                                        <div className="icon-area mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="icon d-center radius100 theme-bg">
                                                <i className={`${service.icon} fa-2x theme-clr`}></i>
                                            </div>
                                        </div>
                                        <h4 className="white-clr mb-xxl-4 mb-3">{service.title}</h4>
                                        <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="modern-list-v2 mt-auto">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-check-circle theme-clr"></i> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
} 