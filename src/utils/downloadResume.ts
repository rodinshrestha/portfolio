export const downloadResume = (url: string) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  document.body.appendChild(aTag);
  aTag.download = "Rodin Resume";
  aTag.click();
  aTag.remove();
};
