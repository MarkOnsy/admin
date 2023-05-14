import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarcChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
      <Header subtitle="Hot Dog Chart" />
        <BarChart />

        <Header title="Burger Chart" />
        <BarChart />

        <Header title="kebab Chart" />
        <BarChart />
      </Box>

      
    </Box>
  );
};

export default Bar;
