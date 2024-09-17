import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./style.scss";
import { useTranslation } from 'react-i18next';

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [countUpValues, setCountUpValues] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });

  const { t } = useTranslation();

  const handleScrollEnter = () => {
    if (!hasScrolled) {
      setCounterOn(true);
      setHasScrolled(true);
    }
  };

  return (
    <ScrollTrigger onEnter={handleScrollEnter}>
      <div className="counter">
        <div className="my-container">
          <div className="dp-between">
            <div className="box">
              <p>
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={10000}
                    duration={5}
                    onEnd={() => setCountUpValues((prev) => ({ ...prev, count1: 10000 }))}
                  />
                ) : (
                  countUpValues.count1
                )}
                +
              </p>
              <span>{t('home.hero.counter.socialFollowers')}</span>
            </div>
            <div className="box">
              <p>
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={6000}
                    duration={5}
                    onEnd={() => setCountUpValues((prev) => ({ ...prev, count2: 6000 }))}
                  />
                ) : (
                  countUpValues.count2
                )}
                +
              </p>
              <span>{t('home.hero.counter.registeredAttendees')}</span>
            </div>
            <div className="box">
              <p>
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={8000}
                    duration={5}
                    onEnd={() => setCountUpValues((prev) => ({ ...prev, count3: 8000 }))}
                  />
                ) : (
                  countUpValues.count3
                )}
                +
              </p>
              <span>{t('home.hero.counter.salesRevenue')}</span>
            </div>
            <div className="box">
              <p>
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={98}
                    duration={5}
                    onEnd={() => setCountUpValues((prev) => ({ ...prev, count4: 98 }))}
                  />
                ) : (
                  countUpValues.count4
                )}
                %
              </p>
              <span>{t('home.hero.counter.customerReviews')}</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
