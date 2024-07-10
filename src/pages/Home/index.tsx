import { Container, Typography } from "@mui/material";
import DropDownList from "../../components/dropDownMenu";
import ApiList from "../../components/apiList";
import AuthCheck from "../../hooks/AuthCheck";

const Home = () => {
  return (
    <AuthCheck>
      <Container style={{ height: 600, width: "100%" }}>
        <Typography variant="h6" gutterBottom>
          Component 1
        </Typography>
        <ApiList />
        <Typography variant="h6" marginTop={5}>
          Component 2
        </Typography>
        <DropDownList />
      </Container>
    </AuthCheck>
  );
};

export default Home;
