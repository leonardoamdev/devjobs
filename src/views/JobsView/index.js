import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'src/store';
import { getJobs } from 'src/slices/job';
import JobItem from 'src/components/JobItem';
import Button from 'src/components/Button';
import useSettings from 'src/hooks/useSettings';
import applyFilters from 'src/utils/filter';
import SearchBar from 'src/components/SearchBar';
import Loading from 'src/components/Loading';

const JobsView = () => {
  const dispatch = useDispatch();
  const { filter } = useSettings();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isSearched, setSearched] = useState(false);
  const { jobs, isLoading, isLoaded } = useSelector(state => state.job);

  const handleSearch = useCallback(() => {
    const filteredJobsArr = applyFilters(jobs, filter);

    setFilteredJobs(filteredJobsArr);
    setSearched(true);
  }, [jobs, filter]);

  useEffect(() => {
    if (isLoaded) setFilteredJobs(jobs);
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded) dispatch(getJobs());
  }, [dispatch, isLoaded]);

  return (
    <div className="container -mt-10 mb-[104px]">
      <div className="flex flex-col justify-center">
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-x-[11px] lg:gap-x-[30px] gap-y-[49px] md:gap-y-[65px] pt-10 pb-14 mt-20">
              {filteredJobs.map(job => (
                <JobItem key={job.id} job={job} />
              ))}
            </div>
            {!isSearched && <Button className="self-center">Load More</Button>}
          </>
        )}
      </div>
    </div>
  );
};

export default JobsView;
