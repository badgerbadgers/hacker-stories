import React from 'react'

function Item(data) {
  return (
    <div>      
      <li key={data.item.objectID}>
      <span>
      <a href={data.item.url}>{data.item.title}</a>
      </span>
      <span>{data.item.author}</span>
      <span>{data.item.num_comments.comments}</span>
      <span>{data.item.points}</span>
      </li>
    </div>
  )
}

export default Item