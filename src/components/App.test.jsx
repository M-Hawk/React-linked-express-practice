import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import App from "./App"

// Essentially a testing function 
describe('App Component', () => {
  let container

  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ).container
  })

  it('Shows the Journal Entries heading', () => {
    // render the App component at the top level for testing in a virtual environment

    // looks for a H2 Header
    expect(container.querySelector('h2')).toBeDefined()
    expect(container.querySelector('h2')).toHaveTextContent('Journal Entries')
    // expect(screen.getByRole('heading', { level: 2 })).HaveTextContent('Journal Entries')
  })

  it("Shows category selection page when Select Category is clicked", async () => {
    await userEvent.click(screen.getByText("Select Category"))
    expect(container.querySelector('h2')).toBeDefined()
    expect(container.querySelector('h2')).toHaveTextContent('Please select a category:')
  })
})