import { fireEvent, render, act } from '@testing-library/react'
import Input from './Input'

test('input field renders', () => { 
    const { getByTestId } = render(<Input />)
    const input = getByTestId("searchBar")

    expect(input).toBeInTheDocument()
})

test('render div', () => { 
    const { getByTestId } = render(<Input showDiv={true}/>)
    const div = getByTestId("randomText")

    expect(div).toBeInTheDocument()
})

test("don't render div", () => { 
    const { queryByTestId } = render(<Input showDiv={false}/>)
    const div = queryByTestId("randomText")

    expect(div).toBeFalsy()
})

test("change on input causes change in h1", () => { 
        const { getByTestId } = render(<Input showDiv={true}/>)
        const input = getByTestId("searchBar")
        const h1 = getByTestId("displaySearch")
        const inputWord = "something"

        // simulate user writing on input
        fireEvent.change(input, {target: {value: inputWord}})
    
        expect(h1.innerHTML).toBe(inputWord)
})
