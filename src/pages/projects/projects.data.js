import brainGif from '../../assets/gifs/brainFace.gif';
import businessGif from '../../assets/gifs/businessCard.gif';
import eagleGif from '../../assets/gifs/eagle-outfitters.gif';

export const projects = [
  {
    id: 1,
    title: "To Eagle Outfitters Clothing Website",
    clip: eagleGif,
    url: "https://eagle-outfitters.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/eagle-outfitters",
    info: "A mock clothing website with multiple categories and a user cart updated in real time. React, Redux, Firebase & Node-SASS were tools used."
  },
  {
    id: 2,
    title: "To Face Recognition Website",
    clip: brainGif,
    url: "https://smart-brain-detect3.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/facerecognition",
    info: "An App that can detect a face from an image provided and tracks user submissions. React, Bcrypt & Clarifai were tools used."
  },
  {
    id: 3,
    title: "To Business Card Creator Website",
    clip: businessGif,
    url: "https://stormy-harbor-93453.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/Futurum-est-nostrum",
    info: "A business card creator that creates a personalized printout for the user. React, MDBootstrap, MySql & Express were tools used."
  }
];