import * as React from "react";
// @ts-ignore
import * as request from "superagent";
import { withStyles, Typography, Theme } from "@material-ui/core";
import {
  Add,
  Delete,
  Edit,
  KeyboardArrowUp,
  KeyboardArrowDown
} from "@material-ui/icons";
// @ts-ignore
import Tree, { getTreeLeafDataByIndexArray } from "material-ui-tree";


type TaxonomyTreeProps = {
  classes: any,
  onSelect: Function,
}

type TaxonomyTreeState = {
  data: any,
}
class TaxonomyTree extends React.Component<TaxonomyTreeProps, TaxonomyTreeState> {
  state:any = {
    data: {
      sha: "b3d36479a033ed6296c34fdf689d5cdbcf7a0136",
      path: "CRU Taxonomy UAT",
      type: "project",
      url: "https://adam-digirati.github.io/project-contents.json"
    }
  };

  requestTreeLeafChildrenData = (leafData:any, chdIndex:Array<number>, doExpand:Function) => {
    const { url, type } = leafData;
    if (/*type === "project"*/url) {
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
    const { onSelect } = this.props;
    const { path, type } = leafData;
    if (type === "project") {
      if (expand) {
        return (
          <Typography variant="body1" className={classes.leaf} onClick={onSelect(leafData)}>{path}</Typography>
        );
      }
      return (
        <Typography variant="body1" className={classes.leaf}  onClick={onSelect(leafData)}>{path}</Typography>
      );
    }
    if (type === "conceptScheme") {
      return (
        <Typography variant="body2" className={classes.leaf}  onClick={onSelect(leafData)}>
          {path}
        </Typography>
      );
    }
    
    if (type === "concept") {
      return (
        <Typography variant="body2" className={classes.leaf}  onClick={onSelect(leafData)}>
          {path}
        </Typography>
      );
    }
    
    return null;
  };

  getTreeLeafActionsData = (leafData:any, chdIndex:Array<number>, expand:boolean) => {
    const { classes } = this.props;
    const { type } = leafData;
  
    const result:Array<any> = [
      {
        icon: <Add className={classes.icon} color="primary" />,
        hint: `Insert ${type === 'project' ? 'conceptScheme': (type === 'concept' ?  'sub-concept' :  'concept')}`,
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
      },
      {
        icon: <Edit className={classes.icon} color="primary" />,
        hint: `Edit ${type}`,
        onClick: () => {
          const data = { ...this.state.data };
          const { onSelect } = this.props;
          const leaf = getTreeLeafDataByIndexArray(data, chdIndex, "tree");
          onSelect(data)();
        }
      }
    ];
    if (type !== "project") {
      result.push({
        icon: <Delete color="primary" className={classes.icon} />,
        hint: `Delete ${type}`,
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
      });
    }
    return result;
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

const styles = (theme: Theme) => ({
  container: {
    margin: 0,
    border: 0,
    borderRadius: '0 !important',
    boxShadow: "none !important",
    backgroundColor: "transparent !important",
    '& div[role="button"]:hover [type="button"] svg': {
      opacity: 1,
    },
    '& div[role="button"]:focus [type="button"] svg': {
      opacity: 1,
    },
    '& [type="button"]:focus svg': {
      opacity: 1,
    },
    '& [type="button"]': {
      marginRight: theme.spacing(-2),
    }
  },
  icon: {
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    fontSize: 18
  },
  leaf: {
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles, { withTheme: true })(TaxonomyTree);
