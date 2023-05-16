import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('button renders', () => { 
    const { getByTestId } = render(<Button />)
    const button = getByTestId("button")

    expect(button).toBeInTheDocument()
})

test('1 button initially', () => { 
    const { getAllByTestId } = render(<Button />)
    const buttons = getAllByTestId("button")

    expect(buttons).toHaveLength(1)
})

test('2 button once clicked', async () => { 
    const { getAllByTestId } = render(<Button />)
    const buttons = getAllByTestId("button")

    await fireEvent.click(buttons[0])

    expect(getAllByTestId("button")).toHaveLength(2)
})
