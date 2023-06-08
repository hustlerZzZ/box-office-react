import { useState } from "react";

const SearchForm = ( { onSearch }) => {

    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOption, setSearchOption] = useState("shows");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const onRadioChange = (e) => {
        setSearchOption(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const options = {
            q: searchTerm,
            searchOption
        }
        onSearch(options);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                
                <label>
                    Shows 
                    <input type="radio" name="searchType" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
                </label>
                
                <label>
                    Actors 
                    <input type="radio" name="searchType" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange} />
                </label>
                <button type="submit" > search  </button>
            </form> 
           
        </div>
    );
}

export default SearchForm;