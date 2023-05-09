'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Index() {
   const [count, setCount] = useState(0);
 return (<>
   <h1>Hello, Next.js!</h1>
   <div>
     <Link href="/dropdown">
       <h3>Go to Dropdown</h3>
       </Link>
   </div>
  
  
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>


  </>
      );
}