export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
   
    return (
      <div
        className={className}
        style={{ 
        backgroundColor : "black",
        borderRadius : "52px",
        opacity : "50%",
        right : '10%' 
    }}
        onClick={onClick}
      />
    );
  }
  
 export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
        backgroundColor : "black",
        borderRadius : "52px",
        opacity : "50%",
        left : '10%' ,
        zIndex :10
    }}
        onClick={onClick}
      />
    );
  }
  