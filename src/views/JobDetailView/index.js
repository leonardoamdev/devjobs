import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'src/components/Button';
import JobDetailFooter from 'src/components/JobDetailFooter';
import JobDetailHeader from 'src/components/JobDetailHeader';
import Paragraph from 'src/components/Paragraph';
import { useDispatch, useSelector } from 'src/store';
import { getJobs } from 'src/slices/job';

const JobDetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [job, setJob] = useState(null);

  const { jobs, isLoaded } = useSelector(state => state.job);

  useEffect(() => {
    if (isLoaded) setJob(jobs.find(jobItem => jobItem.id === Number(id)));
  }, [isLoaded, jobs]);

  useEffect(() => {
    if (!isLoaded) dispatch(getJobs());
  }, [dispatch, isLoaded]);

  return job ? (
    <div className="w-full relative flex justify-center">
      <div className="jd-container -mt-10 mb-[176px]">
        <JobDetailHeader
          company={job.company}
          logo={job.logo}
          logoBackground={job.logoBackground}
          website={job.website}
        />
        <div className="rounded-md bg-white dark:bg-dark-light p-[25px] sm:p-12 mt-8 text-base">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p className="text-secondary text-base">
                {job.postedAt}
                <span className="text-2xl font-kumbh-black px-2">.</span>
                {job.contract}
              </p>
              <h1 className="sm:mt-2 sm:mb-[14px] text-xl sm:text-[28px] text-black dark:text-white">
                {job.position}
              </h1>
              <p className="text-base font-kumbh-black text-primary">
                {job.location}
              </p>
            </div>
            <Button className="w-full sm:w-auto mt-[50px] sm:mt-0">
              Apply Now
            </Button>
          </div>
          <Paragraph description={job.description} />
          <Paragraph
            title="Requirements"
            description={job.requirements.content}
            listItems={job.requirements.items}
            listType="disc"
          />
          <Paragraph
            title="What You Will Do"
            description={job.role.content}
            listItems={job.role.items}
            listType="decimal"
          />
        </div>
      </div>
      <JobDetailFooter position={job.position} company={job.company} />
    </div>
  ) : (
    <p className="text-secondary">Wrong JD!</p>
  );
};

export default JobDetailView;
