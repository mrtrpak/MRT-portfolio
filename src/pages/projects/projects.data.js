import brainGif from '../../assets/gifs/brainFace.gif';
import businessGif from '../../assets/gifs/businessCard.gif';
import eagleGif from '../../assets/gifs/eagle-outfitters.gif';

export const projects = [
  {
    id: 1,
    title: "Eagle Outfitters",
    clip: eagleGif,
    url: "https://eagle-outfitters.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/eagle-outfitters",
    info: "A  fully functional mock clothing website. React, Redux, Firebase & Node-SASS were tools used."
  },
  {
    id: 2,
    title: "Face Recognition",
    clip: brainGif,
    url: "https://smart-brain-detect3.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/facerecognition",
    info: "Post an image to the App and it will outline a detected face. React, Bcrypt & Clarifai were tools used."
  },
  {
    id: 3,
    title: "Business Cards",
    clip: businessGif,
    url: "https://stormy-harbor-93453.herokuapp.com/",
    gitUrl: "https://github.com/mrtrpak/Futurum-est-nostrum",
    info: "A free to use business card creator. React, MySql & Express were tools used."
  }
];