export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
   
    return (
      <div
        className={className}
        style={{ 
        backgroundColor : "black",
        borderRadius : "52px",
        opacity : "50%",
        right : '0%' 
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
        left : '0%' ,
        zIndex :10
    }}
        onClick={onClick}
      />
    );
  }
  