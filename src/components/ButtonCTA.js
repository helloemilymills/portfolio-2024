import './ButtonCTA.css'

export default function ButtonCTA({closeDrawerOpenContactForm}) {

    return (
      <>
        <div className='buttonGradient' onClick = {() => closeDrawerOpenContactForm()}>
          <div className='button'>
            <p> work with me </p>
          </div>
        </div>
        
      </>
    );
  }