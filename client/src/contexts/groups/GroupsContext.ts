import { createContext, useContext } from "react";
import { User } from "../auth/AuthContext";

export interface Group {
  id: number;
  name: string;
  owner: User;
  members: Array<User>;
}

export interface Event {
  id: number;
  name: string;
  group: number;
  creator: number;
}

export interface GroupsContextType {
  groups: Array<Group>;
  getGroups: () => Promise<void>;
  createGroup: (groupName: string) => Promise<void>;
  addUserToGroup: (groupId: number, username: string) => Promise<void>;
  deleteUserFromGroup: (groupId: number, userId: number) => Promise<void>;
  events: Array<Event>;
  getEvents: (groupId: number) => Promise<never[] | undefined>;
  createEvent: (groupId: number, eventName: string) => Promise<void>;
}

export const useGroups = () => {
  const context = useContext(GroupsContext);
  if (!context) {
    throw new Error("useGroups must be used within a GroupsProvider");
  }
  return context;
};

export const GroupsContext = createContext<GroupsContextType | undefined>(
  undefined
);
