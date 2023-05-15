import { makeStyles } from '@mui/styles';

const styles = (theme) => {
  return {
  homeTiles: {
    height:'180px', 
    background:'lightblue', 
    boxShadow: '15px 15px 8px #07AA1F', 
    border:'1px solid #FAFAFA', 
    borderRadius:'10px', 
    padding:'50px'
  },
    toolBar: {
      justifyContent: 'space-between',
      padding: '10px',
      backgroundColor: 'white',
    },
    toolBarMobile: {
      backgroundColor: 'white',
      color:'#666666'
    },
    logo: {
      cursor: 'pointer',
      top:'8px',
      position:'absolute'
    },
    mobileLogo: {
      cursor: 'pointer',
      top:'10px',
      position:'absolute',
      width: '120px',
      height: '38px',
    },
    title: {
      paddingBottom: '15px',
      color:'#07AA1F',
      fontFamily: 'Barlow Semi Condensed',
      fontSize: '20px',
      fontStyle: 'medium',
      LineHeight: '30px',
    },
    subtitle: {
      fontFamily: 'Barlow Semi Condensed',
      fontSize: '32px !important',
      fontWeight:'bold !important',
      fontStyle: 'medium',
    },
    heroSubtitle: {
      paddingBottom: '30px',
      fontFamily: 'Barlow Semi Condensed',
      fontSize: '25px',
      fontWeight:'bold',
    },
   
    mapCover:{
      borderRadius: '4px',
      height: '190px',
    },
    profileContainer:{
      position:'relative',
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      display:'flex',
      flexDirection: 'column',
    },
    skillContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      width: '95%',
      flexWrap: 'wrap',
      marginTop: '20px',
      marginBottom:'20px'
    },
    jobSkillContainer:{
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      width: '100%',
      flexWrap: 'wrap',
      marginTop: '20px',
      marginBottom:'20px'
    },
    jobReqtitle: {
      paddingBottom: '10px',
      fontSize: '18px !important',
      fontWeight:'bold !important',
      fontStyle: 'medium',
      color: '#00CB80',
    },
    tabsContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      width: '100%',
      marginTop: '20px'
    },
    skillBox: {
      padding: '7px', background:'#ebebeb', 
      minWidth:'30px', maxWidth:'200px', borderRadius: '16px', paddingLeft: '12px',
      paddingRight: '12px', whiteSpace: 'nowrap', color: 'rgb(4, 4, 30)', fontSize: '0.8125rem'
    },
    answerBox:{
      padding: '15px', 
      alignItems: 'center',
      justifyContent: 'center', 
      width:'500px', 
      borderRadius: '5px',
    }, 
    answerVideo:{
      borderRadius: '4px', objectFit: "contain" 
    },
    questionTitle:{
      width:'95%', color:'#666', fontSize:'18px', letterSpacing:'1px', wordWrap:'break-word', 
      textAlign:'center', fontWeight: 'bolder', marginLeft: 'auto', marginRight:'auto'
    },
    jobTitle:{
      width:'100%', color:'#017EFF', fontSize:'18px', letterSpacing:'1px', 
      fontWeight: 'bolder',
      textDecoration: 'underline #00CB80'
    },
    jContGrid:{
      padding:'20px',
    borderRadius:'10px',
    border:'1px #00CB80 solid'
},
    introText:{
      lineHeight:'1.5em', letterSpacing:'1px', fontSize:'18px', color:'#8E97A3', paddingBottom:'20px',
    },
    answerContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      width: '90%',
      flexWrap: 'wrap',
      marginTop: '50px',
      marginBottom:'20px'
    },
    jobContainer:{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '50px',
      marginBottom:'20px',
      width:'90%',
      gap:'30px',
    },   
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '20px',
      justifyItems:'center',
      justifyContent: 'center'
    },
    footerText: {
      fontFamily: 'Barlow Semi Condensed',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      fontFeatureSettings: 'liga off',
      color: '#333333',
    },

  };
};

const useStyles = makeStyles(styles);
export default useStyles;