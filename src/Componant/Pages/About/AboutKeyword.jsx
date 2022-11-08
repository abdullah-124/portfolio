import React from 'react'

export default function AboutKeyword({keyword}) {
    const {name,list} = keyword;
  return (
    <div className='d-flex'>
        <span className='text-past fw-bold'>{name}: </span>
        <div className="d-flex flex-wrap">
        {
            list.map(w=><span key={w} className='button-keyword'>{w}</span>)
        }
        </div>
    </div>
  )
}
