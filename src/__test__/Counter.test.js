
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../counter";

describe(Counter, () => {

it("counter displays correct initial count", () => {
const { getByTestId } = render(<Counter initialCount={0}/>);
const countValue = Number(getByTestId("count").textContent);
expect(countValue).toEqual(0);
});
it("count should increment by 1 when clicked", () => {
const { getByTestId, getByRole } = render(<Counter initialCount={0}/>);
const incrementBtn = getByRole("button", {name : "increment"});
fireEvent.click(incrementBtn);
const countValue = Number(getByTestId("count").textContent);
expect(countValue).toEqual(1);
});
});