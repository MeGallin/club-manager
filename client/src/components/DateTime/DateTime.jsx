import React, { useEffect, useState } from 'react';
import moment from 'moment';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(() => moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    // Clean up function and run useEffect without dependency.
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{dateTime ? <div>{dateTime}</div> : null}</>;
};

export default DateTime;
