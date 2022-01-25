import { BiHomeCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <button>
        <BiHomeCircle className="icon" />
      </button>
      <button>
        <BiSearch className="icon" />
      </button>
      <button>
        <IoIosNotificationsOutline className="icon" />
      </button>
      <button>
        {" "}
        <MdMailOutline className="icon" />
      </button>
    </footer>
  );
}

export default Footer;
