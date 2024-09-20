import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.scss";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const testimonialsEN = [
  {
    id: 1,
    stars: 5,
    title: "Smart Home Assistant",
    text: "This smart home assistant has become a very important part of my daily routine. From managing my schedule and setting reminders to controlling smart home devices and answering questions.",
    name: "Willie Bradley",
    position: "Reporter",
  },
  {
    id: 2,
    stars: 5,
    title: "Best quality product",
    text: "The product quality is outstanding. It has transformed the way I interact with my smart devices and daily life.",
    name: "Lisa Decamp",
    position: "Investor, Zemlex Co.",
  },
  {
    id: 3,
    stars: 5,
    title: "Amazing build quality",
    text: "The build quality is fantastic, and the performance is even better. I highly recommend this for anyone looking to upgrade their smart home setup.",
    name: "Cameron Williamson",
    position: "Banker, Simtom Bank Co.",
  },
];
const testimonialsAZ = [
  {
    id: 1,
    stars: 5,
    title: "Ağıllı Ev Asistenti",
    text: "Bu ağıllı ev asistenti gündəlik işlərimdə çox vacib rol oynamağa başladı. Cədvəlimi idarə etməkdən və xatırlatmalar qurmaqdan tutmuş, ağıllı ev cihazlarını idarə etməyə və suallarıma cavab verməyə qədər hər işimdə faydalıdır.",
    name: "Willie Bradley",
    position: "CEO Deplex Group",
  },
  {
    id: 2,
    stars: 5,
    title: "Ən keyfiyyətli məhsul",
    text: "Məhsulun keyfiyyəti əladır. Bu, gündəlik həyatımda ağıllı cihazlarla ünsiyyət tərzimi tamamilə dəyişdi.",
    name: "Lisa Decamp",
    position: "Investor, Zemlex Co.",
  },
  {
    id: 3,
    stars: 5,
    title: "Möhtəşəm tikinti keyfiyyəti",
    text: "Tikinti keyfiyyəti mükəmməldir, performansı isə daha da yaxşıdır. Ağıllı ev sistemini təkmilləşdirmək istəyənlərə şiddətlə tövsiyə edirəm.",
    name: "Cameron Williamson",
    position: "Bank işçisi, Simtom Bank Co.",
  },
];
const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <div className="testimonial py-5">
      <div className="my-container">
        <div className="testimonial-con">
          <div className="testimonial-head">
            <h3>{t("home.hero.testimonial.happiness")}</h3>
            <div className="dp-between">
              <p className="left-p">
                {t("home.hero.testimonial.description")}
                <br />
                {t("home.hero.testimonial.additionalInfo")}
              </p>
              <div className="arrow dp-align gap-3">
                <div
                  className="dp-center"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <IoIosArrowBack />
                </div>
                <div
                  className="dp-center"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-body">
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {(t("home.hero.testimonial.lang") == "az"
                      ? testimonialsAZ
                      : testimonialsEN
                    ).map((item, key) => (
                      <div key={key} className="col-md-4 col-sm-12 col-12">
                        <div className="box">
                          <div className="star dp-align">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <span>{item.title}</span>
                          <p>{item.text}</p>
                          <div className="client-info">
                            <p>{item.name}</p>
                            <span>{item.position}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {(t("home.hero.testimonial.lang") == "az"
                      ? testimonialsAZ
                      : testimonialsEN
                    ).map((item, key) => (
                      <div key={key} className="col-md-4 col-sm-12 col-12">
                        <div className="box">
                          <div className="star dp-align">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <span>{item.title}</span>
                          <p>{item.text}</p>
                          <div className="client-info">
                            <p>{item.name}</p>
                            <span>{item.position}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {(t("home.testimonial.lang") == "az"
                      ? testimonialsAZ
                      : testimonialsEN
                    ).map((item, key) => (
                      <div key={key} className="col-md-4 col-sm-12 col-12">
                        <div className="box">
                          <div className="star dp-align">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <span>{item.title}</span>
                          <p>
                            “This smart home assistant has become very important
                            part of my daily routine. From managing my schedule
                            and setting reminders to controlling smart home
                            devices and answering questions.”
                          </p>
                          <div className="client-info">
                            <p>Brain Armstrong</p>
                            <span>CEO Deplex Group</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
