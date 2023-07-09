import Navbar from '@/app/Navbar';
import MainBody from './MainBody';

export default function Home() {
  return (
    <div className='container mx-auto border border-3'>
      <Navbar />
      <MainBody />
    </div>
  );
}
