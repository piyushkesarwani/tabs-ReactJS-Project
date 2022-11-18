import React, { useEffect, useState } from "react";
import "./App.css";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const { title, company, dates, duties } = jobs[value];
  return (
    <section className="tabsContainer">
      <h2 className="title">My Experience</h2>
      <div className="flexContainer">
        <div className="btnContainer">
          {jobs.map((item, index) => {
            return (
              <button
                type="button"
                onClick={() => setValue(index)}
                className="btn"
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="experienceSection">
          <article className="singleExperience">
            <h2 className="heading">{title}</h2>
            <h2 className="company">{company}</h2>
            <p className="dates">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <p className="duty">{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
}

export default App;
