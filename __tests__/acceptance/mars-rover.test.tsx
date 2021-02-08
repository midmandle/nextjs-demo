import {render, screen, within} from "@testing-library/react";
import React from "react";
import MarsRoverPage from "../../pages/mars-rover";
import userEvent from "@testing-library/user-event";

describe("Given I am on the mars-rover page", () => {
   describe("When I enter the commands 'MMRM'", () => {
       it("Then I should see the rover at location 1,2:E", () => {
           render(<MarsRoverPage/>);

           const commandsInput = screen.getByTestId('commands-input');
           userEvent.type(commandsInput, 'MMRM');
           const executeButton = screen.getByTestId('execute-button');
           userEvent.click(executeButton);

           const location = screen.getByTestId('grid-location-1-2');
           const roverImage = within(location).getByTestId('mars-rover-image-east');
           expect(roverImage).toBeDefined();
       });
    });
});
