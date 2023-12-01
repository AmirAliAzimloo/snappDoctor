/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen , waitFor} from "@testing-library/react";
import { ProductType } from '@/types';
import ProductList from '@/app/(main)/components/Products/ProductList';
import * as swr from 'swr';


jest.mock('swr');

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
));

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
    (swrModule as any).default.mockReturnValue({
      data: undefined,
      error: undefined,
      isValidating: true,
    });

    render(<ProductList />);
    waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
  });

  it('renders error state', () => {
    (swrModule as any).default.mockReturnValue({
      data: undefined,
      error: new Error('Mocked error'),
      isValidating: false,
    });

    render(<ProductList />);
    waitFor(() => expect(screen.getByTestId('error')).toBeInTheDocument());
  });

  it('renders success state', async () => {
    const mockData = {
      products: [{ /* mock product data */ }],
      total: 1,
    };

    (swr as any).default.mockReturnValue({
      data: mockData,
      error: undefined,
      isValidating: false,
    });

    const { getByTestId } = render(<ProductList />);

    expect(getByTestId('product-list')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    (swr as any).default.mockReturnValue({
      data: undefined,
      error: undefined,
      isValidating: true,
    });

    render(<ProductList />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    expect(screen.queryByTestId('error')).not.toBeInTheDocument();

    expect(screen.queryByTestId('product-list')).not.toBeInTheDocument();
  });

  it('renders product list', () => {
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

