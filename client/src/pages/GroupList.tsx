import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { useGroups } from "../contexts/groups/GroupsContext";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { FiPlus } from "react-icons/fi";

export default function Groups() {
  const { groups, createGroup } = useGroups();
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [groupName, setGroupName] = useState("");

  const handleCreateGroup = () => {
    setShowCreateGroup(true);
  };

  const handleGroupNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGroupName(event.target.value);
  };

  const handleConfirmCreateGroup = () => {
    createGroup(groupName);
    setShowCreateGroup(false);
    setGroupName("");
  };

  const handleCancelCreateGroup = () => {
    setShowCreateGroup(false);
    setGroupName("");
  };

  return (
    <Box>
      <Header
        title="Groups"
        onButtonClick={handleCreateGroup}
        buttonLabel="Create Group"
        buttonIcon={FiPlus}
      />

      <VStack spacing={4} align="start">
        {groups.map((group) => (
          <NavLink key={group.id} to={`/groups/${group.id}`}>
            <Text>{group.name}</Text>
          </NavLink>
        ))}
      </VStack>

      {!showCreateGroup ? (
        <Button colorScheme="blue" mt={4} onClick={handleCreateGroup}>
          Create New Group
        </Button>
      ) : (
        <VStack spacing={4} align="start" mt={4}>
          <Input
            placeholder="Enter group name"
            value={groupName}
            onChange={handleGroupNameChange}
          />
          <Button colorScheme="green" onClick={handleConfirmCreateGroup}>
            Confirm
          </Button>
          <Button colorScheme="red" onClick={handleCancelCreateGroup}>
            Cancel
          </Button>
        </VStack>
      )}
    </Box>
  );
}
