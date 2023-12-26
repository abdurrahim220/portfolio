import React, { useEffect, useState } from "react";

const Data = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
// console.log(projects)
  useEffect(() => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return [projects, loading];
};

export default Data;
