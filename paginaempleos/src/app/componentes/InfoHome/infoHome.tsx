import styles from './infoHome.module.css';
import { CardNoticia } from '../cardNoticia/CardNoticia';

export const InfoHome = () => {
    return (
        <div className={styles.info}>
            <article>
                <p>¡Bienvenidos a Futurama, la asombrosa metrópolis del año 3000!</p>

                Imaginen un mundo donde la tecnología ha alcanzado niveles insospechados, donde los rascacielos se elevan hasta tocar el cielo, y donde los coches vuelan entre tubos de transporte. En esta ciudad futurista, la diversidad cultural es asombrosa, seres humanos conviven con una amplia gama de especies alienígenas, cada una aportando singularidad a su vibrante atmósfera.
                Aquí, te encontrarás con robots con personalidades encantadoras, seres de todas las galaxias y humanos intrépidos. Futurama es un crisol de posibilidades creativas, donde la extravagancia se combina con una tecnología avanzada y habitantes únicos que hacen de ella un lugar emocionante y lleno de sorpresas.
                <br></br>
                <br></br>
                Si desea una estadía indefinida, podría estar interesado en alguno de los trabajos extravagantes que se realizan por aquí, o si busca emprender el inicio de su grandiosa empresa, es más que bienvenido a pasar por nuestra sección de candidatos para encontrar a esa persona... ese robot... ó extraterrestre que satisfaga lo que usted necesite.
                <br></br>
                <br></br>
                ¡Prepárense para descubrir un universo de imaginación y diversión en cada esquina de nuestra ciudad!.
            </article>
            <article>
                <CardNoticia />
            </article>
        </div>
    )
}