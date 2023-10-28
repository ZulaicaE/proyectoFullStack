import styles from'./footer.module.css'
import Link from "next/link"
const links = [{
    label: 'Olavarría Interactiva',
    route: 'https://www.olavarria.gov.ar/olavarria-interactiva/'
  }, {
    label: 'Turnos para Licencia de Conducir',
    route: 'https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir'
  }, {
    label: 'Guía de Trámites',
    route: 'https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/'
  }, {
    label: 'Honorable Concejo Deliberante',
    route: 'https://hcd.olavarria.gov.ar/'
  }]

  const telUtil = [{ label : 'Ver todos los telefonos utiles', route: 'https://www.olavarria.gov.ar/gobierno-local/telefonos-utiles/'}];

const Footer = () =>  {
    
    return (
        <div className= {styles.cont}>
            
            <div className={styles.enlacesCont}>
                <div className={styles.enlaces}>
                    <h1>ENLACES DE INTERÉS</h1>
                <ul>
                   
                    {links.map(({label, route}) => (
                        <li key={label}>
                            <Link href={route}>{label}</Link></li>
                    ))}
                </ul>
                </div>
                
            </div>
            <div className={styles.telUtiles}>
                <h1>TELÉFONOS ÚTILES </h1>
                <dl>
                    
                    <dt>Policía</dt>
                    <dd>101</dd>
                    <dt>Bomberos</dt>
                    <dd>100</dd>
                    <dt>Emergencias Médicas</dt>
                    <dd>107</dd>
                    <dt>Guardia de Niñez</dt>
                    <dd>(02884) 15544810</dd>
                    </dl>
                    <ul>{telUtil.map(({ label, route }) => (
                <li key={label}>
                    <Link href={route}>{label}</Link></li>
                    ))}
            </ul>
                    
            </div>
            <div className={styles.github}>
            <a href="https://github.com/ZulaicaE/proyectoFullStack.git"><img src='/img/footer/githublogo-1.png' alt="github Logo" /></a>
            </div>
    
        </div>
    )
}

export default Footer;