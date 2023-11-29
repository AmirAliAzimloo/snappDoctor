import FooterBox from "./FooterBox";

const Footer = () => {
  return (
    <footer className='w-full p-5 bg-white shadow-md ' >
        <section className='container flex flex-col sm:flex-row justify-between items-center gap-5' >


           


            <FooterBox />
            <FooterBox />
            <FooterBox />

        </section>
    </footer>
  )
}

export default Footer;