import styles from './CardNoticia.module.css';

const news = [{
    noticia: 'POLICIALES',
    info: 'Increíble accidente por parte de uno de los tripulantes de Planet Express, al parecer el conductor de la nave se encontraba alcoholizado.',
    image: './img/news/shipCrash.jpg'
}, {
    noticia: 'COSMOS',
    info: 'Entérate quiénes son los astronautas que entrarán por primera vez al gigante agujero negro ubicado en el centro de nuestra galaxia.',
    image: './img/news/astronauts.jpg'
}, {
    noticia: 'LOCAL',
    info: 'No solo los humanos sienten el llamado del héroe, los robots no dudan a enfrentar llamas que podrían derretir sus circuitos.',
    image: './img/news/robotSavesRobot.jpg'
},
{
    noticia: 'CULTURA',
    info: 'Conoce a Seymour Diera, el perro que espera todos los días a su dueño frente a la estación de trenes.',
    image: './img/news/simurdiera.jpg'
}, {
    noticia: 'INTERESTELAR',
    info: '¿Deberíamos preocuparnos por una nueva invasión Ómicron?, Sintoniza y súmate al debate con el especialista Zoidberg.',
    image: './img/news/alienShips.jpg'
}, {
    noticia: 'ECONOMÍA',
    info: 'Nueva protesta frente al parque industrial, los robots piden un aumento y una rebaja en el precio para aceite intravenoso.',
    image: './img/news/protesta.jpg'
}]


export const CardNoticia = () => {
    return (
        <div className={styles.cardNoticia}>
            <div className='row'>
                {news.map(({ noticia, info, image }) => (
                    <div className='col d-flex justify-content-center cardNot' key={noticia}>
                        <div className={styles.card}>
                            <img src={image} className={styles.cardImg} alt="..." />
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>{noticia}</h5>
                                <p className={styles.cardText}>{info}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}