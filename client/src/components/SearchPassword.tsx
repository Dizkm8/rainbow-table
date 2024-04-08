import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import agent from "../api/agent";
import { useRef, useState } from "react";
import Coincidence from "./CoincidenceFound";
import { LoadingButton } from "@mui/lab";
import { Password } from "../models/password";

const SearchPassword = () => {
  const [inputError, setInputError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coincidence, setCoincidence] = useState<Password | undefined>();
  const valueRef = useRef("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    valueRef.current = new FormData(event.currentTarget).get(
      "hashPass"
    ) as string;
    if (!valueRef.current) {
      setInputError(true);
      return;
    }

    setLoading(true);
    agent.PasswordsFinder.find(valueRef.current)
      .then((response) => {
        setCoincidence(response);
      })
      .catch(() => {
        setCoincidence(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <Typography component="h1" variant="h3">
        DISC Rainbow Table
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        maxWidth="sm"
        sx={{
          mt: 3,
          width: "100%",
          marginTop: 1,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          name="hashPass"
          autoFocus
          label="Hash"
          multiline
          rows={4}
          error={inputError}
          helperText={inputError && "Please enter a valid hash"}
          onChange={() => setInputError(false)}
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          loading={loading}
        >
          Find Coincidence
        </LoadingButton>
      </Box>
      <Coincidence password={coincidence} value={valueRef.current} />
    </Container>
  );
};

export default SearchPassword;
