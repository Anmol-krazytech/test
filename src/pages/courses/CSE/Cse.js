import React from "react";
import OverflowCard from "../../../Components/card";
import { _courseMetaData } from "../../../Resources";
import Spacer from "../../../Components/spacer";
import '../../../index.css'

const CSE = () => {
  const courses = _courseMetaData;

  return (
    <div>
      <p>CSE</p>
      <Spacer height="50px" />
      <div style={course_container}>
        {
          courses?.map((course, index) => {
            return (
              <div key={index}>
                <OverflowCard
                  key={course.id}
                  id={course.id}
                  image={course.image}
                  courseName={course.type}
                  level={course.level}
                  link={course.link}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default CSE;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}