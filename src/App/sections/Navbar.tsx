import { navLinks } from '../../constants/index';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul flex flex-row gap-6">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a text-cyan-50" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 h-[10vh]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Patricio Ramos
          </a>
          <nav className="flex">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
