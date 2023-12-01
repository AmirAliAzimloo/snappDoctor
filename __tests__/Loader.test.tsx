// loader.test.tsx

import { render } from '@testing-library/react';
import Loader from '@/app/components/Loader/Loader';

describe('Loader', () => {
    it('renders with default color and size when loading', () => {
        const { container } = render(<Loader isLoading={true} />);
    
        const loader = container.querySelector('.PulseLoader');
        expect(loader).toBeInTheDocument();
      });

  it('does not render when not loading', () => {
    const { container } = render(<Loader isLoading={false} />);

    const loader = container.querySelector('.PulseLoader');
    expect(loader).toBeNull();
  });
});
