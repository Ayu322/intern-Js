import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/usecurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState ("USD")
  const [to, setTo] = useState ("INR")
  const [convertedamount, setConvertedAmount] = useState(0)


  const CurrencyInfo = useCurrencyInfo(from)


 const options = objects.keys(CurrencyInfo)

 const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedamount)
 }
     
    const converte = () => {
      setConvertedAmount(amount * CurrencyInfo[to])  
    }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-centre items-centre
      bg-cover bg-no-repeat ' 
      style={{
        background: `url('https://www.google.com/imgres?q=google%20images&imgurl=https%3A%2F%2Fimages.hindustantimes.com%2Fimg%2F2022%2F09%2F11%2F550x309%2Fgd_1662870108818_1662870128181_1662870128181.png&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Ftechnology%2Fgoogle-logo-turns-grey-leaving-internet-confused-101662870131839.html&docid=CGc9gN8CrYlGbM&tbnid=pW-DaPznIyX4xM&vet=12ahUKEwiq4ersgpSPAxXgxDgGHQriCMQQM3oECEkQAA..i&w=550&h=309&hcb=2&ved=2ahUKEwiq4ersgpSPAxXgxDgGHQriCMQQM3oECEkQAA')`,
      }}
      >
        <div className='w-full'>
           <div className='w-full max-w-md mx-auto border border-gray-60
           rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form 
            onSubmit={(e) => {
              e.preventDefault();
              converte()
            }}
            >
              <div className='w-full mb-1'>
                  <InputBox 
                  label="form"
                  amount={amount}
                  CurrencyOption={options}
                  onCurrencyChange={(currency) => setAmount(amount) }
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                type='button'
                className='absolute left-1/2
                -translate-x-1/2
                -transalte-y-1/2 border-2
                border-white rounded-md
                bg-blue-600 text-white px-2 py-0.5
                '
                onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox 
                label="to"
                amount={convertedamount}
                CurrencyOption={options}
                onCurrencyChange={ (currency) => setTo(currency) }
                selectCurrency={from}
                amountDisable
                />
              </div>
             <div>
              <button type='submit' 
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                convert
              </button>
             </div>

            </form>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
