import Joke from "../joke";

interface ChuckJokeProps {
    joke: Joke[];
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({joke}) => {
    const listItems = joke.map((d) => <li key={d.id}>{d.joke}</li>);
    return (
        <>
            <p>{listItems}</p>        
        </>
    )
}



export default ChuckJoke;
