import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

describe("the basics", () => {
  it("passes", () => {
    const { container } = render(<TestComponent />);

    expect(container.firstChild).toHaveClass("foo");
  });
});

function TestComponent() {
  return <div className="foo">Test</div>;
}
