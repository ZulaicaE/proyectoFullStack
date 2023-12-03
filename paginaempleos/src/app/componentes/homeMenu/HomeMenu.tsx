import  './HomeMenu.css'
import Link from "next/link"

const links = [{
    label: 'Noticias',
    route: '#cardNoticia',
}, {
    label: 'Salud',
    route: '',
}, {
    label: 'Deportes',
    route: '',
},
{
    label: 'Servicios',
    route: '',
},
{
    label: 'Transporte',
    route: '',
},
{
    label: 'Turismo',
    route: '',
}]

export const HomeMenu = () => {
    return (
        <div className="menu">
            <ul className="navMenu list-group list-group-flush">
                {links.map(({ label, route }) => (
                    <li className="navMenu list-group-item" key={label}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}