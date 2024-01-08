import { useQuery } from "react-query";
import usePopupStore from "../store/popup";
import axios1 from "../helpers/axios1";

const getMessages = () => {
  const { sPopup } = usePopupStore((state) => state);
  const enabled = sPopup === "Inbox";
  const fetcher = () => axios1.get("/users");
  const query = useQuery("messages", fetcher, { enabled });

  return query;
};

export default getMessages;
