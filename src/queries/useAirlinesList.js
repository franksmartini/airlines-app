import { useQuery } from "@tanstack/react-query";
import airlinesService from "../components/airlinesService";

export const useAirlinesList = () => {
  return useQuery(
    ['airlines-list'],
    () => airlinesService.fetchList(),
  );
};

