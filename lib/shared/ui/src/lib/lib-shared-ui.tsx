import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibSharedUiProps {}

const StyledLibSharedUi = styled.div`
  color: pink;
`;

export function LibSharedUi(props: LibSharedUiProps) {
  return (
    <StyledLibSharedUi>
      <h1>Welcome to LibSharedUi!</h1>
    </StyledLibSharedUi>
  );
}

export default LibSharedUi;
