import { useQuery } from "react-query";
import useMessageStore from "../store/message";
import axios1 from "../helpers/axios1";

const getInboxDetails = () => {
  const { id } = useMessageStore((state) => state);
  const enabled = id > 0;
  const fetcher = () => axios1.get(`/posts/${id}/comments`);
  const query = useQuery(["messages", id], fetcher, { enabled });

  return query;
};

export default getInboxDetails;
