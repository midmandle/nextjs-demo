import React, {useState} from 'react';
import Grid from "../components/grid";

const MarsRoverPage = () => {
    const [commands, setCommands] = useState<string|null>(null);
    const [roverLocation, setRoverLocation] = useState<{x: number; y: number;}>({x:0, y:0});

    const runCommands = () => {

        if(commands === 'M') {
            setRoverLocation({x:0, y:1})
        }

        if(commands === 'MM') {
            setRoverLocation({x:0, y:2})
        }

        if(commands === 'MMM') {
            setRoverLocation({x:0, y:3})
        }
    }

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCommands(e.currentTarget.value);
    }

    return <div>
        <input data-testid={'commands-input'} type={'text'} onChange={handleOnChange}/>
        <input data-testid={'execute-button'} type={'button'} onClick={runCommands} />
        <Grid roverLocation={roverLocation} />
    </div>
};
export default MarsRoverPage;
