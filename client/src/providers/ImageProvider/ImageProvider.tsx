import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import downloadURI from '../../utils/downloadURI';

type Dimension = {
    width: number;
    height: number;
};

type ImageProviderContextProps = {
    downloadImage: VoidFunction;
    setURI: (uri: string) => void;
    setDimensions: (dimensions: Dimension) => void;
    setStageRef: (ref: any) => void;
    uri: string | null;
    width: number;
    height: number;
    removeImage: VoidFunction;
    image: HTMLImageElement | null;
};

const ImageProviderContext = React.createContext<ImageProviderContextProps | undefined>(undefined);

const ImageProvider: FunctionComponent = ({ children }) => {
    const [uri, setURI] = useState<string | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [dimensions, setDimensions] = useState<Dimension>({ width: 0, height: 0 });
    const [stageRef, setStageRef] = useState<any>(null);
    const { width, height } = dimensions;
    
    const removeImage = () => {
        setURI(null);
        setDimensions({ width: 0, height: 0 });
    }

    const downloadImage = () => {
        if (stageRef && uri && width && height) {
    
            const stageRefClone = stageRef.clone();
            const containerGroup = stageRefClone.find("Group").toArray()[0];
                        
            stageRefClone.width(width);
            stageRefClone.height(height);
    
            containerGroup.scale({x: 1, y: 1});
            containerGroup.x(0);
            containerGroup.y(0);
    
            const uri = stageRefClone.toDataURL({
                x: 0,
                y: 0,
                width: width,
                height: height,
                mimeType: "image/png",
                quality: 1
            });
            
            downloadURI(uri, "image.png");
    
        }
      }

    const value = {
        setURI,
        setStageRef,
        uri,
        setDimensions,
        downloadImage,
        width,
        height,
        removeImage,
        image
    };

    useEffect(() => {
        if (uri) {
            const newImage = new Image();
            newImage.onload = () => {
                setImage(newImage);
            };
            newImage.src = uri;
        }
    }, [uri]);

    return (
        <ImageProviderContext.Provider value={value}>
            {children}
        </ImageProviderContext.Provider>
    );
}

export function useImageProvider(): ImageProviderContextProps {
    const context = useContext(ImageProviderContext);

    if (context === undefined) {
        throw new Error('');
    }

    return context;
}

export default ImageProvider;