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
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        borderRadius="10px"
        bg="white"
        _focus={{ boxShadow: 'md' }}
      />
      <InputLeftElement pointerEvents="none">
        <IoIosSearch size="18px" color='#606060'/>
      </InputLeftElement>
    </InputGroup>
  );
};

export { Search };
