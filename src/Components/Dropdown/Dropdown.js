import React, { useCallback, useEffect, useRef } from "react";

import "./Dropdown.css";

function Dropdown(props) {
  const dropdownRef = useRef();

  const handleClick = useCallback((event)=>{
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target) &&
      props.onClose
    )
      props.onClose();
  },[dropdownRef,props]) 
    
  

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  },[dropdownRef,handleClick]);

  return (
    <div
      ref={dropdownRef}
      className={`dropdown custom-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;
