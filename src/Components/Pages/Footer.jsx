import loginBg from '../../assets/login-reg-bg.png'
const Footer = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }
    return (
        <div className="footer p-10 mt-10  text-white" style={bgStyle}>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Gaming Events</a>
                <a className="link link-hover">Team Management</a>
                <a className="link link-hover">Sponsorship</a>
                <a className="link link-hover">Tournament Organize</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
               
                <h2 className='text-3xl font-extrabold'>
                    ProPlay E-sports Event LTD
                </h2>
                <p> © SHAHRIAR AHMMED - All right reserved by ProPlay Events Ltd</p>
            </form>
        </div>
    );
};

export default Footer;