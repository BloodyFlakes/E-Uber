import { FaDotCircle } from 'react-icons/fa';
function InputItem() {
  return (
    <div className='p-3 rounded-lg mt-3 bg-[#A3B18A] flex items-center gap-4'>
      <FaDotCircle />
      <input
        type='text'
        placeholder='Pick up location'
        className='w-full bg-transparent outline-none placeholder:text-[#588157]'
      />
    </div>
  );
}

export default InputItem;
