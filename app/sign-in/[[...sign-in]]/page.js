import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {/* Background Image */}
      <Image
        src='/uber-bg.jpg'
        alt='bg'
        width={900}
        height={1000}
        className='object-cover w-full h-full'
      />
      {/* Sign-In component */}
      <div className='absolute right-5 top-20'>
        <SignIn />
      </div>
    </div>
  );
}
