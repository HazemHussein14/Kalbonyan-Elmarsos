import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listitemElements = await screen.findAllByRole("listitem");

    expect(listitemElements).not.toHaveLength(0);
  });
});
