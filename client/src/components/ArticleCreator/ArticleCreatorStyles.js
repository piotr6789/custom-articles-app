import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 275,
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: '#D2D4D4'
  },
  title: {
    fontSize: 20
  }
}));

export default useStyles;
