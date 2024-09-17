import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="my-container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          
          {/* Quick Links 1 */}
          <div className="col mb-3">
            <h5>{t('footer.quickLinks1')}</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.search')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.reviews')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="col mb-3">
            <h5>{t('footer.quickLinks2')}</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.blogs')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.singleBlog')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.register')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.faqs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col mb-3">
            <h5>{t('footer.information')}</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.termsConditions')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.payment')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.returnPolicy')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.promotions')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.contactUs')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col mb-3">
            <h5>{t('footer.company')}</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.myAccount')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.myCart')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.wishlist')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.productCompare')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.createAccount')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col mb-3">
            <h5>{t('footer.contactInfo')}</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 mt-3">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.address')}
                </a>
              </li>
              <li className="nav-item mb-2 mt-3">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {t('footer.phoneNumbers1')}
                  <br />
                  {t('footer.phoneNumbers2')}
                </a>
              </li>
              <li className="nav-item mb-2 dp-align gap-2 mt-3 fs-4">
                <a href="#" className="nav-link p-0 text-body-secondary"><FaInstagram /></a>
                <a href="#" className="nav-link p-0 text-body-secondary"><CiTwitter /></a>
                <a href="#" className="nav-link p-0 text-body-secondary"><CiFacebook /></a>
                <a href="#" className="nav-link p-0 text-body-secondary"><CiYoutube /></a>
              </li>
            </ul>
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
