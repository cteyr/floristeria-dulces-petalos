import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";

interface SearchProps {
  placeholder: string;
  value?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ placeholder, value, handleInputChange }: SearchProps) => {
  return (
    <InputGroup>
      <Input
        type="text"
        id="search_input"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        borderRadius="10px"
        bg="white"
        _focus={{ boxShadow: 'md' }}
        fontFamily="body"
      />
      <InputLeftElement pointerEvents="none">
        <IoIosSearch size="18px" color='dark_grey'/>
      </InputLeftElement>
    </InputGroup>
  );
};

export { Search };
