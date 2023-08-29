const fetchData = async (baseUrl, params = {}) => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed with status code: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
