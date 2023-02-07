import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobsView from 'src/views/JobsView';
import JobDetailView from 'src/views/JobDetailView';
import Layout from 'src/layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<JobsView />} />
          <Route path="/:id" element={<JobDetailView />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
