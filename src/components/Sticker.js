import './Sticker.css';

export default function Sticker({backgroundColor, textColor, toggleDrawerState}) {


    return (
      <>
        <div className='stickerOuterGradientShape' onClick={() => toggleDrawerState()}>
          <div className="stickerShape" style={{backgroundColor: backgroundColor}}>
            <svg className="stickerSVG" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.21 26.45L29.73 25.24C30.45 26.13 31.41 26.39 32.59 25.44C33.42 24.78 33.71 24.02 33.2 23.38C31.78 21.61 27.87 25.6 25.72 22.9C24.67 21.59 24.95 19.77 26.75 18.33C28.52 16.91 30.35 16.97 31.7 18.66L30.36 19.73C29.73 18.95 28.82 18.79 27.78 19.62C26.89 20.34 26.84 21.03 27.21 21.49C28.51 23.12 32.33 19.15 34.62 22.01C35.81 23.5 35.42 25.37 33.6 26.83C31.87 28.21 29.81 28.44 28.21 26.45Z" fill={textColor}/>
              <path d="M34.12 19.45C32.66 16.54 33.33 13.72 36.43 12.16C39.01 10.87 41.4 11.39 42.78 14.01L41.08 14.86C40.2 13.38 38.8 13.05 37.23 13.84C35.09 14.91 34.96 16.88 36.12 18.88C36.02 17.44 36.81 16.52 37.84 16.01C38.32 15.77 38.89 15.6 39.47 15.56L40.26 17.13C39.58 17.15 38.91 17.31 38.34 17.59C37.24 18.14 36.62 19.09 37.02 19.88C37.45 20.74 38.94 21.07 40.73 20.17C42.06 19.5 42.9 18.51 43.64 17.08L44.51 18.82C44.01 19.83 43.07 21.05 41.35 21.92C38.19 23.51 35.55 22.31 34.12 19.46V19.45Z" fill={textColor}/>
              <path d="M44.18 14.56C43.44 11.39 44.74 8.8 48.13 8.01C50.94 7.35 53.14 8.41 53.87 11.29L52.02 11.72C51.51 10.08 50.23 9.43 48.51 9.83C46.18 10.37 45.59 12.26 46.26 14.47C46.5 13.05 47.48 12.34 48.6 12.08C49.12 11.96 49.72 11.92 50.29 12.02L50.69 13.73C50.03 13.59 49.33 13.59 48.72 13.73C47.53 14.01 46.7 14.79 46.9 15.65C47.12 16.59 48.49 17.25 50.44 16.8C51.89 16.46 52.93 15.69 53.99 14.48L54.43 16.37C53.71 17.23 52.51 18.21 50.64 18.64C47.19 19.45 44.91 17.67 44.18 14.56Z" fill={textColor}/>
              <path d="M61.86 6.39L63.89 6.76L63.48 9.05C64.27 7.63 65.59 6.81 67.42 7.14C69.17 7.45 70.09 8.7 70.03 10.41C70.8 8.91 72.15 7.99 74.04 8.33C76.07 8.7 76.96 10.23 76.58 12.34L75.3 19.44L73.27 19.07L74.41 12.71C74.68 11.2 74.19 10.22 72.88 9.98C71.29 9.69 70 10.73 69.7 12.42L68.65 18.24L66.62 17.87L67.76 11.51C68.03 10 67.54 9.02 66.23 8.78C64.66 8.5 63.37 9.53 63.07 11.22L62.02 17.04L59.99 16.67L61.84 6.37L61.86 6.39Z" fill={textColor}/>
              <path d="M77.59 15.17C79.07 12.39 82.17 11.42 84.94 12.89C87.69 14.35 88.64 17.47 87.17 20.25C85.7 23.01 82.58 23.97 79.83 22.52C77.07 21.05 76.13 17.94 77.59 15.18V15.17ZM80.69 20.89C82.42 21.81 84.3 21.11 85.29 19.25C86.29 17.37 85.81 15.43 84.08 14.51C82.33 13.58 80.47 14.29 79.48 16.17C78.49 18.03 78.95 19.96 80.7 20.89H80.69Z" fill={textColor}/>
              <path d="M91.73 17.37L93.33 18.67L91.5 20.93C93.12 19.71 94.69 19.56 95.98 20.64L94.58 22.37C93.41 21.18 91.4 21.06 89.73 23.12L86.74 26.81L85.14 25.51L91.73 17.38V17.37Z" fill={textColor}/>
              <path d="M93.07 25.08C95.54 22.96 98.44 22.93 100.7 25.56C102.58 27.75 102.65 30.19 100.44 32.16L99.2 30.72C100.42 29.51 100.4 28.07 99.26 26.74C97.7 24.92 95.76 25.27 94.1 26.88C95.47 26.43 96.56 26.98 97.3 27.85C97.65 28.25 97.95 28.77 98.13 29.32L96.8 30.46C96.62 29.81 96.3 29.19 95.89 28.71C95.09 27.78 94.02 27.41 93.35 27.98C92.62 28.61 92.66 30.13 93.97 31.65C94.94 32.78 96.1 33.35 97.67 33.73L96.2 34.99C95.1 34.75 93.69 34.13 92.43 32.67C90.13 29.99 90.65 27.14 93.07 25.07V25.08Z" fill={textColor}/>
              <path d="M104.04 38.04C105.05 37.59 106.09 37.96 106.56 38.99C107.01 40 106.62 41.05 105.61 41.51C104.59 41.97 103.55 41.57 103.09 40.56C102.63 39.54 103.01 38.51 104.04 38.04Z" fill={textColor}/>
              <path d="M104.82 48.65L105.13 50.57C104 50.75 103.31 51.47 103.55 52.96C103.72 54.01 104.24 54.63 105.04 54.5C107.28 54.14 105.73 48.77 109.14 48.22C110.8 47.95 112.24 49.08 112.61 51.36C112.97 53.6 112.03 55.16 109.89 55.51L109.61 53.81C110.6 53.65 111.19 52.93 110.97 51.62C110.79 50.49 110.21 50.11 109.62 50.2C107.56 50.53 109.14 55.81 105.53 56.4C103.65 56.71 102.2 55.45 101.83 53.15C101.48 50.97 102.28 49.06 104.81 48.65H104.82Z" fill={textColor}/>
              <path d="M108.01 57.23C111.26 57.38 113.4 59.34 113.24 62.81C113.11 65.69 111.49 67.52 108.52 67.45L108.61 65.55C110.33 65.51 111.3 64.44 111.38 62.69C111.49 60.3 109.84 59.22 107.52 59.26C108.82 59.87 109.24 61.02 109.19 62.16C109.17 62.69 109.04 63.28 108.79 63.8L107.03 63.72C107.34 63.12 107.54 62.45 107.57 61.82C107.63 60.59 107.1 59.59 106.22 59.55C105.26 59.51 104.25 60.65 104.15 62.65C104.08 64.14 104.54 65.35 105.42 66.7L103.48 66.61C102.85 65.68 102.24 64.26 102.32 62.34C102.48 58.81 104.81 57.09 108 57.23H108.01Z" fill={textColor}/>
              <path d="M107.37 68.4C110.49 69.3 112.12 71.7 111.17 75.04C110.38 77.81 108.38 79.22 105.51 78.46L106.03 76.63C107.71 76.98 108.9 76.18 109.39 74.49C110.05 72.19 108.69 70.76 106.43 70.26C107.55 71.16 107.7 72.37 107.38 73.47C107.23 73.98 106.97 74.52 106.61 74.97L104.92 74.49C105.36 73.98 105.71 73.38 105.88 72.77C106.22 71.59 105.94 70.49 105.09 70.25C104.17 69.99 102.92 70.86 102.36 72.79C101.95 74.22 102.11 75.51 102.66 77.02L100.79 76.49C100.39 75.44 100.12 73.92 100.65 72.07C101.62 68.67 104.29 67.54 107.35 68.42L107.37 68.4Z" fill={textColor}/>
              <path d="M105.88 87.82L104.57 89.41L102.77 87.93C103.61 89.32 103.69 90.86 102.51 92.3C101.38 93.67 99.84 93.86 98.38 92.97C99.31 94.38 99.46 96.01 98.23 97.49C96.92 99.08 95.15 99.11 93.49 97.74L87.92 93.15L89.23 91.56L94.22 95.67C95.4 96.65 96.5 96.7 97.34 95.67C98.37 94.42 98.1 92.79 96.77 91.7L92.21 87.94L93.52 86.35L98.51 90.46C99.69 91.44 100.79 91.49 101.63 90.46C102.65 89.23 102.37 87.6 101.05 86.51L96.49 82.75L97.8 81.16L105.88 87.82Z" fill={textColor}/>
              <path d="M90.5 97.24C92.21 99.88 91.54 103.07 88.92 104.77C86.31 106.46 83.12 105.77 81.4 103.13C79.7 100.5 80.39 97.31 82.99 95.62C85.62 93.92 88.79 94.62 90.49 97.24H90.5ZM84 97.17C82.35 98.24 82.05 100.21 83.19 101.98C84.35 103.77 86.27 104.3 87.92 103.23C89.59 102.15 89.87 100.19 88.72 98.4C87.58 96.63 85.67 96.09 84 97.17Z" fill={textColor}/>
              <path d="M81.68 108.53L79.76 109.29L78.69 106.59C78.96 108.6 78.32 110.04 76.76 110.64L75.94 108.57C77.55 108.13 78.64 106.44 77.65 103.97L75.89 99.56L77.81 98.8L81.69 108.53H81.68Z" fill={textColor}/>
              <path d="M74.3 105.94C74.93 109.13 73.54 111.68 70.13 112.35C67.3 112.91 65.14 111.78 64.5 108.88L66.36 108.51C66.81 110.17 68.08 110.86 69.8 110.51C72.15 110.04 72.8 108.18 72.21 105.95C71.93 107.36 70.92 108.04 69.79 108.26C69.27 108.36 68.67 108.38 68.1 108.26L67.76 106.54C68.42 106.7 69.11 106.73 69.73 106.61C70.93 106.37 71.78 105.62 71.61 104.76C71.42 103.82 70.07 103.11 68.11 103.5C66.65 103.79 65.58 104.52 64.48 105.7L64.1 103.8C64.85 102.96 66.08 102.03 67.97 101.66C71.44 100.97 73.66 102.82 74.28 105.95L74.3 105.94Z" fill={textColor}/>
              <path d="M57.63 109.14C57.54 110.24 56.69 110.97 55.57 110.87C54.47 110.78 53.74 109.91 53.84 108.81C53.94 107.69 54.8 106.98 55.9 107.08C57.02 107.18 57.73 108.02 57.63 109.14Z" fill={textColor}/>
              <path d="M47.99 104.65L46.16 103.99C46.55 102.91 46.26 101.96 44.84 101.45C43.84 101.09 43.05 101.23 42.77 102C42 104.13 47.44 105.39 46.26 108.64C45.69 110.22 43.99 110.93 41.82 110.14C39.69 109.37 38.78 107.78 39.52 105.74L41.13 106.33C40.79 107.27 41.13 108.13 42.38 108.59C43.46 108.98 44.07 108.66 44.28 108.1C44.99 106.14 39.61 104.95 40.86 101.51C41.51 99.72 43.31 99.07 45.5 99.87C47.58 100.62 48.85 102.26 47.98 104.66L47.99 104.65Z" fill={textColor}/>
              <path d="M38.95 103.26C37.23 106.02 34.47 106.92 31.52 105.08C29.07 103.55 28.27 101.24 29.79 98.7L31.4 99.71C30.59 101.23 31.04 102.6 32.54 103.53C34.57 104.8 36.32 103.89 37.42 101.85C36.25 102.69 35.04 102.49 34.07 101.88C33.62 101.6 33.17 101.2 32.84 100.72L33.77 99.23C34.14 99.8 34.62 100.29 35.16 100.63C36.2 101.28 37.34 101.31 37.8 100.57C38.31 99.75 37.81 98.31 36.11 97.25C34.84 96.46 33.57 96.26 31.96 96.37L32.99 94.72C34.11 94.62 35.65 94.79 37.28 95.81C40.28 97.68 40.63 100.56 38.94 103.26H38.95Z" fill={textColor}/>
              <path d="M29.54 97.22C27.23 99.51 24.34 99.75 21.89 97.28C19.86 95.23 19.61 92.8 21.68 90.67L23.02 92.02C21.89 93.32 22.01 94.75 23.25 96C24.93 97.7 26.84 97.22 28.39 95.49C27.06 96.03 25.93 95.56 25.13 94.75C24.76 94.37 24.41 93.88 24.2 93.34L25.45 92.1C25.68 92.74 26.04 93.33 26.48 93.78C27.34 94.65 28.44 94.95 29.07 94.33C29.75 93.65 29.6 92.13 28.19 90.71C27.14 89.65 25.94 89.17 24.35 88.9L25.73 87.53C26.84 87.69 28.3 88.21 29.65 89.57C32.14 92.08 31.82 94.96 29.56 97.2L29.54 97.22Z" fill={textColor}/>
              <path d="M13.3 86.42L12.55 84.5L14.72 83.65C13.1 83.71 11.71 83.02 11.04 81.29C10.39 79.63 10.98 78.2 12.47 77.35C10.79 77.48 9.3 76.81 8.6 75.02C7.85 73.1 8.68999 71.54 10.69 70.76L17.42 68.14L18.17 70.06L12.15 72.4C10.72 72.96 10.14 73.88 10.62 75.12C11.21 76.63 12.76 77.18 14.36 76.56L19.87 74.42L20.62 76.35L14.6 78.69C13.17 79.25 12.59 80.17 13.07 81.41C13.65 82.9 15.2 83.45 16.8 82.83L22.31 80.69L23.06 82.61L13.3 86.41V86.42Z" fill={textColor}/>
              <path d="M12.59 68.42C9.45 68.62 7 66.47 6.8 63.35C6.61 60.25 8.77 57.8 11.92 57.6C15.04 57.41 17.49 59.57 17.69 62.67C17.88 65.79 15.72 68.22 12.59 68.42ZM15.85 62.78C15.73 60.82 14.16 59.59 12.05 59.72C9.93 59.85 8.52 61.27 8.64 63.23C8.76 65.21 10.33 66.42 12.46 66.29C14.56 66.16 15.97 64.76 15.85 62.78Z" fill={textColor}/>
              <path d="M7.07999 55.21L7.34999 53.16L10.23 53.54C8.34999 52.8 7.39999 51.54 7.63999 49.88L9.84999 50.17C9.44999 51.79 10.4 53.56 13.03 53.91L17.73 54.53L17.46 56.58L7.07999 55.22V55.21Z" fill={textColor}/>
              <path d="M12.93 50.04C9.84 49.04 8.29 46.58 9.36 43.28C10.25 40.54 12.29 39.2 15.13 40.05L14.55 41.86C12.88 41.45 11.66 42.22 11.12 43.89C10.38 46.17 11.69 47.64 13.93 48.22C12.84 47.29 12.73 46.07 13.09 44.98C13.25 44.47 13.53 43.94 13.91 43.5L15.58 44.04C15.12 44.54 14.76 45.13 14.56 45.73C14.18 46.9 14.43 48.01 15.26 48.28C16.17 48.58 17.45 47.74 18.07 45.84C18.53 44.42 18.41 43.13 17.91 41.6L19.76 42.2C20.13 43.26 20.34 44.79 19.75 46.62C18.66 49.99 15.96 51.03 12.93 50.05V50.04Z" fill={textColor}/>
              <path d="M18.28 33.91C17.37 33.29 17.15 32.2 17.78 31.27C18.4 30.36 19.51 30.15 20.42 30.77C21.35 31.4 21.54 32.5 20.92 33.41C20.29 34.34 19.21 34.54 18.28 33.91Z" fill={textColor}/>
            </svg>
          </div>
        </div>
      

      </>
    );

  }