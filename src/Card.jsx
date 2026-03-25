export default function Card(props){
    const name = props.name
    const health = props.health
    return (
        <div >
           <p> {name} </p>
           <p> Health: {health}</p>
        </div>
    )
}