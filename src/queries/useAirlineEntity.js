import { useQuery } from "@tanstack/react-query";
import airlinesService from "../components/airlinesService";

export const useAirlineEntity = (id) => {
  return useQuery(
    ['airline-entity', id],
    () => airlinesService.fetch(id),
  );
};

