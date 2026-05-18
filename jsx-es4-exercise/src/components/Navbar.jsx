const Navbar = () => {
  const navStyle = {
    backgroundColor: '#444',
    display: 'flex',
    alignItems: 'center',
    padding: '0',
    listStyle: 'none',
    color: 'white'
  };

  return (
    <nav style={navStyle}>
      {/* Home với nền xanh */}
      <div style={{ backgroundColor: '#2ecc71', padding: '15px 25px' }}>Home</div>
      <div style={{ padding: '0 20px' }}>Search</div>
      <div style={{ padding: '0 20px' }}>Contact</div>
      {/* Login với nền đen */}
      <div style={{ backgroundColor: 'black', padding: '15px 25px', marginLeft: '10px' }}>Login</div>
    </nav>
  );
};

export default Navbar;