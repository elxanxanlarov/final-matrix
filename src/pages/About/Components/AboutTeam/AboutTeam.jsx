import { useTranslation } from 'react-i18next';
import "./style.scss";

const AboutTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="about-team dp-center">
      <div className="team-con">
        <div className="head">
          <h2>{t('about.team.title')}</h2>
          <p>{t('about.team.description')}</p>
        </div>
        <div className="body row my-5 g-5">
          {['Sophia Williams', 'James Smith', 'Emma Johnson'].map((member, index) => (
            <div className="col-md-4 col-sm-12 col-12" key={index}>
              <div className="my-box">
                <div className="img-con">
                  <img
                    src={`../../../../../src/pages/About/Components/AboutTeam/image/team-${index + 1}.webp`}
                    alt={member}
                  />
                </div>
                <div className="text-con">
                  <h3>{member}</h3>
                  <p>{t(`about.team.members.${index}.position`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
