import styles from './cardNoticia.module.css';

const news = [{
    noticia: 'Accidente',
    info: 'Increible accidente por parte de uno de los tripulantes de Planet Express, al parecer el condutor de la nave estaria alcoholizado.',
    image: './img/news/crashShip.jpg'
}, {
    noticia: 'Exploracion',
    info: 'Enterate quienes son los astronautas que entraran por primera vez al agujero negro Sagitario A.',
    image: './img/news/astronauts.jpg'
}, {
    noticia: 'Incendio',
    info: 'No solo los humanos sientes el llamado de heroe, los robots no dudan a enfrentar las llamas.',
    image: './img/news/robotSavesRobot.jpg'
}]


export const CardNoticia = () => {
    return (
        <div className={styles.noticia}>
            <div className='row'>
                {news.map(({ noticia, info, image }) => (
                    <div className='col'>
                        <div className="card" style={{ width: '18rem' }} key={noticia}>
                            <img src={image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{info}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}