import React from "react";

type GridLocationProps = {
    x: number;
    y: number;
    content: JSX.Element | null;
}

const GridLocation = ({x, y, content}: GridLocationProps) => {
    const testId = `grid-location-${x}-${y}`;
    return <div data-testid={testId}>{content}</div>
}

export default GridLocation;
