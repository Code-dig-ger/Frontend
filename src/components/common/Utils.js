import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch'

//Component used in ContestPage and ProblemsPage
export const AntSwitch = withStyles((theme) => ({
    root: {
      float:'right'
    },
    switchBase: {
      color: 'blue',
      '&$checked': {
        transform: 'translateX(20px)',
        color: 'white',
        '& + $track': {
          opacity: 1,
          backgroundColor: 'blue',
          borderColor: 'black',
        },
      },
    },
    thumb: {
      boxShadow: 'none',
    },
    track: {
      backgroundColor: 'white',
    },
    checked: {},
  }))(Switch);
