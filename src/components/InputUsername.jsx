import {
    Grid,
    TextField,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import axios from "axios";
  
  const InputUsername = () => {
    const [data, setData] = useState({});
    const [repos, setRepos] = useState([]);
    const [url, setUrl] = useState("");
  
    const api = `https://api.github.com/users/${url}`;
  
    useEffect(() => {
      if (url) {
        axios.get(api).then((response) => {
          setData(response.data);
          if (response.data.repos_url) {
            axios.get(response.data.repos_url).then((reposResponse) => {
              setRepos(reposResponse.data);
            });
          }
        });
      }
    }, [url, api]);
  
    const searchUsername = (event) => {
      if (event.key === "Enter") {
        setUrl("");
      }
    };
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <TextField
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            onKeyPress={searchUsername}
            label="Search Username"
            fullWidth
            sx={{ marginLeft: "100px", marginRight: "20px" }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <TableContainer component={Paper} sx={{ marginLeft: "100px", marginTop: "20px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Photo</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Repos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">{data.login}</TableCell>
                  <TableCell>
                    {data.avatar_url && (
                      <img
                        src={data.avatar_url}
                        alt="Avatar"
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    {repos.length > 0 ? (
                      <ul>
                        {repos.map((repo, index) => (
                          <li key={index}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                              {repo.html_url}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Typography variant="body2" color="textSecondary">
                        No repositories found
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  };
  
  export default InputUsername;
  