import React, { useEffect, useState } from "react";
import { SideBar } from "../common/sideBar";
import { CheckListEn } from "../checkListen";
import { NotFound } from "../common/notFound";

export const Dashboard = ({ setIsAlertVisible, isAlertVisible }) => {
  const [selectedComp, setSelectedComp] = useState(3);

  useEffect(() => {
    const alertShown = localStorage.getItem("alertShown");

    if (!alertShown) {
      setIsAlertVisible(true);
      localStorage.setItem("alertShown", "true");
    }

    return () => {};
  }, []);

  const renderComponent = () => {
    switch (selectedComp) {
      case 1:
      case 2:
      case 4:
      case 5:
      case 6:
        return <NotFound />;
      case 3:
        return <CheckListEn isAlertVisible={isAlertVisible} />;
      default:
        return <NotFound />;
    }
  };
  console.log("isAlertVisible", isAlertVisible);
  return (
    <div className="dashboard-container">
      <SideBar setSelectedComp={setSelectedComp} selectedComp={selectedComp} />

      {renderComponent()}
    </div>
  );
};
