const year = new Date().getFullYear();

const Footer = () => {
    return ( 
        <>
        <div className="footer">
        <p className="footer_p">Copyright &copy; {year}</p>
        </div>
        </>
     );
}
 
export default Footer;