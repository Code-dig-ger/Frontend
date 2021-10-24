import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch'

export const AntSwitch = withStyles((theme) => ({
    root: {
    //   width: 28,
    //   height: 16,
    //   padding: 0,
    //   display: 'flex',
    float:'right'
    },
    switchBase: {
    //   padding: 2,
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
    //   width: 12,
    //   height: 12,
      boxShadow: 'none',
    },
    track: {
    //   border: `1px solid ${theme.palette.grey[500]}`,
    //   borderRadius: 16 / 2,
    //   opacity: 1,
      backgroundColor: 'white',
    },
    checked: {},
  }))(Switch);

export function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.opacity = "1";
}

export function closeNav() {
    document.getElementById("mySidenav").style.width="0";
    document.getElementById("mySidenav").style.opacity = "0";
}

export const tagTextAdd = (event) => {
    setTagQueries([...tagQueries, [tagText]]);
    setTagText("");
}

export const defaultTags = ["string","dp","math","combinatorics", "Number Theory", "interactive","Binary Search","greedy","graph"];

export const platforms=[
    "Codechef",
    "Codeforces",
    "Atcoder",
    "Spoj",
    "UVA"
];