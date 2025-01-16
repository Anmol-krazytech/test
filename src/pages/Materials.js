import React from "react";
import OverflowCard from "../Components/card";
import { _courseMetaData } from "../Resources";
import Spacer from "../Components/spacer";
import '../../src/index.css'
import { useParams } from "react-router-dom";

const Materials = () => {
  const { courseName, chapterName } = useParams();
  const [materials, setMaterials] = React.useState([]);

  React.useEffect(() => {
    // let _course = courseName?.replaceAll(/\s+/g, '')?.toLowerCase();
    // let _chapter = chapterName?.replaceAll(/\s+/g, '')?.toLowerCase();
    setMaterials(_courseMetaData)
  }, [courseName])

  return (
    <div>
      <p>{courseName}, {chapterName}</p>
      <Spacer height="50px" />
      <div style={course_container}>
        {
          materials?.map((Courses, index) => {
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

export default Materials;

const course_container = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
}