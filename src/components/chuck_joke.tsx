type joke = {
	id: number;
	jokeDetail: string;
};

interface ChuckJokeProps {
    array: Array<joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = (props) => {
    return (
        <>
                    <p>props.joke</p>
                
        </>
    )
}



export default ChuckJoke;
