import { render } from '@testing-library/react';

import LibSharedUi from './lib-shared-ui';

describe('LibSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
