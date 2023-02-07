const getDomain = url => {
  const { hostname } = new URL(url);
  return hostname;
};

export default getDomain;
