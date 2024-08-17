import { useRef } from 'react'

export default function RefHook() {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = ""
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>Joseph</h1>
        <input type="text" placeholder='Ex..' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}
