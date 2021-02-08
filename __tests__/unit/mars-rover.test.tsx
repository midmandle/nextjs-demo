import {render, screen, within} from "@testing-library/react";
import React from "react";
import MarsRoverPage from "../../pages/mars-rover";
import userEvent from "@testing-library/user-event";

describe('MarsRoverPage', () => {
    it('should initialize the rover facing north and location 0,0', () => {
        render(<MarsRoverPage/>);
        const location = screen.getByTestId('grid-location-0-0');
        const marsRoverNorth = within(location).getByTestId('mars-rover-north');
        expect(marsRoverNorth).toBeDefined();
    });

    it('should move the rover forward one space if the command is: M', () => {
        render(<MarsRoverPage/>);

        const commandsInput = screen.getByTestId('commands-input');
        userEvent.type(commandsInput, 'M');
        const executeButton = screen.getByTestId('execute-button');
        userEvent.click(executeButton);

        const location = screen.getByTestId('grid-location-0-1');
        const marsRoverNorth = within(location).getByTestId('mars-rover-north');
        expect(marsRoverNorth).toBeDefined();
    });

    it('should move the rover forward two spaces if the command is: MM', () => {
        render(<MarsRoverPage/>);

        const commandsInput = screen.getByTestId('commands-input');
        userEvent.type(commandsInput, 'MM');
        const executeButton = screen.getByTestId('execute-button');
        userEvent.click(executeButton);

        const location = screen.getByTestId('grid-location-0-2');
        const marsRoverNorth = within(location).getByTestId('mars-rover-north');
        expect(marsRoverNorth).toBeDefined();
    });

    it('should move the rover forward three spaces if the command is: MMM', () => {
        render(<MarsRoverPage/>);

        const commandsInput = screen.getByTestId('commands-input');
        userEvent.type(commandsInput, 'MMM');
        const executeButton = screen.getByTestId('execute-button');
        userEvent.click(executeButton);

        const location = screen.getByTestId('grid-location-0-3');
        const marsRoverNorth = within(location).getByTestId('mars-rover-north');
        expect(marsRoverNorth).toBeDefined();
    });
});
