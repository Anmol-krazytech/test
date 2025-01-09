import React from "react";
import OverflowCard from "../../../Components/card";
import {_resourceMetaData } from "../../../Resources";
import Spacer from "../../../Components/spacer";
import '../../../index.css'

const Materials = () => {
  const chapters = _resourceMetaData;

  return (
    <div>
      <p>CSE Resources</p>
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

export default Materials;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}