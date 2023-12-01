/**
 * @jest-environment jsdom
 */

// Import necessary testing utilities
import React from "react";
import { render} from "@testing-library/react";
import ProductCard from '@/app/(main)/components/Products/ProductCard'; // Update the path accordingly
import { ProductType } from '@/types';


// Mock the next/image component to avoid errors during testing
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ));
  const mockProductData: ProductType = {
    id:1,
    title: 'Test Product',
    category: 'Test Category',
    price: 20,
    description:"Test Description",
    discount: 5,
    image: 'test-image.jpg',
  };
  describe('ProductCard', () => {
    it('renders without crashing', () => {
      render(<ProductCard data={mockProductData} />);
    });
  
    it('displays product details correctly', () => {
      const { getByText } = render(<ProductCard data={mockProductData} />);
  
      expect(getByText('Test Product')).toBeInTheDocument();
      expect(getByText('Test Category')).toBeInTheDocument();
      expect(getByText('$20')).toBeInTheDocument();
      expect(getByText('$5')).toBeInTheDocument();
    });
  
  });