import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext'; 

interface RenderWithProvidersOptions {
  route?: string;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    route = '/',
    ...renderOptions
  }: RenderWithProvidersOptions = {}
) {
  function Wrapper({ children }: { children?: ReactNode }) {
    return (
      <BrowserRouter>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </BrowserRouter>
    );
  }

  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
