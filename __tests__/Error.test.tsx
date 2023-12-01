// Error.test.tsx

import { render, screen } from '@testing-library/react';
import Error from '@/app/components/Error/Error';

describe('Error', () => {
  it('renders error message', () => {
    render(<Error />);

    expect(screen.getByText('Error')).toBeInTheDocument();
  });

});
