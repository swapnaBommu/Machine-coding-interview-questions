import React from 'react'
import './chips-input.css'

const ChipsInput = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [chips, setChips] = React.useState([]);
  const handlekeyDown = (e) => {
    console.log(e,"keysssssssssssssssssss");
    if(e.key === 'Enter' && inputValue.trim() !== ''){
        setChips([...chips, inputValue.trim()]);
        setInputValue('');
    }
  };
  const handleDelete = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  }
  return (
    <div>
        <h1>Chips Input tag</h1>
        <input className="chips-input" type="text" placeholder="Type a Chip and press tag..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e)=> handlekeyDown(e)}
        />
        <div className='chip-container'>
        {chips.map((chip, index) => (
            <span className="chip" key={index}>
              {chip}
            <button style={{color:"red"}} onClick={()=>handleDelete(index)}>X</button>  
            </span>
        ))}

        </div>
    </div>
  )
}

export default ChipsInput;