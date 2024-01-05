import './ButtonCTA.css'

export default function ButtonCTA({text, closeDrawerOpenContactForm, drawerState}) {

    function toggleOnClick() {
      drawerState && closeDrawerOpenContactForm()
    }

    // onClick = {() => closeDrawerOpenContactForm()}

    return (
      <>
        <div className='buttonGradient' onClick = {() => toggleOnClick()}>
          <div className='button'>
            <p> {text} </p>
          </div>
        </div>
        
      </>
    );
  }