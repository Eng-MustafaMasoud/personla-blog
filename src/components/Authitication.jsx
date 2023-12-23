import Link from 'next/link'
import React from 'react'

const Authitication = () => {
    const status="notAut"
  return (
    <div className='ml-4 maxsm:ml-0'>
        {
            status==="notAut"?(<Link href="login">Login</Link>):(
                <div className='flex gap-4'>
                    <Link href="write">Write</Link>
                    <Link href="logout">Logout</Link>
                </div>
            )
        }
        
    </div>
  )
}

export default Authitication