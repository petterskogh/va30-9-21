import { useState } from 'react';
import Button from '../components/button/button';

export default function Home() {
  const [number, setNumber] = useState(0);

  return (
    <main className="flex flex-col items-center space-y-4">

      <span>{number}</span>

      <Button onClick={() => setNumber(number + 5)}>Addera 5</Button>
      
    </main>
  )
}
