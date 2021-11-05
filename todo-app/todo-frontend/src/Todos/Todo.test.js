import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders text', () => {
  const todo = {
    _id: 'first-todo',
    text: 'Test 1',
    done: false,
  };

  const component = render(
    <Todo todo={todo} onClickDelete={() => {}} onClickComplete={() => {}} />
  );

  expect(component.container).toHaveTextContent('Test 1');
});
