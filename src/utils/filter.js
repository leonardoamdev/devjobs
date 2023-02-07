const applyFilters = (jobs, filter) => {
  return jobs.filter(job => {
    let matches = true;

    if (filter.query) {
      const properties = ['position', 'company'];
      let containsQuery = false;

      properties.forEach(property => {
        if (job[property].toLowerCase().includes(filter.query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    if (filter.isFullTimeOnly && job.contract !== 'Full Time') {
      matches = false;
    }

    if (
      filter.location &&
      !job.location.toLowerCase().includes(filter.location.toLowerCase())
    ) {
      matches = false;
    }

    return matches;
  });
};

export default applyFilters;
