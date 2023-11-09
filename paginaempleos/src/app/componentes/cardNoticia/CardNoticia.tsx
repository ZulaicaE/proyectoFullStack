import styles from './CardNoticia.module.css';

const news = [{
    noticia: 'Policiales',
    info: 'Increible accidente por parte de uno de los tripulantes de Planet Express, al parecer el condutor de la nave estaria alcoholizado.',
    image: './img/news/crashShip.jpg'
}, {
    noticia: 'Cosmos',
    info: 'Enterate quienes son los astronautas que entraran por primera vez al gigante agujero negro Sagitario A.',
    image: './img/news/astronauts.jpg'
}, {
    noticia: 'Comunidad',
    info: 'No solo los humanos sienten el llamado de heroe, los robots no dudan a enfrentar las llamas.',
    image: './img/news/robotSavesRobot.jpg'
}]


export const CardNoticia = () => {
    return (
        <div className={styles.cardNoticia}>
            <div className='row'>
                {news.map(({ noticia, info, image }) => (
                    <div className='col' key={noticia}>
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