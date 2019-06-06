import * as React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Folder, Delete } from "@material-ui/icons";

type ProjectListItemProps = {
  name: string;
  description: string;
  handleOpen?: React.ReactEventHandler;
  handleDelete?: React.ReactEventHandler;
};

const ProjectListItem: React.SFC<ProjectListItemProps> = ({
  name,
  description,
  handleOpen,
  handleDelete
}) => (
  <ListItem onClick={handleOpen} button component="a">
    <ListItemAvatar>
      <Avatar>
        <Folder />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={name} secondary={description} />
    {handleDelete && (
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    )}
  </ListItem>
);

export default ProjectListItem;
