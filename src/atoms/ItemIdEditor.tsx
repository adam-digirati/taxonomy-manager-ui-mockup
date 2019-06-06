import * as React from 'react';
import { Input, makeStyles, Theme, Typography } from '@material-ui/core';

type HtmlEvent = React.ChangeEvent<HTMLInputElement>;

type ItemIdEditorProps = {
  itemId?: string;
  itemIdBase?: string;
  handleIdChange?: React.EventHandler<HtmlEvent>;
};

const useStyle = makeStyles((theme:Theme) => ({
    root: {
      marginBottom: theme.spacing(8),
      marginTop: theme.spacing(1),
    },
    idField: {
      fontSize: theme.typography.body1.fontSize,
      fontFamily: theme.typography.body1.fontFamily,
      lineHeight: theme.typography.body1.lineHeight,
      letterSpacing: theme.typography.body1.letterSpacing,
      width: 310,
    }
}))

const ItemIdEditor: React.SFC<ItemIdEditorProps> = ({itemId = '', itemIdBase = '', handleIdChange }) => {
  const classes = useStyle();
  return (
    <Typography variant="body1" className={classes.root}>
      {itemIdBase}
      <Input
        value={itemId.replace(itemIdBase, '')}
        onChange={handleIdChange}
        className={classes.idField}
      />
    </Typography>  
  );
};

export default ItemIdEditor;