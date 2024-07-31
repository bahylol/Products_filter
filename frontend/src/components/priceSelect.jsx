import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `$${value}`;
}

const PriceSelect = ({ minPrice, maxPrice, onChange }) => {
  const [value, setValue] = React.useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
      />
    </Box>
  );
};

export default PriceSelect;
