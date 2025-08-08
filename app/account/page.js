'use client'
import Layout from "@/components/layout/Layout"

// Podaci o uslugama - lakše za održavanje
const servicesData = [
    {
        icon: "fas fa-chart-pie",
        title: "Starter Evaluation",
        description: "$25,000",
        features: [
            "Monthly Fee - Transparent",
            "Max Drawdown - 10%",
            "Daily Loss Limit - 5%",
            "Profit Target - 15%",
            "Trailing Drawdown Enabled"
        ]
    },
    {
        icon: "fas fa-shield-alt",
        title: "Basic Pro Challenge",
        description: "$50,000",
        features: [
            "Monthly Fee - Transparent",
            "Max Drawdown - 10%",
            "Daily Loss Limit - 5%",
            "Profit Target - 10%",
            "Trailing Drawdown Enabled"
        ]
    },
    {
        icon: "fas fa-handshake",
        title: "Standard Funded Model",
        description: "$75,000",
        features: [
            "Monthly Fee - Transparent",
            "Max Drawdown - 10%",
            "Daily Loss Limit - 5%",
            "Profit Target - 10%",
            "Trailing Drawdown Enabled"
        ]
    },
    {
        icon: "fas fa-exchange-alt",
        title: "Advanced Funded Model",
        description: "$100,000",
        features: [
            "Monthly Fee - Transparent",
            "Max Drawdown - 12%",
            "Daily Loss Limit - 5%",
            "Profit Target - 10%",
            "Trailing Drawdown Enabled"
        ]
    },
    {
        icon: "fas fa-file-contract",
        title: "Elite Trader Program",
        description: "$150,000",
        features: [
            "Monthly Fee - Transparent",
            "Max Drawdown - 12%",
            "Daily Loss Limit - 5%",
            "Profit Target - 9%",
            "Trailing Drawdown Enabled"
        ]
    },
    {
        icon: "fas fa-building",
        title: "Institutional Track",
        description: "$200,000",
        features: [
            "Monthly Fee - Transparent",
            "Max Drawdown - 12%",
            "Daily Loss Limit - 5%",
            "Profit Target - 8%",
            "Trailing Drawdown Enabled"
        ]
    }
];


export default function Service() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Account Options">
                <section className="service-section-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row justify-content-center mb-xxl-15 mb-xl-10 mb-lg-8 mb-6">
                            <div className="col-lg-8 text-center">
                                <div className="pricing-title">
                                    <h2 className="stitle mb-xxl-6 mb-xl-5 mb-4">
                                        Integrated  <span className="fw-400">Financial Services</span>
                                    </h2>
                                    <p className="pra-clr">
                                    Our tailored account solutions are designed to accommodate diverse trading needs and investment goals. Whether you’re an individual investor or an institutional client, we offer flexible account types that provide access to advanced trading platforms, personalized risk management tools, and dedicated support.
                                    Choose the account that best aligns with your strategy, and benefit from transparent fee structures, secure fund management, and seamless execution.                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row g-xxl-7 g-xl-5 g-4">
                            {servicesData.map((service, index) => (
                                <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={800 + index * 200}>
                                    <div className="modern-service-card bg1-clr p-xxl-8 p-xl-6 p-5 h-100 d-flex flex-column">
                                        <div className="icon-area mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="icon d-center radius100 theme-bg">
                                                <i className={`${service.icon} fa-2x theme-clr fas-dinm`}></i>
                                            </div>
                                        </div>
                                        <h4 className="white-clr mb-xxl-4 mb-3">{service.title}</h4>
                                        <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4 clr-txt">
                                            {service.description}
                                        </p>
                                        <ul className="modern-list-v2 mt-auto mrgn-pdng">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-check-circle theme-clr"></i> {feature}
                                                </li>
                                            ))}
                                            <li class="pdg">
                                            "All trading is initially in a simulated environment.Funded accounts follow real capital allocation procedures based on compliance and internal policies."
                                            </li>
                                            <div id='signNow'><button>Launch Your Investment</button></div>
                                            
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