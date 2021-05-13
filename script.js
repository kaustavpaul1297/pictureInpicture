const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//prompt to select media streams, pass to the video element, then play it

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //catch error here
    console.log("whoops, error here:", error);
  }
}
button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;
  //start picture in picture

  await videoElement.requestPictureInPicture();
  //Reset button
  button.disabled = false;
});
//on load
selectMediaStream();
