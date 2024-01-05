import axios from "axios";
import { useQuery } from "react-query";
import usePopupStore from "../store/popup";

const getMessages = () => {
  const { sPopup } = usePopupStore((state) => state);
  const enabled = sPopup === "Inbox";
  const fetcher = () => axios.get("/users");
  const query = useQuery("messages", fetcher, { enabled });

  return query;
};

export default getMessages;
