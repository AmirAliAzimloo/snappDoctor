/**
 * @jest-environment jsdom
 */

// Import necessary testing utilities
import React from "react";
import { render, screen , waitFor} from "@testing-library/react";
import { ProductType } from '@/types';
import ProductList from '@/app/(main)/components/Products/ProductList';


// Mock the useSWR hook
jest.mock('swr');

// Mock the Image component to avoid errors during testing
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
));

// Mock the swr module behavior
import * as swrModule from 'swr';


const mockProduct: ProductType = {
  id:1,
  title: 'Test Product',
  category: 'Test Category',
  description: 'Test Description',
  price: 20, 
  discount: 5,
  image: 'test-image.jpg',
};

const mockData = {
  products: [mockProduct],
  total: 1,
};

describe('ProductList',  () => {
  it('renders loading state',() => {
    // Mock loading state
    (swrModule as any).default.mockReturnValue({
      data: undefined,
      error: undefined,
      isValidating: true,
    });

    render(<ProductList />);
    waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
  });

  it('renders error state', () => {
    // Mock error state
    (swrModule as any).default.mockReturnValue({
      data: undefined,
      error: new Error('Mocked error'),
      isValidating: false,
    });

    render(<ProductList />);
    waitFor(() => expect(screen.getByTestId('error')).toBeInTheDocument());
  });

  it('renders product list', () => {
    // Mock successful data fetching
    (swrModule as any).default.mockReturnValue({
      data: mockData,
      error: undefined,
      isValidating: false,
    });

    render(<ProductList />);
    
    waitFor(() => expect(screen.getByTestId('product-card')).toBeInTheDocument());
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

});

