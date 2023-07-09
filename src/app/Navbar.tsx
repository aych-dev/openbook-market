import Wallet from '@/app/Wallet';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 border border-3 '>
      <h1>Openbook Market</h1>
      <Wallet />
    </div>
  );
};

export default Navbar;
