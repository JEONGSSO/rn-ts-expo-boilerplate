import React, { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import "react-native";
import "@testing-library/jest-dom";

type AllTheProvidersProps = {
  children: ReactNode;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <div>{children}</div>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
