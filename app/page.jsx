import GoogleMaps from './components/Home/GoogleMaps';
import Search from './components/Home/Search';

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-5 p-6 md:grid-cols-3'>
      <div>
        <Search />
      </div>
      <div className='col-span-2'>
        <GoogleMaps />
      </div>
    </div>
  );
}
