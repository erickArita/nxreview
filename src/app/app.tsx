import { Login } from 'lib/auth/src';
import styled from 'styled-components';


const StyledApp = styled.div``;

export function App() {

   const login = async (user: string, password: string) => {
    acreedoresApi
  };

  return (
    <StyledApp>
      <Login onLogin={login} />
    </StyledApp>
  );
}

export default App;
