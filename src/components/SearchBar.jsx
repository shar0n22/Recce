import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
// paper is just like a div which has a white background as default and it appears like its floating
const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const handleSumit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`); // it is used to navigate us to a specific url
        }
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSumit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2, // padding-left shortcut in material ui
                boxShadow: 'none',
                mr: { sm: 5 } // margin on small devices
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // value of the keypress is stored in e.target.value
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar