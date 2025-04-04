import React from 'react'
import Signin from './Signin';
import Signup from './Signup';
import { useState } from 'react';

export default function Auth() {
    const [page, setPage] = useState(0);
  return (
    <div className='w-full h-150 flex items-center justify-center'>

        <div className='bg-white w-150 h-100 flex flex-col items-center'>
                {page === 0 && (<Signin setPage={setPage}/>)}
                {page === 1 && (<Signup setPage={setPage}/>)}
        </div>


    </div>
  )
}
