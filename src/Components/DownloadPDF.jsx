const DownloadPDF = () => {
  const handleDownload = () => {
    const url = "http://localhost:5173/logounperba.png";
    const filename = "logounperba.png";

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={handleDownload}>Download Image</button>;
};

export default DownloadPDF;
