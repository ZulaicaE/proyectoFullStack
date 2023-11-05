import styles from './homeMenu.module.css'
import Link from "next/link"

const links = [{
    label: 'Noticias',
    route: '/noticias',
}, {
    label: 'Salud',
    route: '/empleos',
}, {
    label: 'Deportes',
    route: '/deportes',
},
{
    label: 'Servicios',
    route: '/servicios',
},
{
    label: 'Transporte',
    route: '/transporte',
},
{
    label: 'Turismo',
    route: '/turismo',
}]

export const HomeMenu = () => {
    return (
        <div className={styles.menu}>
            <ul className={`${styles.navMenu} list-group list-group-flush`}>
                {links.map(({ label, route }) => (
                    <li className={`${styles.navMenu} list-group-item`} key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}