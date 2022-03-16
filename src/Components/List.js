import React from 'react';
import Item from './Item';

export const List = (data) => (
  <ul>
    {data.list.map((item) => (
      // <li key={item.objectID}>
      //   <span>
      //     <a href={item.url}>{item.title}</a>
      //   </span>
      //   <span>{item.author}</span>
      //   <span>{item.num_comments.comments}</span>
      //   <span>{item.points}</span>
      // </li>
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);