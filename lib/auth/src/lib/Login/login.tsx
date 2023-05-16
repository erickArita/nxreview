import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibAuthProps {
  onLogin: (user: string, password: string) => Promise<void>;
}

const StyledLibAuth = styled.div`
  color: pink;
`;

export function Login({ onLogin }: LibAuthProps) {
  return (
    <StyledLibAuth>
      <h1>Welcome to LibAuth!</h1>
      <button onClick={() => onLogin('Hola', 'Mundo')}>Login</button>
    </StyledLibAuth>
  );
}

export default Login;
