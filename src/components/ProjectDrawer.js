import './ProjectDrawer.css'
import ButtonCTA from './ButtonCTA';

export default function ProjectDrawer({closeDrawer, closeDrawerOpenContactForm, projectTitle, projectInfo}) {
  
     return (
      <>
        <div className='gradientEdge'>
          <div className='drawerContainer'>
            <h2>{projectTitle}</h2>
            {/* may want to map through an array for project info bullet points? */}
            <p>{projectInfo}</p>
            <ButtonCTA closeDrawerOpenContactForm={closeDrawerOpenContactForm}/>
          </div>
          <svg onClick = {() => closeDrawer()} id="closeIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white"/>
          </svg>
        </div>

      </>
    );
  }