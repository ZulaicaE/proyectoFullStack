import styles from './homeMenu.module.css'
import Link from "next/link"

const links = [{
    label: 'Noticias',
    route: '/noticias',
    // image: './img/navBar/home.svg'
}, {
    label: 'Salud',
    route: '/empleos',
    // image: './img/navBar/factory.png'
}, {
    label: 'Deportes',
    route: '/deportes',
    // image: './img/navBar/worker.png'
},
{
    label: 'Servicios',
    route: '/servicios',
    // image: './img/navBar/worker.png'
},
{
    label: 'Transporte',
    route: '/transporte',
    // image: './img/navBar/worker.png'
},
{
    label: 'Turismo',
    route: '/turismo',
    // image: './img/navBar/worker.png'
}]

export const HomeMenu = () => {
    return (
        <div className={styles.menu}>
            <ul className="">
                {links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}