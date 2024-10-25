import './component.css';

function Comp(props){
    return(
        <div class="nazwa">
            <img src={props.max.img}/>
            <h2 class="tytul">{props.max.name}</h2>
            <p>{props.max.desc}</p>
            <p>{props.max.instock}</p>
            <h2 class="cena">{props.max.price}</h2>
        </div>

    )
}
export default Comp;