import Link from "next/link";
import "./NavBar.css"

const links = [{
  label: 'Home',
  route: '/',
  image: './img/navBar/inicioNew.png'
}, {
  label: 'Empleos',
  route: '/empleos',
  image: './img/navBar/empleosNew.png'
}, {
  label: 'Candidatos',
  route: '/candidatos',
  image: './img/navBar/candidatosNew.png'
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
              {<><img src={image} alt={`${label} Icon`} className="navIcon" /> <span><p>{label}</p></span></> }
              
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}