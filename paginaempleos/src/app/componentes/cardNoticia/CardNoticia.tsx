import styles from './CardNoticia.module.css';

const news = [{
    noticia: 'Policiales',
    info: 'Increible accidente por parte de uno de los tripulantes de Planet Express, al parecer el conductor de la nave estaria alcoholizado.',
    image: './img/news/shipCrash.jpg'
}, {
    noticia: 'Cosmos',
    info: 'Enterate quienes son los astronautas que entraran por primera vez al gigante agujero negro ubicado en el centro de nuestra galaxia.',
    image: './img/news/astronauts.jpg'
}, {
    noticia: 'Local',
    info: 'No solo los humanos sienten el llamado de heroe, los robots no dudan a enfrentar llamas que podrian derretir sus circuitos.',
    image: './img/news/robotSavesRobot.jpg'
},
{
    noticia: 'Cultura',
    info: 'Conoce a Symour Diera, el perro que espera todos los días a su dueño frente a la estacion de trenes.',
    image: './img/news/simurdiera.jpg'
}, {
    noticia: 'Interestelar',
    info: '¿Deberiamos preocuparnos por una nueva invasión Omicron?, Sintoniza y sumate al debate con el especialista Zoidberg.',
    image: './img/news/alienShips.jpg'
}, {
    noticia: 'Economia',
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