import Link from "next/link";
import "./NavBar.css"

const links = [{
  label: 'Home',
  route: '/',
  image: './img/navBar/home.svg'
}, {
  label: 'Empleos',
  route: '/empleos',
  image: './img/navBar/factory.png'
}, {
  label: 'Candidatos',
  route: '/candidatos',
  image: './img/navBar/worker.png'
}]

export const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className="d-flex flex-row navBar">
          {links.map(({ label, route, image }) => (
            <li key={route}>
              <Link href={route}>
                {image && <img src={image} alt={`${label} Icon`} className="navIcon" />}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  );
}