import dataURItoBlob from "./../dataURItoBlob";

function downloadURI(uri: string, name: string) {

    const blob = dataURItoBlob(uri);
    const link = document.createElement('a');

    link.download = name;
    link.href = URL.createObjectURL(blob);

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

};

export default downloadURI;