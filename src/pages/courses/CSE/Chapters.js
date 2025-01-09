import React from "react";
import OverflowCard from "../../../Components/card";
import { _computerScienceChapters, _courseMetaData } from "../../../Resources";
import Spacer from "../../../Components/spacer";
import '../../../index.css'

const CSChapters = () => {
  const chapters = _computerScienceChapters;

  return (
    <div>
      <p>CSE Chapters</p>
      <Spacer height="50px" />
      <div style={course_container}>
        {
          chapters?.map((course, index) => {
            return (
              <div key={index}>
                <OverflowCard
                  key={course.id}
                  id={course.id}
                  image={course.image}
                  courseName={course.chapter}
                  level={course.code}
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

export default CSChapters;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}