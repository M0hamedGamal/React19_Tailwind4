import {useState} from 'react';


const links = [
    {name: "Home", href: "#home"},
    {name: "AI Types", href: "#types"},
    {name: "Benefits", href: "#benefits"},
    {name: "Contact", href: "#contact"},
];


function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className='w-full backdrop-blur-sm shadow-sm fixed z-50'>
            <div className="app-container flex justify-between items-center h-16">
                <span className='gradient-text text-2xl font-bold'>AI Revolution</span>

                {/*Desktop menu*/}
                <div className="hidden md:block space-x-8">
                    {links.map((link) => (
                        <a className='nav-item' href={link.href} key={link.href}>{link.name}</a>
                    ))}
                    <a href='#' className='nav-btn'>Get Started</a>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    className='md:hidden text-gray-400 hover:bg-gray-200 rounded-md p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
            </div>

            {/*Mobile menu*/}
            {isMobileMenuOpen && (
                <div className='md:hidden bg-white shadow-lg px-2 py-3 rounded-b-lg space-y-1'>
                    {links.map((link) => (
                        <a className='mobile-nav-item' href={link.href} key={link.href}>{link.name}</a>
                    ))}
                    <a href='#' className='mobile-nav-btn'>Get Started</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;