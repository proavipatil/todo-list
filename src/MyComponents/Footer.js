import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"relative",
        bottom:"0",
        width:"100%"
    }
    return (
        <footer className='bg-dark text-light py-2 mt-4' style={footerstyle}>
            <p className="text-center">
            Copyright &copy; Prathmesh Kumbhar
            </p>
        </footer>
    )
}

export default Footer;
