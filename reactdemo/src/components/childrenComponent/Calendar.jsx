import React from "react";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function NewCalendar() {
  return (
    <div>
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      ,
    </div>
  );
}

export default NewCalendar;
