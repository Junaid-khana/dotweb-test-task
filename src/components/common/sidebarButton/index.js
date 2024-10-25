import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "../icons"; // Import your custom icons

export const SideBarButton = ({ data, selectedComp }) => {
  const [selectedOption, setSelectedOption] = useState(
    data?.buttonTitle[0].title
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setSelectedOption(item.title);
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        selectedComp === data.id ? "selected-bg" : "normal-bg"
      } common-button`}
    >
      <div className="button-icon">{data?.icon}</div>
      <div className="button-right">
        <div className="button-heading">
          <h3>{data?.title}</h3>

          {data?.isDropdown ? (
            <div className="dropdown-container">
              <div
                className="dropdown-header"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedOption}
                <span className="chevron-icon">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>

              {isOpen && (
                <ul className="dropdown-list">
                  {data?.buttonTitle.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelect(item)}
                      className="dropdown-item"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <>
              {data?.buttonTitle?.map((item) => (
                <button className="button" key={item.title}>
                  <span>{item?.title}</span>
                </button>
              ))}
            </>
          )}
        </div>

        <p className="button-tagline">
          {"Den Wert Ihres Hauses schätzen lassen."}
        </p>
      </div>
    </div>
  );
};
