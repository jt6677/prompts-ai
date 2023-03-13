import {
  Box,
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch } from "react-redux";
import ApiKeyDialog from "./components/dialogs/ApiKeyDialog";
import TemplateDialog from "./components/dialogs/TemplateDialog";
import Header from "./components/Header";
import { PromptEditor } from "./components/PromptEditor";
import {
  fetchForCurrentTab,
  normalizeConversations,
  updateTabIndex,
} from "./slices/editorSlice";

function App() {
  const dispatch = useDispatch();
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  useEffect(() => {
    dispatch(normalizeConversations());
  });

  useHotkeys(
    "ctrl+enter,cmd+enter",
    () => {
      dispatch(fetchForCurrentTab());
    },
    { filter: () => true }
  );
  useHotkeys("ctrl+1", () => {
    dispatch(updateTabIndex(0));
  });
  useHotkeys("ctrl+2", () => {
    dispatch(updateTabIndex(1));
  });
  useHotkeys("ctrl+3", () => {
    dispatch(updateTabIndex(2));
  });
  useHotkeys("ctrl+4", () => {
    dispatch(updateTabIndex(3));
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ApiKeyDialog />
      <TemplateDialog />

      <Header />

      <Container maxWidth={"lg"}>
        <Box mt={2}>
          <PromptEditor />
        </Box>
        {/*<Box mt={2}>
                    <ModeTabs/>
                </Box>*/}
        <Box mt={2}>
          <Typography></Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
