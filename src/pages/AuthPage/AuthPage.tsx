import React, { useState } from "react";
import "./AuthPage.scss";
import { ReactComponent as WhatsAppIcon } from "src/assets/icons/AuthPage/whatsAppIcon.svg";
import { ReactComponent as MenuIcon } from "src/assets/icons/AuthPage/menuIcon.svg";
import { ReactComponent as SettingsIcon } from "src/assets/icons/AuthPage/settingsIcon.svg";
import { ReactComponent as PlayVideoIcon } from "src/assets/icons/AuthPage/playVideoIcon.svg";
import whatsAppImg from "src/assets/images/authPageWhatsApp.png";
import { useNavigate } from "react-router-dom";

const AuthPage: React.VFC = () => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="wrapperAuthPage">
      <div className="header">
        <span className="_30yMe">
          <WhatsAppIcon />
        </span>
        <h1 className="headerTitle">whatsapp web</h1>
      </div>
      <div className="window">
        <div className="main">
          <div className="textWrapper">
            <h1 className="h1Main">
              Чтобы использовать WhatsApp
              <br />
              на компьютере:
            </h1>
            <ol>
              <li>Откройте WhatsApp на своём телефоне</li>
              <li>
                Нажмите{" "}
                <strong>
                  <span>
                    Меню
                    <MenuIcon />
                  </span>
                </strong>{" "}
                или{" "}
                <strong>
                  <span>
                    Настройки
                    <SettingsIcon />
                  </span>
                </strong>{" "}
                и выберите
                <br />
                <strong>
                  <span>Связанные устройства</span>
                </strong>
              </li>
              <li>Наведите свой телефон на этот экран, чтобы считать код</li>
            </ol>
            <a href="https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=ru">
              Готовы попробовать, но нужна помощь?
            </a>
          </div>
          <div className="qrCodeWrapper">
            <img
              src="http://qrcoder.ru/code/?https%3A%2F%2Fweb.whatsapp.com%2F&6&0"
              width="264"
              height="264"
              title="QR код"
              onClick={() => navigate("/chat")}
            />

            <div className="checkboxWrapper">
              {!checkboxIsChecked && (
                <span>
                  <div className="popupWindow">
                    Через несколько минут неактивности вы будете выведены из
                    системы
                  </div>
                </span>
              )}
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={checkboxIsChecked}
                  onChange={() =>
                    setCheckboxIsChecked((prevState) => !prevState)
                  }
                />
                Оставаться в системе
              </label>
            </div>
          </div>
        </div>
        <div className="videoWindow">
          {buttonIsClicked ? (
            <iframe
              width="560px"
              height="314px"
              src="https://www.youtube.com/embed/nZRaYuM-FYw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <div
                className="playVideoButton"
                role="button"
                onClick={() => setButtonIsClicked((prevState) => !prevState)}
              >
                <PlayVideoIcon className="playVideoIcon" />
              </div>
              <img src={whatsAppImg} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
