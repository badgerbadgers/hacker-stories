import React from 'react';
import styles from '../App.module.css';
import styled from 'styled-components'

const StyledButton = styled.button` background: transparent;
border: 1px solid #171212; padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    background: #171212;
    color: #ffffff;
} `;

const StyledItem = styled.li` display: flex; align-items: center; padding-bottom: 5px;
`;

const StyledColumn = styled.span` padding: 0 5px;
white-space: nowrap;
overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
a{
color: inherit;
}
width: ${(props) => props.width};
`;

const StyledButtonSmall = styled(StyledButton)` padding: 5px;
`;

const StyledButtonLarge = styled(StyledButton)` padding: 10px;
`;

const StyledSearchForm = styled.form` padding: 10px 0 20px 0;
display: flex;
align-items: baseline;
`;

const Item = ({ item, onRemoveItem }: itemProps) => (
  <StyledItem>
    <StyledColumn width="40%">
      <a href={item.url}>{item.title}</a>
    </StyledColumn>
    <StyledColumn width="30%">{item.author}</StyledColumn>
    <StyledColumn width="10%">{item.num_comments}</StyledColumn>
    <StyledColumn width="10%">{item.points}</StyledColumn>
    <StyledColumn width="10%">
      <StyledButtonSmall
        type="button"
   
        onClick={() => onRemoveItem(item)}
        className="button button_small"
      >
Dismiss
      </StyledButtonSmall>
    </StyledColumn>
  </StyledItem>
);
export default Item;