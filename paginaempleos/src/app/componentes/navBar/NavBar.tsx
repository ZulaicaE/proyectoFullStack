import Link from "next/link";
import "./NavBar.css"

const links = [{
  label: 'Home',
  route: '/',
  image: './img/navBar/home.png'
}, {
  label: 'Empleos',
  route: '/empleos',
  image: './img/navBar/empleos.png'
}, {
  label: 'Candidatos',
  route: '/candidatos',
  image: './img/navBar/trabajador.png'
}]

export const NavBar = () => {
  return (
    <nav className="sticky-top navBar">
      <div className="">
        <a className="navbar-brand" href="#">
          <img className="navLogo" src="./img/navBar/futuramaLogo.png" alt="Bootstrap"/>
        </a>
      </div>
      <ul className="d-flex flex-row navBarButton">
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
  );
}