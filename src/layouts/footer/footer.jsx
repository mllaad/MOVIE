import {
    Container,
    FirstRow,
    Line,
    SecondRow,
    CopyRight,
    IconGoogle,
    IconFacebook,
    IconInstagram,
    IconTwitter,
    IconTwitch,
    IconCopyRight,
    IconLogo
} from './footer.style'

const Footer = () => {
    return (
        <Container>
            <FirstRow>
                <div>
                    <IconLogo/> 
                    <p>react_movie</p>
                </div>
                <div>
                    <p>Weebly themes</p>
                    <p>Pre-Sale FAQS</p>
                    <p>Submit A Ticket</p>
                </div>
                <div>
                    <p>Services</p>
                    <p>Theme tweak</p>
                </div>
                <div>
                    <p>ShowCase</p>
                    <p>Widgetkit</p>
                    <p>Support</p>
                </div>
                <div>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Affiliates</p>
                    <p>Resources</p>
                </div>
            </FirstRow>
            <Line/>
            <SecondRow>
                <div className='group'>
                    <IconGoogle/>
                    <IconFacebook/>
                    <IconTwitter/>
                    <IconInstagram/>
                    <IconTwitch/>
                </div>
                <CopyRight>
                    <IconCopyRight/><p>CopyRight. All rights reserved</p>
                </CopyRight>
            </SecondRow>
        </Container>
    )
}
export default Footer;