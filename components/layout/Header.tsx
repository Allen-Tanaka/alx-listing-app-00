const Header = () => {
  return (
    <header className="bg-white shadow px-4 py-3 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">LuxuryStay</div>
      <nav className="flex flex-wrap gap-4 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded-md"
        />
        <button className="text-sm font-medium">Rooms</button>
        <button className="text-sm font-medium">Mansion</button>
        <button className="text-sm font-medium">Countryside</button>
        <button className="text-sm font-medium">Sign In</button>
        <button className="text-sm font-medium">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
