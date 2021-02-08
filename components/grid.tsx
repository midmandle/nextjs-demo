import React, {useEffect, useState} from "react";
import GridLocation from "./grid-location";

type GridProps = {
    roverLocation: {x: number; y: number; }
};

const Grid = ({roverLocation}: GridProps) => {
    const marsRoverNorth: JSX.Element = <div data-testid={'mars-rover-north'}></div>;
    const emptyGridLocations: any[][] = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ];
    const initialGridLocations = emptyGridLocations;
    initialGridLocations[0][0] = marsRoverNorth;
    const [gridLocations, setGridLocations] = useState<any[][]>(initialGridLocations);

    useEffect(() => {
        const {x, y} = roverLocation;
        emptyGridLocations[x][y] = marsRoverNorth;
        setGridLocations(emptyGridLocations);
    }, [roverLocation]);

    return <div>
        <GridLocation x={0} y={0} content={gridLocations[0][0]} />
        <GridLocation x={0} y={1} content={gridLocations[0][1]} />
        <GridLocation x={0} y={2} content={gridLocations[0][2]} />
        <GridLocation x={0} y={3} content={gridLocations[0][3]} />
    </div>
}

export default Grid;
