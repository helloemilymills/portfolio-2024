import './LandscapePrompt.css';

export default function LandscapePrompt({closeLandscapePrompt}) {

    return (
      <>
        <div className='promptGradientBackgroundPanel'>
          <div className='promptPanel'>
            <svg onClick={() => closeLandscapePrompt()} id="closeIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white" />
            </svg>
            <p>Consider rotating your device into landscape mode to see more of the images.</p>
          </div>
        </div>
      </>
    );

  }