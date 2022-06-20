import { Add } from './todoListSlice';
import { useDispatch } from 'react-redux';

import { FaEdit, FaTrash } from 'react-icons/fa'
const List = (item) => {
  const {title} = item;
  const {id} = item;

  const DeleteHandler = (id) =>{
    console.log(id)
  }

  return ( 
      <article className='grocery-item' >
          <p className='title'>{title}</p>
          <div className='btn-container'>
            <button type='btn' className='edit-btn' onClick={()=>{}}><FaEdit/></button>
            <button type='btn' className='delete-btn' onClick={(id)=>{DeleteHandler(id)}}><FaTrash/></button>
          </div>
      </article>
  )
}

export default List
