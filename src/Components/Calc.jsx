import React, { useState } from 'react'
import '../App.css'


function Calc() {

    const [inputValues, setinputValues] = useState('')



    const buttonClick = (value) => {

        setinputValues(inputValues + value);
    }


    const buttonClear = () => {

        setinputValues('')
    }

    const result = () => {

        const res = eval(inputValues)
        setinputValues(res)

    }

    return (
        <>
            <div className='head d-flex flex-column justify-content-center align-items-center mt-5'>
                <h1 style={{color:'#2358d2',fontWeight:'600'}}>Calculator</h1>
                <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '5em' }} >

                    <div className='card p-3' style={{ width: '19em', height: '28em',backgroundColor:'white' }}>
                        <input type="text" value={inputValues} style={{ height: '6em', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600', border: 'none', borderRadius: '10px' }} className='container' />

                        <div className='bns px-3' style={{ marginTop: '1em',backgroundColor:'white' }}>

                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(1)} value={1}>1</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(2)} value={2}>2</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(3)} value={3}>3</button>
                            <button style={{ backgroundColor: '#f5dccc', color: '#2358d2', fontWeight: '700', width: '50px', height: '50px', fontWeight: '600' }}
                                className='btn bn' onClick={() => buttonClick('+')}
                            >+</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(4)} value={4}>4</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(5)} value={5}>5</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(6)} value={6}>6</button>
                            <button style={{ backgroundColor: '#64C2E2', color: '#2358d2', fontWeight: '700', width: '50px', height: '50px', backgroundColor: '#f5dccc' }} onClick={() => buttonClick('-')} value={'-'} className='btn bn'>-</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(7)} value={7}>7</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(8)} value={8}>8</button>
                            <button style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', color: '#2358d2', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick(9)} value={9}>9</button>
                            <button style={{ backgroundColor: '#64C2E2', color: '#2358d2', fontWeight: '700', width: '50px', height: '50px', backgroundColor: '#f5dccc', fontWeight: '600' }} onClick={() => buttonClick('*')} value={'*'} className='btn bn'>*</button>
                            <button style={{ backgroundColor: '#64C2E2', color: '#2358d2', fontWeight: '700', width: '50px', height: '50px', backgroundColor: '#f5dccc', fontWeight: '600' }} className='btn bn' onClick={buttonClear} >C</button>
                            <button style={{ width: '50px', height: '50px', color: '#2358d2', fontWeight: '600', backgroundColor: '#f0f0f0' }} className='btn'>0</button>
                            <button style={{ backgroundColor: '#64C2E2', color: '#2358d2', fontWeight: '700', width: '50px', height: '50px', backgroundColor: '#f5dccc', fontWeight: '600' }} onClick={result} className='btn bn'>=</button>
                            <button style={{ backgroundColor: '#64C2E2', color: '#2358d2', fontWeight: '700', width: '50px', height: '50px', backgroundColor: '#f5dccc', fontWeight: '600' }} className='btn bn' onClick={() => buttonClick('/')} value={'/'}>/</button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Calc