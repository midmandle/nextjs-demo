import {render, screen} from "@testing-library/react";
import React from "react";
import TodoListPage from "../../pages/todo-list";
import userEvent from "@testing-library/user-event";

describe('Given I am on the todo-list', () => {
  describe('When I add an item called \'item 1\' to the list', () => {
    it('Then it should display the item in the list', () => {
      render(<TodoListPage />);

      const itemNameInput = screen.getByTestId('item-name-input');
      const addItemButton = screen.getByTestId('add-item-button');

      userEvent.type(itemNameInput, 'item1');
      userEvent.click(addItemButton);

      let firstItem = screen.getByTestId('list-item-1');
      expect(firstItem).toHaveTextContent('item 1');
    });
  });
});
