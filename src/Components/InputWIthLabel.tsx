import * as React from 'react';
import styles from '../App.module.css';
import styled from 'styled-components';

const StyledLabel = styled.label` border-top: 1px solid #171212; border-left: 1px solid #171212; padding-left: 5px;
  font-size: 24px;
`;
const StyledInput = styled.input` border: none;
border-bottom: 1px solid #171212; background-color: transparent;
  font-size: 24px;
`;

type InputWithLabelProps = {
  id: string;
  value: string;
  type? string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused?: boolean;
  children: React.ReactNode;
}
export const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}: InputLabelProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
    }
  }, [isFocused]);

return ( 
  <>
<StyledLabel htmlFor={id}>{children}</StyledLabel>      &nbsp;
  <StyledInput
    ref={inputRef}
    id={id}
    type={type}
    value={value}
    onChange={onInputChange}
    className={styles.input}
  />
  </>
  )
};