import React, { useState, useRef, useEffect } from 'react';

const DynamicTextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {isEditing ? (
        <div ref={inputRef}>
          <label htmlFor="userInput"></label>
          <input
            type="text"
            id="userInput"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            onBlur={handleBlur}
            placeholder="Escribe aquí"
          />
        </div>
      ) : (
        <div onClick={handleInputClick}>
          {inputValue ? (
            <p>{inputValue}</p>
          ) : (
            <p>Hacer click aquí para escribe el texto mostrar</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicTextInput;