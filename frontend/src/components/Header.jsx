import React, {useState} from 'react'

export default function Header(pageName) {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 20) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <header className={`${color ? 'bg-lightBg' : 'bg-transparents'} flex justify-between p-8 sticky top-0 left-0 transition-colors`}>
            <h1 className="title1">{pageName.pageName}</h1>
            <nav>
                <ul className="flex gap-8 title4">
                    <li className="w-20 h-10 flex justify-center items-center"><a className={`hover:text-3xl transition-all ${pageName.pageName == 'Home' ? 'underline' : ''}`} href="/Home">Home</a></li>
                    <li className="w-20 h-10 flex justify-center items-center"><a className={`hover:text-3xl transition-all ${pageName.pageName == 'About' ? 'underline' : ''}`} href="/CarOverview">Cars</a></li>
                    <li className="w-20 h-10 flex justify-center items-center"><a className={`hover:text-3xl transition-all ${pageName.pageName == 'Contact' ? 'underline' : ''}`} href="/ModsOverview">Mods</a></li>
                </ul>
            </nav>
        </header>
    )
}