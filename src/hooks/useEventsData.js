import { useRef } from "react";

import eventsJSON from '../data/events.json';

const useEventsData = () => {
  const data = useRef(eventsJSON); 
  const { _embedded: { events }} = data.current;
  
  return {
    events
  }
};

export default useEventsData;