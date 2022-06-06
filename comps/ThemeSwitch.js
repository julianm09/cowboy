import styled from "styled-components";
import { useTheme } from "../utils/provider";
import { handleTheme } from "../utils/functions/handleTheme";
import { themes } from "../utils/variables";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      theme={theme}
      themes={themes}
      onClick={() => handleTheme(theme, setTheme)}
    >
      <Toggle theme={theme} themes={themes} />
    </Switch>
  );
}

const Switch = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.themes[props.theme].secondary};
`;

const Toggle = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.themes[props.theme].secondary};
`;
