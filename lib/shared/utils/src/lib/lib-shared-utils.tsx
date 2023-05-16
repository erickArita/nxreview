import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibSharedUtilsProps {}

const StyledLibSharedUtils = styled.div`
  color: pink;
`;

export function LibSharedUtils(props: LibSharedUtilsProps) {
  return (
    <StyledLibSharedUtils>
      <h1>Welcome to LibSharedUtils!</h1>
    </StyledLibSharedUtils>
  );
}

export default LibSharedUtils;
