import React from "react";
import { MemoizedUserGistView } from "../src/components/UserGistView";
import { render, fireEvent } from '@testing-library/react-native';
jest.mock('react-native-size-matters');

test('Gist component snapshot', () => { 
    const { toJSON } = render(<MemoizedUserGistView />);
    expect(toJSON()).toMatchSnapshot();
})


