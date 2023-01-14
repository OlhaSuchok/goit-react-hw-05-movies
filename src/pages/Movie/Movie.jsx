import { InputWrapper, Input, InputButton } from './Movie.styled';

export default function Movie() {
  return (
    <InputWrapper>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
      ></Input>
      <InputButton></InputButton>
    </InputWrapper>
  );
}
