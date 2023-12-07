import  './HomeMenu.css'
import Link from "next/link"

const links = [{
    label: 'Noticias',
    route: '#cardNoticia',
}, {
    label: 'Salud',
    route: 'https://www.salud.unicen.edu.ar/',
}, {
    label: 'Deportes',
    route: 'https://www.olavarria.gov.ar/deportes/',
},
{
    label: 'Servicios',
    route: 'https://www.olavarria.gov.ar/servicios/servicio-de-recoleccion/',
},
{
    label: 'Transporte',
    route: 'https://www.olavarria.gov.ar/categoria/transporte/',
},
{
    label: 'Turismo',
    route: 'https://www.olavarria.gov.ar/Turismo/',
}]

export const HomeMenu = () => {
    return (
        <div className="pegadizo menu">
            <ul className="navMenu list-group list-group-flush">
                {links.map(({ label, route }) => (
                    <li className="navMenu " key={label}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}