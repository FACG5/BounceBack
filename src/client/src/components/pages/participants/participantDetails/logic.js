export const makeDownloadLink = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `CV ${filename}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}