import Sidebar from "./Sidebar";
import { FiInfo, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { EVENT_LINK, EVENT_LOCATIONS_LINK } from "../links";

interface EventSidebarProps {
  groupId: number;
  eventId: number;
}

export default function EventSidebar({ groupId, eventId }: EventSidebarProps) {
  const navigate = useNavigate();
  return (
    <Sidebar
      items={[
        {
          icon: FiInfo,
          label: "Event",
          onClick: () => {
            navigate(EVENT_LINK(groupId, eventId), { replace: true });
          },
          selected: window.location.pathname === EVENT_LINK(groupId, eventId),
        },
        {
          icon: FiMapPin,
          label: "Locations",
          onClick: () => {
            navigate(EVENT_LOCATIONS_LINK(groupId, eventId), { replace: true });
          },
          selected:
            window.location.pathname === EVENT_LOCATIONS_LINK(groupId, eventId),
        },
      ]}
    />
  );
}
