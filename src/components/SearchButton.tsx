import React from 'react'


export interface SearchButtonProps {
    
}
 
const SearchButton: React.SFC<SearchButtonProps> = () => {
    return ( 
        <button type="submit" className="button is-primary is-light">Primary</button>
     );
}
 
export default SearchButton;