import React from 'react';
import ChatInterface from './components/ChatInterface';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  height: 100vh;
  background-color: #343541;
  overflow: hidden;
`;

function App() {
  return (
    <AppContainer>
      <ChatInterface />
    </AppContainer>
  );
}

export default App;