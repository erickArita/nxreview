import { render } from '@testing-library/react';

import LibSharedUtils from './lib-shared-utils';

describe('LibSharedUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibSharedUtils />);
    expect(baseElement).toBeTruthy();
  });
});
