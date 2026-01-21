import React, { useState } from 'react'

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const items = [
        {
            title:"JavaScript Basics",
            content:"Learn variables, functions, and loops in JavaScript."
        },
        {
            title:"React.js Overview",
            content:"Understand components, state, and props in React."
        },
        {
            title:"Node.js",
            content:"Basics of server side developement with Node.js."
        },
        {
            title:"Full Stack Developement",
            content:"Build full stack apps using React and Node.js."
        }
    ]
    const handleClick =(index)=>{
        setOpenIndex( index === openIndex ? null : index);
    }
  return (
    <div className='accordion'>
        {items.map((item, index)=>(
            <div key={index} className='accordion-item'>
                <button className='accordion-title' onClick={()=>handleClick(index)}>
                    {item.title}
                    <span className='right'>{openIndex == index ? "▲": "▼"}</span>
                </button>
                {openIndex == index ? <div className='accordion-content'>{item.content}</div> : ''}
            </div>
        ))}
    </div>
  )
}

export default Accordion