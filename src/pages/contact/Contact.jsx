import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { FaSearch } from "react-icons/fa";
import './Contact.css'
import GroupPC from '../../assets/GroupPC.png'
import Footer from '../../components/footer/Footer';


const Contact = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
       <div className="contour">
        <div className="boxc">
        <h1 className='boxg'>How can we help you?</h1>
           <form>
               <div className="search-container">
               <FaSearch className="search-icon" />
                <input className='search' type="search"  placeholder="Search for answers" />
                </div>
           </form>
          </div>
       </div>
       <div className="flag">
       <div className="flaags">
        <div className="flagtext">
          <h3>Getting Started</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>

        <div className="flagtext">
          <h3>Talents</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>
       </div>

       <div className="flaags">
        <div className="flagtext">
          <h3>Events</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>

        <div className="flagtext">
          <h3>Categories</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>
       </div>

       <div className="flaags">
        <div className="flagtext">
          <h3>Enrolment Payment</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>

        <div className="flagtext">
          <h3>Shortlisting</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>
       </div>

       <div className="flaags">
        <div className="flagtext">
          <h3>Voting</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>

        <div className="flagtext">
          <h3>Prize Winning</h3>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Sit curabitur nulla justo tellus amet.</p>
        </div>
       </div>
       </div>
       <div className="faq">
        <h1>Frequently asked Questions</h1>

        <div className='accordion'>
        
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: 'auto',
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'block',
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
          <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary 
          sx={{
            backgroundColor: "#F3F3F5"
          }}
          expandIcon={<ExpandMoreIcon className='expand'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'Bolder'} color='#017297'>Do you Over Customer Support?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: "#F3F3F5"
        }}>
        <Typography color='#017297'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
    <div className="fish">
      <div className="fish1">
       <div className="team">
        <h1>Didn't find what you are looking for?</h1>
        <p>Our Team is active to attend to your email</p>
        </div>
        <img src={GroupPC} alt="" />
        <button>Contact Us</button>
      </div>
    </div>
    <div className="footer3">
      <Footer/>
    </div>
    </div>
  )
}

export default Contact
