import { Tabs } from "antd";
import React, { useState } from "react";
import TabPane from "antd/lib/tabs/TabPane";
function HomeMenu() {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div>
      <>
        <Tabs tabPosition={tabPosition}>
          <TabPane
            tab={
              <img
                src="https://picsum.photos/200"
                width="50"
                className="rounded-full"
                alt=""
              />
            }
            key="1"
          ></TabPane>
          <TabPane
            tab={
              <img
                src="https://picsum.photos/200"
                width="50"
                className="rounded-full"
                alt=""
              />
            }
            key="2"
          ></TabPane>
          <TabPane
            tab={
              <img
                src="https://picsum.photos/200"
                width="50"
                className="rounded-full"
                alt=""
              />
            }
            key="3"
          ></TabPane>
        </Tabs>
      </>
    </div>
  );
}

export default HomeMenu;
