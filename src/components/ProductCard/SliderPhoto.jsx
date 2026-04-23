import { useState } from "react";
import { arrow } from "../../assets";

const SliderPhoto = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleTogglePhoto = (type) => {
    switch (type) {
      case "prev":
        if (currentPhotoIndex !== 0) {
          setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
        break;
      case "next":
        if (currentPhotoIndex !== photos.length - 1) {
          setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
        break;
    }
  };

  return (
    <div className="relative">
      {photos.length > 1 && (
        <>
          <div
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-second-color rounded-full p-1 cursor-pointer shadow-lg"
            onClick={() => handleTogglePhoto("prev")}
          >
            <img className="transform rotate-90" width={25} src={arrow} />
          </div>
          <div
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-second-color rounded-full p-1 cursor-pointer shadow-lg"
            onClick={() => handleTogglePhoto("next")}
          >
            <img className="transform rotate-270" width={25} src={arrow} />
          </div>
          <div className="absolute flex gap-0.5  bottom-1 left-1/2 -translate-x-1/2">
            {photos?.map((item, index) => (
              <div
                className={`h-2 w-2 rounded-full ${index === currentPhotoIndex ? "bg-main-color" : "bg-white"} `}
              />
            ))}
          </div>
        </>
      )}
      <img
        src={photos[currentPhotoIndex]}
        className="w-68.5 h-68.5 object-cover"
      />
    </div>
  );
};

export default SliderPhoto;
