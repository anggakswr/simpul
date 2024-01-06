import axios from "axios";
import { useQuery } from "react-query";
import useMessageStore from "../store/message";

const getInboxDetails = () => {
  const { id } = useMessageStore((state) => state);
  const enabled = id > 0;
  const fetcher = () => axios.get(`/posts/${id}/comments`);
  const query = useQuery(["messages", id], fetcher, { enabled });

  return query;
};

export default getInboxDetails;
