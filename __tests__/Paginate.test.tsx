/**
 * @jest-environment jsdom
 */

// Import necessary testing utilities
import React from "react";
import { render, screen, fireEvent , waitFor} from "@testing-library/react";
import Paginate from "@/app/(main)/components/Paginate/Paginate";


describe("Paginate", () => {
    const mockSetPageIndex = jest.fn();
  
    const renderComponent = (props = {}) => {
      return render(
        <Paginate
          total={20}
          pageIndex={1}
          setPageIndex={mockSetPageIndex}
          {...props}
        />
      );
    };
  
    it("renders page numbers correctly", () => {
      renderComponent();
  
      // Assuming each page shows 10 items
      const pageNumbers = screen.getAllByRole("listitem");
      expect(pageNumbers).toHaveLength(2);
  
      expect(pageNumbers[0]).toHaveTextContent("1");
      expect(pageNumbers[1]).toHaveTextContent("2");
  
      expect(pageNumbers[0]).toHaveClass("text-gray-200 bg-gray-600");
      expect(pageNumbers[1]).not.toHaveClass("text-gray-200 bg-gray-600");
    });
  
    it("calls setPageIndex correctly on click", () => {
      renderComponent();
  
      const pageTwo = screen.getByText("2");
      fireEvent.click(pageTwo);
  
      expect(mockSetPageIndex).toHaveBeenCalledWith(2);
    });
  });