import React from "react";
import OverflowCard from "../Components/card";
import { _courses } from "../Resources";
import Spacer from "../Components/spacer";
import '../../src/index.css'

const Home = () => {
  const courses = _courses;

  return (
    <div>
      <p>Courses</p>
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
                  courseName={course.courseName}
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

export default Home;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}