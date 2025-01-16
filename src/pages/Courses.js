import React from "react";
import OverflowCard from "../Components/card";
import { _courses } from "../Resources";
import Spacer from "../Components/spacer";
import '../../src/index.css'

const Courses = () => {
  const Courses = _courses;

  return (
    <div>
      <p>Courses</p>
      <Spacer height="50px" />
      <div style={course_container}>
        {
          Courses?.map((Courses, index) => {
            return (
              <div key={index}>
                <OverflowCard
                  key={Courses.id}
                  id={Courses.id}
                  image={Courses.image}
                  title={Courses.title}
                  subTitle={Courses.subTitle}
                  courseName={Courses.courseName}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Courses;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}