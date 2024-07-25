import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const socials = [
    { icon: <FaGithub />, path: 'https://github.com/arkh99' },
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/alireza-khoshnami-6789a4189/'},
]
const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social;