import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BrandSelect = ({ value, onChange }) => {
  const brands = ["Brand A", "Brand B", "Brand C"];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="brand-select-label">Brand</InputLabel>
        <Select
          labelId="brand-select-label"
          id="brand-select"
          value={value}
          label="Brand"
          onChange={onChange}
        >
          <MenuItem value="">All</MenuItem>
          {brands.map((brand, index) => (
            <MenuItem key={index} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BrandSelect;
