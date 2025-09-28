import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useLazyGetTodoQuery } from '../api/GetApi';
import useWish from '../hooks/useWish';

const OurProducts = () => {
  const { data: produkt } = useLazyGetTodoQuery();
  const [wish, setWish] = useWish();
    const baseUrl = import.meta.env.VITE_API_URL;

  const [filter, setFilter] = React.useState('');
  const handleChange = (event) => setFilter(event.target.value);

  const [priceRange, setPriceRange] = React.useState([20, 37]);
  const minDistance = 1;
  const valuetext = (value) => `$${value}`;

  const handlePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    if (activeThumb === 0) {
      setPriceRange([Math.min(newValue[0], priceRange[1] - minDistance), priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], Math.max(newValue[1], priceRange[0] + minDistance)]);
    }
  };

  const brands = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
  const features = ['Metallic', 'Plastic cover', 'Super power', 'Large Memory'];

  const handleHeartClick = (t) => {
    const isInWish = wish.find((e) => e.id === t.id);
    if (!isInWish) {
      const updatedWish = [...wish, t];
      localStorage.setItem('wish', JSON.stringify(updatedWish));
      setWish(updatedWish);
    } else {
      const updatedWish = wish.filter((v) => v.id !== t.id);
      localStorage.setItem('wish', JSON.stringify(updatedWish));
      setWish(updatedWish);
    }
  };

  return (
    <div className="mt-[130px] w-[90%] mx-auto">

      <div className="flex justify-between items-center mt-[50px]">
        <div className="text-[17px]">
          <span className="text-gray-600">Home / </span>
          <span>Explore Our Products</span>
        </div>

        <Box sx={{ width: '200px' }}>
          <FormControl fullWidth>
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select
              sx={{ height: '45px' }}
              labelId="filter-label"
              id="filter-select"
              value={filter}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="flex gap-10 mt-10">
   
        <div className="w-[300px] flex-shrink-0 space-y-4">
    
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: '18px' }}><b>Category</b></Typography>
            </AccordionSummary>
            {['All products', 'Electronics', 'Medicine', 'Sports & Outdoor'].map((cat, i) => (
              <AccordionDetails key={i} className="hover:text-red-700 text-[16px] cursor-pointer">
                {cat}
              </AccordionDetails>
            ))}
          </Accordion>

   
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: '18px' }}><b>Brands</b></Typography>
            </AccordionSummary>
            {brands.map((brand, index) => (
              <AccordionDetails key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ color: '#BDBDBD', '&.Mui-checked': { color: '#1C1C1C' } }}
                    />
                  }
                  label={brand}
                />
              </AccordionDetails>
            ))}
          </Accordion>

      
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: '18px' }}><b>Features</b></Typography>
            </AccordionSummary>
            {features.map((feat, index) => (
              <AccordionDetails key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ color: '#BDBDBD', '&.Mui-checked': { color: '#1C1C1C' } }}
                    />
                  }
                  label={feat}
                />
              </AccordionDetails>
            ))}
          </Accordion>

  
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: '18px' }}><b>Price Range</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                sx={{
                  color: '#DB4444',
                  '& .MuiSlider-thumb': { borderColor: '#DB4444' },
                  '& .MuiSlider-track': { backgroundColor: '#DB4444' },
                  '& .MuiSlider-rail': { opacity: 0.3, backgroundColor: '#DB4444' },
                }}
              />

              <div className="flex gap-4">
                <TextField label="Min" variant="outlined" fullWidth margin="normal" />
                <TextField label="Max" variant="outlined" fullWidth margin="normal" />
              </div>

              <Button
                sx={{
                  border: '1px solid #DB4444',
                  color: '#DB4444',
                  width: '100%',
                  mt: 1,
                  height: '45px',
                }}
                variant="outlined"
              >
                Apply
              </Button>
            </AccordionDetails>
          </Accordion>

  
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: '18px' }}><b>Condition</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup defaultValue="">
                  {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, i) => (
                    <FormControlLabel
                      key={i}
                      value={cond}
                      control={<Radio sx={{ color: '#DB4444', '&.Mui-checked': { color: '#DB4444' } }} />}
                      label={cond}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>

      
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {produkt?.data?.products?.slice(0, 8)?.map((t) => {
            const isInWish = wish.find((e) => e.id === t.id);

            return (
              <div
                key={t.id}
                className="relative bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-4"
              >
                <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm">
                  -40%
                </div>

                <Link to={`/ById/${t.id}`}>
                  <VisibilityIcon className="absolute top-2 right-2 text-gray-600 hover:text-black transition" />
                </Link>

                <FavoriteBorderIcon
                  onClick={() => handleHeartClick(t)}
                  className={`absolute top-12 right-2 cursor-pointer transition ${
                    isInWish ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                  }`}
                  sx={{ fontSize: 28 }}
                />

              

                         <div className="flex justify-center">
  <img
    src={`${baseUrl}images/${t.image}`}
    alt={t.productName}
    className="w-[200px] h-[180px] object-contain my-4"
    onError={(e) => {
      e.currentTarget.src = "/default-product.png";
    }}
  />
</div>

                <h2 className="text-lg font-semibold text-center mt-2">{t.productName}</h2>

                <div className="flex justify-center gap-3 mt-2">
                  <p className="text-red-500 font-bold">${t.price}</p>
                  <p className="text-gray-400 line-through">$160</p>
                </div>

                <div className="flex justify-center mt-2 text-yellow-400 text-lg">
                  ★★★★☆ <span className="text-gray-500 text-sm ml-2">(88)</span>
                </div>

                <div className="mt-4 text-center bg-black text-white py-2 rounded-md opacity-0 hover:opacity-100 transition">
                  Add to Wishlist
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
