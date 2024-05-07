import App from "../src/App"
import { render, screen } from "@testing-library/react"

it("Renders the react app", async () => {
    render(<App></App>)
    const countBtn = screen.getByRole("button")
})