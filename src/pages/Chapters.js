import React from "react";
import OverflowCard from "../Components/card";
import { _chapters } from "../Resources";
import Spacer from "../Components/spacer";
import '../../src/index.css'
import { useParams } from "react-router-dom";

const Chapters = () => {
  const { courseName } = useParams();
  const [chapters, setChapters] = React.useState([]);

  React.useEffect(() => {
    let _course = courseName?.replaceAll(/\s+/g, '')?.toLowerCase();
    setChapters(_chapters[_course])
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
                  noLink={Courses.noLink}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Chapters;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}