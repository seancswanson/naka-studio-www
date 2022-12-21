import aboutMe1 from "../images/about-me-1.jpg";
import aboutMe2 from "../images/about-me-2.jpg";

export default function AboutMePicture(props: { id: number }) {
        const pictureStyles = [{
          backgroundImage: `url(${aboutMe2.src})`,

        }, {
          backgroundImage: `url(${aboutMe1.src})`,

}];
  return (
    <>
      {props.id === 0 ? (
        <div style={pictureStyles[0]} className="bg-shiftUp shadow rounded inline-block w-56 float-right bg-cover bg-top h-72 ml-6 my-4">
         </div>
      ) : (
        <div  style={pictureStyles[1]}className="bg-shiftUpSm  shadow rounded inline-block w-56 float-left bg-cover bg-top h-72 mr-6 my-2"></div>
      )}
    </>
  );
}
