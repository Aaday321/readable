export default function Card(props){
    const name = props.name
    const health = props.health
    return (
        <div>   
            <p>Name and Health:</p>
           <p> {name} </p>
           <p> {health}</p>
        </div>
    )
}