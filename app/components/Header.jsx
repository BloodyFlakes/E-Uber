import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export function Header() {
  return (
    <div className='p-5 pb-3 pl-10 border-b-[4px] border-[#3A5A40] flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Image src='/logo.png' width={100} height={100} alt='logo' />
      </div>
      <UserButton />
    </div>
  );
}
