import React, { forwardRef, useId } from 'react'

function Textarea({
  label,
  defaultValue = '',
  className = '',
  col = "2",
  row = "1", 
  ...props
}, ref) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>
        {label}</label>}
    <textarea id={id} className={`${className}`} rows={row} cols={col} ref={ref} {...props}>
      {defaultValue}
    </textarea>
    </div>
  )
}

export default forwardRef(Textarea)