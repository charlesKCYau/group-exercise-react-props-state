import Joke from "../joke";

interface ChuckJokeProps {
    joke: Joke[];
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({joke}) => {
    const filteredJokes = joke.filter(d => d.id === 3);
    const listItems = filteredJokes.map((d) => <li key={d.id}>{d.joke}</li>);
    return (
        <>
            <p>{listItems}</p>        
        </>
    )
}



export default ChuckJoke;
