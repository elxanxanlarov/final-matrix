import "./style.scss";
import { useTranslation } from 'react-i18next';

const AboutStory = () => {
  const { t } = useTranslation();

  return (
    <div className="about-story">
      <div className="my-container">
        <div className="story-con row g-5">
          <div className="col-md-6 col-sm-12 col-12">
            <div className="story-left">
              <h2>{t('about.story.title')}</h2>
              <p>{t('about.story.description')}</p>
              <h3>{t('about.story.mission_title')}</h3>
              <p>{t('about.story.mission')}</p>
              <h3>{t('about.story.vision_title')}</h3>
              <p>{t('about.story.vision')}</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <div className="story-right">
              <img
                src="../../../../../src/pages/About/Components/AboutStory/image/story-img.webp"
                alt={t('about.story.img_alt')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
