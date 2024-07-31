import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CategorySelect = ({ value, onChange }) => {
    const categories = [
        "Electronics",
        "Personal Care",
        "Footwear",
        "Home Appliances",
        "Accessories",
        "Sports",
        "Home Decor",
        "Musical Instruments",
        "Transportation",
        "Home Automation",
        "Outdoors",
        "Tools",
        "Travel",
        "Health"
    ];

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={value}
                    label="Category"
                    onChange={onChange}
                >
                    <MenuItem value="">All</MenuItem>
                    {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CategorySelect;
