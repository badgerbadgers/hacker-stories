import React from 'react';
import Item from './Item';

export const List = React.memo(
  ({ list, onRemoveItem }: ListProps) => (
    console.log('B:List') || (
      <ul>
      {list.map((item) => (
        <Item
          key={item.objectID}
          item={item}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
    )
  )
);