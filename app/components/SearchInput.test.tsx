import { render, screen, act, waitFor } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";


const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  useSearchParams: () => ({
    get: (key: string) => (key === "q" ? "" : null),
    toString: () => "",
  }),
}));

describe("SearchInput", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    pushMock.mockClear();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("renders the input", () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
  it("updates query in URL after debounce", async () => {
    render(<SearchInput />);
  
    const input = screen.getByPlaceholderText("Search...");
  
    await act(async () => {
      input.focus();
      input.setAttribute("value", "phone");
      input.dispatchEvent(new Event("input", { bubbles: true }));
      vi.advanceTimersByTime(1000);
    });
  
    expect(pushMock).toHaveBeenCalled();
  });
});