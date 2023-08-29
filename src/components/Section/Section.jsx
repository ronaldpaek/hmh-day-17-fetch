import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { fetchData } from "../../utils";

const Section = ({ heading, apiEndpoint, text, children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(apiEndpoint);
        setData(result);
      } catch (fetchError) {
        setError(fetchError.message);
      }
    };
    getData();
  }, [apiEndpoint]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      <h2>{heading}</h2>
      {text && (
        <p>
          {text}: <a href="#">{apiEndpoint}</a>
        </p>
      )}
      {children && data && children(data)}
    </section>
  );
};

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  apiEndpoint: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.func.isRequired,
};

export default Section;
