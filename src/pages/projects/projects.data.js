import brainGif from '../../assets/gifs/brainFace.gif';
import businessGif from '../../assets/gifs/businessCard.gif';
import eagleGif from '../../assets/gifs/eagle-outfitters.gif';

export const projects = [
  {
    id: 1,
    title: "Eagle Outfitters Clothing",
    clip: eagleGif,
    url: "https://eagle-outfitters.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/eagle-outfitters",
    info: "A clothing e-commerce website with a dynamically updated user cart. React, Redux, Firebase & Node-SASS were tools used."
  },
  {
    id: 2,
    title: "Face Recognition",
    clip: brainGif,
    url: "https://smart-brain-detect3.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/facerecognition",
    info: "An App that can detect a face from an image provided and tracks user submissions. React, Bcrypt & Clarifai were tools used."
  },
  {
    id: 3,
    title: "Business Card Creator",
    clip: businessGif,
    url: "https://stormy-harbor-93453.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/Futurum-est-nostrum",
    info: "A business card creator that creates a personalized printout for the user. React, MDBootstrap, MySql & Express were tools used."
  }
];