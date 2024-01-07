import './ProjectDrawer.css'
import ButtonCTA from './ButtonCTA';

export default function ProjectDrawer({closeDrawer, closeDrawerOpenContactForm, projectTitle, projectIntro, notableElements, providedAssets, drawerState}) {

     return (
      <>
        <div className='gradientEdge'>
          <div className='drawerContainer'>
            <h2>{projectTitle}</h2>
            <p>{projectIntro}</p>
            <p><strong>Notable Elements:</strong></p>
            <ul>
              {notableElements.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            <p><strong>Provided Assets:</strong></p>
            <ul>
              {providedAssets.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            <ButtonCTA text="work with me" closeDrawerOpenContactForm={closeDrawerOpenContactForm} drawerState={drawerState}/>
          </div>
          <svg onClick = {() => closeDrawer()} id="closeIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white"/>
          </svg>
        </div>

      </>
    );
  }