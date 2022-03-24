import React from 'react';
import Item from './Item';

export const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectID} 
        item={item}
        onRemoveItem={onRemoveItem}
        />
    ))}
  </ul>
);