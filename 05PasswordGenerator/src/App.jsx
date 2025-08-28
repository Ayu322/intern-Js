
import { useState , useCallback , useEffect , useRef} from 'react'


function App() {
  const [length , setLength] = useState(5)
  const [numberallow , setNumberAllow] = useState(false)
  const [characterallow , setCharacterAllow] = useState(false)
  const [Password , setPassword] = useState("")

//useref hook 
  const passwordRef = useRef(null)
   
  const copyPasswordToClickboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const PasswordGenerator = useCallback ( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallow) {
      str += "0123456789"
    }
    if (characterallow) {
      str += "`~!@#$%^&*(){}[]:;/?.>,<|"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  } , [length , numberallow , characterallow ,
     setPassword])
   useEffect (() => {
    PasswordGenerator()
   }, [length , numberallow , characterallow , PasswordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
      bg-gray-800\'>
        <h1 className='text-black text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text" 
           value = {Password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
           />
           <button
           onClick={copyPasswordToClickboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-red-500'>
            Copy</button>
          </div>   
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-centre gap-x-1 '>
              <input 
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)} }
              />
              <label>Length: {length}</label>
            </div>
            <div  className='flex items-centre gap-x-1 '>
              <input
               type="checkbox"
               defaultChecked={numberallow}
               id='numberInput'
               onChange={() => { 
                setNumberAllow((prev) => !prev);
               }}
               />
               <label htmlFor='numberInput'>Number</label>
            </div>
            <div className='flex items-centre gap-x-1 ' >
            <input
               type="checkbox"
               defaultChecked={characterallow}
               id='characterInput'
               onChange={() => { 
                setCharacterAllow((prev) => !prev);
               }}
               />
               <label htmlFor="characterInput">Character</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
