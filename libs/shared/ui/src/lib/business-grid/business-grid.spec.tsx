import { render } from '@testing-library/react';

import BusinessGrid from './business-grid';

describe('BusinessGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessGrid />);
    expect(baseElement).toBeTruthy();
  });
});
