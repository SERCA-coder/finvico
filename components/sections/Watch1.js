import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Watch1() {
    return (
        <>

            <div className="watch-version01 zindex1 position-relative" style={{
                background: 'url(/assets/img/banner/hero-bg1.png) no-repeat center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <div className="watch-content d-center">
                        <VideoPopup style={3} />
                    </div>
                </div>
            </div>
        </>
    )
}
