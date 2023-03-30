import React, { useState } from 'react';
import { useDebouncedValue } from '~/hooks';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const debounceFilter = useDebouncedValue(searchTerm)

  React.useEffect(()=>{    onSearch(debounceFilter);
  }, [debounceFilter])


  return (
    <form className="max-w-md my-4">
      <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
        <input
          className="appearance-none bg-transparent w-full text-gray-200 py-2 px-4 leading-tight focus:outline-none"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
