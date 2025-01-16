import React from "react";
import OverflowCard from "../Components/card";
import { _courseMetaData } from "../Resources";
import Spacer from "../Components/spacer";
import '../../src/index.css'
import { useParams } from "react-router-dom";

const CourseData = () => {
  const { courseName } = useParams();
  const [chapters, setChapters] = React.useState([]);

  React.useEffect(() => {
    let _course = courseName?.replaceAll(/\s+/g, '')?.toLowerCase();
    setChapters(_courseMetaData[_course])
  }, [courseName])

  return (
    <div>
      <p>{courseName}</p>
      <Spacer height="50px" />
      <div style={course_container}>
        {
          chapters?.map((Courses, index) => {
            return (
              <div key={index}>
                <OverflowCard
                  key={Courses.id}
                  id={Courses.id}
                  image={Courses.image}
                  title={Courses.title}
                  subTitle={Courses.subTitle}
                  courseName={courseName}
                  chapterName={Courses.chapterName}
                  link={Courses.link}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default CourseData;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}