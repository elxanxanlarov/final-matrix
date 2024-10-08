import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaRegHeart, FaRegMoon, FaRegSun, FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoReturnDownBack, IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import LanguageSwitcer from "../../i18n/LanguageSwitcer";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../context/WishlistContext";
import { AddtoCartContext } from "../../context/AddToCartContext";
import { Button, Dropdown } from "antd";
import { useSelector } from "react-redux";
import slugify from "slugify";

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
const Header = () => {
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const savedUserData = JSON.parse(localStorage.getItem("userData") || "[]");
    const currentUserData = savedUserData.find(
      (item) => item.email === currentUser?.email
    );
    const userName = currentUserData
      ? capitalizeFirstLetter(currentUserData.username.split(" ")[0])
      : "";
    setUserNameState(userName);
  }, []);
  const [userNameState, setUserNameState] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const savedMode = localStorage.getItem("mode");
  const [modeBtn, setModeBtn] = useState(savedMode === "true");
  const [animationDone, setAnimationDone] = useState(false);
  const [wishlist] = useContext(MyContext);
  const [addToCart] = useContext(AddtoCartContext);
  const [menuClickBtn, setMenuClickBtn] = useState(false);
  const currentUser = localStorage.getItem("currentUser");
  const user = currentUser ? JSON.parse(currentUser) : null;
  const isAdmin = user && user.isAdmin;
  const productData = useSelector((state) => state.product);
  const langProduct = productData.filter(
    (item) => item.lang == t("productLang")
  );
  const [keyword, setKeyword] = useState("");
  const guestItems = [
    { key: "1", label: <Link to="/login">Login</Link> },
    { key: "2", label: <Link to="/register">Register</Link> },
  ];
  const userItems = [
    {
      key: "1",
      label: (
        <Link to="/">
          {userNameState ? `Hi ${userNameState}` : "Loading..."}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("currentUser");
            navigate("/login");
          }}
        >
          Logout
        </span>
      ),
    },
  ];
  const adminItems = [
    {
      key: "1",
      label: <Link to="/dashboard">Admin</Link>,
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("currentUser");
            navigate("/login");
          }}
        >
          Logout
        </span>
      ),
    },
  ];
  useEffect(() => {
    if (modeBtn) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("mode", modeBtn);
  }, [modeBtn]);
  useEffect(() => {
    setAnimationDone(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleMenuClick = (e) => {
    if (e.key === "register") {
      navigate("/register");
    }
  };
  const DropdownMenu = () => {
    if (currentUser) {
      if (isAdmin) {
        return adminItems;
      }
      return userItems;
    }
    return guestItems;
  };
  const menuBtnCLick = () => {
    setMenuClickBtn((prevState) => !prevState);
    document.body.classList.add("menu-active");
  };
  return (
    <>
      <Navbar className="navbar">
        <motion.div
          className="my-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: animationDone ? 1 : 0,
            y: animationDone ? 0 : -50,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Nav className="nav dp-between w-100">
            <ul className="dp-align">
              <li>
                <Link className="link" to="/">
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/shop">
                  {t("header.shop")}
                </Link>
              </li>
              <div className="my">
                <div className="dropdown p-0 m-0">
                  <span
                    className="text-white dropdown-toggle cursor"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("header.pages")}
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/about" className="dropdown-item">
                        {t("header.about")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="dropdown-item">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <li>
                <Link to="/contact" className="link">
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
            <div className="logo">
              <Link to="/">
                <img
                  src="https://elexy-demo.myshopify.com/cdn/shop/files/lgo.png?v=1709012574&width=375"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="right dp-align gap-2">
              <div className="md">
                <Link to="/wishlist" className="heart cursor">
                  <p className="dp-center count">
                    <span>{wishlist.length}</span>
                  </p>
                  <FaRegHeart />
                </Link>
              </div>
              <Link to="/addtocart" className="basket cursor">
                <p className="dp-center count">
                  <span>{addToCart.length}</span>
                </p>
                <IoCartOutline />
              </Link>
              <motion.div
                onClick={() => setModeBtn((prevMode) => !prevMode)}
                className="dark dark-btn"
                initial={{ rotate: 0 }}
                animate={{ rotate: modeBtn ? 15 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button className="dark-button button">
                  {modeBtn ? <FaRegSun /> : <FaRegMoon />}
                </button>
              </motion.div>
              <button
                type="button"
                className="btn btn-light my-search dp-center"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <IoSearch />
              </button>
              <LanguageSwitcer dp="md" />
              <Dropdown
                menu={{ items: DropdownMenu() }}
                onClick={handleMenuClick}
                placement="bottom"
                className="dropdown-right"
              >
                <Button>
                  <FaRegUser />
                </Button>
              </Dropdown>
              <div
                onClick={() => menuBtnCLick()}
                className={`menu-icon ${menuClickBtn ? "active" : ""}`}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </Nav>
        </motion.div>
        <div className={`my-menu ${menuClickBtn ? "active" : ""}`}>
          <div>
            <ul>
              <li>
                <Link
                  className="link"
                  onClick={() => setMenuClickBtn(false)}
                  to="/"
                >
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="/shop"
                  onClick={() => setMenuClickBtn(false)}
                >
                  {t("header.shop")}
                </Link>
              </li>
              <div className="rp-dropdowm">
                <div className="dropdown p-0 m-0">
                  <span
                    className="text-white dropdown-toggle cursor"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("header.pages")}
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/about"
                        className="dropdown-item"
                        onClick={() => setMenuClickBtn(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="dropdown-item"
                        onClick={() => setMenuClickBtn(false)}
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <li>
                <Link
                  to="/contact"
                  className="link"
                  onClick={() => setMenuClickBtn(false)}
                >
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
            <div className="my-btns-con dp-align gap-2">
              <button
                onClick={() => {
                  setModeBtn((prevMode) => !prevMode);
                }}
                className="btn btn-dark mode-btn"
              >
                {modeBtn ? <FaRegSun /> : <FaRegMoon />}
              </button>
              <LanguageSwitcer dp="rp" />
              <Link to="/wishlist" className="heart cursor">
                  <p className="dp-center count">
                    <span>{wishlist.length}</span>
                  </p>
                  <FaRegHeart />
                </Link>
            </div>
          </div>
        </div>
      </Navbar>
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="searchModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="searchModalLabel">
                Search product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <input
                  onChange={(e) => setKeyword(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter product name"
                />
                <button
                  className="btn btn-dark"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
              <ul className="list-group">
                {!keyword
                  ? null
                  : langProduct
                      .filter((p) =>
                        p.title.toLowerCase().includes(keyword.toLowerCase())
                      )
                      .map((item) => (
                        <div key={item.id} data-bs-dismiss="modal">
                          <li className="list-group-item">
                            <img width={70} src={item.img} alt={item.title} />
                            <Link
                              to={`/products/${slugify(item.title)}`}
                              className="ms-3"
                            >
                              {item.title}
                            </Link>
                          </li>
                        </div>
                      ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
