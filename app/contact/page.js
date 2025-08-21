'use client';
import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        try {
            const res = await fetch("/api/sendmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("Your message has been sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("There was an error sending your message. Please try again.");
            }
        } catch {
            setStatus("There was an error sending your message. Please try again.");
        }
    };

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Contact Us">
                <section className="contact-section pt-space pb-space">
                    <div className="container">
                        <div className="row g-xl-7 g-4 mb-xxl-7 mb-6 justify-content-center">
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                <div className="modern-contact-info text-center">
                                    <span className="contact-info-icon"><i className="fas fa-phone-alt"></i></span>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">Phone &amp; Fax</h5>
                                    <span className="msub d-block mb-2">Mobile : +972 52‑549‑0816</span>
                                    <span className="msub">Fax : +972 52‑549‑0816</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1600}>
                                <div className="modern-contact-info text-center">
                                    <span className="contact-info-icon"><i className="fas fa-envelope"></i></span>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">Mail Address</h5>
                                    <span className="msub d-block mb-2">info@finvico.com</span>
                                    <span className="msub">support@finvico.com</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1800}>
                                <div className="modern-contact-info text-center">
                                    <span className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></span>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">Our Location</h5>
                                    <span className="msub d-block mb-2">Tel Aviv, Israeli</span>
                                    <span className="msub">Sky Tower Office Building. HaMasger Street 35, Tel Aviv-Yafo</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={2000}>
                                <div className="modern-contact-info text-center">
                                    <span className="contact-info-icon"><i className="fas fa-clock"></i></span>
                                    <h5 className="white mt-xxl-7 mt-6 mb-xxl-7 mb-6">Office Hour</h5>
                                    <span className="msub d-block mb-2">Mon - Fri 09:00 - 18:00</span>
                                    <span className="msub">Sat - Sun Closed</span>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-8 g-xl-6 g-4">
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={2000}>
                                <div className="contact-map">
                                    <iframe     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.123456789!2d34.78543!3d32.06455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b6a00000001%3A0xabcdef1234567890!2sSky%20Tower%2C%2035%20HaMasger%20St%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1699999999999!5m2!1sen!2sil"/>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={2000}>
                                <div className="modern-contact-form">
                                    <h3 className="white mb-xxl-15 mb-xl-10 mb-lg-7 mb-5">Leave A Message</h3>
                                    <form onSubmit={handleSubmit} autoComplete="off">
                                        <div className="row g-xxl-8 g-xl-6 g-lg-4 g-4">
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <span className="input-icon"><i className="fas fa-user"></i></span>
                                                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <span className="input-icon"><i className="fas fa-envelope"></i></span>
                                                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-group">
                                                    <span className="input-icon"><i className="fas fa-comment-dots"></i></span>
                                                    <textarea name="message" rows={5} placeholder="Message" value={form.message} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="submit-btn">Send Message</button>
                                            </div>
                                        </div>
                                        {status && <div className="form-status" style={{ marginTop: 16, color: status.includes("successfully") ? "#E3FF04" : "#ff4d4f" }}>{status}</div>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}