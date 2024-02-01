import './ProjectDrawer.css'
import ButtonCTA from './ButtonCTA';

export default function ProjectDrawer({closeDrawer, closeDrawerOpenContactForm, projectTitle, brief, designDirection, notableElements, providedAssets, drawerState, uniProjectDisclaimer}) {

     return (
      <>
        <div className='projectDrawerGradientEdge'>
          <div className='drawerPanel'>
            <h2>{projectTitle}</h2>
            <p><strong>The Brief:</strong></p>
            <p>{brief}</p>
            <p><em>{uniProjectDisclaimer}</em></p>
            <p><strong>Design Direction:</strong></p>
            <p>{designDirection}</p>
            <p><strong>Notable Elements:</strong></p>
            <ul>
              {notableElements.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            <p><strong>Provided Assets</strong></p>
            <p><em>(Things I didn't make)</em></p>
            <ul>
              {providedAssets.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            <ButtonCTA text="Work with me" closeDrawerOpenContactForm={closeDrawerOpenContactForm} drawerState={drawerState}/>
          </div>
          <svg onClick = {() => closeDrawer()} id="drawerCloseIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white"/>
          </svg>
        </div>

      </>
    );
  }