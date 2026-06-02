import s from './card.module.css'

export const Card = (props) => {
    return(
        <div className={s.character} key={index}>
            <div className={s.imagem}>
                <img src={props.image} alt={props.name} />
                </div>
                <div className={s.infos}>  
                <h2>Name: {props.name}</h2>
                <p>Species: {props.species}</p>
                {props.status === 'Dead' ? " Status: Dead 💀" : props.status === 'Alive' ? " Status: Alive 😊" : <p>Status: {props.status}</p>}
                <p>Origin: {props.origin.name}</p>
            </div>
        </div>
    )
}