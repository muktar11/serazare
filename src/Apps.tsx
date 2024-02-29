import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import SearchBar, { Props as SearchBarProps } from "./component/SearchBar";
import JobCard from "./component/JobCard";
import jobData, { Job } from "./JobDummyData";

function Search() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setJobs(jobData);
    }, []);

      // Define the JobCriteria type
    interface JobCriteria {
      title: string;
      location: string;
      experience: string;
      type: string;
    }

    // Define the Props interface
    interface Props {
      fetchJobsCustom: (criteria: JobCriteria) => Promise<void>;
    }

  
    // Example implementation returning a resolved promise
    const fetchJobsCustom: Props['fetchJobsCustom'] = (criteria) => {
        // Your implementation logic here
        return Promise.resolve();
    };
  

    return (
        <div>
            <Navbar />
            <Header />
            <SearchBar fetchJobsCustom={fetchJobsCustom} />

            {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
            ))}
        </div>
    );
}

export default Search;
