import { Select } from "antd";
import i18next from "i18next";

const LanguageSwitcer = ({dp}) => {
  const changeLang = (value) => {
    i18next.changeLanguage(value);
  };
  return (
    <div className={dp}>
      <Select
        className="dropdown-right lang-dropdown"
        defaultValue={i18next.language}
        style={{
          width: 60,
          zIndex: 2000,
        }}
        onChange={changeLang}
        options={[
          {
            value: "az",
            label: "AZ",
          },
          {
            value: "en",
            label: "EN",
          },
        ]}
      />
    </div>
  );
};

export default LanguageSwitcer;
