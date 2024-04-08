import { Box, Typography } from "@mui/material";
import { Password } from "../models/password";
import { getHashAlgorithm } from "../utils/get-hash-algorithm";

interface Props {
  value: string;
  password: Password | undefined;
}

const notCoincidencesBox = (
  <Box
    maxWidth="sm"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 3,
      width: "100%",
    }}
  >
    <Typography
      component="p"
      variant="h4"
      sx={{
        my: 1,
      }}
    >
      Not Coincidences Found
    </Typography>
  </Box>
);

const CoincidenceFound = ({ value, password }: Props) => {
  if (!password) {
    return notCoincidencesBox;
  }

  const hashType = getHashAlgorithm(value, password);
  if (!hashType) {
    return notCoincidencesBox;
  }

  return (
    <>
      <Box
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 3,
          width: "100%",
        }}
      >
        <Typography
          component="p"
          variant="h4"
          sx={{
            my: 1,
          }}
        >
          Success!
        </Typography>
      </Box>
      <Box
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: 1,
        }}
      >
        <Typography component="p" variant="h6">
          Original Value: {password.original}
        </Typography>
        <Typography component="p" variant="h6">
          Hash Algorithm: {hashType}
        </Typography>
      </Box>
    </>
  );
};

export default CoincidenceFound;
