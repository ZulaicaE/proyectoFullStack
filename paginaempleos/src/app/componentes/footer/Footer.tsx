import  styles from "./Footer.module.css"

const Footer = () => {

    return (
        
        <footer className={styles.footer}>
        <div className={styles.contenedor}>
           
                <div className={styles.col}>
                    <h2>ENLACES DE INTERÉS</h2>
                    <ul>
                        <li><a href="https://www.olavarria.gov.ar/olavarria-interactiva/">Olavarría Interactiva</a></li>
                        <li><a href="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir">Turnos para Licencia de Conducir</a></li>
                        <li><a href="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/">Guía de Trámites</a></li>
                        <li><a href="https://hcd.olavarria.gov.ar/">Honorable Concejo Deliberante</a></li>

                    </ul>
                </div>
                <div className={styles.col}>
                    <div className={styles.telUtiles}>
                    <h2>TELÉFONOS ÚTILES </h2>
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
                    <ul>
                        <li> <a href="https://www.olavarria.gov.ar/gobierno-local/telefonos-utiles/"> Ver todos los telefonos utiles </a>
                        </li>

                    </ul>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.github}>
                    <a href="https://github.com/ZulaicaE/proyectoFullStack.git"><img src='/img/footer/githublogo-1.png' alt="github Logo" /></a>
                    </div> 
                </div>
            
        </div>
        </footer>
    )
}

export default Footer;