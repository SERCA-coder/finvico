import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-version-one zindex1 position-relative">
                <div className="container">
                    <div className="footer-topversion-one pt-20 pb-20">
                        <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        About Us
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="-1" x2="83" y2="-1" transform="matrix(1 0 0 -1 0 0)" stroke="#0c496a" stroke-width="2"></line>

                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4304" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Finvico offers funded trading programs built for disciplined, results-driven market participants.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Quick Links
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="-1" x2="83" y2="-1" transform="matrix(1 0 0 -1 0 0)" stroke="#0c496a" stroke-width="2"></line>
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_43041" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href="/about" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                About Finvico
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/account" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Account Options
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/how-it-works/choose-account" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Choose Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Quick Links 
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="-1" x2="83" y2="-1" transform="matrix(1 0 0 -1 0 0)" stroke="#0c496a" stroke-width="2"></line>
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4305" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href="/how-it-works/evaluation" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Pass Evaluation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/how-it-works/funded-account" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Funded Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/how-it-works/earnPayouts" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                               Earn Payouts
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Contact Us
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="-1" x2="83" y2="-1" transform="matrix(1 0 0 -1 0 0)" stroke="#0c496a" stroke-width="2"></line>
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4306" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Feel free to contact us anytime!
                                    </p>
                                    <form action="#" className="foote-formv1 d-flex align-items-center justify-content-between" data-aos="zoom-in-down" data-aos-duration={1200}>
                                        <input type="email" placeholder="Enter Email Address" />
                                        <button type="submit" className="themebg d-center rounded-1">
                                            <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_6308_51)">
                                                    <path d="M24.177 2.42216C24.294 1.87753 23.7601 1.4183 23.2392 1.61705L0.645685 10.242C0.512852 10.2927 0.398516 10.3825 0.317763 10.4995C0.23701 10.6165 0.193635 10.7553 0.193361 10.8975C0.193087 11.0397 0.235926 11.1786 0.316228 11.2959C0.396529 11.4133 0.510518 11.5035 0.643154 11.5547L6.99011 14.006V21.7269C6.9901 21.8851 7.04344 22.0387 7.14153 22.1628C7.23961 22.287 7.3767 22.3744 7.53062 22.411C7.68454 22.4476 7.84631 22.4312 7.98976 22.3645C8.13322 22.2977 8.24997 22.1846 8.32116 22.0433L10.9462 16.8342L17.3522 21.5884C17.7419 21.8776 18.302 21.6936 18.4438 21.2289C24.425 1.61859 24.1664 2.47143 24.177 2.42216ZM18.5999 4.8933L7.59357 12.7316L2.85793 10.9027L18.5999 4.8933ZM8.39634 13.8863L17.9901 7.05398C9.7348 15.7628 10.166 15.3044 10.13 15.3529C10.0765 15.4248 10.223 15.1444 8.39634 18.7692V13.8863ZM17.3896 19.8649L11.7508 15.6802L21.9465 4.92423L17.3896 19.8649Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_6308_51">
                                                        <rect width={24} height={24} fill="white" transform="translate(0.193359)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                
                            </div>
                        </div>
                    </div><p style={{color: "#a3a3a3",fontStyle: "italic" }}>
                    Terms & Conditions<br></br>
                    By using this website, you agree to comply with and be bound by our Terms and Conditions and Privacy Policy. Please review these documents carefully before using our services. Finvico reserves the right to update or modify these terms at any time without prior notice.
                    <br></br><br></br>
                    Privacy Policy<br></br>
                    By accessing or using this website, you acknowledge that you have read, understood, and agree to our Privacy Policy. We are committed to protecting your personal information and handling it in accordance with applicable data protection laws. Please review our Privacy Policy carefully to understand how we collect, use, and safeguard your data.
                    <br></br><br></br>
                    Risk Disclosure <br></br>
                    Trading financial instruments involves significant risk and may result in the loss of your invested capital. Past performance is not indicative of future results. You should carefully consider your investment objectives, level of experience, and risk appetite before engaging in any trading activities. Finvico does not provide investment advice and recommends consulting with a financial advisor if you have any doubts.
                    <br></br><br></br>
                    <i>Note: All evaluations are simulated and subject to approval.</i></p>
                    <div className="footer-bottom-version-one d-sm-flex gap-sm-0 gap-4 d-grid align-items-center justify-content-sm-between justify-content-center bg2-clr px-xxl-7 px-6 py-xxl-6 py-xl-6 py-7 mb-xxl-10 mb-lg-9 mb-sm-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1600}>
                        <Link href="/" className="footer-logov1 m-sm-0 m-auto">
                            <img src="/assets/img/logo/logo2.png" alt="img" />
                        </Link>
                        <Link href="/#mains" className="footer-topscroll d-center themebg">
                            <i className="fas fa-arrow-up" />
                        </Link>
                        <p className="pra-clr">
                            © All Copyright {new Date().getFullYear()} by <Link href="/" className="theme-clr">Finvico</Link>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
