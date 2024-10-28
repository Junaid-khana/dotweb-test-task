import React, { useState } from "react";
import {
  BewDescription,
  Bewertungen,
  BlueGoogle,
  ChatUi,
  Cross,
  GreenGoogle,
  Hamburger,
  Logo,
  RedGoogle,
  WhiteStar,
  YellowGoogle,
} from "../icons";
import { SideBarButton } from "../sidebarButton";
import { ratingStarsIcons, sideBarButtonsData } from "../../../utils/data";
import { Profile } from "./profile";

export const SideBar = ({ setSelectedComp, selectedComp }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="responsive-header">
        <button onClick={() => setShow(!show)}>
          {show ? <Cross /> : <Hamburger />}
        </button>
        {show && (
          <div className="responsive-list">
            {sideBarButtonsData?.map((item, idx) => (
              <div key={idx} onClick={() => setSelectedComp(item.id)}>
                <SideBarButton selectedComp={selectedComp} data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="sidebar-container">
        <div className="sideBarTop">
          <ChatUi />
          <span className="sideBarTop-button">
            <p>NACHTMODUS</p>
          </span>
        </div>
        <div className="logo">
          {/* <Logo /> */}
          <img src="/images/part_1.png" />
        </div>
        <div className="buttons-container">
          {sideBarButtonsData?.map((item, idx) => (
            <div key={idx} onClick={() => setSelectedComp(item.id)}>
              <SideBarButton selectedComp={selectedComp} data={item} />
            </div>
          ))}
        </div>
        <div>
          <Profile />
        </div>
        <div className="rating-container">
          <div className="rating-top">
            <div className="google">
              <div>
                <RedGoogle />
              </div>
              <div className="blue-google">
                <BlueGoogle />
              </div>
            </div>
            <Bewertungen />
            <div className="star-container">
              {ratingStarsIcons?.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index === ratingStarsIcons.length - 1
                      ? "bg-change"
                      : "stars"
                  }`}
                >
                  {item?.svg}
                </div>
              ))}
            </div>
          </div>
          <div className="sideBar-footer">
            <BewDescription />
          </div>
        </div>
      </div>
    </div>
  );
};
