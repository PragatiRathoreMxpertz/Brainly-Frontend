import { memo, useState } from 'react';
import { useDrag } from 'react-dnd';

export const Box = memo(function Box({
  name,
  type,
  isDropped,
  BoxImg,
  acceptedTypes,
  
}) {
  const [successfulDrop, setSuccessfulDrop] = useState(null);



  const handleSuccesDrag = () => {

    if (acceptedTypes.includes(type)) {
      setSuccessfulDrop(null);
     console.log("succes drop")
    } else {
      // Shake effect if drop is not allowed
      console.log("succe not ")
      setSuccessfulDrop({ animation: 'shake 0.5s' });

      
      setTimeout(() => {
        setSuccessfulDrop(null);
      }, 500);
    }
   
  };

  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name, BoxImg },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,

      }),
     
    }),
    [name, type]
  );


  const boxStyle = {
    ...successfulDrop,
    opacity,
    background: isDropped ? 'green' : 'linear-gradient(92.77deg, rgba(118, 29, 232, 0.3) -2.94%, rgba(41, 189, 236, 0.3) 56.14%)',
  };




  
  const draggableRef = isDropped ? null : drag;

  return (
    <div
      ref={draggableRef}
      style={ boxStyle}
      data-testid="box"
      className="ansCard"
      onDragEnd={handleSuccesDrag}
     
    >
      <div className="ansBoxImg">
        <img src={` https://ik.imagekit.io/dev24/${BoxImg}`} alt="ansImg" className="AnsImg" />
      </div>
      <div className="ansTextBox">
        <p className="ansText">{name}</p>
      </div>
    </div>
  );
});
