import './Header.css';
import img1 from "../imgs/img1.jpg";

const Header = () => {
  return (
    <div className="header">
      {/* Title on the left */}
      <h1 className="headerTitle">Dashboard</h1>
      
      {/* Profile Section on the right */}
      <div className="profile">
        <img 
          src={img1}// Add the path to your profile image
          alt="Profile"
          className="profileImage"
        />
        
        {/* Name and email stacked below the profile image */}
        <div className="profileDetails">
          <p> Maria Waston </p> {/* Name */}
          <p>mariawaston2022@gmail.com</p> {/* Email */}
        </div>
      </div>
    </div>
  );
};

export default Header;
