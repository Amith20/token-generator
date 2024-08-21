import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";

const TokenGenerator = () => {
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [blueTokenInput, setBlueTokenInput] = useState({
    count: 0,
    prefix: "",
    perRow: 1,
  });
  const [redTokenInput, setRedTokenInput] = useState({
    count: 0,
    prefix: "",
    perRow: 1,
  });

  const generateTokens = () => {
    const generateTokenList = (count, prefix) => {
      return Array.from({ length: count }, (_, i) => `${prefix}${i + 1}`);
    };

    setBlueTokens(
      generateTokenList(blueTokenInput.count, blueTokenInput.prefix)
    );
    setRedTokens(generateTokenList(redTokenInput.count, redTokenInput.prefix));

  };

  const clearTokens = () => {
    setBlueTokens([]);
    setRedTokens([]);
    setBlueTokenInput({ count: 0, prefix: "", perRow: 1 });
    setRedTokenInput({ count: 0, prefix: "", perRow: 1 });
  };

  const handleInputChange = (e, setInput) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Token Generator
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Number of blue tokens"
              name="count"
              type="number"
              value={blueTokenInput.count}
              onChange={(e) => handleInputChange(e, setBlueTokenInput)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Number of red tokens"
              name="count"
              type="number"
              value={redTokenInput.count}
              onChange={(e) => handleInputChange(e, setRedTokenInput)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Prefix for blue tokens"
              name="prefix"
              value={blueTokenInput.prefix}
              onChange={(e) => handleInputChange(e, setBlueTokenInput)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Prefix for red tokens"
              name="prefix"
              value={redTokenInput.prefix}
              onChange={(e) => handleInputChange(e, setRedTokenInput)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Blue tokens per row"
              name="perRow"
              type="number"
              value={blueTokenInput.perRow}
              onChange={(e) => handleInputChange(e, setBlueTokenInput)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Red tokens per row"
              name="perRow"
              type="number"
              value={redTokenInput.perRow}
              onChange={(e) => handleInputChange(e, setRedTokenInput)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={generateTokens}
              sx={{ mr: 2 }}
            >
              Generate
            </Button>
            <Button variant="outlined" color="secondary" onClick={clearTokens}>
              Clear
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Blue Tokens
          </Typography>
          <Grid container spacing={1}>
            {blueTokens.map((token, index) => (
              <Grid item xs={12 / blueTokenInput.perRow} key={index}>
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: "#6633FF",
                    color: "white",
                    textAlign: "center",
                    borderRadius: 1,
                  }}
                >
                  {token}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Red Tokens
          </Typography>
          <Grid container spacing={1}>
            {redTokens.map((token, index) => (
              <Grid item xs={12 / redTokenInput.perRow} key={index}>
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: "#FF0000",
                    color: "white",
                    textAlign: "center",
                    borderRadius: 1,
                  }}
                >
                  {token}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default TokenGenerator;
