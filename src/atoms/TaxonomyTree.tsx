import * as React from "react";
// @ts-ignore
import * as request from "superagent";
import { withStyles, Typography } from "@material-ui/core";
import {
  Add,
  Delete,
  KeyboardArrowUp,
  KeyboardArrowDown
} from "@material-ui/icons";
// @ts-ignore
import Tree, { getTreeLeafDataByIndexArray } from "material-ui-tree";


type TaxonomyTreeProps = {
  classes: any,
}

type TaxonomyTreeState = {
  data: any,
}
class TaxonomyTree extends React.Component<TaxonomyTreeProps, TaxonomyTreeState> {
  state:any = {
    data: {
      path: "material-ui-tree",
      type: "tree",
      sha: "b3d36479a033ed6296c34fdf689d5cdbcf7a0136",
      url:
        "https://api.github.com/repos/shallinta/material-ui-tree/git/trees/b3d36479a033ed6296c34fdf689d5cdbcf7a0136"
    }
  };

  requestTreeLeafChildrenData = (leafData:any, chdIndex:Array<number>, doExpand:Function) => {
    const { url, type } = leafData;
    if (type === "tree") {
      request.get(url).then(({ body }:{body: any}) => {
        
        if (body && body.tree) {
          const data = { ...this.state.data };
          getTreeLeafDataByIndexArray(data, chdIndex, "tree").tree = body.tree;
          this.setState({ data }, () => {
            doExpand();
          });
        } else {
          doExpand();
        }
      });
    } else {
      doExpand();
    }
  };

  renderTreeLeafLabel = (leafData:any, expand:boolean) => {
    const classes:any = this.props.classes;
    const { path, type } = leafData;
    if (type === "tree") {
      if (expand) {
        return (
          <Typography variant="body1" className={classes.leaf}>{path}</Typography>
        );
      }
      return (
        <Typography variant="body1" className={classes.leaf}>{path}</Typography>
      );
    }
    if (type === "blob") {
      if (path.startsWith(".") || path.includes("config")) {
        return (
          <Typography variant="body2" className={classes.leaf}>
            {path}
          </Typography>
        );
      }
      if (path.endsWith(".js")) {
        return (
          <Typography variant="body2" className={classes.leaf}>
            {path}
          </Typography>
        );
      }
      return (
        <Typography variant="body2" className={classes.leaf}>
          {path}
        </Typography>
      );
    }
    return null;
  };

  getTreeLeafActionsData = (leafData:any, chdIndex:Array<number>, expand:boolean) => {
    const { classes } = this.props;
    const { type } = leafData;
    if (type === "tree") {
      if (!expand) {
        return null;
      }
      return [
        {
          icon: <Add className={classes.icon} />,
          label: "new",
          hint: "Insert file",
          onClick: () => {
            const data = { ...this.state.data };
            const leaf = getTreeLeafDataByIndexArray(data, chdIndex, "tree");
            if (
              !Reflect.has(leaf, "tree") ||
              !Reflect.has(leaf.tree, "length")
            ) {
              leaf.tree = [];
            }
            leaf.tree.push({
              path: "new file",
              type: "blob",
              sha: Math.random()
            });
            this.setState({ data });
          }
        }
      ];
    }
    return [
      {
        icon: <Delete color="secondary" className={classes.icon} />,
        hint: "Delete file",
        onClick: () => {
          const data = { ...this.state.data };
          const parent = getTreeLeafDataByIndexArray(
            data,
            chdIndex.slice(0, chdIndex.length - 1),
            "tree"
          );
          const lastIndex = chdIndex[chdIndex.length - 1];
          parent.tree.splice(lastIndex, 1);
          this.setState({ data });
        }
      }
    ];
  };

  render() {
    const classes:any = this.props.classes;
    return (
      <Tree
        actionsAlignRight={true}
        className={classes.container}
        data={this.state.data}
        labelName="path"
        valueName="sha"
        childrenName="tree"
        foldIcon={<KeyboardArrowDown />}
        unfoldIcon={<KeyboardArrowUp />}
        renderLabel={this.renderTreeLeafLabel}
        getActionsData={this.getTreeLeafActionsData}
        requestChildrenData={this.requestTreeLeafChildrenData}
      />
    );
  }
}

const styles = () => ({
  container: {
    margin: 0,
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    background: "transparent"
  },
  icon: {
    fontSize: 18
  },
  leaf: {
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles, { withTheme: true })(TaxonomyTree);
