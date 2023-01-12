import styled from '@emotion/styled';
import { useState } from 'react';
import Button from './Button';

const StyledInput = styled.input`
  padding: 10px 20px;
  height: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  border: none;

  &::placeholder {
    color: red;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const StyledError = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export default function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.length === 0) {
      setError('Search term is required');
    } else {
      onSearch(searchTerm);
      setError('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        name="searchTerm"
        placeholder="Test placeholder"
      />
      <StyledButton type="submit">search</StyledButton>
      <StyledError>{error}</StyledError>
    </form>
  );
}
