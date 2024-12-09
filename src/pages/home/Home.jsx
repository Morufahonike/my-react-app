import './Home.css'
import "@fontsource/poppins";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import profile from './../../assets/profile.png'
import calendar from './../../assets/calendar.png'
import checklist from './../../assets/checklist.png'
import list from './../../assets/list.png'
import trophy from './../../assets/trophy.png'
import inc from './../../assets/2020INC.png'
import arise from './../../assets/Arise.png'
import ephicient from './../../assets/Ephicient.png'
import pipelinxco from './../../assets/Pipelinxco.png'
import thepark from './../../assets/THEPARK.png'
import toogether from './../../assets/TOOGETHER.png'
import gallery from './../../assets/Gallery Scroll.png'
import imgone from './../../assets/Image1.jpg'
import imgtwo from './../../assets/Image2.jpg'
import imgthree from './../../assets/Image3.png'
import arrow1 from './../../assets/arrow1.png'
import crowd from './../../assets/Crowd.png'
import arrow2 from './../../assets/arrow2.png'
import screen from './../../assets/Screen.png'
import flowers from './../../assets/Flowers.png'
import Footer from '../../components/footer/Footer';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (  
        <div>
          <div className="heade">
           <div className="hero">
              <div className='hero1'>
                <h1 className="secondstage"> Impacting <br /> Lives of Young <br />People in Africa.</h1>
               <p className="secondstage2"> Making youngsters leverage their <br /> skills, abilities and talents stand <br /> out as a goal getter </p>
             </div>

              <div className="viewplansbtn">  
               <button className='viewplansbtn b'>Join Us</button>
                <div className="viewplansbtn2">
                 <p><PlayCircleIcon/></p>
                 <p className="viewplansbtn3"> How it works</p>
                </div>
              </div>
            </div>
          </div>
          <div className="how">
            <div className="howto">
              <h1>How it works</h1>
              <p> Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo <br /> tellus amet. Ut placerat dolor massa metus quisque sodales semper.<br /> Hac donec vulputate pharetra augue eu congue. </p>
            </div>
            <div className="tab">
            <Box
               sx={{ flexGrow: 1, bgcolor: '#F3F3F5', display: 'flex', height: 643.18,}}
            >
            <Tabs
              orientation="vertical"
               // variant="scrollable"
               value={value}
               onChange={handleChange}
               aria-label="Vertical tabs example"
               sx={{ borderRight: 5, borderColor: 'divider' }}
            >
               <Tab className='profile' icon={<img src={profile} alt="icon" width={30} />} label="Create an Account" iconPosition='start' {...a11yProps(0)} />
               <Tab className='profile' icon={<img src={calendar} alt="icon" width={30} />} label="Join an Event" iconPosition='start' {...a11yProps(1)} />
               <Tab className='profile' icon={<img src={checklist} alt="icon" width={30} />} label="Submit Requirements" iconPosition='start' {...a11yProps(2)} />
               <Tab className='profile' icon={<img src={list} alt="icon" width={30} />} label="Get Shortlisted" iconPosition='start' {...a11yProps(3)} />
               <Tab className='profile' icon={<img src={trophy} alt="icon" width={30} />} label="Get the Highest Votes" iconPosition='start' {...a11yProps(4)} />
             </Tabs>
               <TabPanel value={value} index={0}>
                  <div className="span">
                    <img src={profile} alt="" />
                    <div className="spanwords">
                     <h2>Create an Account</h2>
                     <p>Lorem ipsum dolor sit amet consectetur. Sit <br /> curabitur nulla justo tellus amet. Ut placerat <br /> dolor massa metus quisque sodales semper. <br />Hac donec vulputate pharetra augue eu congue.</p>
                    </div>
                  </div>
               </TabPanel>
               <TabPanel value={value} index={1}>
                 <div className="span">
                    <img src={calendar} alt="" />
                    <div className="spanwords">
                      <h2>Join an Event</h2>
                     <p>Lorem ipsum dolor sit amet consectetur. Sit <br />curabitur nulla justo tellus amet. Ut placerat <br />dolor massa metus quisque sodales semper. <br />Hac donec vulputate pharetra augue eu congue.</p>
                    </div>
                  </div>
               </TabPanel>
               <TabPanel value={value} index={2}>
                 <div className="span">
                    <img src={checklist} alt="" />
                    <div className="spanwords">
                     <h2>Submit Requirements</h2>
                     <p>Lorem ipsum dolor sit amet consectetur. Sit <br /> curabitur nulla justo tellus amet. Ut placerat <br />dolor massa metus quisque sodales semper. <br />Hac donec vulputate pharetra augue eu congue.</p>
                    </div>
                  </div>
                </TabPanel>
               <TabPanel value={value} index={3}>
                 <div className="span">
                    <img src={list} alt="" />
                    <div className="spanwords">
                      <h2>Get Shortlisted</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Sit <br />curabitur nulla justo tellus amet. Ut placerat <br />dolor massa metus quisque sodales semper. <br />Hac donec vulputate pharetra augue eu congue.</p>
                    </div>
                  </div>
               </TabPanel>
               <TabPanel value={value} index={4}>
                 <div className="span">
                    <img src={trophy} alt="" />
                    <div className="spanwords">
                     <h2>Get the Highest Votes</h2>
                     <p>Lorem ipsum dolor sit amet consectetur. Sit <br />curabitur nulla justo tellus amet. Ut placerat <br />dolor massa metus quisque sodales semper. <br />Hac donec vulputate pharetra augue eu congue.</p>
                    </div>
                  </div>
               </TabPanel>
          </Box>
          </div>
        </div>
        <div className="forthstage">
          <div className="parts">
            <h1>Our Partners</h1>
            <p>People who have trust in us</p>
          </div>
          <div className="first1">
            <img src={arise} alt="" />
            <img src={ephicient} alt="" />
            <img src={inc} alt="" />
            <img src={thepark} alt="" />
          </div>
          <div className="second2">
          <img src={pipelinxco} alt="" />
          <img src={toogether} alt="" />
          </div>
        </div>
        <img className='gallery' src={gallery} alt="" />
        <div className="fifthstage">
          <h1 className='testimonals'>What people say about Us</h1>
          <div className="people">
          <div className="authorsinfo">
            <p>“Amet minim mollit non deserunt <br />ullamco est sit aliqua dolor do <br />amet sint. Velit officia consequat <br />duis enim velit mollit. Exercitation <br />veniam consequat.”</p>
            <div className="info">
            <img src={imgone} alt="" />
            <div className="infos">
              <h1>Emmanuel J</h1>
              <p>Photographer</p>
            </div>
            </div>
          </div>
          <div className="authorsinfo">
            <p>“Amet minim mollit non deserunt <br />ullamco est sit aliqua dolor do <br />amet sint. Velit officia consequat <br />duis enim velit mollit. Exercitation <br />veniam consequat.”</p>
            <div className="info">
            <img src={imgtwo} alt="" />
            <div className="infos">
              <h1>John Woods</h1>
              <p>Software Engineer</p>
            </div>
            </div>
          </div>
          <div className="authorsinfo">          
            <p>“Amet minim mollit non deserunt <br />ullamco est sit aliqua dolor do <br />amet sint. Velit officia consequat <br />duis enim velit mollit. Exercitation <br />veniam consequat.”</p>
            <div className="info">
            <img src={imgthree} alt="" />
            <div className="infos">
              <h1>Sidwell Mako</h1>
              <p>Artist</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="blog">
          <div className="blog1">
           <h1 className="blog2">Our Blog</h1>
           <div className="blogposts">
              <p className="blogpost1"> Lorem ipsum dolor sit amet consectetur. <br /> Sit curabitur nulla justo tellus amet.</p>
             <img className='arrow1' src={arrow1} alt="" />
           </div>
          </div>
          <div className="cardgroup">
           <Card className='cardcontain' sx={{ maxWidth: 300, borderRadius: 5, height: 400, backgroundColor: '#F3F3F5' }}>
           <CardMedia
             sx={{ height: 250 }}
             image={crowd}
             title="green iguana"
            />
           <CardContent className='cards'>
           <Typography variant="body2" sx={{ color: 'black' }} className='arrow2'>
              <img src={arrow2} alt="" />
            </Typography>
            <div className="cardio">
              <p className='data'> 26th June</p>
             <h5 className="cardio"> Lorem </h5>
            </div>
            </CardContent>
            </Card>

            <Card className='cardcontain' sx={{ maxWidth: 500, borderRadius: 5, height: 400, backgroundColor: '#F3F3F5' }}>
           <CardMedia
             sx={{ height: 250 }}
             image={screen}
             title="green iguana"
            />
           <CardContent className='cards'>
           <Typography variant="body2" sx={{ color: 'black' }} className='arrow2'>
             <img src={arrow2} alt="" />
            </Typography>
            <div className="cardio">
              <p className='data'> 26th June </p>
             <h5 className="writing">Lorem Ipsum</h5>
            </div>
            </CardContent>
            </Card>

            <Card className='cardcontain' sx={{ maxWidth: 500, borderRadius: 5, height: 400, backgroundColor: '#F3F3F5' }}>
           <CardMedia
             sx={{ height: 250 }}
             image={flowers}
             title="green iguana"
            />
           <CardContent className='cards'>
           <Typography variant="body2" sx={{ color: 'black' }} className='arrow2'>
           <img src={arrow2} alt="" />
            </Typography>
            <div className="cardio">
              <p className='data'> 26th June</p>         
             <h5 className="writing"> Lorem </h5>
            </div>
            </CardContent>
            </Card>
            </div>
        </div>
        <div className="footer">
        <Footer/>
        </div>
        </div>
    );
}

export default Home;