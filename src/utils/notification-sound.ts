export const notificationSound = () => {
  const audio = new Audio("/notification.mp3");
  audio.play();
};
