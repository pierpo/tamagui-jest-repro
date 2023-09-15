import { render } from "@testing-library/react-native";

import Home from "../app/index";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

const Provider = ({children}) => <TamaguiProvider config={config}>{children}</TamaguiProvider>

describe("Home.screen.tsx", () => {
  it("renders correctly", () => {
    const component = render(<Provider><Home /></Provider>);
    expect(component).toMatchSnapshot();
  });
});
