import InputItem from '../InputItem';

function Search() {
  return (
    <div className='p-2 border-2 md:pd-6 rounded-xl border-[#3A5A40]'>
      <p className='text-xl font-bold'>Get a charge</p>
      <InputItem />
      <button className='p-3 bg-[#3A5A40] w-full mt-5 text-[#A3B18A] rounded-lg'>
        Search
      </button>
    </div>
  );
}

export default Search;
